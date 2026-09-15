import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { findUnusedImages, run, walk } from "../../../scripts/lib/unused-images";

function writeFile(root: string, relativePath: string, content = ""): void {
  const fullPath = path.join(root, relativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
}

describe("unused-images", () => {
  let root: string;

  beforeEach(() => {
    root = fs.mkdtempSync(path.join(os.tmpdir(), "unused-images-"));
  });

  afterEach(() => {
    fs.rmSync(root, { recursive: true, force: true });
    jest.restoreAllMocks();
  });

  it("walk returns an empty list for a missing directory", () => {
    expect(walk(path.join(root, "missing"), new Set([".ts"]))).toEqual([]);
  });

  it("walk skips ignored directories and other extensions", () => {
    writeFile(root, "a.ts");
    writeFile(root, "b.txt");
    writeFile(root, "__tests__/c.ts");
    writeFile(root, "nested/D.TS");
    expect(walk(root, new Set([".ts"])).sort()).toEqual(
      [path.join(root, "a.ts"), path.join(root, "nested/D.TS")].sort(),
    );
  });

  it("lists images that are not referenced outside tests", () => {
    writeFile(root, "public/images/used.webp");
    writeFile(root, "public/images/logos/data.svg");
    writeFile(root, "public/images/only-in-test.png");
    writeFile(root, "public/images/orphan.jpg");
    writeFile(root, "public/images/blog/responsive/post-400w.webp");
    writeFile(root, "public/llms.txt");
    writeFile(root, "src/app/page.tsx", 'src="/images/used.webp"');
    writeFile(root, "data/logos.ts", 'logo: "/images/logos/data.svg"');
    writeFile(root, "src/__tests__/page.test.tsx", '"/images/only-in-test.png"');
    expect(findUnusedImages(root)).toEqual(["/images/only-in-test.png", "/images/orphan.jpg"]);
  });

  it("run reports unused images", () => {
    writeFile(root, "public/images/orphan.jpg");
    const error = jest.spyOn(console, "error").mockImplementation(() => {});
    expect(run(root)).toBe(false);
    expect(error).toHaveBeenCalledWith(expect.stringContaining("public/images/orphan.jpg"));
  });

  it("run succeeds when every image is referenced", () => {
    const log = jest.spyOn(console, "log").mockImplementation(() => {});
    expect(run(root)).toBe(true);
    expect(log).toHaveBeenCalledWith("Aucune image inutilisée dans public/.");
  });

  it("the repository has no unused image", () => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    expect(run()).toBe(true);
  });
});
