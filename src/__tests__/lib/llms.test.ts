import { articlePath, getAllPosts } from "@/lib/blog";
import { BASE_URL } from "@/lib/metadata";
import { buildLlmsFullTxt, buildLlmsTxt } from "@/lib/llms";
import { STATIC_SILOS } from "@/lib/routes";
import type { BlogPost } from "@/types/blog";

jest.mock("@/lib/blog", () => {
  const actual = jest.requireActual("@/lib/blog");
  return { ...actual, getAllPosts: jest.fn(actual.getAllPosts) };
});

const mockConfig = { indexable: false };
jest.mock("@/lib/i18n/config", () => ({
  get ENGLISH_INDEXABLE() {
    return mockConfig.indexable;
  },
}));

const getAllPostsMock = getAllPosts as jest.MockedFunction<typeof getAllPosts>;
const actualGetAllPosts = jest.requireActual("@/lib/blog").getAllPosts as typeof getAllPosts;

function post(overrides: Partial<BlogPost>): BlogPost {
  return {
    slug: "article",
    title: "Titre",
    date: "2026-01-01",
    author: "Auteur",
    category: "Symfony",
    kind: "tech",
    language: "fr",
    excerpt: "Extrait",
    content: "Contenu",
    wordCount: 10,
    ...overrides,
  };
}

beforeEach(() => {
  mockConfig.indexable = false;
  getAllPostsMock.mockReset();
  getAllPostsMock.mockImplementation(actualGetAllPosts);
});

describe("llms-full.txt", () => {
  it("référence chaque article publié avec son titre du frontmatter", () => {
    const content = buildLlmsFullTxt();

    for (const article of actualGetAllPosts()) {
      const title = article.title.replaceAll(/\s+/g, " ").trim();
      expect(content).toContain(`[${title}](${BASE_URL}${articlePath(article)})`);
    }
  });

  it("ne contient aucune URL relative", () => {
    expect(buildLlmsFullTxt()).not.toMatch(/\]\(\//);
  });

  it("référence les pages de service du site", () => {
    const content = buildLlmsFullTxt();

    for (const silo of STATIC_SILOS) {
      expect(content).toContain(`### ${silo.title}`);
      for (const route of silo.routes) {
        expect(content).toContain(`[${route.label}](${BASE_URL}${route.path})`);
      }
    }
  });

  it("reprend toutes les sections de présentation", () => {
    const content = buildLlmsFullTxt();

    expect(content).toContain("## Quand nous choisir");
    expect(content).toContain("## Quand ne pas nous choisir");
    expect(content).toContain("## Contributions open source");
  });

  it("n'inclut pas la section anglaise quand l'anglais n'est pas indexable", () => {
    expect(buildLlmsFullTxt()).not.toContain("## English articles");
  });

  it("inclut les articles anglais en URL absolue quand l'anglais est indexable", () => {
    mockConfig.indexable = true;
    const content = buildLlmsFullTxt();

    expect(content).toContain("## English articles");
    expect(content).toContain(`](${BASE_URL}/en/article/`);
  });

  it("omet la section anglaise quand il n'y a aucune traduction", () => {
    mockConfig.indexable = true;
    getAllPostsMock.mockImplementation((language) =>
      language === "en" ? [] : [post({})],
    );

    expect(buildLlmsFullTxt()).not.toContain("## English articles");
  });

  it("indique la date de mise à jour seulement quand elle diffère de la date de publication", () => {
    getAllPostsMock.mockImplementation(() => [
      post({ slug: "a", title: "A", updatedAt: "2026-02-02" }),
      post({ slug: "b", title: "B", updatedAt: "2026-01-01" }),
      post({ slug: "c", title: "C", excerpt: "Ligne un\n  ligne deux" }),
    ]);
    const content = buildLlmsFullTxt();

    expect(content).toContain(`[A](${BASE_URL}/article/a) - 2026-01-01, mis à jour le 2026-02-02`);
    expect(content).toContain(`[B](${BASE_URL}/article/b) - 2026-01-01\n`);
    expect(content).toContain(`[C](${BASE_URL}/article/c) - 2026-01-01\n  Ligne un ligne deux`);
  });

  it("regroupe les articles par catégorie", () => {
    getAllPostsMock.mockImplementation(() => [
      post({ slug: "a", category: "Symfony" }),
      post({ slug: "b", category: "IA" }),
      post({ slug: "c", category: "Symfony" }),
    ]);
    const content = buildLlmsFullTxt();

    expect(content.match(/### Symfony/g)).toHaveLength(1);
    expect(content).toContain("### IA");
  });
});

describe("llms.txt", () => {
  it("contient les chiffres clés, les pages et le renvoi vers llms-full.txt", () => {
    const content = buildLlmsTxt();

    expect(content.startsWith("# Efficience IT\n")).toBe(true);
    expect(content).toContain("## Chiffres clés");
    expect(content).toContain("## Services");
    expect(content).toContain("## Pages du site");
    expect(content).toContain(`[llms-full.txt](${BASE_URL}/llms-full.txt)`);
  });

  it("ne liste pas les articles ni les sections détaillées", () => {
    const content = buildLlmsTxt();

    expect(content).not.toContain("## Articles de blog");
    expect(content).not.toContain("## Quand nous choisir");
  });

  it("ne contient aucune URL relative", () => {
    expect(buildLlmsTxt()).not.toMatch(/\]\(\//);
  });
});
