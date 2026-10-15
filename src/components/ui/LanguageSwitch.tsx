"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/tracking";
import type { BlogLanguage } from "@/types/blog";

interface LanguageSwitchProps {
  readonly target?: { language: BlogLanguage; href: string };
  readonly subject?: "article" | "page";
}

const LABELS: Record<"article" | "page", Record<BlogLanguage, { text: string; ariaLabel: string }>> = {
  article: {
    fr: { text: "FR", ariaLabel: "Lire cet article en français" },
    en: { text: "EN", ariaLabel: "Read this article in English" },
  },
  page: {
    fr: { text: "FR", ariaLabel: "Voir cette page en français" },
    en: { text: "EN", ariaLabel: "View this page in English" },
  },
};

export default function LanguageSwitch({ target, subject = "article" }: LanguageSwitchProps) {
  if (!target) return null;
  const label = LABELS[subject][target.language];

  return (
    <Link
      href={target.href}
      hrefLang={target.language}
      lang={target.language}
      onClick={() =>
        trackEvent("language_switch", {
          from_language: target.language === "en" ? "fr" : "en",
          to_language: target.language,
        })
      }
      aria-label={label.ariaLabel}
      className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full border-2 border-primary px-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:hover:text-dark"
    >
      {label.text}
    </Link>
  );
}
