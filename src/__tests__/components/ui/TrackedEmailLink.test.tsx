import { render, screen, fireEvent } from "@testing-library/react";
import TrackedEmailLink from "@/components/ui/TrackedEmailLink";

describe("TrackedEmailLink", () => {
  it("renders a mailto link with the email", () => {
    render(<TrackedEmailLink email="test@example.com" />);
    const link = screen.getByText("test@example.com");
    expect(link).toHaveAttribute("href", "mailto:test@example.com");
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

    expect(gtagSpy).toHaveBeenCalledWith("event", "cta_click", {
      cta_location: "footer",
      cta_text: "email_contact",
    });

    delete window.gtag;
  });
});
