import { render, screen, fireEvent } from "@testing-library/react";
import TrackedEmailLink from "@/components/ui/TrackedEmailLink";

describe("TrackedEmailLink", () => {
  let savedGtag: typeof window.gtag;

  beforeEach(() => {
    savedGtag = window.gtag;
  });

  afterEach(() => {
    window.gtag = savedGtag;
  });

  it("renders a mailto link with the email", () => {
    render(<TrackedEmailLink email="test@example.com" />);
    const link = screen.getByText("test@example.com");
    expect(link).toHaveAttribute("href", "mailto:test@example.com");
  });

  it("does not have target=_blank", () => {
    render(<TrackedEmailLink email="test@example.com" />);
    const link = screen.getByText("test@example.com");
    expect(link).not.toHaveAttribute("target");
  });

  it("applies the className prop", () => {
    render(<TrackedEmailLink email="test@example.com" className="text-sm" />);
    const link = screen.getByText("test@example.com");
    expect(link.className).toContain("text-sm");
  });

  it("fires a tracking event on click", () => {
    const gtagSpy = jest.fn();
    window.gtag = gtagSpy;

    render(<TrackedEmailLink email="test@example.com" />);
    fireEvent.click(screen.getByText("test@example.com"));

    expect(gtagSpy).toHaveBeenCalledWith("event", "email_clicked", {
      source_location: "footer",
    });
  });

  it("uses the provided sourceLocation prop", () => {
    const gtagSpy = jest.fn();
    window.gtag = gtagSpy;

    render(<TrackedEmailLink email="test@example.com" sourceLocation="header" />);
    fireEvent.click(screen.getByText("test@example.com"));

    expect(gtagSpy).toHaveBeenCalledWith("event", "email_clicked", {
      source_location: "header",
    });
  });
});
