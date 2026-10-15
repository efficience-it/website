import type { BlogLanguage } from "@/types/blog";

const TRANSLATED_PAGES: Readonly<Record<string, string>> = {};

export interface PageTranslation {
  readonly language: BlogLanguage;
  readonly href: string;
}

function normalize(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

export function getPageTranslation(
  pathname: string,
  pages: Readonly<Record<string, string>> = TRANSLATED_PAGES,
): PageTranslation | undefined {
  const path = normalize(pathname);
  const english = pages[path];
  if (english) return { language: "en", href: english };
  const french = Object.keys(pages).find((fr) => pages[fr] === path);
  return french ? { language: "fr", href: french } : undefined;
}
