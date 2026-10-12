import type { BlogLanguage } from "@/types/blog";

export function formatDate(iso: string, language: BlogLanguage = "fr"): string {
  return new Date(iso).toLocaleDateString(language === "en" ? "en-US" : "fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function isRecentlyUpdated(iso: string | undefined, days: number): boolean {
  if (!iso) return false;
  const updated = new Date(iso).getTime();
  if (Number.isNaN(updated)) return false;
  const diffMs = Date.now() - updated;
  if (diffMs < 0) return false;
  return diffMs <= days * 24 * 60 * 60 * 1000;
}
