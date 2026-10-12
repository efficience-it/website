import { renderToStaticMarkup } from "react-dom/server";
import ArticleView from "@/components/article/ArticleView";
import { getMessages } from "@/lib/i18n/messages";
import type { BlogPost } from "@/types/blog";

jest.mock("@/components/ui/MarkdownContent", () => ({
  __esModule: true,
  default: ({ content }: { content: string }) => <div data-md>{content}</div>,
}));

const headings = ["Un", "Deux", "Trois", "Quatre", "Cinq"]
  .map((title) => `## ${title}\n\nParagraphe.\n`)
  .join("\n");

function makePost(overrides: Partial<BlogPost> = {}): BlogPost {
  return {
    slug: "exemple",
    title: "Exemple",
    date: "2020-01-01",
    author: "Auteur",
    category: "Symfony",
    kind: "tech",
    excerpt: "Extrait",
    content: headings,
    wordCount: 1600,
    image: "/images/blog/cover-exemple.webp",
    ...overrides,
  };
}

const related = [makePost({ slug: "lie", title: "Lie" })];

function render(post: BlogPost, language: "fr" | "en", target?: { language: "fr" | "en"; href: string }) {
  const relatedPosts = language === "en" ? related.map((p) => ({ ...p, language: "en" as const })) : related;
  return renderToStaticMarkup(
    <ArticleView post={post} relatedPosts={relatedPosts} language={language} languageSwitchTarget={target} />,
  );
}

describe("ArticleView in French", () => {
  it("renders the French article with links to French routes", () => {
    const html = render(
      makePost({
        updatedAt: new Date().toISOString().slice(0, 10),
        faq: [{ question: "Q ?", answer: "R" }],
        event: {
          name: "Evt",
          startDate: "2026-01-01",
          endDate: "2026-01-02",
          location: { name: "Lieu", address: "Adresse" },
          organizer: { name: "Org", url: "https://example.com" },
          url: "https://example.com",
        },
        howTo: { name: "Comment", description: "Desc", steps: [{ name: "S", text: "T" }] },
      }),
      "fr",
      { language: "en", href: "/en/article/example" },
    );
    expect(html).toContain("min de lecture");
    expect(html).toContain("Mis à jour récemment");
    expect(html).toContain("Questions fréquentes");
    expect(html).toContain("Articles connexes");
    expect(html).toContain('href="/blog/symfony"');
    expect(html).toContain("Demander un audit gratuit");
    expect(html).toContain("Retour au blog");
    expect(html).toContain('hrefLang="en"');
    expect(html).toContain("Accueil");
  });

  it("uses the generic mid-article call to action outside audit categories", () => {
    const html = render(makePost({ category: "IA" }), "fr");
    expect(html).toContain("Besoin d&#x27;accompagnement sur votre projet ?");
    expect(html).toContain("Parlons-en");
  });

  it("handles a short post without optional parts", () => {
    const html = render(
      makePost({
        content: "Texte court.",
        wordCount: 100,
        image: undefined,
        category: "",
        author: "",
        updatedAt: "2020-02-02",
      }),
      "fr",
    );
    expect(html).not.toContain("Par ");
    expect(html).toContain("Mis à jour le");
    expect(html).not.toContain("Mis à jour récemment");
  });

  it("skips the category crumb for an unknown category", () => {
    const html = render(makePost({ category: "Inconnue" }), "fr");
    expect(html).not.toContain('"name":"Inconnue","item"');
  });
});

describe("ArticleView in English", () => {
  const english = makePost({
    language: "en",
    category: "Symfony",
    updatedAt: new Date().toISOString().slice(0, 10),
    faq: [{ question: "Q?", answer: "A" }],
  });

  it("renders English labels and routes", () => {
    const html = render(english, "en", { language: "fr", href: "/article/exemple" });
    expect(html).toContain("min read");
    expect(html).toContain("Recently updated");
    expect(html).toContain("Frequently asked questions");
    expect(html).toContain("Related articles");
    expect(html).toContain("Back to the blog");
    expect(html).toContain('href="/en/blog"');
    expect(html).toContain("https://www.itefficience.com/en/article/exemple");
    expect(html).toContain("Share on LinkedIn");
    expect(html).toContain("Need support on your project?");
    expect(html).toContain("Contents");
  });

  it("contains no French label of the interface", () => {
    const html = render(english, "en", { language: "fr", href: "/article/exemple" });
    const french = getMessages("fr");
    const labels = [
      french.tableOfContents,
      french.recentlyUpdated,
      french.faq,
      french.relatedPosts,
      french.backToBlog,
      french.stickyCtaPrompt.replace("'", "&#x27;"),
      french.midCtaPrompt.replace("'", "&#x27;"),
      french.readMore,
      french.copyLink,
      "Accueil",
      "Parlons-en",
      "Demander un audit",
    ];
    for (const label of labels) {
      expect(html).not.toContain(label);
    }
    expect(html).not.toContain("min de lecture");
  });

  it("never links to a French category page", () => {
    const html = render(english, "en");
    expect(html).not.toContain('href="/blog/');
  });
});
