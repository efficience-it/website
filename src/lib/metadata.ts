import type { Metadata } from "next";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  absoluteTitle?: boolean;
}

export const BASE_URL = "https://www.itefficience.com";
export const SITE_NAME = "Efficience IT";

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
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
    },
    alternates: {
      canonical: url,
    },
  };
}
