import { buildLlmsFullTxt, buildLlmsTxt } from "@/lib/llms";

jest.mock("next/server", () => ({
  NextResponse: class {
    private readonly body: string;
    headers: Headers;

    constructor(body: string, init?: { headers?: HeadersInit }) {
      this.body = body;
      this.headers = new Headers(init?.headers);
    }

    async text() {
      return this.body;
    }
  },
}));

const routes = [
  { path: "@/app/llms.txt/route", build: buildLlmsTxt },
  { path: "@/app/.well-known/llms.txt/route", build: buildLlmsTxt },
  { path: "@/app/llms-full.txt/route", build: buildLlmsFullTxt },
  { path: "@/app/.well-known/llms-full.txt/route", build: buildLlmsFullTxt },
];

describe.each(routes)("route $path", ({ path, build }) => {
  const route = jest.requireActual(path);

  it("est statique", () => {
    expect(route.dynamic).toBe("force-static");
  });

  it("sert le contenu généré en texte brut", async () => {
    const response = route.GET();

    expect(response.headers.get("Content-Type")).toBe("text/plain; charset=utf-8");
    expect(await response.text()).toBe(build());
  });
});
