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

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#localbusiness`,
  name: "Efficience IT",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo/logo-bleu.webp`,
  image: `${BASE_URL}/images/logo/logo-bleu.webp`,
  description:
    "Agence Symfony et PHP, Efficience IT conçoit des applications web sur mesure, robustes et adaptées aux enjeux métiers.",
  email: "contact@itefficience.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "677 Avenue de la République",
    addressLocality: "Lille",
    postalCode: "59800",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.6292,
    longitude: 3.0573,
  },
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "Country", name: "Belgique" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Luxembourg" },
    { "@type": "Country", name: "Spain" },
    { "@type": "Country", name: "Germany" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "32",
    reviewCount: "32",
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://github.com/efficience-it",
    "https://www.linkedin.com/company/efficience-it",
  ],
};

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
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#localbusiness`,
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
      "@type": "Organization",
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

const TUTORIAL_KEYWORD_REGEX = /(deploy|deploi|install|installation|migrat|migration)/i;

export function isTutorialArticle(slug: string, title: string) {
  return TUTORIAL_KEYWORD_REGEX.test(slug) || TUTORIAL_KEYWORD_REGEX.test(title);
}

function isMarkdownParagraphLine(line: string) {
  return (
    line.length > 0 &&
    !line.startsWith("#") &&
    !line.startsWith(">") &&
    !line.startsWith("- ") &&
    !line.startsWith("* ") &&
    !line.startsWith("|") &&
    !/^\d+\.\s/.test(line)
  );
}

export function getSpeakableSelectors(markdownContent: string, maxSelectors = 2) {
  const lines = markdownContent.split("\n");
  const selectors: string[] = [];
  let paragraphIndex = 0;
  let inCodeBlock = false;
  let inParagraph = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (line.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      inParagraph = false;
      continue;
    }

    if (inCodeBlock) {
      continue;
    }

    if (!isMarkdownParagraphLine(line)) {
      inParagraph = false;
      continue;
    }

    if (!inParagraph) {
      paragraphIndex += 1;
      if (selectors.length < maxSelectors) {
        selectors.push(`article .prose p:nth-of-type(${paragraphIndex})`);
      }
      inParagraph = true;
    }

    if (selectors.length >= maxSelectors) {
      break;
    }
  }

  return selectors.length > 0 ? selectors : ["h1"];
}

const HOWTO_EXCLUDED_HEADING_REGEX =
  /^(introduction|intro|conclusion|faq|questions frequentes|pour aller plus loin|ressources|resume|sommaire)$/i;
const HOWTO_ACTION_VERB_REGEX =
  /^(installez|configurez|deployez|migrez|lancez|cree(?:z)?|ajoutez|executez|ouvrez|verifiez|mettez|preparez|activez|generez|faites)\b/i;

function sanitizeHowToText(text: string) {
  return text
    .replaceAll(/[`*_>#]/g, "")
    .replaceAll(/\s+/g, " ")
    .trim()
    .replace(/[;,:-]+$/, ".");
}

function sanitizeHowToHeading(heading: string) {
  return heading
    .replaceAll(/[`*_#]/g, "")
    .replaceAll(/\s+/g, " ")
    .trim()
    .replace(/[.:;!?-]+$/, "");
}

function shouldExcludeHowToHeading(heading: string) {
  const normalized = heading
    .toLowerCase()
    .normalize("NFD")
    .replaceAll(/[\u0300-\u036f]/g, "");
  return HOWTO_EXCLUDED_HEADING_REGEX.test(normalized);
}

function splitSentences(text: string) {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((part) => sanitizeHowToText(part))
    .filter((part) => part.length > 0);
}

function getHowToStepText(section: string) {
  const lines = section
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => isMarkdownParagraphLine(line) && !line.startsWith("```"));

  for (const line of lines) {
    const sentences = splitSentences(line);
    const actionableSentence = sentences.find((sentence) =>
      HOWTO_ACTION_VERB_REGEX.test(sentence),
    );
    if (actionableSentence && actionableSentence.length >= 30) {
      return actionableSentence.slice(0, 220);
    }
  }

  const fallback = sanitizeHowToText(lines[0] ?? "");
  if (fallback.length < 30) return null;
  return fallback.slice(0, 220);
}

export function extractHowToStepsFromMarkdown(markdownContent: string): HowToStep[] {
  const headingMatches = [...markdownContent.matchAll(/^##\s+(.+)$/gm)];
  const steps: HowToStep[] = [];

  for (let index = 0; index < headingMatches.length; index += 1) {
    const currentMatch = headingMatches[index];
    const nextMatch = headingMatches[index + 1];
    const heading = sanitizeHowToHeading(currentMatch[1]);
    if (!heading || shouldExcludeHowToHeading(heading)) {
      continue;
    }
    const start = currentMatch.index ?? 0;
    const fromAfterHeading = start + currentMatch[0].length;
    const to = nextMatch?.index ?? markdownContent.length;
    const section = markdownContent.slice(fromAfterHeading, to);
    const text = getHowToStepText(section);

    if (text) {
      steps.push({ name: heading, text });
    }
  }

  return steps.slice(0, 6);
}
