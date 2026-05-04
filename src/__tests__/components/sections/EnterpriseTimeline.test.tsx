import { render, act } from "@testing-library/react";
import EnterpriseTimeline from "@/components/sections/EnterpriseTimeline";

describe("EnterpriseTimeline", () => {
  let rafCallback: FrameRequestCallback | null = null;

  beforeEach(() => {
    rafCallback = null;

    Object.defineProperty(window, "innerHeight", {
      value: 100,
      configurable: true,
    });

    jest.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      rafCallback = cb;
      return 1;
    });

    jest.spyOn(window, "cancelAnimationFrame").mockImplementation(() => {});

    jest.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(function (this: HTMLElement) {
      if (this.classList.contains("max-w-2xl")) {
        return { top: 0, height: 100 } as DOMRect;
      }

      const text = this.textContent ?? "";
      if (text.includes("2020")) {
        return { top: 50, height: 0 } as DOMRect;
      }
      if (text.includes("2021")) {
        return { top: 100, height: 0 } as DOMRect;
      }

      return { top: 0, height: 0 } as DOMRect;
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("couvre le calcul d'avancement et les refs item null", () => {
    const items = [
      { year: "2020", title: "Titre 1", description: "Desc 1" },
      { year: "2021", title: "Titre 2", description: "Desc 2" },
    ];

    const { rerender, container } = render(<EnterpriseTimeline items={items} />);

    const progressBar = container.querySelector("div.bg-primary") as HTMLDivElement | null;
    expect(progressBar).not.toBeNull();
    expect(parseFloat(progressBar!.style.height)).toBe(68);

    const nextItems = [{ year: "2020", title: "Titre 1", description: "Desc 1" }];
    rerender(<EnterpriseTimeline items={nextItems} />);

    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    expect(window.requestAnimationFrame).toHaveBeenCalled();
    expect(window.cancelAnimationFrame).toHaveBeenCalled();

    expect(rafCallback).not.toBeNull();
    act(() => {
      rafCallback!(0);
    });
  });

  it("couvre le return quand le container ref est null", () => {
    const items = [{ year: "2020", title: "Titre 1", description: "Desc 1" }];
    const { unmount } = render(<EnterpriseTimeline items={items} />);

    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    expect(rafCallback).not.toBeNull();
    unmount();

    act(() => {
      rafCallback!(0);
    });

    expect(window.requestAnimationFrame).toHaveBeenCalled();
    expect(window.cancelAnimationFrame).toHaveBeenCalled();
  });
});

