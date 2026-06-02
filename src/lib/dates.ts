export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
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
