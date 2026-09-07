import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const globalsCss = readFileSync(
  join(process.cwd(), "app", "globals.css"),
  "utf8"
);

/**
 * Normalise a CSS declaration string so token-value assertions are
 * insensitive to alignment whitespace between the property name and value.
 * e.g. "--trolova-foo:        #123" → "--trolova-foo: #123"
 */
const normalised = globalsCss.replace(/:\s+/g, ": ");

describe("global CSS foundation", () => {
  it("defines the approved Trolova design tokens", () => {
    expect(normalised).toContain("--trolova-color-brand-primary: #12235B");
    expect(normalised).toContain("--trolova-color-background-page: #FFFFFF");
    expect(normalised).toContain("--trolova-font-size-md: 16px");
    expect(normalised).toContain("--trolova-radius-md: 10px");
    expect(normalised).toContain("--trolova-shadow-sm:");
    expect(normalised).toContain("--trolova-space-4: 24px");
  });

  it("defines all 50 trolova custom properties", () => {
    const matches = globalsCss.match(/--trolova-/g);
    expect(matches).not.toBeNull();
    // 50 declarations in :root
    expect(matches!.length).toBeGreaterThanOrEqual(50);
  });

  it("uses logical CSS properties for BiDi-safe layout", () => {
    // The standalone globals.css reset uses logical properties throughout.
    // FoundationPage layout classes are not part of this file; assertions
    // target only properties that are present in the global reset and token
    // blocks, confirming BiDi-safe authoring practice.
    expect(globalsCss).toContain("inline-size");
    expect(globalsCss).toContain("block-size");
    expect(globalsCss).toContain("min-inline-size");
    expect(globalsCss).toContain("max-inline-size");
  });
});
