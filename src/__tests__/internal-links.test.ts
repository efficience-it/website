import fs from "fs";
import path from "path";

const SRC_DIR = path.join(process.cwd(), "src");
const CONTENT_DIR = path.join(process.cwd(), "content/blog");

function getValidRoutes(): Set<string> {
  const routes = new Set<string>();

  function walk(dir: string, prefix: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (entry.name.startsWith("[")) continue;
        walk(path.join(dir, entry.name), `${prefix}/${entry.name}`);
      }
      if (entry.name === "page.tsx") {
        routes.add(prefix || "/");
      }
    }
  }

  walk(path.join(SRC_DIR, "app"), "");

  const blogFiles = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"));
  for (const file of blogFiles) {
    routes.add(`/article/${file.replace(/\.mdx$/, "")}`);
  }

  routes.add("/blog/symfony");
  routes.add("/blog/outils-utiles");
  routes.add("/blog/green-it");
  routes.add("/blog/agence");

  return routes;
}

function extractTsxHrefs(content: string): string[] {
  const regex = /href="(\/[^"]*?)"/g;
  const hrefs: string[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    hrefs.push(match[1]);
  }
  return hrefs;
}

function extractMdxLinks(content: string): string[] {
  const regex = /\]\((\/[^)]*?)\)/g;
  const links: string[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    links.push(match[1]);
  }
  return links;
}

function getAllFiles(dir: string, ext: string): string[] {
  const results: string[] = [];
  function walk(d: string) {
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(d, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name.endsWith(ext)) {
        results.push(fullPath);
      }
    }
  }
  walk(dir);
  return results;
}

describe("Internal links", () => {
  const validRoutes = getValidRoutes();

  function isValidPath(href: string): boolean {
    const clean = href.replace(/\/$/, "") || "/";
    if (clean.startsWith("/#")) return true;
    if (clean.startsWith("/.well-known/")) return true;
    const withoutHash = clean.split("#")[0];
    return validRoutes.has(withoutHash);
  }

  it("all href in tsx files point to valid routes", () => {
    const tsxFiles = getAllFiles(SRC_DIR, ".tsx").filter(
      (f) => !f.includes("__tests__") && !f.includes(".test.")
    );

    const broken: { file: string; href: string }[] = [];

    for (const file of tsxFiles) {
      const content = fs.readFileSync(file, "utf-8");
      const hrefs = extractTsxHrefs(content);
      for (const href of hrefs) {
        if (!isValidPath(href)) {
          broken.push({
            file: path.relative(process.cwd(), file),
            href,
          });
        }
      }
    }

    if (broken.length > 0) {
      const details = broken
        .map((b) => `  ${b.file}: ${b.href}`)
        .join("\n");
      throw new Error(`Broken internal links:\n${details}`);
    }
  });

  it("all links in mdx files point to valid routes", () => {
    const mdxFiles = getAllFiles(CONTENT_DIR, ".mdx");

    const broken: { file: string; href: string }[] = [];

    for (const file of mdxFiles) {
      const content = fs.readFileSync(file, "utf-8");
      const links = extractMdxLinks(content);
      for (const href of links) {
        if (!isValidPath(href)) {
          broken.push({
            file: path.relative(process.cwd(), file),
            href,
          });
        }
      }
    }

    if (broken.length > 0) {
      const details = broken
        .map((b) => `  ${b.file}: ${b.href}`)
        .join("\n");
      throw new Error(`Broken internal links:\n${details}`);
    }
  });
});
