import fs from "fs";
import path from "path";
import {
  getAllPosts,
  getPostBySlug,
  getCategoryBySlug,
  getCategorySlug,
  getCategories,
  getPostsByCategory,
  extractHeadings,
  isSymfonyAuditCategory,
  readingTime,
  BLOG_PAGE_SIZE,
  getBlogPageCount,
  getPostsForPage,
  blogPagePath,
  getLanguageSwitchTarget,
  getTranslationPaths,
} from "@/lib/blog";

const TEMP_SLUG = "__test-empty-frontmatter__";
const EMPTY_FRONTMATTER = "---\n---\n";

describe("getPostBySlug", () => {
  it("returns a post for a valid slug", () => {
    const post = getPostBySlug("api-rest-les-bonnes-pratiques");
    expect(post).toBeDefined();
    expect(post!.slug).toBe("api-rest-les-bonnes-pratiques");
    expect(post!.title).toBeTruthy();
    expect(post!.content).toBeTruthy();
    expect(typeof post!.wordCount).toBe("number");
  });

  it("returns undefined for an invalid slug", () => {
    const post = getPostBySlug("this-slug-does-not-exist");
    expect(post).toBeUndefined();
  });

  it("defaults to empty strings when frontmatter fields are missing", () => {
    const existsSpy = jest.spyOn(fs, "existsSync").mockReturnValue(true);
    const readFileSpy = jest.spyOn(fs, "readFileSync").mockReturnValue(EMPTY_FRONTMATTER as never);

    try {
      const post = getPostBySlug(TEMP_SLUG);
      expect(post).toBeDefined();
      expect(post!.title).toBe("");
      expect(post!.date).toBe("");
      expect(post!.author).toBe("");
      expect(post!.category).toBe("");
      expect(post!.kind).toBe("blog");
      expect(post!.excerpt).toBe("");
      expect(post!.wordCount).toBe(0);
      expect(post!.mainTech).toBeUndefined();
    } finally {
      readFileSpy.mockRestore();
      existsSpy.mockRestore();
    }
  });

  it("parses mainTech array, filtering unknown keys", () => {
    const existsSpy = jest.spyOn(fs, "existsSync").mockReturnValue(true);
    const readFileSpy = jest
      .spyOn(fs, "readFileSync")
      .mockReturnValue("---\nmainTech: [\"symfony\", \"unknown-tech\", 42]\n---\n" as never);

    try {
      const post = getPostBySlug(TEMP_SLUG);
      expect(post!.mainTech).toEqual(["symfony"]);
    } finally {
      readFileSpy.mockRestore();
      existsSpy.mockRestore();
    }
  });

  it("exposes image metadata fields when present in frontmatter", () => {
    const existsSpy = jest.spyOn(fs, "existsSync").mockReturnValue(true);
    const readFileSpy = jest
      .spyOn(fs, "readFileSync")
      .mockReturnValue(
        "---\nimage: /images/blog/test.webp\nimageCaption: Une image test\nimageGeoLocation: Lille, France\n---\n" as never,
      );

    try {
      const post = getPostBySlug(TEMP_SLUG);
      expect(post?.image).toBe("/images/blog/test.webp");
      expect(post?.imageCaption).toBe("Une image test");
      expect(post?.imageGeoLocation).toBe("Lille, France");
    } finally {
      readFileSpy.mockRestore();
      existsSpy.mockRestore();
    }
  });

  it("returns undefined mainTech when frontmatter has only unknown keys", () => {
    const existsSpy = jest.spyOn(fs, "existsSync").mockReturnValue(true);
    const readFileSpy = jest
      .spyOn(fs, "readFileSync")
      .mockReturnValue("---\nmainTech: [\"unknown\"]\n---\n" as never);

    try {
      const post = getPostBySlug(TEMP_SLUG);
      expect(post!.mainTech).toBeUndefined();
    } finally {
      readFileSpy.mockRestore();
      existsSpy.mockRestore();
    }
  });

  it("returns undefined mainTech when frontmatter has a non-array value", () => {
    const existsSpy = jest.spyOn(fs, "existsSync").mockReturnValue(true);
    const readFileSpy = jest
      .spyOn(fs, "readFileSync")
      .mockReturnValue("---\nmainTech: symfony\n---\n" as never);

    try {
      const post = getPostBySlug(TEMP_SLUG);
      expect(post!.mainTech).toBeUndefined();
    } finally {
      readFileSpy.mockRestore();
      existsSpy.mockRestore();
    }
  });

  it("defaults kind to blog when frontmatter is missing kind", () => {
    const existsSpy = jest.spyOn(fs, "existsSync").mockReturnValue(true);
    const readFileSpy = jest.spyOn(fs, "readFileSync").mockReturnValue("---\ntitle: Test\n---\n" as never);

    try {
      const post = getPostBySlug(TEMP_SLUG);
      expect(post!.kind).toBe("blog");
    } finally {
      readFileSpy.mockRestore();
      existsSpy.mockRestore();
    }
  });

  it("defaults kind to tech when category is tech and kind is missing", () => {
    const existsSpy = jest.spyOn(fs, "existsSync").mockReturnValue(true);
    const readFileSpy = jest
      .spyOn(fs, "readFileSync")
      .mockReturnValue("---\ncategory: PHP\n---\n" as never);

    try {
      const post = getPostBySlug(TEMP_SLUG);
      expect(post!.kind).toBe("tech");
    } finally {
      readFileSpy.mockRestore();
      existsSpy.mockRestore();
    }
  });

  it("accepts kind news and rejects unknown values", () => {
    const existsSpy = jest.spyOn(fs, "existsSync").mockReturnValue(true);
    try {
      const readFileSpy = jest
        .spyOn(fs, "readFileSync")
        .mockReturnValue("---\nkind: news\n---\n" as never);
      const post = getPostBySlug(TEMP_SLUG);
      expect(post!.kind).toBe("news");
      readFileSpy.mockRestore();
      const readInvalidKindSpy = jest
        .spyOn(fs, "readFileSync")
        .mockReturnValue("---\nkind: unknown\n---\n" as never);
      const fallbackPost = getPostBySlug(TEMP_SLUG);
      expect(fallbackPost!.kind).toBe("blog");
      readInvalidKindSpy.mockRestore();
    } finally {
      existsSpy.mockRestore();
    }
  });
});

