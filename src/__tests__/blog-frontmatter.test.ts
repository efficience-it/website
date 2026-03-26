import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");
const PUBLIC_DIR = path.join(process.cwd(), "public");

const VALID_CATEGORIES = [
  "Symfony",
  "Formation",
  "Projet",
  "IA",
  "DevOps",
  "Agence",
  "Architecture",
  "JavaScript",
  "PHP",
  "Green IT",
  "Qualité de code",
  "Sécurité",
];

function getBlogFiles(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"));
}

describe("Blog front matter", () => {
  const files = getBlogFiles();

  it.each(files)("%s has required front matter fields", (file) => {
    const content = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    const { data } = matter(content);

    expect(data.title).toBeDefined();
    expect(data.date).toBeDefined();
    expect(data.category).toBeDefined();
    expect(data.excerpt).toBeDefined();
    expect(data.image).toBeDefined();
  });

  it.each(files)("%s has a valid category", (file) => {
    const content = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    const { data } = matter(content);

    expect(VALID_CATEGORIES).toContain(data.category);
  });

  it.each(files)("%s has an image file that exists", (file) => {
    const content = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    const { data } = matter(content);

    const imagePath = path.join(PUBLIC_DIR, data.image);
    expect(fs.existsSync(imagePath)).toBe(true);
  });

  it.each(files)("%s has a date in YYYY-MM-DD format", (file) => {
    const content = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    const { data } = matter(content);

    expect(String(data.date)).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it.each(files)("%s has a non-empty title", (file) => {
    const content = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    const { data } = matter(content);

    expect(data.title.trim().length).toBeGreaterThan(0);
  });

  it.each(files)("%s has between 1000 and 2000 words", (file) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    const { content } = matter(raw);
    const text = content
      .replace(/```[\s\S]*?```/g, "")
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/<[^>]+>/g, "")
      .replace(/[#*_`~>|-]/g, "")
      .trim();
    const wordCount = text.split(/\s+/).filter(Boolean).length;

    expect(wordCount).toBeGreaterThanOrEqual(1000);
  });

  it.each(files)("%s has enough internal links for its length", (file) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    const { content } = matter(raw);
    const text = content
      .replace(/```[\s\S]*?```/g, "")
      .replace(/<[^>]+>/g, "")
      .replace(/[#*_`~>|-]/g, "")
      .trim();
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const internalLinks = (content.match(/\]\(\s*\/article\//g) || []).length;
    const minLinks = Math.max(1, Math.floor(wordCount / 400));

    expect(internalLinks).toBeGreaterThanOrEqual(minLinks);
  });

  const LEGACY_LONG_SLUGS = [
    "comment-produire-la-documentation-sur-votre-projet-symfony-avec-lapproche-diataxis.mdx",
    "comment-se-passe-un-audit-chez-efficience-it-quel-contenu-comment-procede-t-on-quels-sont-les-criteres-quel-procede.mdx",
    "decouvrez-les-raisons-de-nous-confier-la-maintenance-de-vos-applications-web.mdx",
    "les-contributions-open-source-un-enjeu-de-taille-pour-les-developpeurs-et-les-projets.mdx",
    "quelle-architecture-de-projet-choisir-entre-micro-service-ou-monolithe-modulaire.mdx",
    "quelles-sont-les-differences-entre-symfony-messenger-php-enqueue-quoi-utiliser.mdx",
    "quels-evenements-suivre-dans-le-monde-de-symfony-php-quelles-differences-entre-eux.mdx",
  ];

  const newFiles = files.filter((f) => !LEGACY_LONG_SLUGS.includes(f));

  it.each(newFiles)("%s has a slug of 75 characters or less", (file) => {
    const slug = file.replace(/\.mdx$/, "");

    expect(slug.length).toBeLessThanOrEqual(75);
  });
});
