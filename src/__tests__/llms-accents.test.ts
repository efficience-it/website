import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

function read(relativePath: string): string {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf-8");
}

function sanitizeForSpellingCheck(content: string): string {
  return content
    .replaceAll(/\[[^\]]+\]\((https?:\/\/[^)]+|\/[^)]+)\)/g, "$1")
    .replaceAll(/https?:\/\/\S+/g, " ")
    .replaceAll(/\/[a-z0-9\-/_]+/gi, " ");
}

describe("Accents dans les fichiers LLM", () => {
  const files = ["public/llms.txt", "public/llms-full.txt"];

  it.each(files)("%s ne contient pas de formes non accentuees connues", (file) => {
    const content = sanitizeForSpellingCheck(read(file));

    const forbiddenWords = [
      "specialisee",
      "metier",
      "developpement",
      "reference",
      "Ministere",
      "evenements",
      "Evenements",
    ];

    for (const forbiddenWord of forbiddenWords) {
      expect(content).not.toContain(forbiddenWord);
    }
  });
});