describe("getAllPosts", () => {
  it("defaults to empty strings when frontmatter fields are missing", () => {
    const readdirSpy = jest.spyOn(fs, "readdirSync").mockReturnValue([`${TEMP_SLUG}.mdx`] as never);
    const readFileSpy = jest.spyOn(fs, "readFileSync").mockReturnValue(EMPTY_FRONTMATTER as never);

    try {
      const posts = getAllPosts();
      const tempPost = posts.find((p) => p.slug === TEMP_SLUG);
      expect(tempPost).toBeDefined();
      expect(tempPost!.title).toBe("");
      expect(tempPost!.date).toBe("");
      expect(tempPost!.author).toBe("");
      expect(tempPost!.category).toBe("");
      expect(tempPost!.kind).toBe("blog");
      expect(tempPost!.excerpt).toBe("");
      expect(tempPost!.wordCount).toBe(0);
    } finally {
      readFileSpy.mockRestore();
      readdirSpy.mockRestore();
    }
  });

  it("exposes howTo when present in the frontmatter", () => {
    const posts = getAllPosts();
    const post = posts.find(
      (p) => p.slug === "deployer-nuxtjs-avec-gitlab-ci-s3-et-cloudfront",
    );
    expect(post?.howTo).toBeDefined();
    expect(post?.howTo?.steps.length).toBeGreaterThan(0);
    expect(post?.howTo?.steps[0]).toHaveProperty("name");
    expect(post?.howTo?.steps[0]).toHaveProperty("text");
  });
});

