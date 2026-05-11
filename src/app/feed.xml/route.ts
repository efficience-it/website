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

function toIsoDate(value: string | undefined): string {
  if (!value) return new Date().toISOString();
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

function inlineMarkdownToHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replaceAll(/\*(.+?)\*/g, "<em>$1</em>")
    .replaceAll(/`(.+?)`/g, "<code>$1</code>")
    .replaceAll(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function markdownToHtml(markdown: string): string {
  const blocks = markdown
    .trim()
    .split(/\n\s*\n/)
    .filter(Boolean)
    .map((block) => block.trim());

  return blocks
    .map((block) => {
      if (block.startsWith("### ")) return `<h3>${inlineMarkdownToHtml(block.slice(4))}</h3>`;
      if (block.startsWith("## ")) return `<h2>${inlineMarkdownToHtml(block.slice(3))}</h2>`;
      if (block.startsWith("# ")) return `<h1>${inlineMarkdownToHtml(block.slice(2))}</h1>`;

      const lines = block.split("\n").map((line) => line.trim());
      if (lines.every((line) => /^[-*]\s+/.test(line))) {
        const items = lines
          .map((line) => line.replace(/^[-*]\s+/, ""))
          .map((item) => `<li>${inlineMarkdownToHtml(item)}</li>`)
          .join("");
        return `<ul>${items}</ul>`;
      }

      return `<p>${inlineMarkdownToHtml(block.replaceAll(/\n+/g, " "))}</p>`;
    })
    .join("");
}

function toCdataSafeHtml(markdown: string): string {
  const html = markdownToHtml(markdown);
  return html.replaceAll("]]>", "]]]]><![CDATA[>");
}

export function GET() {
  const posts = getAllPosts().slice(0, 50);
  const lastBuildDate = toIsoDate(posts[0]?.updatedAt ?? posts[0]?.date);

  const xmlEntries = posts
    .map((post) => {
      const articleUrl = `${BASE_URL}/article/${post.slug}`;
      const categories = Array.from(new Set([post.category, ...(post.mainTech ?? [])].filter(Boolean)));

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
    <content type="html"><![CDATA[${toCdataSafeHtml(post.content)}]]></content>
    ${categories.map((tag) => `<category term="${escapeXml(tag)}" />`).join("\n    ")}
  </entry>`;
    })
    .join("\n");

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
${xmlEntries}
</feed>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
