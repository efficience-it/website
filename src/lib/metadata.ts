import type { Metadata } from "next";
import type { BlogLanguage } from "@/types/blog";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  absoluteTitle?: boolean;
  image?: string;
  publishedTime?: string;
  authors?: string[];
  language?: BlogLanguage;
  translationPaths?: Record<BlogLanguage, string>;
}

const LOCALES: Record<BlogLanguage, string> = { fr: "fr_FR", en: "en_US" };

export const BASE_URL = "https://www.itefficience.com";
export const SITE_NAME = "Efficience IT";
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/logo/logo-og.webp`;

export function pageMetadata({
  title,
  description,
  path = "",
  absoluteTitle = false,
  image,
  publishedTime,
  authors,
  language = "fr",
  translationPaths,
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
      locale: LOCALES[language],
      ...(translationPaths && {
        alternateLocale: [LOCALES[language === "fr" ? "en" : "fr"]],
      }),
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
      ...(translationPaths && {
        languages: {
          fr: `${BASE_URL}${translationPaths.fr}`,
          en: `${BASE_URL}${translationPaths.en}`,
          "x-default": `${BASE_URL}${translationPaths.fr}`,
        },
      }),
    },
  };
}
