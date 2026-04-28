import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { RESPONSIVE_WIDTHS } from "../src/lib/image-config";

const SRC_DIR = path.join(process.cwd(), "public/images/blog");
const OUT_DIR = path.join(SRC_DIR, "responsive");
const MANIFEST_PATH = path.join(process.cwd(), "src/data/blog-image-variants.json");

async function main(): Promise<void> {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const files = fs
    .readdirSync(SRC_DIR)
    .filter((f) => f.endsWith(".webp") && !fs.statSync(path.join(SRC_DIR, f)).isDirectory());

  const manifest: Record<string, number[]> = {};
  let generated = 0;
  let skipped = 0;

  for (const file of files) {
    const srcPath = path.join(SRC_DIR, file);
    const baseName = path.basename(file, ".webp");
    let srcWidth = 0;
    try {
      const meta = await sharp(srcPath).metadata();
      srcWidth = meta.width ?? 0;
    } catch (err) {
      console.warn(`skip ${file}: ${(err as Error).message}`);
      continue;
    }

    const widthsForFile: number[] = [];
    for (const width of RESPONSIVE_WIDTHS) {
      if (width >= srcWidth) continue;
      widthsForFile.push(width);
      for (const format of ["webp", "avif"] as const) {
        const outPath = path.join(OUT_DIR, `${baseName}-${width}w.${format}`);
        if (fs.existsSync(outPath)) {
          skipped++;
          continue;
        }
        await sharp(srcPath)
          .resize({ width, withoutEnlargement: true })
          [format]({ quality: format === "avif" ? 50 : 75 })
          .toFile(outPath);
        generated++;
      }
    }
    if (widthsForFile.length > 0) {
      manifest[baseName] = widthsForFile;
    }
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
  console.log(
    `Generated ${generated} variants, skipped ${skipped} existing. Manifest: ${Object.keys(manifest).length} entries.`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
