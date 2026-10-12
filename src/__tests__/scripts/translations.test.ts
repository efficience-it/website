import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { checkTranslations, frenchRatio, run } from "../../../.github/workflows/scripts/lib/translations";

function write(root: string, relativePath: string, frontmatter: Record<string, string>, body: string): void {
  const full = path.join(root, relativePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  const front = Object.entries(frontmatter)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  fs.writeFileSync(full, `---\n${front}\n---\n${body}\n`);
}

const ENGLISH_BODY =
  "This article explains how a team can migrate a Symfony application step by step, with tests and small releases, " +
  "so that every deployment stays safe and the whole project keeps moving forward without any downtime.";

function writeFrench(root: string, slug = "source", extra: Record<string, string> = {}) {
  write(root, `content/blog/${slug}.mdx`, { title: '"Titre source"', excerpt: '"Extrait source"', updatedAt: '"2026-01-13"', ...extra }, "Corps de l'article.");
}

function writeEnglish(root: string, slug = "translated", overrides: Record<string, string> = {}, body = ENGLISH_BODY) {
  write(
    root,
    `content/blog/en/${slug}.mdx`,
    {
      title: '"Translated title"',
      excerpt: '"Translated excerpt"',
      translationOf: '"source"',
      translatedFromUpdatedAt: '"2026-01-13"',
      reviewedBy: '"Reviewer"',
      reviewedAt: '"2026-10-09"',
      ...overrides,
    },
    body,
  );
}

function messages(root: string): string[] {
  return checkTranslations(root).map((f) => `${f.level}: ${f.message}`);
}

describe("translations check", () => {
  let root: string;

  beforeEach(() => {
    root = fs.mkdtempSync(path.join(os.tmpdir(), "translations-"));
  });

  afterEach(() => {
    fs.rmSync(root, { recursive: true, force: true });
    jest.restoreAllMocks();
    delete process.env.GITHUB_STEP_SUMMARY;
  });

  it("finds nothing when there is no English directory", () => {
    writeFrench(root);
    expect(checkTranslations(root)).toEqual([]);
  });

  it("accepts a complete translation", () => {
    writeFrench(root);
    writeEnglish(root);
    expect(checkTranslations(root)).toEqual([]);
  });

  it("accepts unquoted YAML dates", () => {
    writeFrench(root);
    writeEnglish(root, "translated", { translatedFromUpdatedAt: "2026-01-13", reviewedAt: "2026-10-09" });
    expect(checkTranslations(root)).toEqual([]);
  });

  it.each(["translationOf", "translatedFromUpdatedAt", "reviewedBy", "reviewedAt"])(
    "reports a missing %s",
    (field) => {
      writeFrench(root);
      writeEnglish(root);
      const file = path.join(root, "content/blog/en/translated.mdx");
      fs.writeFileSync(file, fs.readFileSync(file, "utf-8").replace(new RegExp(`^${field}:.*\n`, "m"), ""));
      expect(messages(root)).toContain(`error: le champ ${field} est obligatoire.`);
    },
  );

  it("reports an unknown French source", () => {
    writeFrench(root);
    writeEnglish(root, "translated", { translationOf: '"missing"' });
    expect(messages(root)).toContain('error: l\'article français "missing" n\'existe pas.');
  });

  it("reports two translations of the same article", () => {
    writeFrench(root);
    writeEnglish(root, "first");
    writeEnglish(root, "second");
    expect(messages(root)).toContain('error: l\'article français "source" a déjà une traduction.');
  });

  it("reports a title and an excerpt copied from the source", () => {
    writeFrench(root);
    writeEnglish(root, "translated", { title: '"Titre source"', excerpt: '"Extrait source"' });
    const found = messages(root);
    expect(found).toContain("error: le titre est identique à celui de la source.");
    expect(found).toContain("error: la description est identique à celle de la source.");
  });

  it("reports untranslated French text", () => {
    writeFrench(root);
    writeEnglish(root, "translated", {}, "Cette application est une application que nous avons migrée pour vous avec les équipes dans votre entreprise.");
    expect(messages(root).some((m) => m.includes("mots français"))).toBe(true);
  });

  it("ignores French words inside code, inline code and links", () => {
    writeFrench(root);
    writeEnglish(
      root,
      "translated",
      {},
      `${ENGLISH_BODY}\n\n\`\`\`php\n// les des une est dans pour avec que qui sur pas\n\`\`\`\n\nUse \`les des une\` and [la doc](https://example.com/les-des-une).`,
    );
    expect(checkTranslations(root)).toEqual([]);
  });

  it("reports an internal link to a missing English article", () => {
    writeFrench(root);
    writeEnglish(root, "translated", {}, `${ENGLISH_BODY}\n\nRead [this](/en/article/missing) and [that](/en/article/translated).`);
    const found = messages(root);
    expect(found).toContain("error: lien interne vers /en/article/missing, qui n'existe pas.");
    expect(found.filter((m) => m.includes("/en/article/"))).toHaveLength(1);
  });

  it("warns when the source was updated after the translation", () => {
    writeFrench(root, "source", { updatedAt: '"2026-09-01"' });
    writeEnglish(root);
    expect(messages(root)).toEqual([
      "warning: la source a été modifiée le 2026-09-01, la traduction date de la version du 2026-01-13.",
    ]);
  });

  it("tolerates an English article without title and excerpt", () => {
    writeFrench(root);
    write(
      root,
      "content/blog/en/translated.mdx",
      { translationOf: '"source"', translatedFromUpdatedAt: '"2026-01-13"', reviewedBy: '"Reviewer"', reviewedAt: '"2026-10-09"' },
      ENGLISH_BODY,
    );
    expect(checkTranslations(root)).toEqual([]);
  });

  it("computes the French ratio of an empty text as zero", () => {
    expect(frenchRatio("```js\nconst a = 1;\n```")).toBe(0);
  });
});

describe("translations run", () => {
  let root: string;

  beforeEach(() => {
    root = fs.mkdtempSync(path.join(os.tmpdir(), "translations-run-"));
    jest.spyOn(console, "log").mockImplementation(() => undefined);
    jest.spyOn(console, "warn").mockImplementation(() => undefined);
    jest.spyOn(console, "error").mockImplementation(() => undefined);
  });

  afterEach(() => {
    fs.rmSync(root, { recursive: true, force: true });
    jest.restoreAllMocks();
    delete process.env.GITHUB_STEP_SUMMARY;
  });

  it("passes on the repository as it stands", () => {
    expect(run()).toBe(true);
  });

  it("passes when everything is consistent", () => {
    writeFrench(root);
    writeEnglish(root);
    expect(run(root)).toBe(true);
    expect(console.log).toHaveBeenCalledWith("Traductions cohérentes.");
  });

  it("fails and reports errors", () => {
    writeFrench(root);
    writeEnglish(root, "translated", { translationOf: '"missing"' });
    expect(run(root)).toBe(false);
    expect(console.error).toHaveBeenCalled();
  });

  it("passes with warnings and writes the job summary", () => {
    const summary = path.join(root, "summary.md");
    process.env.GITHUB_STEP_SUMMARY = summary;
    writeFrench(root, "source", { updatedAt: '"2026-09-01"' });
    writeEnglish(root);
    expect(run(root)).toBe(true);
    expect(console.warn).toHaveBeenCalled();
    expect(fs.readFileSync(summary, "utf-8")).toContain("Traductions à mettre à jour");
  });

  it("does not write a summary without warnings", () => {
    const summary = path.join(root, "summary.md");
    process.env.GITHUB_STEP_SUMMARY = summary;
    writeFrench(root);
    writeEnglish(root, "translated", { translationOf: '"missing"' });
    run(root);
    expect(fs.existsSync(summary)).toBe(false);
  });
});
