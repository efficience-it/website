import { render, screen, fireEvent, act } from "@testing-library/react";
import Testimonials from "@/components/sections/Testimonials";
import { testimonials } from "@/../data/testimonials";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

describe("Testimonials", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders the first testimonial", () => {
    render(<Testimonials />);
    expect(screen.getByText("Témoignages")).toBeInTheDocument();
    expect(screen.getByText(testimonials[0].quote)).toBeInTheDocument();
  });

  it("advances to next testimonial on next button click", () => {
    render(<Testimonials />);
    const nextButton = screen.getByLabelText("Témoignage suivant");
    fireEvent.click(nextButton);
    const slider = screen.getByText(testimonials[0].quote).closest(".flex");
    expect(slider).toHaveStyle({ transform: "translateX(-100%)" });
  });

  it("goes to previous testimonial on prev button click", () => {
    render(<Testimonials />);
    const nextButton = screen.getByLabelText("Témoignage suivant");
    fireEvent.click(nextButton);

    const prevButton = screen.getByLabelText("Témoignage précédent");
    fireEvent.click(prevButton);
    const slider = screen.getByText(testimonials[0].quote).closest(".flex");
    expect(slider).toHaveStyle({ transform: "translateX(-0%)" });
  });

  it("navigates to specific testimonial on dot click", () => {
    render(<Testimonials />);
    const dotButton = screen.getByLabelText("Aller au témoignage 3");
    fireEvent.click(dotButton);
    const slider = screen.getByText(testimonials[0].quote).closest(".flex");
    expect(slider).toHaveStyle({ transform: "translateX(-200%)" });
  });

  it("auto-advances after 5000ms", () => {
    render(<Testimonials />);
    const slider = screen.getByText(testimonials[0].quote).closest(".flex");
    expect(slider).toHaveStyle({ transform: "translateX(-0%)" });

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(slider).toHaveStyle({ transform: "translateX(-100%)" });
  });

  it("does not auto-advance when prefers-reduced-motion is enabled", () => {
    (window.matchMedia as jest.Mock).mockImplementationOnce((query: string) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    render(<Testimonials />);
    const slider = screen.getByText(testimonials[0].quote).closest(".flex");

    act(() => {
      jest.advanceTimersByTime(10000);
    });

    expect(slider).toHaveStyle({ transform: "translateX(-0%)" });
  });

  it("pauses autoplay on mouse enter and resumes on mouse leave", () => {
    render(<Testimonials />);
    const carousel = screen.getByText(testimonials[0].quote).closest(".relative");
    const slider = screen.getByText(testimonials[0].quote).closest(".flex");

    fireEvent.mouseEnter(carousel!);
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(slider).toHaveStyle({ transform: "translateX(-0%)" });

    fireEvent.mouseLeave(carousel!);
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(slider).toHaveStyle({ transform: "translateX(-100%)" });
  });
});