describe("getCategoryBySlug", () => {
  it("returns the category name for a valid slug", () => {
    expect(getCategoryBySlug("symfony")).toBe("Symfony");
    expect(getCategoryBySlug("green-it")).toBe("Green IT");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getCategoryBySlug("unknown-slug")).toBeUndefined();
  });
});

describe("getCategorySlug", () => {
  it("returns the mapped slug for a known category", () => {
    expect(getCategorySlug("Symfony")).toBe("symfony");
    expect(getCategorySlug("Green IT")).toBe("green-it");
  });

  it("falls back to lowercase for an unmapped category", () => {
    expect(getCategorySlug("Unknown")).toBe("unknown");
  });
});

describe("getCategories", () => {
  it("returns a sorted array of category strings", () => {
    const categories = getCategories();
    expect(Array.isArray(categories)).toBe(true);
    expect(categories.length).toBeGreaterThan(0);
    const sorted = [...categories].sort();
    expect(categories).toEqual(sorted);
  });
});

describe("getPostsByCategory", () => {
  it("returns posts matching the given category", () => {
    const categories = getCategories();
    const category = categories[0];
    const posts = getPostsByCategory(category);
    expect(posts.length).toBeGreaterThan(0);
    posts.forEach((p) => expect(p.category).toBe(category));
  });

  it("returns an empty array for an unknown category", () => {
    const posts = getPostsByCategory("NonExistentCategory");
    expect(posts).toEqual([]);
  });
});

describe("extractHeadings", () => {
  it("extracts ## headings from markdown", () => {
    const content = "## Introduction\n\nSome text\n\n## Getting Started\n\nMore text";
    const headings = extractHeadings(content);
    expect(headings).toHaveLength(2);
    expect(headings[0]).toEqual({ id: "introduction", text: "Introduction", level: 2 });
    expect(headings[1]).toEqual({ id: "getting-started", text: "Getting Started", level: 2 });
  });

  it("returns an empty array when there are no headings", () => {
    const headings = extractHeadings("Just some plain text without headings.");
    expect(headings).toEqual([]);
  });

  it("normalizes accented characters in heading IDs", () => {
    const content = "## Les propriétés réservées\n\n## Déclaration générale";
    const headings = extractHeadings(content);
    expect(headings).toHaveLength(2);
    expect(headings[0].id).toBe("les-proprietes-reservees");
    expect(headings[1].id).toBe("declaration-generale");
  });

  it("ignores ### headings (only matches ##)", () => {
    const content = "## Valid\n\n### Not Matched\n\ntext";
    const headings = extractHeadings(content);
    expect(headings).toHaveLength(1);
    expect(headings[0].text).toBe("Valid");
  });
});

describe("isSymfonyAuditCategory", () => {
  it.each(["Symfony", "PHP", "Architecture", "Qualité de code"])(
    "matches %s",
    (category) => {
      expect(isSymfonyAuditCategory(category)).toBe(true);
    },
  );

  it.each(["IA", "JavaScript", "DevOps", "Sécurité", "Formation", "Projet", ""])(
    "does not match %s",
    (category) => {
      expect(isSymfonyAuditCategory(category)).toBe(false);
    },
  );
});

describe("readingTime", () => {
  it("returns 1 min for very short articles", () => {
    expect(readingTime(50)).toBe(1);
  });

  it("returns 1 min for 0 words", () => {
    expect(readingTime(0)).toBe(1);
  });

  it("calculates based on 200 words per minute", () => {
    expect(readingTime(200)).toBe(1);
    expect(readingTime(400)).toBe(2);
    expect(readingTime(1000)).toBe(5);
    expect(readingTime(1500)).toBe(8);
    expect(readingTime(2000)).toBe(10);
  });

  it("rounds to nearest minute", () => {
    expect(readingTime(350)).toBe(2);
    expect(readingTime(250)).toBe(1);
  });
});

