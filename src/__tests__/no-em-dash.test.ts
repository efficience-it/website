import fs from "fs";
import path from "path";
import { glob } from "glob";

const ROOT = process.cwd();

function getFiles(): string[] {
  return glob.sync("**/*.{tsx,ts,mdx}", {
    cwd: ROOT,
    ignore: [
      "node_modules/**",
      ".next/**",
      ".claude/**",
      "jest.setup.ts",
      "content/blog/__test-*.mdx",
    ],
  });
}

describe("No em dash", () => {
  const files = getFiles();

  it.each(files)("%s does not contain em dash", (file) => {
    const content = fs.readFileSync(path.join(ROOT, file), "utf-8");
    const lines = content.split("\n");
    const offending = lines
      .map((line, i) => ({ line: i + 1, content: line }))
      .filter((l) => l.content.includes("\u2014"));

    expect(offending).toEqual([]);
  });
});
