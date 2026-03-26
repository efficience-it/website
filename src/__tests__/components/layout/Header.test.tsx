import { render, screen, fireEvent, act } from "@testing-library/react";
import Header from "@/components/layout/Header";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe("Header", () => {
  it("renders the logo", () => {
    render(<Header />);
    expect(screen.getByAltText("Efficience IT")).toBeInTheDocument();
  });

  it("renders the contact button", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: "Nous contacter" })).toHaveAttribute(
      "href",
      "/contact",
    );
  });

  it("renders desktop navigation links", () => {
    render(<Header />);
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Symfony")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
  });

  it("opens only one dropdown at a time", () => {
    render(<Header />);
    const servicesBtn = screen.getByRole("button", { name: /Services/i });
    const symfonyBtn = screen.getByRole("button", { name: /Symfony/i });

    fireEvent.mouseEnter(servicesBtn.parentElement!);
    expect(servicesBtn).toHaveAttribute("aria-expanded", "true");
    expect(symfonyBtn).toHaveAttribute("aria-expanded", "false");

    fireEvent.mouseEnter(symfonyBtn.parentElement!);
    expect(servicesBtn).toHaveAttribute("aria-expanded", "false");
    expect(symfonyBtn).toHaveAttribute("aria-expanded", "true");
  });

  it("closes dropdown on delayed leave", () => {
    render(<Header />);
    const servicesBtn = screen.getByRole("button", { name: /Services/i });

    fireEvent.mouseEnter(servicesBtn.parentElement!);
    expect(servicesBtn).toHaveAttribute("aria-expanded", "true");

    fireEvent.mouseLeave(servicesBtn.parentElement!);
    act(() => {
      jest.advanceTimersByTime(150);
    });
    expect(servicesBtn).toHaveAttribute("aria-expanded", "false");
  });

  it("cancels delayed close when switching dropdown", () => {
    render(<Header />);
    const servicesBtn = screen.getByRole("button", { name: /Services/i });
    const symfonyBtn = screen.getByRole("button", { name: /Symfony/i });

    fireEvent.mouseEnter(servicesBtn.parentElement!);
    fireEvent.mouseLeave(servicesBtn.parentElement!);
    fireEvent.mouseEnter(symfonyBtn.parentElement!);

    act(() => {
      jest.advanceTimersByTime(150);
    });
    expect(symfonyBtn).toHaveAttribute("aria-expanded", "true");
  });

  it("closes dropdown when hovering a plain link", () => {
    render(<Header />);
    const servicesBtn = screen.getByRole("button", { name: /Services/i });
    const blogLink = screen.getByText("Blog");

    fireEvent.mouseEnter(servicesBtn.parentElement!);
    expect(servicesBtn).toHaveAttribute("aria-expanded", "true");

    fireEvent.mouseEnter(blogLink);
    expect(servicesBtn).toHaveAttribute("aria-expanded", "false");
  });
});
