import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog";
import { BASE_URL } from "@/lib/metadata";

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const posts = getAllPosts();
  const xmlItems = posts
    .map(
      (post) => `  <url>
    <loc>${BASE_URL}/article/${post.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>Efficience IT</news:name>
        <news:language>fr</news:language>
      </news:publication>
      <news:publication_date>${post.date}</news:publication_date>
      <news:title>${escapeXml(post.title)}</news:title>
    </news:news>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${xmlItems}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
