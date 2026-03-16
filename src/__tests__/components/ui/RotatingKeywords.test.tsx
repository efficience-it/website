import { render, screen, act } from "@testing-library/react";
import RotatingKeywords from "@/components/ui/RotatingKeywords";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe("RotatingKeywords", () => {
  it("renders the first keyword initially", () => {
    render(<RotatingKeywords keywords={["PHP", "Symfony", "React"]} />);
    expect(screen.getByText("PHP")).toBeInTheDocument();
  });

  it("applies animation class when transitioning", () => {
    render(<RotatingKeywords keywords={["PHP", "Symfony"]} interval={2500} />);

    act(() => {
      jest.advanceTimersByTime(2500);
    });

    const el = screen.getByText("PHP");
    expect(el.className).toContain("opacity-0");
  });

  it("rotates to the next keyword after animation completes", () => {
    render(<RotatingKeywords keywords={["PHP", "Symfony"]} interval={2500} />);

    act(() => {
      jest.advanceTimersByTime(2500);
    });

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(screen.getByText("Symfony")).toBeInTheDocument();
  });

  it("cycles back to the first keyword", () => {
    render(<RotatingKeywords keywords={["PHP", "Symfony"]} interval={2500} />);

    act(() => {
      jest.advanceTimersByTime(2500);
      jest.advanceTimersByTime(300);
    });

    act(() => {
      jest.advanceTimersByTime(2500);
      jest.advanceTimersByTime(300);
    });

    expect(screen.getByText("PHP")).toBeInTheDocument();
  });

  it("clears interval on unmount", () => {
    const clearIntervalSpy = jest.spyOn(global, "clearInterval");
    const { unmount } = render(<RotatingKeywords keywords={["PHP"]} />);
    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();
  });

  it("uses custom interval", () => {
    render(<RotatingKeywords keywords={["A", "B"]} interval={1000} />);

    act(() => {
      jest.advanceTimersByTime(1000);
      jest.advanceTimersByTime(300);
    });

    expect(screen.getByText("B")).toBeInTheDocument();
  });
});
