import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { describe, expect, it } from "vitest";

const repoRoot = process.cwd();
const allowedFixtureImporters = new Set([
  join("src", "students", "fixture-repository.ts")
]);

function walkFiles(directory: string): string[] {
  return readdirSync(directory).flatMap((entry) => {
    const absolute = join(directory, entry);
    const stats = statSync(absolute);

    if (stats.isDirectory()) {
      if (entry === "node_modules" || entry === ".next") {
        return [];
      }

      return walkFiles(absolute);
    }

    return absolute.endsWith(".ts") || absolute.endsWith(".tsx")
      ? [absolute]
      : [];
  });
}

function isProductionSourceFile(file: string): boolean {
  return !file.endsWith(".test.ts") && !file.endsWith(".test.tsx");
}

function importsFixtures(source: string): boolean {
  return /from\s+["'][^"']*students\/fixtures["']/.test(source) ||
    /from\s+["']\.\/fixtures["']/.test(source) ||
    /from\s+["']\.\.\/fixtures["']/.test(source);
}

describe("Student repository boundary", () => {
  it("allows only the fixture adapter to import fixture records", () => {
    const files = [
      ...walkFiles(join(repoRoot, "src")),
      ...walkFiles(join(repoRoot, "app"))
    ];

    const importers = files
      .filter(isProductionSourceFile)
      .filter((file) => importsFixtures(readFileSync(file, "utf8")))
      .map((file) => relative(repoRoot, file).replaceAll("\\", "/"));

    expect(importers).toEqual(["src/students/fixture-repository.ts"]);
  });

  it("keeps the composition root off the fixture module", () => {
    const source = readFileSync(
      join(repoRoot, "src", "students", "student-repository-provider.tsx"),
      "utf8"
    );

    expect(importsFixtures(source)).toBe(false);
    expect(source).toContain("createFixtureStudentRepository");
    expect(source).toContain("useStudentRepository");
  });

  it("does not treat the allowed importer set as expandable UI", () => {
    for (const importer of allowedFixtureImporters) {
      expect(importer).not.toMatch(/StudentsList|RegisterStudent|StudentProfile/);
    }
  });
});
