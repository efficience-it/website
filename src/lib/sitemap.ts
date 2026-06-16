import { BASE_URL } from "@/lib/metadata";

export function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${BASE_URL}${path}`;
}
