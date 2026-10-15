import { getPageTranslation } from "@/lib/i18n/pages";

const PAGES = { "/contact": "/en/contact", "/": "/en" };

describe("getPageTranslation", () => {
  it("returns the English counterpart of a French page", () => {
    expect(getPageTranslation("/contact", PAGES)).toEqual({ language: "en", href: "/en/contact" });
  });

  it("returns the French counterpart of an English page", () => {
    expect(getPageTranslation("/en/contact", PAGES)).toEqual({ language: "fr", href: "/contact" });
  });

  it("ignores a trailing slash", () => {
    expect(getPageTranslation("/contact/", PAGES)).toEqual({ language: "en", href: "/en/contact" });
  });

  it("keeps the root path intact", () => {
    expect(getPageTranslation("/", PAGES)).toEqual({ language: "en", href: "/en" });
  });

  it("returns nothing for a page without translation", () => {
    expect(getPageTranslation("/mentions-legales", PAGES)).toBeUndefined();
  });

  it("uses the shared registry by default", () => {
    expect(getPageTranslation("/inconnue")).toBeUndefined();
  });
});
