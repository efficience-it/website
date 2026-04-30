import { BASE_URL, SITE_NAME } from "@/lib/metadata";
import type { AuthorSchema } from "@/data/authors";
import type { FaqItem, ProficiencyLevel } from "@/types/blog";
import type { Job } from "@/../data/jobs";

interface BreadcrumbItem {
  name: string;
  path: string;
}

const organizationEntity = {
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#organization`,
  name: "Efficience IT",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo/logo-bleu.webp`,
  image: `${BASE_URL}/images/logo/logo-bleu.webp`,
  description:
    "Agence spécialisée Symfony et PHP, Efficience IT conçoit et développe des applications web sur mesure.",
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
  email: "contact@itefficience.com",
  foundingDate: "2018",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 15,
  },
  priceRange: "$$",
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@itefficience.com",
    contactType: "customer service",
    availableLanguage: ["French", "English"],
  },
  knowsAbout: [
    "Symfony",
    "PHP",
    "Architecture hexagonale",
    "Domain-Driven Design",
    "API Platform",
    "DevOps",
    "Docker",
    "Node.js",
  ],
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "Country", name: "Belgique" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Luxembourg" },
    { "@type": "Country", name: "Spain" },
    { "@type": "Country", name: "Germany" },
  ],
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

const websiteEntity = {
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Efficience IT",
  url: BASE_URL,
  publisher: { "@id": `${BASE_URL}/#organization` },
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  ...organizationEntity,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  ...websiteEntity,
};

export const globalGraphJsonLd = {
  "@context": "https://schema.org",
  "@graph": [organizationEntity, websiteEntity],
};

type GraphItem = Record<string, unknown>;

