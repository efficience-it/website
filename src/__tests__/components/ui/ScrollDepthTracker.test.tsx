import { render } from "@testing-library/react";
import { act } from "react";
import ScrollDepthTracker from "@/components/ui/ScrollDepthTracker";

describe("ScrollDepthTracker", () => {
  let gtagSpy: jest.Mock;

  beforeEach(() => {
    gtagSpy = jest.fn();
    window.gtag = gtagSpy;

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
    delete window.gtag;
  });

  it("renders nothing visible", () => {
    const { container } = render(<ScrollDepthTracker slug="test-article" />);
    expect(container.innerHTML).toBe("");
  });

  it("fires scroll_depth events at each threshold", () => {
    render(<ScrollDepthTracker slug="test-article" />);

    Object.defineProperty(window, "scrollY", { value: 250, configurable: true });
    act(() => { window.dispatchEvent(new Event("scroll")); });
    expect(gtagSpy).toHaveBeenCalledWith("event", "scroll_depth", {
      event_label: "test-article",
      event_category: "25%",
    });

    Object.defineProperty(window, "scrollY", { value: 500, configurable: true });
    act(() => { window.dispatchEvent(new Event("scroll")); });
    expect(gtagSpy).toHaveBeenCalledWith("event", "scroll_depth", {
      event_label: "test-article",
      event_category: "50%",
    });

    Object.defineProperty(window, "scrollY", { value: 750, configurable: true });
    act(() => { window.dispatchEvent(new Event("scroll")); });
    expect(gtagSpy).toHaveBeenCalledWith("event", "scroll_depth", {
      event_label: "test-article",
      event_category: "75%",
    });

    Object.defineProperty(window, "scrollY", { value: 1000, configurable: true });
    act(() => { window.dispatchEvent(new Event("scroll")); });
    expect(gtagSpy).toHaveBeenCalledWith("event", "scroll_depth", {
      event_label: "test-article",
      event_category: "100%",
    });
  });

  it("does not fire the same threshold twice", () => {
    render(<ScrollDepthTracker slug="test-article" />);

    Object.defineProperty(window, "scrollY", { value: 500, configurable: true });
    act(() => { window.dispatchEvent(new Event("scroll")); });
    act(() => { window.dispatchEvent(new Event("scroll")); });

    const scrollDepthCalls = gtagSpy.mock.calls.filter(
      (call) => call[1] === "scroll_depth" && call[2]?.event_category === "50%",
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
    act(() => { window.dispatchEvent(new Event("scroll")); });

    expect(gtagSpy).not.toHaveBeenCalled();
  });
});
