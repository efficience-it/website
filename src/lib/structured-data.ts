import { BASE_URL } from "@/lib/metadata";

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: BASE_URL,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${BASE_URL}${item.path}`,
      })),
    ],
  };
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  path: string;
}

export function serviceJsonLd({ name, description, path }: ServiceSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE_URL}${path}`,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#organization`,
      name: "Efficience IT",
    },
    areaServed: [
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "Belgique" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Luxembourg" },
      { "@type": "Country", name: "Spain" },
      { "@type": "Country", name: "Germany" },
    ],
  };
}

import { Testimonial } from "@/types/testimonial";

export function reviewsJsonLd(testimonials: Testimonial[]) {
  return testimonials.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.name,
    },
    reviewBody: t.quote,
    itemReviewed: {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#organization`,
      name: "Efficience IT",
    },
  }));
}

import { BlogPost } from "@/types/blog";

export function blogItemListJsonLd(posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BASE_URL}/article/${post.slug}`,
      name: post.title,
    })),
  };
}

type WebPageType = "WebPage" | "CollectionPage" | "ContactPage" | "AboutPage";

interface WebPageProps {
  name: string;
  description: string;
  path: string;
  type?: WebPageType;
  datePublished?: string;
  dateModified?: string;
}

export function webPageJsonLd({
  name,
  description,
  path,
  type = "WebPage",
  datePublished,
  dateModified,
}: WebPageProps) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: `${BASE_URL}${path}`,
    inLanguage: "fr-FR",
    isPartOf: {
      "@type": "WebSite",
      name: "Efficience IT",
      url: BASE_URL,
    },
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
  };
}

interface HowToStep {
  name: string;
  text: string;
}

export function howToJsonLd(name: string, description: string, steps: HowToStep[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}
