import { execSync } from "child_process";
import fs from "fs";

const ROUTES_FILE = "src/lib/routes.ts";

function lastModifiedFor(routesSource: string, routePath: string): string | null {
  const escaped = routePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`path:\\s*"${escaped}"[^}]*?lastModified:\\s*"([^"]+)"`);
  const match = routesSource.match(re);
  return match ? match[1] : null;
}

function pathFromPageFile(file: string): string | null {
  const match = file.match(/^src\/app\/(.*)page\.tsx$/);
  if (!match) return null;
  const dir = match[1].replace(/\/$/, "");
  if (dir === "") return "/";
  if (dir.includes("[")) return null;
  return `/${dir}`;
}

function main(): void {
  const base = process.env.BASE_SHA;
  if (!base) {
    console.log("BASE_SHA non défini, vérification des dates ignorée.");
    return;
  }

  const changed = execSync(`git diff --name-only ${base} HEAD`, { encoding: "utf-8" })
    .split("\n")
    .filter(Boolean);

  const currentRoutes = fs.readFileSync(ROUTES_FILE, "utf-8");
  let baseRoutes = "";
  try {
    baseRoutes = execSync(`git show ${base}:${ROUTES_FILE}`, { encoding: "utf-8" });
  } catch {
    baseRoutes = "";
  }

  const errors: string[] = [];
  for (const file of changed) {
    const routePath = pathFromPageFile(file);
    if (!routePath) continue;
    const current = lastModifiedFor(currentRoutes, routePath);
    if (!current) continue;
    const before = lastModifiedFor(baseRoutes, routePath);
    if (before === null) continue;
    if (before === current) {
      errors.push(
        `${file} a été modifié mais le lastModified de ${routePath} (${current}) n'a pas été mis à jour dans ${ROUTES_FILE}.`,
      );
    }
  }

  if (errors.length > 0) {
    console.error(
      `Dates de sitemap périmées :\n${errors.map((e) => `  - ${e}`).join("\n")}\n` +
        `Mettez à jour le lastModified de ces routes dans ${ROUTES_FILE}.`,
    );
    process.exit(1);
  }

  console.log("lastModified à jour pour les pages statiques modifiées.");
}

main();
