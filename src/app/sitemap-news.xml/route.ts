import { getAllPosts } from "@/lib/blog";
import { BASE_URL, SITE_NAME } from "@/lib/metadata";

export const dynamic = "force-static";

const NEWS_WINDOW_HOURS = 48;

function toIsoDate(value: string): string | null {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const now = Date.now();
  const maxAgeMs = NEWS_WINDOW_HOURS * 60 * 60 * 1000;

  const newsPosts = getAllPosts()
    .filter((post) => post.kind === "news")
    .map((post) => {
      const publicationDate = toIsoDate(post.date);
      if (!publicationDate) return null;
      const ageMs = now - new Date(publicationDate).getTime();
      if (ageMs < 0 || ageMs > maxAgeMs) return null;
      return {
        url: `${BASE_URL}/article/${post.slug}`,
        publicationDate,
        title: post.title,
      };
    })
    .filter((item): item is { url: string; publicationDate: string; title: string } => item !== null);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${newsPosts
  .map(
    (post) => `  <url>
    <loc>${post.url}</loc>
    <news:news>
      <news:publication>
        <news:name>${SITE_NAME}</news:name>
        <news:language>fr</news:language>
      </news:publication>
      <news:publication_date>${post.publicationDate}</news:publication_date>
      <news:title>${escapeXml(post.title)}</news:title>
    </news:news>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
