import { render } from "@testing-library/react";
import { act } from "react";
import ScrollDepthTracker from "@/components/ui/ScrollDepthTracker";

describe("ScrollDepthTracker", () => {
  let gtagSpy: jest.Mock;
  let savedGtag: typeof window.gtag;
  let rafCallback: FrameRequestCallback | null = null;

  beforeEach(() => {
    savedGtag = window.gtag;
    gtagSpy = jest.fn();
    window.gtag = gtagSpy;

    jest.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      rafCallback = cb;
      return 1;
    });
    jest.spyOn(window, "cancelAnimationFrame").mockImplementation(() => {});

    Object.defineProperty(document.documentElement, "scrollHeight", {
      value: 1000,
      configurable: true,
    });
    Object.defineProperty(window, "innerHeight", {
      value: 0,
      configurable: true,
    });
  });

  afterEach(() => {
    window.gtag = savedGtag;
    jest.restoreAllMocks();
  });

  function triggerScroll() {
    act(() => { window.dispatchEvent(new Event("scroll")); });
    if (rafCallback) {
      act(() => { rafCallback!(0); });
      rafCallback = null;
    }
  }

  it("renders nothing visible", () => {
    const { container } = render(<ScrollDepthTracker slug="test-article" />);
    expect(container.innerHTML).toBe("");
  });

  it("fires scroll_depth events at each threshold", () => {
    render(<ScrollDepthTracker slug="test-article" />);

    Object.defineProperty(window, "scrollY", { value: 250, configurable: true });
    triggerScroll();
    expect(gtagSpy).toHaveBeenCalledWith("event", "scroll_depth", {
      event_label: "test-article",
      scroll_percent: "25%",
    });

    Object.defineProperty(window, "scrollY", { value: 500, configurable: true });
    triggerScroll();
    expect(gtagSpy).toHaveBeenCalledWith("event", "scroll_depth", {
      event_label: "test-article",
      scroll_percent: "50%",
    });

    Object.defineProperty(window, "scrollY", { value: 750, configurable: true });
    triggerScroll();
    expect(gtagSpy).toHaveBeenCalledWith("event", "scroll_depth", {
      event_label: "test-article",
      scroll_percent: "75%",
    });

    Object.defineProperty(window, "scrollY", { value: 1000, configurable: true });
    triggerScroll();
    expect(gtagSpy).toHaveBeenCalledWith("event", "scroll_depth", {
      event_label: "test-article",
      scroll_percent: "100%",
    });
  });

  it("does not fire the same threshold twice", () => {
    render(<ScrollDepthTracker slug="test-article" />);

    Object.defineProperty(window, "scrollY", { value: 500, configurable: true });
    triggerScroll();
    triggerScroll();

    const scrollDepthCalls = gtagSpy.mock.calls.filter(
      (call) => call[1] === "scroll_depth" && call[2]?.scroll_percent === "50%",
    );
    expect(scrollDepthCalls).toHaveLength(1);
  });

  it("does nothing when scrollHeight equals innerHeight", () => {
    Object.defineProperty(document.documentElement, "scrollHeight", {
      value: 500,
      configurable: true,
    });
    Object.defineProperty(window, "innerHeight", {
      value: 500,
      configurable: true,
    });

    render(<ScrollDepthTracker slug="test-article" />);

    Object.defineProperty(window, "scrollY", { value: 0, configurable: true });
    triggerScroll();

    expect(gtagSpy).not.toHaveBeenCalled();
  });

  it("throttles rapid scroll events via rAF", () => {
    render(<ScrollDepthTracker slug="test-article" />);

    Object.defineProperty(window, "scrollY", { value: 250, configurable: true });
    act(() => { window.dispatchEvent(new Event("scroll")); });
    act(() => { window.dispatchEvent(new Event("scroll")); });

    expect(window.requestAnimationFrame).toHaveBeenCalledTimes(1);

    if (rafCallback) {
      act(() => { rafCallback!(0); });
      rafCallback = null;
    }

    expect(gtagSpy).toHaveBeenCalledTimes(1);
  });

  it("cancels pending rAF on unmount", () => {
    const { unmount } = render(<ScrollDepthTracker slug="test-article" />);
    act(() => { window.dispatchEvent(new Event("scroll")); });
    unmount();
    expect(window.cancelAnimationFrame).toHaveBeenCalled();
  });
});
