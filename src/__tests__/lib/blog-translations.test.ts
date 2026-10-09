import fs from "fs";
import os from "os";
import path from "path";

type BlogModule = typeof import("@/lib/blog");

const SOURCE_A = "source-a";
const SOURCE_B = "source-b";

describe("translations", () => {
  const originalCwd = process.cwd();
  let root: string;
  let blog: BlogModule;

  function writeFrench(slug: string) {
    fs.writeFileSync(path.join(root, "content/blog", `${slug}.mdx`), `---\ntitle: "Titre ${slug}"\ndate: "2026-01-01"\ncategory: "Symfony"\n---\nContenu.\n`);
  }

  function writeEn(slug: string, fields: Record<string, string>) {
    fs.mkdirSync(path.join(root, "content/blog/en"), { recursive: true });
    const front = Object.entries(fields)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    fs.writeFileSync(path.join(root, "content/blog/en", `${slug}.mdx`), `---\n${front}\n---\nBody of the article.\n`);
  }

  function validFields(source: string, overrides: Record<string, string> = {}) {
    return {
      title: '"Translated title"',
      date: '"2026-10-09"',
      category: '"Symfony"',
      translationOf: `"${source}"`,
      translatedFromUpdatedAt: '"2026-01-13"',
      reviewedBy: '"Reviewer"',
      reviewedAt: '"2026-10-09"',
      ...overrides,
    };
  }

  beforeEach(() => {
    root = fs.mkdtempSync(path.join(os.tmpdir(), "blog-translations-"));
    fs.mkdirSync(path.join(root, "content/blog"), { recursive: true });
    writeFrench(SOURCE_A);
    writeFrench(SOURCE_B);
    process.chdir(root);
    jest.isolateModules(() => {
      blog = jest.requireActual("@/lib/blog");
    });
  });

  afterEach(() => {
    process.chdir(originalCwd);
    fs.rmSync(root, { recursive: true, force: true });
  });

  it("returns no English post when the directory does not exist", () => {
    expect(blog.getAllPosts("en")).toEqual([]);
  });

  it("keeps French posts tagged as French without translation fields", () => {
    const post = blog.getPostBySlug(SOURCE_A);
    expect(post!.language).toBe("fr");
    expect(post!.translationOf).toBeUndefined();
    expect(blog.getAllPosts()[0].language).toBe("fr");
  });

  it("loads a valid translation with its metadata", () => {
    writeEn("valid", validFields(SOURCE_A));
    const posts = blog.getAllPosts("en");
    expect(posts).toHaveLength(1);
    expect(posts[0]).toMatchObject({
      slug: "valid",
      language: "en",
      translationOf: SOURCE_A,
      translatedFromUpdatedAt: "2026-01-13",
      reviewedBy: "Reviewer",
      reviewedAt: "2026-10-09",
    });
    expect(blog.getPostBySlug("valid", "en")!.title).toBe("Translated title");
  });

  it("reads unquoted YAML dates as ISO strings", () => {
    writeEn("dates", validFields(SOURCE_A, { reviewedAt: "2026-10-09", translatedFromUpdatedAt: "2026-01-13" }));
    const [post] = blog.getAllPosts("en");
    expect(post.reviewedAt).toBe("2026-10-09");
    expect(post.translatedFromUpdatedAt).toBe("2026-01-13");
  });

  it("returns undefined for an unknown English slug", () => {
    expect(blog.getPostBySlug("does-not-exist", "en")).toBeUndefined();
  });

  it("sorts English posts by date, newest first", () => {
    writeEn("old", validFields(SOURCE_A, { date: '"2026-01-01"' }));
    writeEn("new", validFields(SOURCE_B, { date: '"2026-06-01"' }));
    expect(blog.getAllPosts("en").map((p) => p.slug)).toEqual(["new", "old"]);
  });

  it.each(["translationOf", "translatedFromUpdatedAt", "reviewedBy", "reviewedAt"])(
    "refuses a translation without %s",
    (field) => {
      const fields: Record<string, string> = validFields(SOURCE_A);
      delete fields[field];
      writeEn("missing", fields);
      expect(() => blog.getAllPosts("en")).toThrow(`le champ ${field} est obligatoire`);
    },
  );

  it("refuses a translation whose French source does not exist", () => {
    writeEn("orphan", validFields("no-such-article"));
    expect(() => blog.getAllPosts("en")).toThrow("n'existe pas");
  });

  it("refuses two translations of the same French article", () => {
    writeEn("first", validFields(SOURCE_A));
    writeEn("second", validFields(SOURCE_A));
    expect(() => blog.getAllPosts("en")).toThrow("a déjà une traduction");
  });

  it("offers no language switch target without a translation", () => {
    expect(blog.getLanguageSwitchTarget(blog.getPostBySlug(SOURCE_A)!)).toBeUndefined();
  });

  it("targets the English version from French and the French one from English", () => {
    writeEn("switch", validFields(SOURCE_A));
    expect(blog.getLanguageSwitchTarget(blog.getPostBySlug(SOURCE_A)!)).toEqual({
      language: "en",
      href: "/en/article/switch",
    });
    expect(blog.getLanguageSwitchTarget(blog.getPostBySlug("switch", "en")!)).toEqual({
      language: "fr",
      href: `/article/${SOURCE_A}`,
    });
  });

  it("gives no translation paths without a translation", () => {
    expect(blog.getTranslationPaths(blog.getPostBySlug(SOURCE_A)!)).toBeUndefined();
  });

  it("gives the same French and English paths from either side", () => {
    writeEn("paths", validFields(SOURCE_A));
    const expected = { fr: `/article/${SOURCE_A}`, en: "/en/article/paths" };
    expect(blog.getTranslationPaths(blog.getPostBySlug(SOURCE_A)!)).toEqual(expected);
    expect(blog.getTranslationPaths(blog.getPostBySlug("paths", "en")!)).toEqual(expected);
  });
});
