import { render, screen, act } from "@testing-library/react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

let intersectionCallback: IntersectionObserverCallback;
const mockObserve = jest.fn();
const mockUnobserve = jest.fn();
const mockDisconnect = jest.fn();

beforeEach(() => {
  jest.restoreAllMocks();
  mockObserve.mockClear();
  mockUnobserve.mockClear();
  mockDisconnect.mockClear();
  (global as unknown as Record<string, unknown>).IntersectionObserver = jest.fn((cb) => {
    intersectionCallback = cb;
    return { observe: mockObserve, unobserve: mockUnobserve, disconnect: mockDisconnect };
  });
  window.matchMedia = jest.fn().mockReturnValue({
    matches: false,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  });
});

describe("AnimatedCounter", () => {
  it("renders with initial count 0 when no reduced motion", () => {
    render(<AnimatedCounter value={100} />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("renders suffix", () => {
    const { container } = render(<AnimatedCounter value={100} suffix="%" />);
    expect(container.querySelector("span")!.textContent).toBe("0%");
  });

  it("shows final value immediately when prefers-reduced-motion", () => {
    (window.matchMedia as jest.Mock).mockReturnValue({
      matches: true,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    });
    const { container } = render(<AnimatedCounter value={42} suffix="+" />);
    expect(container.querySelector("span")!.textContent).toBe("42+");
  });

  it("animates to final value on intersection", () => {
    jest.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      cb(performance.now() + 3000);
      return 0;
    });

    const { container } = render(<AnimatedCounter value={50} duration={2000} />);

    act(() => {
      intersectionCallback(
        [{ isIntersecting: true }] as unknown as IntersectionObserverEntry[],
        {} as unknown as IntersectionObserver,
      );
    });

    expect(container.querySelector("span")!.textContent).toBe("50");
    expect(mockUnobserve).toHaveBeenCalled();
  });

  it("does not animate when not intersecting", () => {
    render(<AnimatedCounter value={50} />);

    act(() => {
      intersectionCallback(
        [{ isIntersecting: false }] as unknown as IntersectionObserverEntry[],
        {} as unknown as IntersectionObserver,
      );
    });

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("does not animate twice", () => {
    const rafSpy = jest.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      cb(performance.now() + 3000);
      return 0;
    });

    render(<AnimatedCounter value={50} duration={2000} />);

    act(() => {
      intersectionCallback([{ isIntersecting: true }] as unknown as IntersectionObserverEntry[], {} as unknown as IntersectionObserver);
    });

    rafSpy.mockClear();

    act(() => {
      intersectionCallback([{ isIntersecting: true }] as unknown as IntersectionObserverEntry[], {} as unknown as IntersectionObserver);
    });

    expect(rafSpy).not.toHaveBeenCalled();
  });

  it("animates progressively with requestAnimationFrame", () => {
    const calls: Array<FrameRequestCallback> = [];
    jest.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      calls.push(cb);
      return 0;
    });

    const { container } = render(<AnimatedCounter value={100} duration={2000} />);

    act(() => {
      intersectionCallback([{ isIntersecting: true }] as unknown as IntersectionObserverEntry[], {} as unknown as IntersectionObserver);
    });

    const startTime = performance.now();

    act(() => {
      if (calls.length > 0) calls[calls.length - 1](startTime + 1000);
    });

    const val = parseInt(container.querySelector("span")!.textContent || "0");
    expect(val).toBeGreaterThan(0);
    expect(val).toBeLessThan(100);
  });

  it("disconnects observer on unmount", () => {
    const { unmount } = render(<AnimatedCounter value={10} />);
    unmount();
    expect(mockDisconnect).toHaveBeenCalled();
  });

  it("returns false from server snapshot", () => {
    const origUseSyncExternalStore = jest.requireActual("react").useSyncExternalStore;
    let capturedServerSnapshot: (() => boolean) | undefined;
    const react = jest.requireActual("react") as Record<string, unknown>;
    const original = react.useSyncExternalStore;
    react.useSyncExternalStore = (subscribe: () => void, getSnapshot: () => boolean, getServerSnapshot?: () => boolean) => {
      if (getServerSnapshot && !capturedServerSnapshot) {
        capturedServerSnapshot = getServerSnapshot;
      }
      return origUseSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    };
    render(<AnimatedCounter value={10} />);
    react.useSyncExternalStore = original;
    expect(capturedServerSnapshot!()).toBe(false);
  });
});
