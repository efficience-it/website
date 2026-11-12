import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const css = fs.readFileSync(path.join(ROOT, "src/app/globals.css"), "utf-8");

function luminance(hex: string): number {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) =>
    c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string): number {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + 0.05) / (dark + 0.05);
}

function block(selector: string): string {
  const start = css.indexOf(selector);
  return css.slice(start, css.indexOf("}", start));
}

function token(scope: string, name: string): string {
  const match = new RegExp(`${name}:\\s*(#[0-9a-fA-F]{6})`).exec(scope);
  return match![1];
}

const scopes = [
  { name: "thème clair", selector: ":root {" },
  { name: "thème clair forcé", selector: ".light {" },
  { name: "thème sombre", selector: ".dark {" },
  { name: "thème sombre automatique", selector: ":root:not(.light):not(.dark) {" },
];

describe("Bordure des champs de formulaire (WCAG 1.4.11)", () => {
  it.each(scopes)("$name : contraste d'au moins 3:1 avec le fond du champ et celui de la page", ({ selector }) => {
    const scope = block(selector);
    const border = token(scope, "--color-input-border");

    expect(contrast(border, token(scope, "--color-white"))).toBeGreaterThanOrEqual(3);
    expect(contrast(border, token(scope, "--color-light-gray"))).toBeGreaterThanOrEqual(3);
  });

  it("laisse --color-border aux séparateurs décoratifs", () => {
    expect(token(block(":root {"), "--color-border")).toBe("#eef0f3");
  });

  it.each(["ContactForm", "AuditForm"])("%s utilise le jeton dédié sur ses champs", (name) => {
    const source = fs.readFileSync(path.join(ROOT, `src/components/sections/${name}.tsx`), "utf-8");

    expect(source).toContain("border-input-border");
    expect(source).not.toContain("border-border");
  });
});
