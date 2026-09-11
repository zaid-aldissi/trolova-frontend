import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { LanguageProvider } from "../../i18n/language-provider";
import type { StudentRepository } from "../repository";
import { StudentRepositoryProvider } from "../student-repository-provider";
import { StudentsList } from "./StudentsList";

const students = [
  {
    id: "student-1",
    fullName: "سارة أحمد",
    primaryPhone: "0790000001",
    registrationDate: "2026-09-08T10:00:00.000Z",
    status: "ACTIVE" as const
  },
  {
    id: "student-2",
    fullName: "Omar Khaled",
    primaryPhone: "0790000002",
    registrationDate: "2026-09-07T09:00:00.000Z",
    status: "ARCHIVED" as const
  }
];

function createRepository(
  list: StudentRepository["list"] = vi.fn(async () => ({ ok: true as const, data: students }))
): StudentRepository {
  return {
    list,
    getById: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    archive: vi.fn(),
    reactivate: vi.fn()
  };
}

function renderList(repository: StudentRepository) {
  return render(
    <LanguageProvider>
      <StudentRepositoryProvider repository={repository}>
        <StudentsList />
      </StudentRepositoryProvider>
    </LanguageProvider>
  );
}

describe("StudentsList", () => {
  it("renders the approved workspace and navigation targets", async () => {
    renderList(createRepository());

    expect(await screen.findByRole("columnheader", { name: "الاسم الكامل" })).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: "الهاتف الأساسي" })).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: "تاريخ التسجيل" })).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: "الحالة" })).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: "الإجراءات" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "تسجيل طالب" })).toHaveAttribute("href", "/students/new");
    expect(screen.getByRole("link", { name: "سارة أحمد" })).toHaveAttribute("href", "/students/student-1");
    expect(screen.getByText("2026-09-08")).toBeInTheDocument();
    expect(screen.queryByText("2026-09-08T10:00:00.000Z")).not.toBeInTheDocument();
    expect(screen.queryByText("Branch")).not.toBeInTheDocument();
    expect(screen.queryByText("Enrollment")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /archive|reactivate/i })).not.toBeInTheDocument();
  });

  it("searches by full name and primary phone through the repository", async () => {
    const user = userEvent.setup();
    const repository = createRepository(vi.fn(async (query) => ({
      ok: true as const,
      data: students.filter(
        (student) =>
          student.fullName.includes(query?.search ?? "") ||
          student.primaryPhone.includes(query?.search ?? "")
      )
    })));
    renderList(repository);

    await screen.findByRole("link", { name: "سارة أحمد" });
    await user.type(screen.getByRole("searchbox", { name: "بحث عن طالب" }), "Omar");

    await waitFor(() => {
      expect(screen.getByRole("link", { name: "Omar Khaled" })).toBeInTheDocument();
      expect(screen.queryByRole("link", { name: "سارة أحمد" })).not.toBeInTheDocument();
    });
  });

  it("filters by status without adding lifecycle actions", async () => {
    const user = userEvent.setup();
    const repository = createRepository(vi.fn(async (query) => ({
      ok: true as const,
      data: students.filter(
        (student) => query?.status === "ALL" || student.status === query?.status
      )
    })));
    renderList(repository);

    await screen.findByRole("link", { name: "سارة أحمد" });
    await user.click(screen.getByRole("radio", { name: "مؤرشف" }));

    await waitFor(() => {
      expect(screen.getByRole("link", { name: "Omar Khaled" })).toBeInTheDocument();
      expect(screen.queryByRole("link", { name: "سارة أحمد" })).not.toBeInTheDocument();
    });
  });

  it("shows a distinct filtered empty state with a clear action", async () => {
    const user = userEvent.setup();
    const repository = createRepository(vi.fn(async (query) => ({
      ok: true as const,
      data: query?.search ? [] : students
    })));
    renderList(repository);

    await screen.findByRole("link", { name: "سارة أحمد" });
    await user.type(screen.getByRole("searchbox", { name: "بحث عن طالب" }), "missing");

    expect(await screen.findByText("لا يوجد طلاب مطابقون للبحث أو التصفية")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "مسح البحث والتصفية" }));
    expect(await screen.findByRole("link", { name: "سارة أحمد" })).toBeInTheDocument();
  });

  it("shows an inline error and retry action", async () => {
    const repository = createRepository(
      vi.fn(async () => ({ ok: false as const, error: "UNAVAILABLE" as const }))
    );
    renderList(repository);

    expect(await screen.findByText("تعذر تحميل قائمة الطلاب")).toBeInTheDocument();
    await userEvent.setup().click(screen.getByRole("button", { name: "إعادة المحاولة" }));
    await waitFor(() => expect(repository.list).toHaveBeenCalledTimes(2));
  });
});
 describe("StudentsList states", () => {
  it("keeps loading distinct from an empty repository", async () => {
    const view = renderList(createRepository(vi.fn(() => new Promise<never>(() => {}))));
    expect(document.querySelector('[aria-busy="true"]')).toBeInTheDocument();
    expect(screen.queryByRole("table")).not.toBeInTheDocument();
    view.unmount();
    renderList(createRepository(vi.fn(async () => ({ ok: true as const, data: [] }))));
    expect(await screen.findByText("لا يوجد طلاب")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "تسجيل طالب" })).toHaveLength(2);
    expect(screen.queryByRole("button", { name: "مسح البحث والتصفية" })).not.toBeInTheDocument();
  });
  it("preserves the supplied calendar date without timezone conversion", async () => {
    renderList(createRepository(vi.fn(async () => ({ ok: true as const, data: [{ ...students[0], registrationDate: "2026-09-08T23:30:00-05:00" }] }))));
    expect(await screen.findByText("2026-09-08")).toHaveAttribute("datetime", "2026-09-08T23:30:00-05:00");
  });
});
