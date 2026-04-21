import {
  blogItemListJsonLd,
  breadcrumbJsonLd,
  howToJsonLd,
  localBusinessJsonLd,
  reviewsJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "@/lib/structured-data";
import { categorySlugMap } from "@/lib/blog";
import { BASE_URL } from "@/lib/metadata";

describe("howToJsonLd", () => {
  it("returns correct schema with steps", () => {
    const result = howToJsonLd("Install Node", "How to install Node.js", [
      { name: "Download", text: "Download the installer" },
      { name: "Run", text: "Run the installer" },
      { name: "Verify", text: "Run node --version" },
    ]);

    expect(result["@context"]).toBe("https://schema.org");
    expect(result["@type"]).toBe("HowTo");
    expect(result.name).toBe("Install Node");
    expect(result.description).toBe("How to install Node.js");
    expect(result.step).toHaveLength(3);
    expect(result.step[0]).toEqual({
      "@type": "HowToStep",
      position: 1,
      name: "Download",
      text: "Download the installer",
    });
    expect(result.step[2].position).toBe(3);
  });

  it("returns empty step array when no steps provided", () => {
    const result = howToJsonLd("Empty", "No steps", []);
    expect(result.step).toEqual([]);
  });
});

describe("localBusinessJsonLd", () => {
  it("is a valid LocalBusiness schema", () => {
    expect(localBusinessJsonLd["@context"]).toBe("https://schema.org");
    expect(localBusinessJsonLd["@type"]).toBe("LocalBusiness");
    expect(localBusinessJsonLd.name).toBe("Efficience IT");
    expect(localBusinessJsonLd.address).toBeDefined();
    expect(localBusinessJsonLd.geo).toBeDefined();
  });
});

describe("breadcrumbJsonLd", () => {
  it("builds a breadcrumb list including home", () => {
    const result = breadcrumbJsonLd([
      { name: "Blog", path: "/blog" },
      { name: "Article", path: "/article/test" },
    ]);

    expect(result["@context"]).toBe("https://schema.org");
    expect(result["@type"]).toBe("BreadcrumbList");
    expect(result.itemListElement).toHaveLength(3);
    expect(result.itemListElement[0]).toEqual({
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: BASE_URL,
    });
    expect(result.itemListElement[2].item).toBe(`${BASE_URL}/article/test`);
  });
});

describe("serviceJsonLd", () => {
  it("returns a valid Service schema", () => {
    const result = serviceJsonLd({
      name: "Audit Symfony",
      description: "Audit de code Symfony",
      path: "/audit-code-php",
    });

    expect(result["@context"]).toBe("https://schema.org");
    expect(result["@type"]).toBe("Service");
    expect(result.name).toBe("Audit Symfony");
    expect(result.url).toBe(`${BASE_URL}/audit-code-php`);
    expect(result.provider["@id"]).toBe(`${BASE_URL}/#localbusiness`);
    expect(result.areaServed).toHaveLength(6);
  });
});

describe("reviewsJsonLd", () => {
  it("maps testimonials to Review schemas", () => {
    const result = reviewsJsonLd([
      { name: "Alice", role: "CTO", company: "Acme", quote: "Excellent accompagnement." },
      { name: "Bob", role: "Lead Dev", company: "Beta", quote: "Equipe reactive." },
    ]);

    expect(result).toHaveLength(2);
    expect(result[0]["@type"]).toBe("Review");
    expect(result[0].author.name).toBe("Alice");
    expect(result[1].reviewBody).toBe("Equipe reactive.");
  });
});

describe("blogItemListJsonLd", () => {
  it("returns an ItemList for blog posts", () => {
    const result = blogItemListJsonLd([
      {
        slug: "post-a",
        title: "Post A",
        date: "2026-01-01",
        author: "Auteur",
        category: "Symfony",
        excerpt: "Excerpt",
        content: "Content",
        wordCount: 100,
      },
      {
        slug: "post-b",
        title: "Post B",
        date: "2026-01-02",
        author: "Auteur",
        category: "Projet",
        excerpt: "Excerpt",
        content: "Content",
        wordCount: 120,
      },
    ]);

    expect(result["@type"]).toBe("ItemList");
    expect(result.itemListElement).toHaveLength(2);
    expect(result.itemListElement[0].position).toBe(1);
    expect(result.itemListElement[1].url).toBe(`${BASE_URL}/article/post-b`);
  });
});

describe("webPageJsonLd", () => {
  it("returns base WebPage schema without optional dates", () => {
    const result = webPageJsonLd({
      name: "Nom",
      description: "Description",
      path: "/contact",
    });

    expect(result["@type"]).toBe("WebPage");
    expect(result.url).toBe(`${BASE_URL}/contact`);
    expect(result).not.toHaveProperty("datePublished");
    expect(result).not.toHaveProperty("dateModified");
  });

  it("includes optional type and dates when provided", () => {
    const result = webPageJsonLd({
      name: "Blog",
      description: "Page blog",
      path: "/blog",
      type: "CollectionPage",
      datePublished: "2026-01-01",
      dateModified: "2026-02-01",
    });

    expect(result["@type"]).toBe("CollectionPage");
    expect(result.datePublished).toBe("2026-01-01");
    expect(result.dateModified).toBe("2026-02-01");
  });
});

describe("categorySlugMap", () => {
  it("maps category names to slugs", () => {
    expect(categorySlugMap["Symfony"]).toBe("symfony");
    expect(categorySlugMap["Green IT"]).toBe("green-it");
    expect(Object.keys(categorySlugMap).length).toBeGreaterThan(0);
  });
});
