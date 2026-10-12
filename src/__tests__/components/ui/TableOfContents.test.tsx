import { render, screen } from "@testing-library/react";
import TableOfContents from "@/components/ui/TableOfContents";

const headings = [
  { id: "a", text: "A", level: 2 },
  { id: "b", text: "B", level: 2 },
  { id: "c", text: "C", level: 2 },
];

beforeEach(() => {
  (globalThis as unknown as Record<string, unknown>).IntersectionObserver = jest.fn(() => ({
    observe: jest.fn(),
    disconnect: jest.fn(),
  }));
});

describe("TableOfContents labels", () => {
  it("uses French by default", () => {
    render(<TableOfContents headings={headings} />);
    expect(screen.getAllByText("Sommaire").length).toBeGreaterThan(0);
  });

  it("uses English when asked", () => {
    render(<TableOfContents headings={headings} language="en" />);
    expect(screen.getAllByText("Contents").length).toBeGreaterThan(0);
    expect(screen.queryByText("Sommaire")).toBeNull();
  });
});
