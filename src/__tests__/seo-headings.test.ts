import fs from "fs";
import path from "path";

const APP_DIR = path.join(process.cwd(), "src/app");

function getPageFiles(): { name: string; filePath: string }[] {
  const entries = fs.readdirSync(APP_DIR, { withFileTypes: true });
  const pages: { name: string; filePath: string }[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("[") || entry.name.startsWith("_")) continue;
    const pagePath = path.join(APP_DIR, entry.name, "page.tsx");
    if (fs.existsSync(pagePath)) {
      pages.push({ name: entry.name, filePath: pagePath });
    }
  }

  return pages;
}

describe("SEO headings", () => {
  const pages = getPageFiles();

  it.each(pages.map((p) => [p.name, p.filePath]))(
    "%s contains exactly one h1",
    (_name, filePath) => {
      const content = fs.readFileSync(filePath as string, "utf-8");
      const h1Matches = content.match(/<h1[\s>]/g) || [];
      expect(h1Matches.length).toBe(1);
    }
  );

  it.each(pages.map((p) => [p.name, p.filePath]))(
    "%s does not contain h4, h5 or h6 tags",
    (_name, filePath) => {
      const content = fs.readFileSync(filePath as string, "utf-8");
      const forbidden = content.match(/<h[456][\s>]/g) || [];
      if (forbidden.length > 0) {
        throw new Error(`Found forbidden heading tags: ${forbidden.join(", ")}`);
      }
    }
  );
});
