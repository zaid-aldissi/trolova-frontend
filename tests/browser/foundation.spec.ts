import { expect, test } from "@playwright/test";

/**
 * Foundation smoke tests.
 * These verify the HTML skeleton, CSS tokens, and BiDi attributes
 * are present before any product screen is implemented.
 */

test("root page renders without horizontal overflow at 375px", async ({
  page
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");

  const overflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth
  );

  expect(overflow).toBe(false);
});

test("html element defaults to Arabic RTL", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("html")).toHaveAttribute("lang", "ar");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
});

test("design tokens are present on :root", async ({ page }) => {
  await page.goto("/");

  const brandPrimary = await page.evaluate(() =>
    getComputedStyle(document.documentElement)
      .getPropertyValue("--trolova-color-brand-primary")
      .trim()
  );

  expect(brandPrimary).toBe("#12235B");
});

test("LamaSans font variable is injected", async ({ page }) => {
  await page.goto("/");

  const fontVariable = await page.evaluate(() =>
    getComputedStyle(document.documentElement)
      .getPropertyValue("--trolova-font-family-primary")
      .trim()
  );

  expect(fontVariable).not.toBe("");
});