describe("parseArticleKind (via getPostBySlug)", () => {
  const TEMP_SLUG = "__test-kind-fallback__";

  it("defaults to blog for non-tech categories without kind", () => {
    const existsSpy = jest.spyOn(fs, "existsSync").mockReturnValue(true);
    const readFileSpy = jest
      .spyOn(fs, "readFileSync")
      .mockReturnValue("---\ncategory: Agence\n---\n" as never);

    try {
      const post = getPostBySlug(TEMP_SLUG);
      expect(post?.kind).toBe("blog");
    } finally {
      readFileSpy.mockRestore();
      existsSpy.mockRestore();
    }
  });

  it("auto-derives tech for tech categories without kind", () => {
    const existsSpy = jest.spyOn(fs, "existsSync").mockReturnValue(true);
    const readFileSpy = jest
      .spyOn(fs, "readFileSync")
      .mockReturnValue("---\ncategory: Symfony\n---\n" as never);

    try {
      const post = getPostBySlug(TEMP_SLUG);
      expect(post?.kind).toBe("tech");
    } finally {
      readFileSpy.mockRestore();
      existsSpy.mockRestore();
    }
  });

  it("honors explicit kind in frontmatter", () => {
    const existsSpy = jest.spyOn(fs, "existsSync").mockReturnValue(true);
    const readFileSpy = jest
      .spyOn(fs, "readFileSync")
      .mockReturnValue("---\ncategory: Symfony\nkind: blog\n---\n" as never);

    try {
      const post = getPostBySlug(TEMP_SLUG);
      expect(post?.kind).toBe("blog");
    } finally {
      readFileSpy.mockRestore();
      existsSpy.mockRestore();
    }
  });
});

describe("blog pagination", () => {
  it("computes the page count from the page size", () => {
    expect(getBlogPageCount()).toBe(Math.ceil(getAllPosts().length / BLOG_PAGE_SIZE));
  });

  it("returns a full first page", () => {
    expect(getPostsForPage(1)).toHaveLength(BLOG_PAGE_SIZE);
  });

  it("returns the remaining posts on the last page", () => {
    const total = getAllPosts().length;
    const last = getBlogPageCount();
    expect(getPostsForPage(last)).toHaveLength(total - (last - 1) * BLOG_PAGE_SIZE);
  });

  it("returns no post beyond the last page", () => {
    expect(getPostsForPage(getBlogPageCount() + 1)).toEqual([]);
  });

  it("never repeats a post across pages", () => {
    const slugs = Array.from({ length: getBlogPageCount() }, (_, i) => getPostsForPage(i + 1)).flat().map((p) => p.slug);
    expect(new Set(slugs).size).toBe(getAllPosts().length);
  });

  it("builds page paths", () => {
    expect(blogPagePath(1)).toBe("/blog");
    expect(blogPagePath(3)).toBe("/blog/page/3");
  });
});

