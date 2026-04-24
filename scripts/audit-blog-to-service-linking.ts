import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const MIN_WORDS = 1000;

interface ThematicRule {
  label: string;
  slugKeywords: string[];
  serviceUrl: string;
  anchorHint: string;
}

const THEMATIC_MAP: ThematicRule[] = [
  {
    label: "Symfony Messenger / async",
    slugKeywords: ["messenger", "async"],
    serviceUrl: "/api-sur-mesure-symfony",
    anchorHint: "architecture asynchrone Symfony",
  },
  {
    label: "Doctrine / ORM / requêtes",
    slugKeywords: ["doctrine", "orm"],
    serviceUrl: "/base-de-donnees-postgresql-symfony",
    anchorHint: "optimisation Doctrine / PostgreSQL",
  },
  {
    label: "Architecture hexagonale / DDD",
    slugKeywords: ["hexagonal", "ddd", "architecture"],
    serviceUrl: "/developpement-web-sur-mesure",
    anchorHint: "conception d'applications métier",
  },
  {
    label: "Migration Symfony",
    slugKeywords: ["migration"],
    serviceUrl: "/migration-symfony",
    anchorHint: "migration Symfony clé en main",
  },
  {
    label: "PHPStan / Rector / tests",
    slugKeywords: ["phpstan", "rector", "test", "qualite"],
    serviceUrl: "/tests-automatises-php",
    anchorHint: "qualité de code PHP",
  },
  {
    label: "Docker / CI / DevOps",
    slugKeywords: ["docker", "devops", "deployer", "deploiement", "ci"],
    serviceUrl: "/cloud-et-devops",
    anchorHint: "infogérance cloud Symfony",
  },
  {
    label: "API Platform / REST",
    slugKeywords: ["api-platform", "rest", "api"],
    serviceUrl: "/api-sur-mesure-symfony",
    anchorHint: "API sur mesure Symfony",
  },
  {
    label: "Sylius / e-commerce",
    slugKeywords: ["sylius", "ecommerce", "e-commerce"],
    serviceUrl: "/ecommerce-sylius",
    anchorHint: "agence e-commerce Sylius",
  },
  {
    label: "FrankenPHP / performance",
    slugKeywords: ["frankenphp", "performance"],
    serviceUrl: "/hebergement-symfony",
    anchorHint: "hébergement Symfony performant",
  },
  {
    label: "Intégration Redis",
    slugKeywords: ["redis"],
    serviceUrl: "/integration-redis-symfony",
    anchorHint: "intégration Redis Symfony",
  },
  {
    label: "Intégration Elasticsearch",
    slugKeywords: ["elasticsearch", "elastic"],
    serviceUrl: "/integration-elasticsearch-symfony",
    anchorHint: "intégration Elasticsearch Symfony",
  },
];

function countWords(markdown: string): number {
  const text = markdown
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "")
    .replace(/!?\[.*?\]\(.*?\)/g, "")
    .replace(/#{1,3}\s+/g, "")
    .replace(/[*_~`>|\\[\]()-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text ? text.split(" ").length : 0;
}

function matchRules(slug: string): ThematicRule[] {
  const lower = slug.toLowerCase();
  const words = lower.split("-");
  return THEMATIC_MAP.filter((rule) =>
    rule.slugKeywords.some((kw) => {
      if (kw.includes("-")) return lower.includes(kw);
      return words.some((w) => w.startsWith(kw));
    }),
  );
}

function hasLink(content: string, serviceUrl: string): boolean {
  const escaped = serviceUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`\\]\\(${escaped}(?:[/#?)]|$)`).test(content);
}

interface MissingReport {
  slug: string;
  title: string;
  wordCount: number;
  missingRules: ThematicRule[];
}

function audit(): { reports: MissingReport[]; skipped: number; total: number } {
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .sort();

  const reports: MissingReport[] = [];
  let skipped = 0;

  for (const filename of files) {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    const wordCount = countWords(content);

    if (wordCount < MIN_WORDS) {
      skipped++;
      continue;
    }

    const rules = matchRules(slug);
    if (rules.length === 0) {
      skipped++;
      continue;
    }

    const missingRules = rules.filter((rule) => !hasLink(content, rule.serviceUrl));
    if (missingRules.length > 0) {
      reports.push({
        slug,
        title: data.title ?? "",
        wordCount,
        missingRules,
      });
    }
  }

  return { reports, skipped, total: files.length };
}

function main(): void {
  const { reports, skipped, total } = audit();

  console.log(`Audit blog → pages services`);
  console.log(`Articles scannés : ${total}`);
  console.log(`Skip (< ${MIN_WORDS} mots ou thématique non mappée) : ${skipped}`);
  console.log(`Articles sans lien service attendu : ${reports.length}`);
  console.log("");

  if (reports.length === 0) {
    console.log("Tout est lié correctement.");
    return;
  }

  for (const report of reports) {
    console.log(`• ${report.slug} (${report.wordCount} mots)`);
    console.log(`  ${report.title}`);
    for (const rule of report.missingRules) {
      console.log(`  → manque ${rule.serviceUrl} [${rule.label}]`);
      console.log(`    ancre suggérée : "${rule.anchorHint}"`);
    }
    console.log("");
  }

  process.exitCode = reports.length > 0 ? 1 : 0;
}

main();
