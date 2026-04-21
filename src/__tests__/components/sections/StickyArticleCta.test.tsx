import { act, fireEvent, render, screen } from "@testing-library/react";
import StickyArticleCta from "@/components/sections/StickyArticleCta";

jest.mock("next/link", () => {
  function MockLink({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) {
    return <a href={href} {...props}>{children}</a>;
  }
  return MockLink;
});

let intersectionCallbacks: IntersectionObserverCallback[] = [];
const mockDisconnect = jest.fn();

beforeEach(() => {
  intersectionCallbacks = [];
  mockDisconnect.mockClear();
  document.querySelectorAll("[data-cta-section]").forEach((el) => el.remove());
  (globalThis as unknown as Record<string, unknown>).IntersectionObserver = jest.fn((cb: IntersectionObserverCallback) => {
    intersectionCallbacks.push(cb);
    return { observe: jest.fn(), unobserve: jest.fn(), disconnect: mockDisconnect };
  });
});

afterEach(() => {
  document.querySelectorAll("[data-cta-section]").forEach((el) => el.remove());
});

function getLastCallback() {
  const callback = intersectionCallbacks.at(-1);
  if (!callback) {
    throw new Error("IntersectionObserver callback not initialized");
  }
  return callback;
}

describe("StickyArticleCta", () => {
  it("renders the link with provided href", () => {
    render(<StickyArticleCta href="/contact" />);
    expect(screen.getByRole("link", { name: "Parler de votre projet" })).toHaveAttribute("href", "/contact");
  });

  it("is visible by default", () => {
    render(<StickyArticleCta href="/contact" />);
    const container = screen.getByText("Besoin d'un regard externe sur votre projet ?").parentElement;
    expect(container?.className).toContain("translate-y-0");
  });

  it("hides when article cta is intersecting", () => {
    const ctaSection = document.createElement("div");
    ctaSection.dataset.ctaSection = "";
    document.body.appendChild(ctaSection);

    render(<StickyArticleCta href="/contact" />);

    act(() => {
      getLastCallback()(
        [{ isIntersecting: true }] as unknown as IntersectionObserverEntry[],
        {} as unknown as IntersectionObserver,
      );
    });

    const container = screen.getByText("Besoin d'un regard externe sur votre projet ?").parentElement;
    expect(container?.className).toContain("translate-y-full");
  });

  it("fires tracking event on click", () => {
    const gtagSpy = jest.fn();
    globalThis.window.gtag = gtagSpy;

    render(<StickyArticleCta href="/contact" slug="article-test" />);
    fireEvent.click(screen.getByRole("link", { name: "Parler de votre projet" }));

    expect(gtagSpy).toHaveBeenCalledWith("event", "cta_click", {
      cta_location: "article_sticky",
      cta_text: "Parler de votre projet",
      article_slug: "article-test",
    });

    delete globalThis.window.gtag;
  });

  it("stays visible when no cta section exists", () => {
    render(<StickyArticleCta href="/contact" />);
    const container = screen.getByText("Besoin d'un regard externe sur votre projet ?").parentElement;
    expect(container?.className).toContain("translate-y-0");
  });

  it("shows again when cta section is no longer intersecting", () => {
    const ctaSection = document.createElement("div");
    ctaSection.dataset.ctaSection = "";
    document.body.appendChild(ctaSection);

    render(<StickyArticleCta href="/contact" />);
    const callback = getLastCallback();

    act(() => {
      callback(
        [{ isIntersecting: true }] as unknown as IntersectionObserverEntry[],
        {} as unknown as IntersectionObserver,
      );
    });

    act(() => {
      callback(
        [{ isIntersecting: false }] as unknown as IntersectionObserverEntry[],
        {} as unknown as IntersectionObserver,
      );
    });

    const container = screen.getByText("Besoin d'un regard externe sur votre projet ?").parentElement;
    expect(container?.className).toContain("translate-y-0");
  });

  it("does nothing when IntersectionObserver is undefined", () => {
    const saved = (globalThis as unknown as Record<string, unknown>).IntersectionObserver;
    (globalThis as unknown as Record<string, unknown>).IntersectionObserver = undefined;

    render(<StickyArticleCta href="/contact" />);
    expect(screen.getByRole("link", { name: "Parler de votre projet" })).toHaveAttribute("href", "/contact");

    (globalThis as unknown as Record<string, unknown>).IntersectionObserver = saved;
  });
});