describe("translations", () => {
  const EN_DIR = path.join(process.cwd(), "content/blog/en");
  const SOURCE_A = "api-rest-les-bonnes-pratiques";
  const SOURCE_B = "arrives-au-max-des-id-int-2147483647";
  const created: string[] = [];
  let createdDir = false;

  function writeEn(slug: string, fields: Record<string, string>) {
    if (!fs.existsSync(EN_DIR)) {
      fs.mkdirSync(EN_DIR, { recursive: true });
      createdDir = true;
    }
    const front = Object.entries(fields)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    const file = path.join(EN_DIR, `${slug}.mdx`);
    fs.writeFileSync(file, `---\n${front}\n---\nBody of the article.\n`);
    created.push(file);
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

  afterEach(() => {
    for (const file of created.splice(0)) fs.rmSync(file, { force: true });
    if (createdDir) {
      fs.rmSync(EN_DIR, { recursive: true, force: true });
      createdDir = false;
    }
  });

  it("returns no English post when the directory does not exist", () => {
    expect(getAllPosts("en")).toEqual([]);
  });

  it("keeps French posts tagged as French without translation fields", () => {
    const post = getPostBySlug(SOURCE_A);
    expect(post!.language).toBe("fr");
    expect(post!.translationOf).toBeUndefined();
    expect(getAllPosts()[0].language).toBe("fr");
  });

  it("loads a valid translation with its metadata", () => {
    writeEn("__test-en-valid__", validFields(SOURCE_A));
    const posts = getAllPosts("en");
    expect(posts).toHaveLength(1);
    expect(posts[0]).toMatchObject({
      slug: "__test-en-valid__",
      language: "en",
      translationOf: SOURCE_A,
      translatedFromUpdatedAt: "2026-01-13",
      reviewedBy: "Reviewer",
      reviewedAt: "2026-10-09",
    });
    expect(getPostBySlug("__test-en-valid__", "en")!.title).toBe("Translated title");
  });

  it("reads unquoted YAML dates as ISO strings", () => {
    writeEn("__test-en-dates__", validFields(SOURCE_A, { reviewedAt: "2026-10-09", translatedFromUpdatedAt: "2026-01-13" }));
    const [post] = getAllPosts("en");
    expect(post.reviewedAt).toBe("2026-10-09");
    expect(post.translatedFromUpdatedAt).toBe("2026-01-13");
  });

  it("returns undefined for an unknown English slug", () => {
    expect(getPostBySlug("__does-not-exist__", "en")).toBeUndefined();
  });

  it("sorts English posts by date, newest first", () => {
    writeEn("__test-en-old__", validFields(SOURCE_A, { date: '"2026-01-01"' }));
    writeEn("__test-en-new__", validFields(SOURCE_B, { date: '"2026-06-01"' }));
    expect(getAllPosts("en").map((p) => p.slug)).toEqual(["__test-en-new__", "__test-en-old__"]);
  });

  it.each(["translationOf", "translatedFromUpdatedAt", "reviewedBy", "reviewedAt"])(
    "refuses a translation without %s",
    (field) => {
      const fields: Record<string, string> = validFields(SOURCE_A);
      delete fields[field];
      writeEn("__test-en-missing__", fields);
      expect(() => getAllPosts("en")).toThrow(`le champ ${field} est obligatoire`);
    },
  );

  it("refuses a translation whose French source does not exist", () => {
    writeEn("__test-en-orphan__", validFields("__no-such-article__"));
    expect(() => getAllPosts("en")).toThrow("n'existe pas");
  });

  it("refuses two translations of the same French article", () => {
    writeEn("__test-en-first__", validFields(SOURCE_A));
    writeEn("__test-en-second__", validFields(SOURCE_A));
    expect(() => getAllPosts("en")).toThrow("a déjà une traduction");
  });

  it("offers no language switch target without a translation", () => {
    expect(getLanguageSwitchTarget(getPostBySlug(SOURCE_A)!)).toBeUndefined();
  });

  it("targets the English version from French and the French one from English", () => {
    writeEn("__test-en-switch__", validFields(SOURCE_A));
    expect(getLanguageSwitchTarget(getPostBySlug(SOURCE_A)!)).toEqual({
      language: "en",
      href: "/en/article/__test-en-switch__",
    });
    expect(getLanguageSwitchTarget(getPostBySlug("__test-en-switch__", "en")!)).toEqual({
      language: "fr",
      href: `/article/${SOURCE_A}`,
    });
  });

  it("gives no translation paths without a translation", () => {
    expect(getTranslationPaths(getPostBySlug(SOURCE_A)!)).toBeUndefined();
  });

  it("gives the same French and English paths from either side", () => {
    writeEn("__test-en-paths__", validFields(SOURCE_A));
    const expected = { fr: `/article/${SOURCE_A}`, en: "/en/article/__test-en-paths__" };
    expect(getTranslationPaths(getPostBySlug(SOURCE_A)!)).toEqual(expected);
    expect(getTranslationPaths(getPostBySlug("__test-en-paths__", "en")!)).toEqual(expected);
  });
});
