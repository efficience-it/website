import type { Metadata } from "next";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  absoluteTitle?: boolean;
}

const BASE_URL = "https://www.itefficience.com";

export function pageMetadata({
  title,
  description,
  path = "",
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Efficience IT",
      locale: "fr_FR",
      type: "website",
    },
    alternates: {
      canonical: url,
    },
  };
}
