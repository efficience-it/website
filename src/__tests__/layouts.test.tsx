import { renderToStaticMarkup } from "react-dom/server";
import FrenchLayout, { metadata, viewport } from "@/app/(fr)/layout";
import EnglishLayout, {
  metadata as englishMetadata,
  viewport as englishViewport,
} from "@/app/(en)/en/layout";
import GlobalNotFound, {
  metadata as notFoundMetadata,
  viewport as notFoundViewport,
} from "@/app/global-not-found";
import RootDocument from "@/components/layout/RootDocument";

jest.mock("@/components/ui/GoogleAnalytics", () => ({
  __esModule: true,
  default: () => <span data-testid="analytics" />,
}));
jest.mock("@/components/layout/Header", () => ({
  __esModule: true,
  default: () => <header data-testid="header" />,
}));
jest.mock("@/components/layout/Footer", () => ({
  __esModule: true,
  default: () => <footer data-testid="footer" />,
}));
jest.mock("@/components/ui/CookieConsent", () => ({
  __esModule: true,
  default: () => <aside data-testid="cookies" />,
}));

describe("root layouts", () => {
  it("serves the French layout with the full site chrome", () => {
    const html = renderToStaticMarkup(
      <FrenchLayout>
        <p>contenu</p>
      </FrenchLayout>,
    );
    expect(html).toContain('<html lang="fr-FR"');
    expect(html).toContain("Aller au contenu");
    expect(html).toContain('data-testid="header"');
    expect(html).toContain('data-testid="footer"');
    expect(html).toContain('data-testid="cookies"');
    expect(html).toContain("<p>contenu</p>");
  });

  it("serves the English layout without French chrome", () => {
    const html = renderToStaticMarkup(
      <EnglishLayout>
        <p>content</p>
      </EnglishLayout>,
    );
    expect(html).toContain('<html lang="en"');
    expect(html).toContain("Skip to content");
    expect(html).not.toContain("Aller au contenu");
    expect(html).not.toContain('data-testid="header"');
    expect(html).not.toContain('data-testid="footer"');
    expect(html).not.toContain('data-testid="cookies"');
    expect(html).toContain("<p>content</p>");
    expect(html).toContain("Legal notice (in French)");
    expect(html).toContain('href="/en/blog"');
  });

  it("shares the document shell between languages", () => {
    const html = renderToStaticMarkup(
      <RootDocument lang="en" skipLabel="Skip">
        <p>x</p>
      </RootDocument>,
    );
    expect(html).toContain('rel="ai-metadata"');
    expect(html).toContain('type="application/ld+json"');
    expect(html).toContain('data-testid="analytics"');
    expect(html).toContain('id="main-content"');
  });

  it("exposes metadata and viewport for each layout", () => {
    expect(metadata.metadataBase).toEqual(new URL("https://www.itefficience.com"));
    expect(viewport.themeColor).toBe("#0066cc");
    expect(englishMetadata.metadataBase).toEqual(new URL("https://www.itefficience.com"));
    expect(englishViewport.themeColor).toBe("#0066cc");
  });

  it("serves the global 404 in French with the site chrome", () => {
    const html = renderToStaticMarkup(<GlobalNotFound />);
    expect(html).toContain('<html lang="fr-FR"');
    expect(html).toContain("Page non trouvée");
    expect(html).toContain('data-testid="header"');
    expect(notFoundMetadata.robots).toEqual({ index: false });
    expect(notFoundMetadata.description).toBe(metadata.description);
    expect(notFoundViewport).toBe(viewport);
  });
});
