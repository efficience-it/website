import { act, fireEvent, render, screen } from "@testing-library/react";
import CopyButton from "@/components/ui/CopyButton";

const writeText = jest.fn();

beforeEach(() => {
  jest.useFakeTimers();
  writeText.mockClear();
  Object.defineProperty(navigator, "clipboard", { value: { writeText }, configurable: true });
});

afterEach(() => {
  jest.useRealTimers();
});

describe("CopyButton", () => {
  it("copies the text and resets the label in French", () => {
    render(<CopyButton text="composer install" />);
    fireEvent.click(screen.getByRole("button", { name: "Copier" }));
    expect(writeText).toHaveBeenCalledWith("composer install");
    expect(screen.getByRole("button", { name: "Copié !" })).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByRole("button", { name: "Copier" })).toBeInTheDocument();
  });

  it("uses English labels", () => {
    render(<CopyButton text="composer install" language="en" />);
    fireEvent.click(screen.getByRole("button", { name: "Copy" }));
    expect(screen.getByRole("button", { name: "Copied!" })).toBeInTheDocument();
  });
});
