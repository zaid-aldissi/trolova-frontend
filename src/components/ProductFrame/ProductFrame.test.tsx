import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { LanguageProvider } from "../../i18n/language-provider";
import { ProductFrame } from "./ProductFrame";

describe("ProductFrame", () => {
  it("provides a branded frame with Students and Instructors destinations", () => {
    render(
      <LanguageProvider>
        <ProductFrame>
          <p>Workspace</p>
        </ProductFrame>
      </LanguageProvider>
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getAllByRole("img", { name: "تروفولا" })).toHaveLength(2);
    expect(screen.getByRole("navigation", { name: "التنقل" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "الطلاب" })).toHaveAttribute(
      "href",
      "/students"
    );
    expect(screen.getByRole("link", { name: "المدربون" })).toHaveAttribute(
      "href",
      "/instructors"
    );
    expect(screen.getByRole("main")).toHaveTextContent("Workspace");
    expect(screen.getAllByRole("link")).toHaveLength(3);
  });
});
it("switches the real language provider in both directions", async () => {
  render(<LanguageProvider><ProductFrame><p>Workspace</p></ProductFrame></LanguageProvider>);
  await userEvent.setup().click(screen.getByRole("button", { name: "English" }));
  expect(document.documentElement).toHaveAttribute("dir", "ltr");
  expect(screen.getByRole("navigation", { name: "Navigation" })).toBeInTheDocument();
  await userEvent.setup().click(screen.getByRole("button", { name: "العربية" }));
  expect(document.documentElement).toHaveAttribute("dir", "rtl");
});
