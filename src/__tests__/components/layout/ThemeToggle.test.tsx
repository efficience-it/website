import { render, screen, fireEvent } from "@testing-library/react";
import ThemeToggle from "@/components/layout/ThemeToggle";

describe("ThemeToggle", () => {
  let addEventListenerMock: jest.Mock;
  let removeEventListenerMock: jest.Mock;
  
  beforeEach(() => {
    // Reset local storage
    localStorage.clear();
    
    // Reset document
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.style.colorScheme = "";

    addEventListenerMock = jest.fn();
    removeEventListenerMock = jest.fn();

    // Mock matchMedia
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: addEventListenerMock,
        removeEventListener: removeEventListenerMock,
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("renders the toggle button", () => {
    render(<ThemeToggle />);
    expect(screen.getByRole("button", { name: /Basculer le thème/i })).toBeInTheDocument();
  });

  it("toggles theme on click", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /Basculer le thème/i });
    
    // Initial state is usually light in tests if not set
    fireEvent.click(button);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");

    // Click again to toggle back to light
    fireEvent.click(button);
    expect(document.documentElement.classList.contains("light")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("responds to system theme changes", () => {
    render(<ThemeToggle />);
    
    // Trigger system theme change to dark
    const changeEvent = new Event("change") as Event & { matches: boolean };
    changeEvent.matches = true; // dark mode
    
    // Since addEventListener was called with handleSystemChange, we need to extract it
    const handleSystemChange = addEventListenerMock.mock.calls[0][1];
    handleSystemChange(changeEvent);

    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("responds to system theme changes to light", () => {
    render(<ThemeToggle />);
    
    // Trigger system theme change to light
    const changeEvent = new Event("change") as Event & { matches: boolean };
    changeEvent.matches = false; // light mode
    
    const handleSystemChange = addEventListenerMock.mock.calls[0][1];
    handleSystemChange(changeEvent);

    expect(document.documentElement.classList.contains("light")).toBe(true);
  });

  it("does not respond to system theme changes if user has set a theme", () => {
    localStorage.setItem("theme", "light");
    render(<ThemeToggle />);
    
    const changeEvent = new Event("change") as Event & { matches: boolean };
    changeEvent.matches = true; // dark mode
    
    const handleSystemChange = addEventListenerMock.mock.calls[0][1];
    handleSystemChange(changeEvent);

    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});
