import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

interface Finding {
  level: "error" | "warning";
  file: string;
  message: string;
}

interface Article {
  slug: string;
  data: Record<string, unknown>;
  content: string;
}

const REQUIRED_FIELDS = ["translationOf", "translatedFromUpdatedAt", "reviewedBy", "reviewedAt"] as const;

const FRENCH_MARKERS = new Set([
  "les", "des", "une", "est", "dans", "pour", "avec", "que", "qui", "sur", "pas", "votre", "vos",
  "nous", "vous", "sont", "être", "cette", "ces", "mais", "aux", "du", "comme", "aussi", "ainsi",
  "donc", "très", "peut", "fait", "chez", "leur", "leurs", "notre", "nos", "après", "avant",
  "depuis", "lors", "encore", "toujours", "souvent",
]);

const FRENCH_RATIO_LIMIT = 0.02;

function asString(value: unknown): string | undefined {
  if (typeof value === "string") return value;
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return undefined;
}

function readArticles(dir: string): Article[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .sort()
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf-8"));
      return { slug: file.replace(/\.mdx$/, ""), data, content };
    });
}

export function frenchRatio(text: string): number {
  const cleaned = text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/\]\([^)]*\)/g, " ")
    .replace(/https?:\/\/\S+/g, " ");
  const words = cleaned.toLowerCase().match(/[a-zàâçéèêëîïôûùüÿœæ]+/g) ?? [];
  if (words.length === 0) return 0;
  return words.filter((word) => FRENCH_MARKERS.has(word)).length / words.length;
}

export function checkTranslations(root: string): Finding[] {
  const french = new Map(readArticles(path.join(root, "content/blog")).map((a) => [a.slug, a]));
  const english = readArticles(path.join(root, "content/blog/en"));
  const englishSlugs = new Set(english.map((a) => a.slug));
  const translated = new Set<string>();
  const findings: Finding[] = [];

  for (const article of english) {
    const file = `content/blog/en/${article.slug}.mdx`;
    const report = (level: Finding["level"], message: string) => findings.push({ level, file, message });

    for (const field of REQUIRED_FIELDS) {
      if (!asString(article.data[field])) report("error", `le champ ${field} est obligatoire.`);
    }

    const sourceSlug = asString(article.data.translationOf);
    const source = sourceSlug ? french.get(sourceSlug) : undefined;
    if (sourceSlug && !source) {
      report("error", `l'article français "${sourceSlug}" n'existe pas.`);
    }
    if (sourceSlug && translated.has(sourceSlug)) {
      report("error", `l'article français "${sourceSlug}" a déjà une traduction.`);
    }
    if (sourceSlug) translated.add(sourceSlug);

    if (source) {
      if (article.data.title === source.data.title) {
        report("error", "le titre est identique à celui de la source.");
      }
      if (article.data.excerpt === source.data.excerpt) {
        report("error", "la description est identique à celle de la source.");
      }
      const sourceUpdated = asString(source.data.updatedAt);
      const translatedFrom = asString(article.data.translatedFromUpdatedAt);
      if (sourceUpdated && translatedFrom && sourceUpdated > translatedFrom) {
        report(
          "warning",
          `la source a été modifiée le ${sourceUpdated}, la traduction date de la version du ${translatedFrom}.`,
        );
      }
    }

    const text = `${asString(article.data.title) ?? ""}\n${asString(article.data.excerpt) ?? ""}\n${article.content}`;
    const ratio = frenchRatio(text);
    if (ratio > FRENCH_RATIO_LIMIT) {
      report("error", `le texte contient ${(ratio * 100).toFixed(1)} % de mots français : traduction incomplète.`);
    }

    for (const match of article.content.matchAll(/\]\(\/en\/article\/([^)#\s]+)/g)) {
      if (!englishSlugs.has(match[1])) {
        report("error", `lien interne vers /en/article/${match[1]}, qui n'existe pas.`);
      }
    }
  }

  return findings;
}

export function run(root = process.cwd()): boolean {
  const findings = checkTranslations(root);
  const errors = findings.filter((f) => f.level === "error");
  const warnings = findings.filter((f) => f.level === "warning");

  if (findings.length === 0) {
    console.log("Traductions cohérentes.");
    return true;
  }

  const lines = (items: Finding[]) => items.map((f) => `  - ${f.file} : ${f.message}`).join("\n");
  if (warnings.length > 0) console.warn(`Traductions à mettre à jour :\n${lines(warnings)}`);
  if (errors.length > 0) console.error(`Traductions invalides :\n${lines(errors)}`);

  const summaryFile = process.env.GITHUB_STEP_SUMMARY;
  if (summaryFile && warnings.length > 0) {
    fs.appendFileSync(summaryFile, `## Traductions à mettre à jour\n\n${lines(warnings)}\n`);
  }

  return errors.length === 0;
}
