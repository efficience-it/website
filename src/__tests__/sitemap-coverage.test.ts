import fs from "node:fs";
import sitemap from "@/app/sitemap";
import { getAllPosts, getPostsByCategory } from "@/lib/blog";

jest.mock("node:fs", () => ({
  existsSync: jest.fn(),
  statSync: jest.fn(),
}));

jest.mock("@/lib/blog", () => ({
  getAllPosts: jest.fn(),
  getPostsByCategory: jest.fn(),
  categorySlugMap: { Symfony: "symfony" },
}));

const mockedFs = fs as unknown as { existsSync: jest.Mock; statSync: jest.Mock };
const mockedGetAllPosts = getAllPosts as unknown as jest.Mock;
const mockedGetPostsByCategory = getPostsByCategory as unknown as jest.Mock;

describe("sitemap coverage", () => {
  it("executes remaining branches", () => {
    mockedGetPostsByCategory.mockReturnValue([
      { updatedAt: undefined, date: undefined },
      { updatedAt: new Date("invalid"), date: undefined },
      { updatedAt: undefined, date: "not-a-date" },
    ]);

    mockedGetAllPosts.mockReturnValue([
      {
        slug: "slug-latest",
        updatedAt: new Date("2020-01-01T00:00:00.000Z"),
        date: "",
      },
    ]);

    mockedFs.existsSync.mockImplementation((filePath: string) => {
      const normalized = filePath.replace(/\\/g, "/");
      if (normalized.endsWith("/src/app/page.tsx")) return false;
      if (normalized.endsWith("/src/app/layout.tsx")) return false;
      if (normalized.endsWith("/src/app/sitemap.ts")) return false;
      if (normalized.includes("/content/blog/slug-latest.mdx")) return true;
      if (normalized.includes("/src/app/article/[slug]/page.tsx")) return true;
      if (normalized.includes("/src/app/blog/[category]/page.tsx")) return true;
      return true;
    });

    mockedFs.statSync.mockImplementation((filePath: string) => {
      const normalized = filePath.replace(/\\/g, "/");
      if (normalized.includes("/content/blog/slug-latest.mdx")) {
        return { mtime: new Date("2020-02-01T00:00:00.000Z") };
      }
      if (normalized.includes("/src/app/article/[slug]/page.tsx")) {
        return { mtime: new Date("2020-03-01T00:00:00.000Z") };
      }
      if (normalized.includes("/src/app/blog/[category]/page.tsx")) {
        return { mtime: new Date("2020-04-01T00:00:00.000Z") };
      }
      return { mtime: new Date("2020-01-10T00:00:00.000Z") };
    });

    const entries = sitemap();
    expect(Array.isArray(entries)).toBe(true);
    for (const entry of entries) {
      const d = new Date(entry.lastModified as unknown as string | Date);
      expect(Number.isNaN(d.getTime())).toBe(false);
    }
  });

  it("covers fallback chain when layout exists", () => {
    mockedGetPostsByCategory.mockReturnValue([
      { updatedAt: undefined, date: undefined },
      { updatedAt: new Date("invalid"), date: undefined },
    ]);

    mockedGetAllPosts.mockReturnValue([
      {
        slug: "slug-latest",
        updatedAt: new Date("2020-01-01T00:00:00.000Z"),
        date: "",
      },
    ]);

    mockedFs.existsSync.mockImplementation((filePath: string) => {
      const normalized = filePath.replace(/\\/g, "/");
      if (normalized.endsWith("/src/app/page.tsx")) return false;
      if (normalized.endsWith("/src/app/layout.tsx")) return true;
      if (normalized.endsWith("/src/app/sitemap.ts")) return true;
      if (normalized.includes("/content/blog/slug-latest.mdx")) return true;
      if (normalized.includes("/src/app/article/[slug]/page.tsx")) return true;
      if (normalized.includes("/src/app/blog/[category]/page.tsx")) return true;
      return true;
    });

    mockedFs.statSync.mockImplementation((filePath: string) => {
      const normalized = filePath.replace(/\\/g, "/");
      if (normalized.includes("/content/blog/slug-latest.mdx")) {
        return { mtime: new Date("2020-02-01T00:00:00.000Z") };
      }
      if (normalized.includes("/src/app/article/[slug]/page.tsx")) {
        return { mtime: new Date("2020-03-01T00:00:00.000Z") };
      }
      if (normalized.includes("/src/app/blog/[category]/page.tsx")) {
        return { mtime: new Date("2020-04-01T00:00:00.000Z") };
      }
      return { mtime: new Date("2020-01-10T00:00:00.000Z") };
    });

    const entries = sitemap();
    expect(Array.isArray(entries)).toBe(true);
    expect(entries.length).toBeGreaterThan(0);
  });
});

