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
  ],
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
    ],
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
