import {
  blogItemListJsonLd,
  breadcrumbJsonLd,
  eventJsonLd,
  howToJsonLd,
  reviewsJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "@/lib/structured-data";
import type { BlogPost } from "@/types/blog";

describe("structured-data snapshots", () => {
  it("breadcrumbJsonLd", () => {
    expect(
      breadcrumbJsonLd([
        { name: "Blog", path: "/blog" },
        { name: "Article test", path: "/article/test" },
      ]),
    ).toMatchSnapshot();
  });

  it("breadcrumbJsonLd with a single item", () => {
    expect(breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])).toMatchSnapshot();
  });

  it("serviceJsonLd", () => {
    expect(
      serviceJsonLd({
        name: "Audit Symfony",
        description: "Audit technique gratuit de votre code Symfony.",
        path: "/audit-symfony-gratuit",
      }),
    ).toMatchSnapshot();
  });

  it("reviewsJsonLd", () => {
    expect(
      reviewsJsonLd([
        { name: "Alice", role: "CTO", company: "Acme", quote: "Excellent." },
        { name: "Bob", role: "Lead Dev", company: "Beta", quote: "Très réactif." },
      ]),
    ).toMatchSnapshot();
  });

  it("blogItemListJsonLd", () => {
    const posts: BlogPost[] = [
      {
        slug: "first-post",
        title: "Premier article",
        date: "2026-01-01",
        author: "Auteur",
        category: "Symfony",
        excerpt: "Excerpt 1",
        content: "",
        wordCount: 0,
      },
      {
        slug: "second-post",
        title: "Deuxième article",
        date: "2026-01-02",
        author: "Auteur",
        category: "DevOps",
        excerpt: "Excerpt 2",
        content: "",
        wordCount: 0,
      },
    ];
    expect(blogItemListJsonLd(posts)).toMatchSnapshot();
  });

  it("webPageJsonLd minimal", () => {
    expect(
      webPageJsonLd({
        name: "Contact",
        description: "Contactez-nous.",
        path: "/contact",
      }),
    ).toMatchSnapshot();
  });

  it("webPageJsonLd with type and dates", () => {
    expect(
      webPageJsonLd({
        name: "Blog",
        description: "Tous les articles.",
        path: "/blog",
        type: "CollectionPage",
        datePublished: "2024-01-01",
        dateModified: "2026-04-28",
      }),
    ).toMatchSnapshot();
  });

  it("howToJsonLd", () => {
    expect(
      howToJsonLd("Déployer", "Description", [
        { name: "Étape 1", text: "Faire ceci" },
        { name: "Étape 2", text: "Faire cela" },
      ]),
    ).toMatchSnapshot();
  });

  it("howToJsonLd with no steps", () => {
    expect(howToJsonLd("Vide", "Sans étape", [])).toMatchSnapshot();
  });

  it("eventJsonLd", () => {
    expect(
      eventJsonLd({
        name: "AFUP Day 2024 Lille",
        startDate: "2024-05-24",
        endDate: "2024-05-24",
        location: {
          name: "Théâtre de la Comédie de Lille",
          address: "204 rue Solférino, 59000 Lille, France",
        },
        organizer: {
          name: "AFUP",
          url: "https://afup.org",
        },
        url: "https://event.afup.org/afup-day-2024/",
      }),
    ).toMatchSnapshot();
  });
});
