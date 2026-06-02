import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog";
import { BASE_URL } from "@/lib/metadata";
import { marked } from "marked";

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const FALLBACK_DATE = "2024-01-01T00:00:00.000Z";

function toIsoDate(value: string | undefined): string {
  if (!value) return FALLBACK_DATE;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? FALLBACK_DATE : date.toISOString();
}

async function toCdataSafeHtml(markdown: string): Promise<string> {
  const html = await marked.parse(markdown);
  return html.replaceAll("]]>", "]]]]><![CDATA[>");
}

export async function GET() {
  const posts = getAllPosts().slice(0, 50);
  const lastBuildDate = toIsoDate(posts[0]?.updatedAt ?? posts[0]?.date);

  const xmlEntries = await Promise.all(
    posts.map(async (post) => {
      const articleUrl = `${BASE_URL}/article/${post.slug}`;
      const categories = Array.from(new Set([post.category, ...(post.mainTech ?? [])].filter(Boolean)));
      const contentHtml = await toCdataSafeHtml(post.content);

      return `  <entry>
    <title>${escapeXml(post.title)}</title>
    <link href="${articleUrl}" />
    <id>${articleUrl}</id>
    <published>${toIsoDate(post.date)}</published>
    <updated>${toIsoDate(post.updatedAt ?? post.date)}</updated>
    <author>
      <name>${escapeXml(post.author || "Efficience IT")}</name>
    </author>
    <summary type="html">${escapeXml(post.excerpt || post.title)}</summary>
    <content type="html"><![CDATA[${contentHtml}]]></content>
    ${categories.map((tag) => `<category term="${escapeXml(tag)}" />`).join("\n    ")}
  </entry>`;
    })
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Efficience IT - Blog</title>
  <subtitle>Articles Symfony, PHP, architecture, DevOps et web performance</subtitle>
  <link href="${BASE_URL}/blog" />
  <link rel="self" href="${BASE_URL}/feed.xml" />
  <updated>${lastBuildDate}</updated>
  <id>${BASE_URL}/</id>
  <author>
    <name>Efficience IT</name>
    <email>contact@itefficience.com</email>
    <uri>${BASE_URL}</uri>
  </author>
${xmlEntries.join("\n")}
</feed>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
