import { render, screen, act } from "@testing-library/react";
import FadeIn from "@/components/ui/FadeIn";

let intersectionCallback: IntersectionObserverCallback;
const mockObserve = jest.fn();
const mockUnobserve = jest.fn();
const mockDisconnect = jest.fn();

beforeEach(() => {
  jest.restoreAllMocks();
  mockObserve.mockClear();
  mockUnobserve.mockClear();
  mockDisconnect.mockClear();
  (global as any).IntersectionObserver = jest.fn((cb) => {
    intersectionCallback = cb;
    return { observe: mockObserve, unobserve: mockUnobserve, disconnect: mockDisconnect };
  });
  window.matchMedia = jest.fn().mockReturnValue({
    matches: false,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  });
});

describe("FadeIn", () => {
  it("renders children", () => {
    render(<FadeIn>Hello</FadeIn>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("starts with opacity-0 class when not visible", () => {
    render(<FadeIn>Content</FadeIn>);
    const el = screen.getByText("Content");
    expect(el.className).toContain("opacity-0");
  });

  it("becomes visible on intersection", () => {
    render(<FadeIn>Content</FadeIn>);

    act(() => {
      intersectionCallback([{ isIntersecting: true }] as any, {} as any);
    });

    const el = screen.getByText("Content");
    expect(el.className).toContain("opacity-100");
    expect(mockUnobserve).toHaveBeenCalled();
  });

  it("does not change on non-intersecting entry", () => {
    render(<FadeIn>Content</FadeIn>);

    act(() => {
      intersectionCallback([{ isIntersecting: false }] as any, {} as any);
    });

    const el = screen.getByText("Content");
    expect(el.className).toContain("opacity-0");
  });

  it("applies custom className", () => {
    render(<FadeIn className="custom-class">Content</FadeIn>);
    const el = screen.getByText("Content");
    expect(el.className).toContain("custom-class");
  });

  it("applies delay as transitionDelay style", () => {
    render(<FadeIn delay={200}>Content</FadeIn>);
    const el = screen.getByText("Content");
    expect(el.style.transitionDelay).toBe("200ms");
  });

  it("renders without animation when prefers-reduced-motion is true", () => {
    (window.matchMedia as jest.Mock).mockReturnValue({
      matches: true,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    });

    render(<FadeIn className="my-class">Reduced</FadeIn>);
    const el = screen.getByText("Reduced");
    expect(el.className).toContain("my-class");
    expect(el.className).not.toContain("opacity-0");
    expect(mockObserve).not.toHaveBeenCalled();
  });

  it("disconnects observer on unmount", () => {
    const { unmount } = render(<FadeIn>Content</FadeIn>);
    unmount();
    expect(mockDisconnect).toHaveBeenCalled();
  });

  it("returns false from server snapshot", () => {
    const origUseSyncExternalStore = jest.requireActual("react").useSyncExternalStore;
    let capturedServerSnapshot: (() => boolean) | undefined;
    const react = require("react");
    const original = react.useSyncExternalStore;
    react.useSyncExternalStore = (subscribe: any, getSnapshot: any, getServerSnapshot: any) => {
      if (getServerSnapshot && !capturedServerSnapshot) {
        capturedServerSnapshot = getServerSnapshot;
      }
      return origUseSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    };
    render(<FadeIn>SSR</FadeIn>);
    react.useSyncExternalStore = original;
    expect(capturedServerSnapshot!()).toBe(false);
  });
});
