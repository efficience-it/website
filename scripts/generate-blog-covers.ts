import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import sharp from "sharp";

type Photo = {
  name: string;
  file: string;
  license: string;
  author: string;
  url: string;
  focusX?: number;
};

type Cover = {
  slug: string;
  title: string;
  category: string;
};

const WIDTH = 1200;
const HEIGHT = 630;
const PANEL = 680;
const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, "content/blog");
const OUTPUT_DIR = path.join(ROOT, "public/images/blog");
const PHOTOS_PATH = path.join(ROOT, ".docs/covers/photos.json");
const CACHE_DIR = path.join(ROOT, "node_modules/.cache/blog-covers");
const USER_AGENT = "efficience-it-covers/1.0 (https://www.itefficience.com)";
const FONT = "Montserrat, 'DejaVu Sans', sans-serif";

const ACCENTS: Record<string, string> = {
  Symfony: "#6d5dfc",
  DevOps: "#0ea5b7",
  IA: "#f59e0b",
  "Sécurité": "#e5484d",
  Architecture: "#8b5cf6",
  PHP: "#777bb3",
  JavaScript: "#eab308",
  "Qualité de code": "#22a861",
  Formation: "#e0529c",
  Projet: "#3399ff",
  Agence: "#3399ff",
  "Green IT": "#2f9e44",
};

function escape(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function wrap(text: string, maxChars: number): string[] {
  const lines: string[] = [];
  let current = "";
  for (const word of text.split(/\s+/)) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function titleLines(title: string): { lines: string[]; size: number } {
  const steps = [
    { size: 46, maxChars: 18 },
    { size: 40, maxChars: 20 },
    { size: 34, maxChars: 24 },
  ];
  for (const step of steps) {
    const lines = wrap(title, step.maxChars);
    if (lines.length <= 4) return { lines, size: step.size };
  }
  const last = steps[steps.length - 1];
  return { lines: wrap(title, last.maxChars).slice(0, 5), size: last.size };
}

function coverSvg({ title, category }: Cover): string {
  const accent = ACCENTS[category] ?? "#0066cc";
  const { lines, size } = titleLines(title);
  const lineHeight = Math.round(size * 1.18);
  const text = lines
    .map(
      (line, i) =>
        `<text x="80" y="${230 + i * lineHeight}" font-family="${FONT}" font-size="${size}" font-weight="800" fill="#1a1f27">${escape(line)}</text>`,
    )
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <path d="M0 0 H${PANEL} Q${PANEL - 60} ${HEIGHT / 2} ${PANEL} ${HEIGHT} H0 Z" fill="#f5f7fa"/>
  <circle cx="${PANEL}" cy="${HEIGHT}" r="90" fill="${accent}" opacity="0.9"/>
  <rect x="80" y="96" width="${category.length * 17 + 48}" height="48" rx="24" fill="${accent}" opacity="0.16"/>
  <text x="104" y="129" font-family="${FONT}" font-size="24" font-weight="700" fill="#1a1f27">${escape(category)}</text>
  ${text}
  <rect x="80" y="538" width="26" height="26" rx="7" fill="#0066cc"/>
  <text x="120" y="560" font-family="${FONT}" font-size="26" font-weight="700" fill="#333333">Efficience IT</text>
</svg>`;
}

function readCover(slug: string): Cover {
  const { data } = matter(fs.readFileSync(path.join(CONTENT_DIR, `${slug}.mdx`), "utf-8"));
  return { slug, title: String(data.coverTitle ?? data.title), category: String(data.category) };
}

async function loadPhoto(photo: Photo): Promise<Buffer> {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  const cached = path.join(CACHE_DIR, `${photo.file.replace(/[^a-zA-Z0-9.-]/g, "_")}.jpg`);
  if (fs.existsSync(cached)) return fs.readFileSync(cached);
  const api = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(photo.file)}&prop=imageinfo&iiprop=url&iiurlwidth=1600&format=json`;
  const info = await (await fetch(api, { headers: { "User-Agent": USER_AGENT } })).json();
  const page = Object.values(info.query.pages)[0] as { imageinfo: { thumburl: string }[] };
  const response = await fetch(page.imageinfo[0].thumburl, { headers: { "User-Agent": USER_AGENT } });
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(cached, buffer);
  return buffer;
}

async function focusCrop(source: sharp.Sharp, focusX: number, cropWidth: number): Promise<sharp.Sharp> {
  const { width = 0, height = 0 } = await source.metadata();
  const scaledWidth = Math.max(cropWidth, Math.round((width * HEIGHT) / height));
  const visibleCenter = 120 + (WIDTH - PANEL) / 2;
  const left = Math.min(Math.max(Math.round(focusX * scaledWidth - visibleCenter), 0), scaledWidth - cropWidth);
  const resized = await source.resize(scaledWidth, HEIGHT, { fit: "cover" }).toBuffer();
  return sharp(resized).extract({ left, top: 0, width: cropWidth, height: HEIGHT });
}

async function renderCover(cover: Cover, photo: Photo): Promise<Buffer> {
  const cropWidth = WIDTH - PANEL + 120;
  const source = sharp(await loadPhoto(photo));
  const base = await (photo.focusX === undefined
    ? source.resize(cropWidth, HEIGHT, { fit: "cover", position: sharp.strategy.attention })
    : await focusCrop(source, photo.focusX, cropWidth))
    .modulate({ saturation: 0.9 })
    .toBuffer();
  return sharp({ create: { width: WIDTH, height: HEIGHT, channels: 3, background: "#f5f7fa" } })
    .composite([
      { input: base, left: PANEL - 120, top: 0 },
      { input: Buffer.from(coverSvg(cover)), left: 0, top: 0 },
    ])
    .png()
    .toBuffer();
}

async function main(): Promise<void> {
  const [flag, slug, out, photosPath] = process.argv.slice(2);
  const photos: Record<string, Photo> = JSON.parse(fs.readFileSync(photosPath ?? PHOTOS_PATH, "utf-8"));

  if (flag === "--preview") {
    fs.writeFileSync(out, await renderCover(readCover(slug), photos[slug]));
    return;
  }

  const names = Object.values(photos).map((photo) => photo.name);
  const duplicates = names.filter((name, i) => names.indexOf(name) !== i);
  if (duplicates.length) throw new Error(`Duplicate cover names: ${duplicates.join(", ")}`);

  for (const [key, photo] of Object.entries(photos)) {
    if (!fs.existsSync(path.join(CONTENT_DIR, `${key}.mdx`))) continue;
    const png = await renderCover(readCover(key), photo);
    await sharp(png).webp({ quality: 82 }).toFile(path.join(OUTPUT_DIR, `cover-${photo.name}.webp`));
  }
  console.log(`Covers written: ${Object.keys(photos).length}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
