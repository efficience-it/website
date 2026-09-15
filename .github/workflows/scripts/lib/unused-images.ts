import fs from "node:fs";
import path from "node:path";

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".svg", ".gif", ".ico"]);
const SOURCE_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".mjs", ".json", ".css", ".md", ".mdx"]);
const SOURCE_DIRS = ["src", "content", "data", "scripts"];
const IGNORED_DIRS = new Set(["__tests__", "responsive", "node_modules"]);

export function walk(dir: string, extensions: Set<string>): string[] {
  if (!fs.existsSync(dir)) return [];
  const files: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!IGNORED_DIRS.has(entry.name)) files.push(...walk(fullPath, extensions));
    } else if (extensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

export function findUnusedImages(root: string): string[] {
  const publicDir = path.join(root, "public");
  const images = walk(publicDir, IMAGE_EXTENSIONS).map(
    (file) => `/${path.relative(publicDir, file).split(path.sep).join("/")}`,
  );
  const sources = SOURCE_DIRS.flatMap((dir) => walk(path.join(root, dir), SOURCE_EXTENSIONS))
    .map((file) => fs.readFileSync(file, "utf-8"))
    .join("\n");
  return images.filter((image) => !sources.includes(image)).sort();
}

export function run(root = process.cwd()): boolean {
  const unused = findUnusedImages(root);
  if (unused.length === 0) {
    console.log("Aucune image inutilisée dans public/.");
    return true;
  }
  console.error(
    `Images inutilisées dans public/ (${unused.length}) :\n${unused.map((image) => `  - public${image}`).join("\n")}`,
  );
  return false;
}
