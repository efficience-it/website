import type { Metadata } from "next";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  absoluteTitle?: boolean;
  image?: string;
  publishedTime?: string;
  authors?: string[];
}

export const BASE_URL = "https://www.itefficience.com";
export const SITE_NAME = "Efficience IT";
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/logo/logo-og.png`;

export function pageMetadata({
  title,
  description,
  path = "",
  absoluteTitle = false,
  image,
  publishedTime,
  authors,
}: PageMetadataOptions): Metadata {
  const url = `${BASE_URL}${path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

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
      images: [{ url: ogImage }],
      ...(publishedTime && { publishedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: ogImage }],
    },
    alternates: {
      canonical: url,
    },
  };
}
