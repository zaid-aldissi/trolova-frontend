import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it } from "vitest";
import { LanguageProvider, useLanguage } from "./language-provider";

function Probe() {
  const { direction, language, toggleLanguage } = useLanguage();

  return (
    <div>
      <p data-testid="language">{language}</p>
      <p data-testid="direction">{direction}</p>
      <button type="button" onClick={toggleLanguage}>
        toggle
      </button>
    </div>
  );
}

describe("LanguageProvider", () => {
  it("renders Arabic as the default RTL language", () => {
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>
    );

    expect(screen.getByTestId("language")).toHaveTextContent("ar");
    expect(screen.getByTestId("direction")).toHaveTextContent("rtl");
    expect(document.documentElement).toHaveAttribute("lang", "ar");
    expect(document.documentElement).toHaveAttribute("dir", "rtl");
  });

  it("switches to English LTR on toggle", async () => {
    const user = userEvent.setup();

    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>
    );

    await user.click(screen.getByRole("button", { name: "toggle" }));

    expect(screen.getByTestId("language")).toHaveTextContent("en");
    expect(screen.getByTestId("direction")).toHaveTextContent("ltr");
    expect(document.documentElement).toHaveAttribute("lang", "en");
    expect(document.documentElement).toHaveAttribute("dir", "ltr");
  });

  it("toggles back to Arabic RTL on second toggle", async () => {
    const user = userEvent.setup();

    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>
    );

    await user.click(screen.getByRole("button", { name: "toggle" }));
    await user.click(screen.getByRole("button", { name: "toggle" }));

    expect(screen.getByTestId("language")).toHaveTextContent("ar");
    expect(screen.getByTestId("direction")).toHaveTextContent("rtl");
  });

  it("throws when useLanguage is used outside LanguageProvider", () => {
    const originalConsoleError = console.error;
    console.error = () => {};

    function BadConsumer() {
      useLanguage();
      return null;
    }

    expect(() => render(<BadConsumer />)).toThrow(
      "useLanguage must be used inside LanguageProvider"
    );

    console.error = originalConsoleError;
  });
});
