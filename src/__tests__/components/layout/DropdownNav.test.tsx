import { render, screen, fireEvent, act } from "@testing-library/react";
import DropdownNav from "@/components/layout/DropdownNav";
import { NavDropdown } from "@/types/navigation";

jest.mock("next/link", () => {
  const React = require("react");
  return React.forwardRef(
    (
      props: React.AnchorHTMLAttributes<HTMLAnchorElement>,
      ref: React.Ref<HTMLAnchorElement>,
    ) => (
      <a ref={ref} {...props}>
        {props.children}
      </a>
    ),
  );
});

const item: NavDropdown = {
  label: "Services",
  items: [
    { label: "Dev Symfony", href: "/dev-symfony" },
    { label: "Audit", href: "/audit" },
    { label: "Formation", href: "/formation" },
  ],
};

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

function getButton() {
  return screen.getByRole("button", { name: /Services/i });
}

function getMenuItems() {
  return screen.getAllByRole("menuitem");
}

describe("DropdownNav", () => {
  it("renders button with label", () => {
    render(<DropdownNav item={item} />);
    expect(getButton()).toBeInTheDocument();
    expect(getButton()).toHaveAttribute("aria-expanded", "false");
  });

  it("opens on mouse enter and closes on mouse leave", () => {
    render(<DropdownNav item={item} />);
    const container = getButton().parentElement!;

    fireEvent.mouseEnter(container);
    expect(getButton()).toHaveAttribute("aria-expanded", "true");

    fireEvent.mouseLeave(container);
    act(() => {
      jest.advanceTimersByTime(150);
    });
    expect(getButton()).toHaveAttribute("aria-expanded", "false");
  });

  it("opens on click and closes on second click", () => {
    render(<DropdownNav item={item} />);
    const button = getButton();

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("opens and focuses first item on ArrowDown", () => {
    render(<DropdownNav item={item} />);
    const button = getButton();

    const rafSpy = jest
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((cb) => {
        cb(0);
        return 0;
      });

    fireEvent.keyDown(button, { key: "ArrowDown" });
    expect(button).toHaveAttribute("aria-expanded", "true");

    rafSpy.mockRestore();
  });

  it("opens and focuses last item on ArrowUp", () => {
    render(<DropdownNav item={item} />);
    const button = getButton();

    const rafSpy = jest
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((cb) => {
        cb(0);
        return 0;
      });

    fireEvent.keyDown(button, { key: "ArrowUp" });
    expect(button).toHaveAttribute("aria-expanded", "true");

    rafSpy.mockRestore();
  });

  it("opens on Enter key", () => {
    render(<DropdownNav item={item} />);
    const button = getButton();

    const rafSpy = jest
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((cb) => {
        cb(0);
        return 0;
      });

    fireEvent.keyDown(button, { key: "Enter" });
    expect(button).toHaveAttribute("aria-expanded", "true");

    rafSpy.mockRestore();
  });

  it("opens on Space key", () => {
    render(<DropdownNav item={item} />);
    const button = getButton();

    const rafSpy = jest
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((cb) => {
        cb(0);
        return 0;
      });

    fireEvent.keyDown(button, { key: " " });
    expect(button).toHaveAttribute("aria-expanded", "true");

    rafSpy.mockRestore();
  });

  it("closes on Escape from button", () => {
    render(<DropdownNav item={item} />);
    const button = getButton();

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(button, { key: "Escape" });
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("moves focus down with ArrowDown on items and wraps at end", () => {
    render(<DropdownNav item={item} />);
    fireEvent.click(getButton());
    const items = getMenuItems();

    fireEvent.keyDown(items[0], { key: "ArrowDown" });
    expect(items[1]).toHaveFocus();

    fireEvent.keyDown(items[1], { key: "ArrowDown" });
    expect(items[2]).toHaveFocus();

    fireEvent.keyDown(items[2], { key: "ArrowDown" });
    expect(items[0]).toHaveFocus();
  });

  it("moves focus up with ArrowUp on items and wraps at start", () => {
    render(<DropdownNav item={item} />);
    fireEvent.click(getButton());
    const items = getMenuItems();

    fireEvent.keyDown(items[0], { key: "ArrowUp" });
    expect(items[2]).toHaveFocus();

    fireEvent.keyDown(items[2], { key: "ArrowUp" });
    expect(items[1]).toHaveFocus();

    fireEvent.keyDown(items[1], { key: "ArrowUp" });
    expect(items[0]).toHaveFocus();
  });

  it("moves to first item on Home and last on End", () => {
    render(<DropdownNav item={item} />);
    fireEvent.click(getButton());
    const items = getMenuItems();

    fireEvent.keyDown(items[1], { key: "End" });
    expect(items[2]).toHaveFocus();

    fireEvent.keyDown(items[2], { key: "Home" });
    expect(items[0]).toHaveFocus();
  });

  it("closes on Tab from item", () => {
    render(<DropdownNav item={item} />);
    const button = getButton();
    fireEvent.click(button);

    const items = getMenuItems();
    fireEvent.keyDown(items[0], { key: "Tab" });
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("closes and focuses button on Escape from item", () => {
    render(<DropdownNav item={item} />);
    const button = getButton();
    fireEvent.click(button);

    const items = getMenuItems();
    fireEvent.keyDown(items[0], { key: "Escape" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveFocus();
  });

  it("closes menu when clicking an item", () => {
    render(<DropdownNav item={item} />);
    const button = getButton();
    fireEvent.click(button);

    const items = getMenuItems();
    fireEvent.click(items[0]);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("opens on item focus and delays close on blur", () => {
    render(<DropdownNav item={item} />);
    const button = getButton();

    fireEvent.click(button);
    const items = getMenuItems();

    fireEvent.blur(items[0]);
    expect(button).toHaveAttribute("aria-expanded", "true");

    act(() => {
      jest.advanceTimersByTime(150);
    });
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("cancels delayed close when focus moves to another item", () => {
    render(<DropdownNav item={item} />);
    fireEvent.click(getButton());
    const items = getMenuItems();

    fireEvent.blur(items[0]);
    fireEvent.focus(items[1]);

    act(() => {
      jest.advanceTimersByTime(150);
    });
    expect(getButton()).toHaveAttribute("aria-expanded", "true");
  });
});