export function pageGraphJsonLd(
  ...items: Array<GraphItem | GraphItem[]>
): { "@context": string; "@graph": GraphItem[] } {
  const flat = items.flat();
  const stripped = flat.map((item) => {
    const copy = { ...item };
    delete copy["@context"];
    return copy;
  });
  return {
    "@context": "https://schema.org",
    "@graph": stripped,
  };
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

export const TECH_ENTITIES: Record<string, { name: string; sameAs: string[] }> = {
  symfony: {
    name: "Symfony",
    sameAs: [
      "https://www.wikidata.org/wiki/Q2063468",
      "https://symfony.com",
      "https://en.wikipedia.org/wiki/Symfony",
    ],
  },
  php: {
    name: "PHP",
    sameAs: [
      "https://www.wikidata.org/wiki/Q59",
      "https://www.php.net",
      "https://en.wikipedia.org/wiki/PHP",
    ],
  },
  laravel: {
    name: "Laravel",
    sameAs: ["https://www.wikidata.org/wiki/Q6485503", "https://laravel.com"],
  },
  react: {
    name: "React",
    sameAs: ["https://www.wikidata.org/wiki/Q19399674", "https://react.dev"],
  },
  nodejs: {
    name: "Node.js",
    sameAs: ["https://www.wikidata.org/wiki/Q756100", "https://nodejs.org"],
  },
  typescript: {
    name: "TypeScript",
    sameAs: ["https://www.wikidata.org/wiki/Q978185", "https://www.typescriptlang.org"],
  },
  docker: {
    name: "Docker",
    sameAs: ["https://www.wikidata.org/wiki/Q15206305", "https://www.docker.com"],
  },
  postgresql: {
    name: "PostgreSQL",
    sameAs: ["https://www.wikidata.org/wiki/Q192490", "https://www.postgresql.org"],
  },
  redis: {
    name: "Redis",
    sameAs: ["https://www.wikidata.org/wiki/Q2136322", "https://redis.io"],
  },
  elasticsearch: {
    name: "Elasticsearch",
    sameAs: ["https://www.wikidata.org/wiki/Q3050461", "https://www.elastic.co/elasticsearch/"],
  },
  rabbitmq: {
    name: "RabbitMQ",
    sameAs: ["https://www.wikidata.org/wiki/Q1727422", "https://www.rabbitmq.com"],
  },
  doctrine: {
    name: "Doctrine ORM",
    sameAs: ["https://www.wikidata.org/wiki/Q3036524"],
  },
  vuejs: {
    name: "Vue.js",
    sameAs: ["https://www.wikidata.org/wiki/Q17205803", "https://vuejs.org"],
  },
  nextjs: {
    name: "Next.js",
    sameAs: ["https://www.wikidata.org/wiki/Q102083000", "https://nextjs.org"],
  },
  sylius: {
    name: "Sylius",
    sameAs: ["https://sylius.com"],
  },
};

function aboutTechEntities(keys: string[] | undefined) {
  if (!keys || keys.length === 0) return undefined;
  const entities = keys
    .map((key) => TECH_ENTITIES[key])
    .filter((entity): entity is (typeof TECH_ENTITIES)[string] => Boolean(entity))
    .map((entity) => ({
      "@type": "Thing" as const,
      name: entity.name,
      sameAs: entity.sameAs,
    }));
  return entities.length > 0 ? entities : undefined;
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  path: string;
  mainTech?: string[];
}

export function serviceJsonLd({ name, description, path, mainTech }: ServiceSchemaProps) {
  const about = aboutTechEntities(mainTech);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE_URL}${path}`,
    provider: { "@id": `${BASE_URL}/#organization` },
    areaServed: [
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "Belgique" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Luxembourg" },
      { "@type": "Country", name: "Spain" },
      { "@type": "Country", name: "Germany" },
    ],
    ...(about && { about }),
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
    itemReviewed: { "@id": `${BASE_URL}/#organization` },
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
    "@id": `${BASE_URL}${path}#webpage`,
    name,
    description,
    url: `${BASE_URL}${path}`,
    inLanguage: "fr-FR",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
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

import { EventSchema } from "@/types/blog";

interface ArticleJsonLdInput {
  url: string;
  isTech: boolean;
  title: string;
  excerpt: string;
  author: AuthorSchema;
  imagePath?: string;
  category: string;
  date: string;
  updatedAt?: string;
  wordCount: number;
  timeRequiredMinutes: number;
  proficiencyLevel?: ProficiencyLevel;
  mainTech?: string[];
}

export function articleJsonLd(input: ArticleJsonLdInput) {
  const about = aboutTechEntities(input.mainTech);
  return {
    "@context": "https://schema.org",
    "@type": input.isTech ? "TechArticle" : "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": input.url,
    },
    headline: input.title,
    description: input.excerpt,
    author: input.author,
    image: input.imagePath ? `${BASE_URL}${input.imagePath}` : undefined,
    genre: input.category,
    publisher: {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#organization`,
      name: SITE_NAME,
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logo/logo-og.webp`,
      },
    },
    datePublished: input.date,
    dateModified: input.updatedAt ?? input.date,
    url: input.url,
    wordCount: input.wordCount,
    timeRequired: `PT${input.timeRequiredMinutes}M`,
    inLanguage: "fr-FR",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "article > p:first-of-type"],
    },
    ...(input.isTech && {
      proficiencyLevel: input.proficiencyLevel ?? "Intermediate",
    }),
    ...(about && { about }),
  };
}

export function faqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function eventJsonLd(event: EventSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "BusinessEvent",
    name: event.name,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.location.name,
      address: event.location.address,
    },
    organizer: {
      "@type": "Organization",
      name: event.organizer.name,
      url: event.organizer.url,
    },
    url: event.url,
  };
}

export function jobPostingJsonLd(job: Job) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    ...(job.validThrough && { validThrough: job.validThrough }),
    employmentType: job.employmentType,
    hiringOrganization: { "@id": `${BASE_URL}/#organization` },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        ...job.jobLocation,
      },
    },
    ...(job.jobLocationType && { jobLocationType: job.jobLocationType }),
    ...(job.experienceRequirements && {
      experienceRequirements: {
        "@type": "OccupationalExperienceRequirements",
        monthsOfExperience: job.experienceRequirements.monthsOfExperience,
      },
    }),
    ...(job.educationRequirements && { educationRequirements: job.educationRequirements }),
    ...(job.skills && job.skills.length > 0 && { skills: job.skills.join(", ") }),
    url: `${BASE_URL}/ta-carriere#${job.slug}`,
    ...(job.directApply !== undefined && { directApply: job.directApply }),
  };
}
