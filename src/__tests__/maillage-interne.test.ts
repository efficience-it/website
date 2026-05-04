import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

const SERVICE_PAGES = [
  "/developpement-web-sur-mesure",
  "/cloud-et-devops",
  "/accompagnement-et-conseil",
  "/expertise-ia",
  "/ecommerce-sylius",
  "/hebergement-symfony",
  "/audit-code-php",
  "/agence-symfony-lille",
  "/api-sur-mesure-symfony",
  "/api-nodejs-nestjs",
  "/architecture-hexagonale-symfony",
  "/developpement-nodejs",
  "/formation-symfony-entreprise",
  "/geo-optimisation-ia",
  "/maintenance-applicative-symfony",
  "/migration-symfony",
  "/modernisation-application-php",
  "/reprise-projet-symfony",
  "/tests-automatises-php",
];

function getMdxFiles(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("__test"));
}

function countIncomingLinks(servicePath: string, mdxFiles: string[]): number {
  let count = 0;
  for (const file of mdxFiles) {
    const content = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    if (content.includes(`(${servicePath})`) || content.includes(`"${servicePath}"`)) {
      count++;
    }
  }
  return count;
}

describe("Maillage interne", () => {
  const mdxFiles = getMdxFiles();

  it.each(SERVICE_PAGES)(
    "%s has at least 2 incoming links from blog articles",
    (servicePage) => {
      const count = countIncomingLinks(servicePage, mdxFiles);
      expect(count).toBeGreaterThanOrEqual(2);
    }
  );
});
