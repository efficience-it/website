import type { Metadata } from "next";
import { BASE_URL } from "@/lib/metadata";

const mockConfig = { indexable: true };
jest.mock("@/lib/i18n/config", () => ({
  get ENGLISH_INDEXABLE() {
    return mockConfig.indexable;
  },
}));

async function loadMetadata(): Promise<Metadata> {
  let metadata: Metadata | undefined;
  await jest.isolateModulesAsync(async () => {
    ({ metadata } = await import("@/app/(fr)/blog/page"));
  });
  return metadata as Metadata;
}

describe("French blog metadata", () => {
  it("declares the English listing when English is indexable", async () => {
    mockConfig.indexable = true;
    const metadata = await loadMetadata();
    expect(metadata.alternates?.languages).toEqual({
      fr: `${BASE_URL}/blog`,
      en: `${BASE_URL}/en/blog`,
      "x-default": `${BASE_URL}/blog`,
    });
  });

  it("declares no alternate language otherwise", async () => {
    mockConfig.indexable = false;
    const metadata = await loadMetadata();
    expect(metadata.alternates?.languages).toBeUndefined();
  });
});
