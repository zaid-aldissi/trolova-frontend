import { describe, expect, it } from "vitest";
import { createFixtureStudentRepository } from "./fixture-repository";
import { studentFixtures } from "./fixtures";
import type { UpdateStudentInput } from "./repository";
import { studentStatuses, type Student } from "./types";

function createRepository(initialStudents = studentFixtures) {
  return createFixtureStudentRepository({
    initialStudents,
    now: () => new Date("2026-09-09T12:00:00.000Z")
  });
}

describe("Student shape", () => {
  it("allows only ACTIVE and ARCHIVED statuses", () => {
    expect(studentStatuses).toEqual(["ACTIVE", "ARCHIVED"]);
  });

  it("exposes only approved Student fields on fixtures", () => {
    const allowed = new Set([
      "id",
      "fullName",
      "primaryPhone",
      "nationalId",
      "location",
      "notes",
      "registrationDate",
      "status"
    ]);

    for (const student of studentFixtures) {
      expect(Object.keys(student).every((key) => allowed.has(key))).toBe(true);
      expect(studentStatuses.includes(student.status)).toBe(true);
    }
  });
});

describe("createFixtureStudentRepository", () => {
  it("lists students newest registration date first", async () => {
    const repository = createRepository();
    const result = await repository.list();

    expect(result.ok).toBe(true);
    if (!result.ok) {
      return;
    }

    expect(result.data.map((student) => student.id)).toEqual([
      "student-1",
      "student-2",
      "student-3",
      "student-4"
    ]);
  });

  it("filters by ACTIVE and ARCHIVED without other statuses", async () => {
    const repository = createRepository();
    const active = await repository.list({ status: "ACTIVE" });
    const archived = await repository.list({ status: "ARCHIVED" });

    expect(active.ok && active.data.every((student) => student.status === "ACTIVE")).toBe(
      true
    );
    expect(
      archived.ok && archived.data.every((student) => student.status === "ARCHIVED")
    ).toBe(true);
    expect(archived.ok && archived.data.map((student) => student.id)).toEqual([
      "student-3"
    ]);
  });

  it("searches full name and primary phone, not national id", async () => {
    const repository = createRepository();
    const byName = await repository.list({ search: "سارة" });
    const byPhone = await repository.list({ search: "0790000002" });
    const byNationalId = await repository.list({ search: "1234567890" });

    expect(byName.ok && byName.data.map((student) => student.id)).toEqual([
      "student-1"
    ]);
    expect(byPhone.ok && byPhone.data.map((student) => student.id)).toEqual([
      "student-2"
    ]);
    expect(byNationalId.ok && byNationalId.data).toEqual([]);
  });

  it("reads a student by id and returns NOT_FOUND when missing", async () => {
    const repository = createRepository();
    const found = await repository.getById("student-2");
    const missing = await repository.getById("missing");

    expect(found).toEqual({
      ok: true,
      data: expect.objectContaining({
        id: "student-2",
        fullName: "Omar Khaled"
      })
    });
    expect(missing).toEqual({ ok: false, error: "NOT_FOUND" });
  });

  it("creates an ACTIVE student with a system-set registration date", async () => {
    const repository = createRepository();
    const result = await repository.create({
      fullName: "Mona Saleh",
      primaryPhone: "0790000099",
      nationalId: "999",
      location: "Zarqa",
      notes: "note"
    });

    expect(result.ok).toBe(true);
    if (!result.ok) {
      return;
    }

    expect(result.data.status).toBe("ACTIVE");
    expect(result.data.registrationDate).toBe("2026-09-09T12:00:00.000Z");
    expect(result.data.fullName).toBe("Mona Saleh");
    expect(result.data.primaryPhone).toBe("0790000099");

    const listed = await repository.list();
    expect(listed.ok && listed.data[0]?.id).toBe(result.data.id);
  });

  it("does not accept extra lifecycle status on create", async () => {
    const repository = createRepository();
    const result = await repository.create({
      fullName: "Extra Status",
      primaryPhone: "0790000088",
      status: "ARCHIVED"
    } as CreateWithStatus);

    expect(result.ok && result.data.status).toBe("ACTIVE");
  });

  it("updates editable fields without changing registration date or status", async () => {
    const repository = createRepository();
    const before = await repository.getById("student-1");
    expect(before.ok).toBe(true);
    if (!before.ok) {
      return;
    }

    const result = await repository.update("student-1", {
      fullName: "سارة المحدّثة",
      primaryPhone: "0790000111",
      nationalId: "111",
      location: "العقبة",
      notes: "updated"
    });

    expect(result.ok).toBe(true);
    if (!result.ok) {
      return;
    }

    expect(result.data.fullName).toBe("سارة المحدّثة");
    expect(result.data.primaryPhone).toBe("0790000111");
    expect(result.data.nationalId).toBe("111");
    expect(result.data.location).toBe("العقبة");
    expect(result.data.notes).toBe("updated");
    expect(result.data.registrationDate).toBe(before.data.registrationDate);
    expect(result.data.status).toBe("ACTIVE");
  });

  it("ignores registration date and status if they are passed on update", async () => {
    const repository = createRepository();
    const before = await repository.getById("student-2");
    expect(before.ok).toBe(true);
    if (!before.ok) {
      return;
    }

    const result = await repository.update("student-2", {
      fullName: "Omar Khaled",
      primaryPhone: "0790000002",
      registrationDate: "1999-01-01T00:00:00.000Z",
      status: "ARCHIVED"
    } as UpdateStudentInput & Pick<Student, "registrationDate" | "status">);

    expect(result.ok).toBe(true);
    if (!result.ok) {
      return;
    }

    expect(result.data.registrationDate).toBe(before.data.registrationDate);
    expect(result.data.status).toBe("ACTIVE");
  });

  it("archives ACTIVE to ARCHIVED and reactivates ARCHIVED to ACTIVE", async () => {
    const repository = createRepository();
    const archived = await repository.archive("student-2");
    const reactivated = await repository.reactivate("student-2");

    expect(archived.ok && archived.data.status).toBe("ARCHIVED");
    expect(reactivated.ok && reactivated.data.status).toBe("ACTIVE");
  });

  it("does not introduce unsupported lifecycle states", async () => {
    const repository = createRepository();
    await repository.archive("student-1");
    await repository.archive("student-1");
    await repository.reactivate("student-3");
    await repository.reactivate("student-3");

    const listed = await repository.list();
    expect(listed.ok).toBe(true);
    if (!listed.ok) {
      return;
    }

    expect(
      listed.data.every((student) => studentStatuses.includes(student.status))
    ).toBe(true);
  });
});

type CreateWithStatus = {
  fullName: string;
  primaryPhone: string;
  status: "ARCHIVED";
};
