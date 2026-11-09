import fs from "fs";
import path from "path";
import { articlePath, getAllPosts } from "@/lib/blog";
import { BASE_URL } from "@/lib/metadata";
import { ENGLISH_INDEXABLE } from "@/lib/i18n/config";
import { STATIC_SILOS } from "@/lib/routes";
import { absoluteUrl } from "@/lib/sitemap";
import {
  CLIENTS_SUPPORTED,
  FOUNDING_YEAR,
  OPEN_SOURCE_CONTRIBUTIONS,
  PROJECTS_DELIVERED,
  TEAM_EXPERIENCE_YEARS,
} from "@/lib/company";
import type { BlogPost } from "@/types/blog";

const PRESENTATION_FILE = "content/llms/presentation.md";
const SHORT_SECTIONS = ["Services", "Expertises techniques", "Engagements", "Références", "Contact"];

interface Presentation {
  summary: string;
  sections: Map<string, string>;
}

function readPresentation(): Presentation {
  const raw = fs.readFileSync(path.join(process.cwd(), PRESENTATION_FILE), "utf-8");
  const [summary, ...blocks] = raw.trim().split(/^## /m);
  const sections = new Map<string, string>();
  for (const block of blocks) {
    const [title, ...body] = block.split("\n");
    sections.set(title.trim(), body.join("\n").trim());
  }
  return { summary: summary.trim(), sections };
}

function keyFigures(): string {
  return [
    `- Fondée en ${FOUNDING_YEAR}, ${TEAM_EXPERIENCE_YEARS}+ ans d'expérience de l'équipe`,
    `- ${PROJECTS_DELIVERED}+ projets livrés`,
    `- ${CLIENTS_SUPPORTED}+ clients actifs`,
    `- ${OPEN_SOURCE_CONTRIBUTIONS}+ contributions open source`,
  ].join("\n");
}

function pagesSection(): string {
  const silos = STATIC_SILOS.map((silo) => {
    const links = silo.routes.map((route) => `- [${route.label}](${absoluteUrl(route.path)})`);
    return `### ${silo.title}\n\n${links.join("\n")}`;
  });
  return `## Pages du site\n\n${silos.join("\n\n")}`;
}

function oneLine(value: string): string {
  return value.replaceAll(/\s+/g, " ").trim();
}

function articleEntry(post: BlogPost): string {
  const updated = post.updatedAt && post.updatedAt !== post.date ? `, mis à jour le ${post.updatedAt}` : "";
  const link = `[${oneLine(post.title)}](${absoluteUrl(articlePath(post))})`;
  return `- ${link} - ${post.date}${updated}\n  ${oneLine(post.excerpt)}`;
}

function articlesByCategory(posts: BlogPost[]): string {
  const groups = new Map<string, BlogPost[]>();
  for (const post of posts) {
    groups.set(post.category, [...(groups.get(post.category) ?? []), post]);
  }
  return [...groups.entries()]
    .map(([category, items]) => `### ${category}\n\n${items.map(articleEntry).join("\n\n")}`)
    .join("\n\n");
}

function englishSection(): string | undefined {
  if (!ENGLISH_INDEXABLE) return undefined;
  const posts = getAllPosts("en");
  if (posts.length === 0) return undefined;
  return `## English articles\n\n${articlesByCategory(posts)}`;
}

function assemble(blocks: (string | undefined)[]): string {
  return `${blocks.filter(Boolean).join("\n\n")}\n`;
}

export function buildLlmsTxt(): string {
  const { summary, sections } = readPresentation();
  const selected = SHORT_SECTIONS.filter((title) => sections.has(title)).map(
    (title) => `## ${title}\n\n${sections.get(title)}`,
  );
  return assemble([
    "# Efficience IT",
    summary,
    `## Chiffres clés\n\n${keyFigures()}`,
    ...selected,
    pagesSection(),
    `## Pour plus d'informations\n\nPour la liste complète des articles de blog, consultez [llms-full.txt](${BASE_URL}/llms-full.txt).`,
  ]);
}

export function buildLlmsFullTxt(): string {
  const { summary, sections } = readPresentation();
  const all = [...sections.entries()].map(([title, body]) => `## ${title}\n\n${body}`);
  return assemble([
    "# Efficience IT - Informations complètes",
    summary,
    `## Chiffres clés\n\n${keyFigures()}`,
    ...all,
    pagesSection(),
    `## Articles de blog\n\n${articlesByCategory(getAllPosts())}`,
    englishSection(),
  ]);
}
