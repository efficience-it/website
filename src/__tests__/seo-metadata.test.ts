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

function extractMetadataBlock(content: string): string | null {
  const start = content.indexOf("pageMetadata({");
  if (start === -1) return null;
  let depth = 0;
  const blockStart = content.indexOf("{", start);
  for (let i = blockStart; i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") depth--;
    if (depth === 0) return content.slice(blockStart, i + 1);
  }
  return null;
}

describe("SEO metadata", () => {
  const pages = getPageFiles();

  it.each(pages.map((p) => [p.name, p.filePath]))(
    "%s exports metadata with title and description",
    (_name, filePath) => {
      const content = fs.readFileSync(filePath as string, "utf-8");
      expect(content).toMatch(/export\s+const\s+metadata\s*=/);
      const block = extractMetadataBlock(content);
      expect(block).not.toBeNull();
      expect(block).toMatch(/title:\s*"/);
      expect(block).toMatch(/description:\s*\n?\s*"/);
    }
  );

  it.each(pages.map((p) => [p.name, p.filePath]))(
    "%s has a description between 50 and 200 characters",
    (_name, filePath) => {
      const content = fs.readFileSync(filePath as string, "utf-8");
      const block = extractMetadataBlock(content);
      if (!block) throw new Error("No pageMetadata block found");
      const match = block.match(/description:\s*\n?\s*"([^"]+)"/);
      if (!match) throw new Error("No description found in pageMetadata");
      const desc = match[1];
      expect(desc.length).toBeGreaterThanOrEqual(50);
      expect(desc.length).toBeLessThanOrEqual(200);
    }
  );

  it.each(pages.map((p) => [p.name, p.filePath]))(
    "%s has a title under 90 characters",
    (_name, filePath) => {
      const content = fs.readFileSync(filePath as string, "utf-8");
      const block = extractMetadataBlock(content);
      if (!block) throw new Error("No pageMetadata block found");
      const match = block.match(/title:\s*"([^"]+)"/);
      if (!match) throw new Error("No title found in pageMetadata");
      expect(match[1].length).toBeLessThanOrEqual(90);
    }
  );
});
