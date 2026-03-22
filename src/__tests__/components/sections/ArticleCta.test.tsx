import { render, screen, fireEvent } from "@testing-library/react";
import ArticleCta from "@/components/sections/ArticleCta";

describe("ArticleCta", () => {
  let savedGtag: typeof window.gtag;

  beforeEach(() => {
    savedGtag = window.gtag;
  });

  afterEach(() => {
    window.gtag = savedGtag;
  });

  it("renders default CTA when no category or slug", () => {
    render(<ArticleCta />);
    expect(screen.getByText("Un projet en tête ?")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contactez-nous" })).toHaveAttribute("href", "/contact");
  });

  it("renders migration CTA for migration slugs", () => {
    render(<ArticleCta slug="guide-de-migration-dans-un-projet-symfony" />);
    expect(screen.getByText(/projet legacy ou une migration PHP/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /modernisation/ })).toHaveAttribute("href", "/modernisation-application-php");
  });

  it("renders reprise CTA for reprise slugs", () => {
    render(<ArticleCta slug="claude-assistant-architecture-symfony-legacy" />);
    expect(screen.getByRole("link", { name: /reprise/ })).toHaveAttribute("href", "/reprise-projet-symfony");
  });

  it("renders code quality CTA for quality slugs", () => {
    render(<ArticleCta slug="phpstan-niveau-max" />);
    expect(screen.getByText("Faites auditer votre code PHP")).toBeInTheDocument();
  });

  it("renders performance CTA for docker slugs", () => {
    render(<ArticleCta slug="docker-production" />);
    expect(screen.getByText("Optimisez les performances de votre application")).toBeInTheDocument();
  });

  it("renders AI CTA for IA slugs", () => {
    render(<ArticleCta slug="rag-symfony-ai-doctrine" />);
    expect(screen.getByText(/IA dans votre projet/)).toBeInTheDocument();
  });

  it("renders Symfony CTA for Symfony categories", () => {
    render(<ArticleCta category="Outils" slug="some-tool" />);
    expect(screen.getByText(/expertise Symfony/)).toBeInTheDocument();
  });

  it("fires tracking event on click", () => {
    const gtagSpy = jest.fn();
    window.gtag = gtagSpy;

    render(<ArticleCta slug="mon-article" />);
    fireEvent.click(screen.getByRole("link", { name: "Contactez-nous" }));

    expect(gtagSpy).toHaveBeenCalledWith("event", "cta_click", {
      cta_location: "article_body",
      cta_text: "Contactez-nous",
      article_slug: "mon-article",
    });
  });
});
