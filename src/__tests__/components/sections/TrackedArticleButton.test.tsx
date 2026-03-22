import { render, screen, fireEvent } from "@testing-library/react";
import TrackedArticleButton from "@/components/sections/TrackedArticleButton";

describe("TrackedArticleButton", () => {
  let savedGtag: typeof window.gtag;

  beforeEach(() => {
    savedGtag = window.gtag;
  });

  afterEach(() => {
    window.gtag = savedGtag;
  });

  it("renders a link with the correct href and label", () => {
    render(<TrackedArticleButton href="/contact" label="Contactez-nous" />);
    expect(screen.getByRole("link", { name: "Contactez-nous" })).toHaveAttribute("href", "/contact");
  });

  it("fires tracking event on click with slug", () => {
    const gtagSpy = jest.fn();
    window.gtag = gtagSpy;

    render(<TrackedArticleButton href="/contact" label="Contactez-nous" slug="mon-article" />);
    fireEvent.click(screen.getByRole("link", { name: "Contactez-nous" }));

    expect(gtagSpy).toHaveBeenCalledWith("event", "cta_click", {
      cta_location: "article_body",
      cta_text: "Contactez-nous",
      article_slug: "mon-article",
    });
  });

  it("fires tracking event on click without slug", () => {
    const gtagSpy = jest.fn();
    window.gtag = gtagSpy;

    render(<TrackedArticleButton href="/audit-symfony-gratuit" label="Demander un audit" />);
    fireEvent.click(screen.getByRole("link", { name: "Demander un audit" }));

    expect(gtagSpy).toHaveBeenCalledWith("event", "cta_click", {
      cta_location: "article_body",
      cta_text: "Demander un audit",
      article_slug: undefined,
    });
  });
});
