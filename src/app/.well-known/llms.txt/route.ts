import { readFileSync } from "fs";
import { join } from "path";

export const dynamic = "force-static";

export function GET() {
  const content = readFileSync(
    join(process.cwd(), "public/llms.txt"),
    "utf-8",
  );
  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
