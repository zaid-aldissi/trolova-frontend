import { expect, test } from "@playwright/test";

for (const language of ["ar", "en"] as const) {
  for (const width of [1440, 1024, 768, 390, 375, 320]) {
    test(`Students ${language} at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/students");
      await expect(page.locator("tbody tr")).toHaveCount(4);
      if (language === "en") await page.getByRole("button", { name: "English" }).click();
      await expect(page.locator("html")).toHaveAttribute("dir", language === "ar" ? "rtl" : "ltr");
      await expect(page.locator("html")).toHaveAttribute("lang", language);
      await page.evaluate(() => document.fonts.ready);
      const geometry = await page.evaluate(() => {
        const main = document.querySelector("main")!.getBoundingClientRect();
        const row = document.querySelector("tbody tr")!.getBoundingClientRect();
        return {
          overflow: document.documentElement.scrollWidth > innerWidth,
          mainWidth: main.width,
          rowWidth: row.width,
          rowHeight: row.height
        };
      });
      expect(geometry.overflow).toBe(false);
      expect(geometry.mainWidth).toBeGreaterThanOrEqual(width > 1100 ? width - 252 : width);
      expect(geometry.rowWidth).toBeLessThanOrEqual(geometry.mainWidth);
      if (width <= 700) expect(geometry.rowHeight).toBeLessThan(160);
      await expect(page.locator("tbody time").first()).toHaveText("2026-09-08");
      await expect(page.locator("tbody th a").first()).toHaveAttribute("href", "/students/student-1");
      await page.screenshot({ path: `test-results/students-${language}-${width}.png`, fullPage: true });
      await page.locator("#students-search").fill("0790000003");
      await expect(page.locator("tbody tr")).toHaveCount(1);
      await page.getByRole("radio", { name: language === "ar" ? "نشط" : "Active" }).click();
      await expect(page.locator("tbody tr")).toHaveCount(0);
      await page.locator("main button").click();
      await expect(page.locator("tbody tr")).toHaveCount(4);
      // Stress presentation only; this does not mutate fixture or application data.
      const longName = language === "ar"
        ? "عبد الرحمن أحمد محمد الحسن "
        : "A very long student name repeated for wrapping ";
      await page.locator("tbody th a").first().evaluate((el, name) => {
        el.textContent = name.repeat(4);
      }, longName);
      expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);
      await page.locator("#students-search").focus();
      await expect(page.locator("#students-search")).toBeFocused();
      expect(await page.locator("#students-search").evaluate(el => getComputedStyle(el).outlineStyle)).not.toBe("none");
    });
  }
}
