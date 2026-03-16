import { render, screen, act } from "@testing-library/react";

jest.mock("next/link", () => {
  return ({ href, children, ...props }: any) => <a href={href} {...props}>{children}</a>;
});

import StickyMobileCta from "@/components/sections/StickyMobileCta";

let intersectionCallbacks: IntersectionObserverCallback[] = [];
const mockDisconnect = jest.fn();

beforeEach(() => {
  intersectionCallbacks = [];
  mockDisconnect.mockClear();
  document.querySelectorAll("[data-cta-section]").forEach((el) => el.remove());
  (global as any).IntersectionObserver = jest.fn((cb: IntersectionObserverCallback) => {
    intersectionCallbacks.push(cb);
    return { observe: jest.fn(), unobserve: jest.fn(), disconnect: mockDisconnect };
  });
});

afterEach(() => {
  document.querySelectorAll("[data-cta-section]").forEach((el) => el.remove());
});

function getLastCallback() {
  return intersectionCallbacks[intersectionCallbacks.length - 1];
}

describe("StickyMobileCta", () => {
  it("renders the CTA link", () => {
    render(<StickyMobileCta />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/audit-symfony-gratuit");
  });

  it("is visible by default", () => {
    render(<StickyMobileCta />);
    const container = screen.getByRole("link").parentElement;
    expect(container?.className).toContain("translate-y-0");
  });

  it("hides when a cta-section is intersecting", () => {
    const ctaSection = document.createElement("div");
    ctaSection.setAttribute("data-cta-section", "");
    document.body.appendChild(ctaSection);

    render(<StickyMobileCta />);

    act(() => {
      getLastCallback()(
        [{ isIntersecting: true }] as any,
        {} as any,
      );
    });

    const container = screen.getByRole("link").parentElement;
    expect(container?.className).toContain("translate-y-full");
  });

  it("shows when no cta-section is intersecting", () => {
    const ctaSection = document.createElement("div");
    ctaSection.setAttribute("data-cta-section", "");
    document.body.appendChild(ctaSection);

    render(<StickyMobileCta />);
    const cb = getLastCallback();

    act(() => {
      cb([{ isIntersecting: true }] as any, {} as any);
    });

    act(() => {
      cb([{ isIntersecting: false }] as any, {} as any);
    });

    const container = screen.getByRole("link").parentElement;
    expect(container?.className).toContain("translate-y-0");
  });

  it("does not create component observer when no targets exist", () => {
    const constructorCalls = (global as any).IntersectionObserver.mock.calls.length;
    render(<StickyMobileCta />);
    const newCalls = (global as any).IntersectionObserver.mock.calls.length - constructorCalls;
    expect(newCalls).toBeLessThanOrEqual(1);
  });

  it("disconnects observer on unmount", () => {
    const ctaSection = document.createElement("div");
    ctaSection.setAttribute("data-cta-section", "");
    document.body.appendChild(ctaSection);

    const { unmount } = render(<StickyMobileCta />);
    unmount();
    expect(mockDisconnect).toHaveBeenCalled();
  });

  it("does nothing when IntersectionObserver is undefined", () => {
    const saved = (global as any).IntersectionObserver;
    (global as any).IntersectionObserver = undefined;

    const { container } = render(<StickyMobileCta />);
    expect(container.querySelector("a")).toHaveAttribute("href", "/audit-symfony-gratuit");

    (global as any).IntersectionObserver = saved;
  });
});
