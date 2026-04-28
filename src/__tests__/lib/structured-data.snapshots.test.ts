import {
  articleJsonLd,
  blogItemListJsonLd,
  breadcrumbJsonLd,
  eventJsonLd,
  faqPageJsonLd,
  globalGraphJsonLd,
  howToJsonLd,
  organizationJsonLd,
  pageGraphJsonLd,
  reviewsJsonLd,
  serviceJsonLd,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/structured-data";
import type { BlogPost } from "@/types/blog";

describe("structured-data snapshots", () => {
  it("organizationJsonLd", () => {
    expect(organizationJsonLd).toMatchSnapshot();
  });

  it("websiteJsonLd", () => {
    expect(websiteJsonLd).toMatchSnapshot();
  });

  it("globalGraphJsonLd", () => {
    expect(globalGraphJsonLd).toMatchSnapshot();
  });

  it("pageGraphJsonLd strips @context and wraps in @graph", () => {
    const webPage = webPageJsonLd({
      name: "Test",
      description: "Test page",
      path: "/test",
    });
    const breadcrumb = breadcrumbJsonLd([{ name: "Test", path: "/test" }]);
    expect(pageGraphJsonLd(webPage, breadcrumb)).toMatchSnapshot();
  });

  it("pageGraphJsonLd with no items returns empty graph", () => {
    expect(pageGraphJsonLd()).toEqual({
      "@context": "https://schema.org",
      "@graph": [],
    });
  });

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

  it("articleJsonLd as BlogPosting", () => {
    expect(
      articleJsonLd({
        url: "https://www.itefficience.com/article/test",
        isTech: false,
        title: "Article test",
        excerpt: "Un excerpt de test.",
        author: {
          "@type": "Person",
          name: "Louis-Arnaud Catoire",
          jobTitle: "CTO",
          url: "https://www.itefficience.com/la-team",
          sameAs: ["https://linkedin.com/in/lac"],
        },
        imagePath: "/images/blog/test.webp",
        category: "Symfony",
        date: "2024-01-15",
        updatedAt: "2024-02-20",
        wordCount: 1200,
        timeRequiredMinutes: 6,
      }),
    ).toMatchSnapshot();
  });

  it("articleJsonLd as TechArticle with proficiency", () => {
    expect(
      articleJsonLd({
        url: "https://www.itefficience.com/article/tech",
        isTech: true,
        title: "Tech article",
        excerpt: "Tech excerpt.",
        author: {
          "@type": "ProfessionalService",
          "@id": "https://www.itefficience.com/#organization",
          name: "Efficience IT",
          url: "https://www.itefficience.com",
        },
        category: "Outils",
        date: "2024-03-10",
        wordCount: 800,
        timeRequiredMinutes: 4,
        proficiencyLevel: "Expert",
      }),
    ).toMatchSnapshot();
  });

  it("articleJsonLd as TechArticle defaults proficiencyLevel to Intermediate", () => {
    const result = articleJsonLd({
      url: "https://www.itefficience.com/article/tech-default",
      isTech: true,
      title: "Tech default",
      excerpt: "Excerpt.",
      author: {
        "@type": "Person",
        name: "Auteur",
        jobTitle: "Dev",
        url: "https://www.itefficience.com/la-team",
        sameAs: [],
      },
      category: "Outils",
      date: "2024-04-01",
      wordCount: 600,
      timeRequiredMinutes: 3,
    });
    expect((result as { proficiencyLevel: string }).proficiencyLevel).toBe(
      "Intermediate",
    );
  });

  it("articleJsonLd without image falls back to undefined", () => {
    const result = articleJsonLd({
      url: "https://www.itefficience.com/article/no-image",
      isTech: false,
      title: "Sans image",
      excerpt: "Pas d'image.",
      author: {
        "@type": "Person",
        name: "Auteur",
        jobTitle: "Dev",
        url: "https://www.itefficience.com/la-team",
        sameAs: [],
      },
      category: "Projet",
      date: "2024-01-01",
      wordCount: 500,
      timeRequiredMinutes: 3,
    });
    expect(result.image).toBeUndefined();
    expect(result.dateModified).toBe("2024-01-01");
  });

  it("faqPageJsonLd", () => {
    expect(
      faqPageJsonLd([
        { question: "Q1 ?", answer: "A1." },
        { question: "Q2 ?", answer: "A2." },
      ]),
    ).toMatchSnapshot();
  });
});
