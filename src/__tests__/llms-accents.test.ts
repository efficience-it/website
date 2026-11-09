import { buildLlmsFullTxt, buildLlmsTxt } from "@/lib/llms";

function sanitizeForSpellingCheck(content: string): string {
  return content
    .replaceAll(/\[[^\]]+\]\((https?:\/\/[^)]+|\/[^)]+)\)/g, "$1")
    .replaceAll(/https?:\/\/\S+/g, " ")
    .replaceAll(/\/[a-z0-9\-/_]+/gi, " ");
}

describe("Accents dans les fichiers LLM", () => {
  const files = [
    { name: "llms.txt", build: buildLlmsTxt },
    { name: "llms-full.txt", build: buildLlmsFullTxt },
  ];

  it.each(files)("$name ne contient pas de formes non accentuees connues", ({ build }) => {
    const content = sanitizeForSpellingCheck(build().split("## English articles")[0]);

    const forbiddenWords = [
      "specialisee",
      "metier",
      "developpement",
      "reference",
      "Ministere",
      "evenements",
      "Evenements",
      "securite",
      "donnees",
      "equipe",
      "deploiement",
      "developpeur",
      "specifique",
      "ecosysteme",
      "qualite",
      "competences",
    ];

    for (const forbiddenWord of forbiddenWords) {
      expect(content).not.toContain(forbiddenWord);
    }
  });
});
