import { act, fireEvent, render, screen } from "@testing-library/react";
import TableOfContents from "@/components/ui/TableOfContents";

const headings = [
  { id: "a", text: "A", level: 2 },
  { id: "b", text: "B", level: 2 },
  { id: "c", text: "C", level: 2 },
];

let callback: IntersectionObserverCallback | undefined;
const observe = jest.fn();
const disconnect = jest.fn();

beforeEach(() => {
  callback = undefined;
  observe.mockClear();
  disconnect.mockClear();
  (globalThis as unknown as Record<string, unknown>).IntersectionObserver = jest.fn(
    (cb: IntersectionObserverCallback) => {
      callback = cb;
      return { observe, disconnect };
    },
  );
  document.body.innerHTML = '<h2 id="a"></h2><h2 id="b"></h2>';
});

describe("TableOfContents", () => {
  it("renders nothing under three headings", () => {
    const { container } = render(<TableOfContents headings={headings.slice(0, 2)} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("uses French by default", () => {
    render(<TableOfContents headings={headings} />);
    expect(screen.getAllByText("Sommaire").length).toBeGreaterThan(0);
  });

  it("uses English when asked", () => {
    render(<TableOfContents headings={headings} language="en" />);
    expect(screen.getAllByText("Contents").length).toBeGreaterThan(0);
    expect(screen.queryByText("Sommaire")).toBeNull();
  });

  it("observes only headings present in the document", () => {
    render(<TableOfContents headings={headings} />);
    expect(observe).toHaveBeenCalledTimes(2);
  });

  it("disconnects the observer on unmount", () => {
    const { unmount } = render(<TableOfContents headings={headings} />);
    unmount();
    expect(disconnect).toHaveBeenCalled();
  });

  it("highlights the intersecting heading", () => {
    render(<TableOfContents headings={headings} />);
    act(() => {
      callback?.(
        [
          { isIntersecting: false, target: { id: "a" } },
          { isIntersecting: true, target: { id: "b" } },
        ] as unknown as IntersectionObserverEntry[],
        {} as IntersectionObserver,
      );
    });
    const active = screen.getAllByText("B").map((el) => el.className);
    expect(active.every((c) => c.includes("text-primary"))).toBe(true);
  });

  it("opens and closes the mobile list", () => {
    render(<TableOfContents headings={headings} />);
    const button = screen.getByRole("button", { name: /Sommaire/ });
    expect(screen.getAllByText("A")).toHaveLength(1);
    fireEvent.click(button);
    expect(screen.getAllByText("A")).toHaveLength(2);
    fireEvent.click(screen.getAllByText("A")[0]);
    expect(screen.getAllByText("A")).toHaveLength(1);
  });

  it("highlights the active heading in the mobile list", () => {
    render(<TableOfContents headings={headings} />);
    act(() => {
      callback?.(
        [{ isIntersecting: true, target: { id: "b" } }] as unknown as IntersectionObserverEntry[],
        {} as IntersectionObserver,
      );
    });
    fireEvent.click(screen.getByRole("button", { name: /Sommaire/ }));
    expect(screen.getAllByText("B")[0].className).toContain("font-semibold");
  });
});
