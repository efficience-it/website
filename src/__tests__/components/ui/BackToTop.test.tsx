import { fireEvent, render, screen } from "@testing-library/react";
import BackToTop from "@/components/ui/BackToTop";

const scrollTo = jest.fn();

beforeEach(() => {
    scrollTo.mockClear();
    window.scrollTo = scrollTo;
    Object.defineProperty(window, "scrollY", { value: 0, writable: true, configurable: true });
    window.matchMedia = jest.fn().mockReturnValue({ matches: false });
});

describe("BackToTop", () => {
    it("is hidden at the top of the page", () => {
        render(<BackToTop label="Retour en haut" />);
        expect(screen.queryByRole("button", { name: "Retour en haut" })).not.toBeInTheDocument();
    });

    it("shows the button after scrolling past the threshold", () => {
        render(<BackToTop label="Retour en haut" />);
        window.scrollY = 400;
        fireEvent.scroll(window);
        expect(screen.getByRole("button", { name: "Retour en haut" })).toBeInTheDocument();
    });

    it("hides the button when scrolling back to the top", () => {
        render(<BackToTop label="Retour en haut" />);

        window.scrollY = 400;
        fireEvent.scroll(window);
        expect(screen.getByRole("button", { name: "Retour en haut" })).toBeInTheDocument();

        window.scrollY = 0;
        fireEvent.scroll(window);
        expect(screen.queryByRole("button", { name: "Retour en haut" })).not.toBeInTheDocument();
    });

    it("scrolls to the top when clicked", () => {
        render(<BackToTop label="Retour en haut" />);
        window.scrollY = 400;
        fireEvent.scroll(window);
        const button = screen.getByRole("button", { name: "Retour en haut" });
        fireEvent.click(button);
        expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
    });

    it("scrolls to the top without animation when reduced motion is preferred", () => {
        window.matchMedia = jest.fn().mockReturnValue({ matches: true });
        render(<BackToTop label="Retour en haut" />);
        window.scrollY = 400;
        fireEvent.scroll(window);
        const button = screen.getByRole("button", { name: "Retour en haut" });
        fireEvent.click(button);
        expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "auto" });
    });

    it("removes the scroll listener on unmount", () => {
        const removeSpy = jest.spyOn(window, "removeEventListener");
        const { unmount } = render(<BackToTop label="Retour en haut" />);
        unmount();
        expect(removeSpy).toHaveBeenCalledWith("scroll", expect.any(Function));
        removeSpy.mockRestore();
    });

});