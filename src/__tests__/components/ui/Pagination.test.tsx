import { render, screen } from "@testing-library/react";
import Pagination from "@/components/ui/Pagination";

const href = (page: number) => (page === 1 ? "/blog" : `/blog/page/${page}`);

describe("Pagination", () => {
  it("renders nothing for a single page", () => {
    const { container } = render(<Pagination currentPage={1} pageCount={1} getPageHref={href} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("hides the previous link on the first page", () => {
    render(<Pagination currentPage={1} pageCount={3} getPageHref={href} />);
    expect(screen.queryByText("Précédent")).not.toBeInTheDocument();
    expect(screen.getByText("Suivant")).toHaveAttribute("href", "/blog/page/2");
    expect(screen.getByText("Suivant")).toHaveAttribute("rel", "next");
  });

  it("shows both links on a middle page", () => {
    render(<Pagination currentPage={2} pageCount={3} getPageHref={href} />);
    expect(screen.getByText("Précédent")).toHaveAttribute("href", "/blog");
    expect(screen.getByText("Précédent")).toHaveAttribute("rel", "prev");
    expect(screen.getByText("Suivant")).toHaveAttribute("href", "/blog/page/3");
  });

  it("hides the next link on the last page", () => {
    render(<Pagination currentPage={3} pageCount={3} getPageHref={href} />);
    expect(screen.queryByText("Suivant")).not.toBeInTheDocument();
    expect(screen.getByText("Précédent")).toHaveAttribute("href", "/blog/page/2");
  });

  it("marks the current page and links the others", () => {
    render(<Pagination currentPage={2} pageCount={3} getPageHref={href} />);
    expect(screen.getByText("2")).toHaveAttribute("aria-current", "page");
    expect(screen.getByText("2").tagName).toBe("SPAN");
    expect(screen.getByLabelText("Page 3")).toHaveAttribute("href", "/blog/page/3");
    expect(screen.getByLabelText("Page 1")).toHaveAttribute("href", "/blog");
  });
});
