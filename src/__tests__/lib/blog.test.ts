import fs from "fs";
import {
  getAllPosts,
  getPostBySlug,
  getCategoryBySlug,
  getCategorySlug,
  getCategories,
  getPostsByCategory,
  extractHeadings,
  isSymfonyAuditCategory,
  isTechCategory,
  readingTime,
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

  it("ignores files that do not exist", () => {
    const originalExistsSync = fs.existsSync;
    const existsSyncSpy = jest.spyOn(fs, "existsSync");
    existsSyncSpy.mockImplementation((p) => {
      if (p.toString().includes(TEMP_SLUG)) {
        return false;
      }
      return originalExistsSync(p);
    });

    const posts = getAllPosts();
    const tempPost = posts.find((p) => p.slug === TEMP_SLUG);
    expect(tempPost).toBeUndefined();

    existsSyncSpy.mockRestore();
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

describe("isTechCategory", () => {
  it.each([
    "Symfony",
    "PHP",
    "Architecture",
    "DevOps",
    "Qualité de code",
    "Sécurité",
    "IA",
    "JavaScript",
  ])("classifies %s as tech", (category) => {
    expect(isTechCategory(category)).toBe(true);
  });

  it.each(["Formation", "Projet", "Green IT", "Agence", ""])(
    "classifies %s as non-tech",
    (category) => {
      expect(isTechCategory(category)).toBe(false);
    },
  );
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
