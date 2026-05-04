import fs from "fs";
import path from "path";
import { glob } from "glob";

const ROOT = process.cwd();

function getFiles(): string[] {
  return glob.sync("**/*.{tsx,ts,mdx}", {
    cwd: ROOT,
    ignore: ["node_modules/**", ".next/**", ".claude/**", "jest.setup.ts", "**/__test-empty-frontmatter__.mdx"],
  });
}

describe("No em dash", () => {
  const files = getFiles();

  it.each(files)("%s does not contain em dash", (file) => {
    const fullPath = path.join(ROOT, file);
    let content = "";
    try {
      content = fs.readFileSync(fullPath, "utf-8");
    } catch (err: unknown) {
      if (err instanceof Error && "code" in err) {
        const code = (err as { code?: unknown }).code;
        if (code === "ENOENT") return;
      }
      throw err;
    }
    const lines = content.split("\n");
    const offending = lines
      .map((line, i) => ({ line: i + 1, content: line }))
      .filter((l) => l.content.includes("\u2014"));

    expect(offending).toEqual([]);
  });
});
