import { fireEvent, render, screen } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import CookieConsent from "@/components/ui/CookieConsent";

beforeEach(() => {
  localStorage.clear();
});

describe("CookieConsent", () => {
  it("shows the banner in French by default", () => {
    render(<CookieConsent />);
    expect(screen.getByRole("dialog", { name: "Gestion des cookies" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "En savoir plus" })).toHaveAttribute("href", "/politique-de-confidentialite");
    expect(screen.getByRole("button", { name: "Refuser" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Accepter" })).toBeInTheDocument();
  });

  it("shows the banner in English", () => {
    render(<CookieConsent language="en" />);
    expect(screen.getByRole("dialog", { name: "Cookie settings" })).toBeInTheDocument();
    const link = screen.getByRole("link", { name: "Learn more (in French)" });
    expect(link).toHaveAttribute("href", "/politique-de-confidentialite");
    expect(link).toHaveAttribute("hrefLang", "fr");
    expect(screen.getByRole("button", { name: "Decline" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Accept" })).toBeInTheDocument();
  });

  it("stores the acceptance and hides the banner", () => {
    render(<CookieConsent />);
    fireEvent.click(screen.getByRole("button", { name: "Accepter" }));
    expect(localStorage.getItem("cookie-consent")).toBe("accepted");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("stores the refusal and hides the banner", () => {
    render(<CookieConsent />);
    fireEvent.click(screen.getByRole("button", { name: "Refuser" }));
    expect(localStorage.getItem("cookie-consent")).toBe("refused");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("stays hidden when a choice was already made", () => {
    localStorage.setItem("cookie-consent", "accepted");
    render(<CookieConsent />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders nothing on the server", () => {
    expect(renderToStaticMarkup(<CookieConsent />)).toBe("");
  });
});