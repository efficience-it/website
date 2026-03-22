import { render, screen, fireEvent } from "@testing-library/react";
import HeaderCtas from "@/components/layout/HeaderCtas";

describe("HeaderCtas", () => {
  it("renders audit and contact links", () => {
    render(<HeaderCtas />);
    expect(screen.getByRole("link", { name: "Audit gratuit" })).toHaveAttribute("href", "/audit-symfony-gratuit");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact");
  });

  it("fires tracking events on click", () => {
    const gtagSpy = jest.fn();
    window.gtag = gtagSpy;

    render(<HeaderCtas />);

    fireEvent.click(screen.getByRole("link", { name: "Audit gratuit" }));
    expect(gtagSpy).toHaveBeenCalledWith("event", "cta_click", {
      cta_location: "header_desktop",
      cta_text: "Audit gratuit",
    });

    fireEvent.click(screen.getByRole("link", { name: "Contact" }));
    expect(gtagSpy).toHaveBeenCalledWith("event", "cta_click", {
      cta_location: "header_desktop",
      cta_text: "Contact",
    });

    delete window.gtag;
  });
});
