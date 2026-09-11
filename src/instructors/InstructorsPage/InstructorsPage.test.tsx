import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { ProductFrame } from "../../components/ProductFrame/ProductFrame";
import { LanguageProvider } from "../../i18n/language-provider";
import { InstructorsPage } from "./InstructorsPage";

function renderPage() {
  return render(
    <LanguageProvider>
      <ProductFrame>
        <InstructorsPage />
      </ProductFrame>
    </LanguageProvider>
  );
}

describe("InstructorsPage", () => {
  it("renders the bounded Arabic instructor workspace", () => {
    renderPage();

    expect(screen.getByRole("heading", { name: "المدربون", level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "تفاصيل إدارة المدربين غير متاحة بعد", level: 2 })).toBeInTheDocument();
    expect(screen.queryByRole("table")).not.toBeInTheDocument();
  });

  it("follows the shared language direction", async () => {
    renderPage();

    await userEvent.setup().click(screen.getByRole("button", { name: "English" }));

    expect(screen.getByRole("heading", { name: "Instructors", level: 1 })).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute("dir", "ltr");
  });
});