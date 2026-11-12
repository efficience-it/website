import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const TOKENS = /<FadeIn\b[^>]*>|<\/FadeIn>|<StickyMobileCta\s*\/>/g;

function collectTsx(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return collectTsx(full);
    return entry.name.endsWith(".tsx") ? [full] : [];
  });
}

function stickyInsideFadeIn(source: string): boolean {
  let depth = 0;
  for (const [token] of source.matchAll(TOKENS)) {
    if (token.startsWith("<FadeIn")) depth += 1;
    else if (token === "</FadeIn>") depth -= 1;
    else if (depth > 0) return true;
  }
  return false;
}

describe("Placement du CTA collant mobile", () => {
  const files = [
    ...collectTsx(path.join(ROOT, "src/app")),
    ...collectTsx(path.join(ROOT, "src/components")),
  ].filter((file) => fs.readFileSync(file, "utf-8").includes("<StickyMobileCta"));

  it("détecte un CTA collant rendu dans un FadeIn", () => {
    expect(stickyInsideFadeIn("<FadeIn><CallToAction /><StickyMobileCta /></FadeIn>")).toBe(true);
    expect(stickyInsideFadeIn("<FadeIn><CallToAction /></FadeIn><StickyMobileCta />")).toBe(false);
  });

  it("trouve des pages qui utilisent le CTA collant", () => {
    expect(files.length).toBeGreaterThan(40);
  });

  it.each(files.map((file) => path.relative(ROOT, file)))(
    "%s rend StickyMobileCta hors de tout FadeIn",
    (relative) => {
      const source = fs.readFileSync(path.join(ROOT, relative), "utf-8");

      expect(stickyInsideFadeIn(source)).toBe(false);
    },
  );
});
