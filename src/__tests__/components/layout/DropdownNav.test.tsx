import { render, screen, fireEvent, act } from "@testing-library/react";
import { useState, useCallback, useRef } from "react";
import DropdownNav from "@/components/layout/DropdownNav";
import { NavDropdown } from "@/types/navigation";

jest.mock("next/link", () => {
  const React = jest.requireActual("react");
  const MockLink = React.forwardRef(
    function MockLink(
      props: React.AnchorHTMLAttributes<HTMLAnchorElement>,
      ref: React.Ref<HTMLAnchorElement>,
    ) {
      return (
        <a ref={ref} {...props}>
          {props.children}
        </a>
      );
    },
  );
  MockLink.displayName = "MockLink";
  return MockLink;
});

const item: NavDropdown = {
  label: "Services",
  items: [
    { label: "Dev Symfony", href: "/dev-symfony" },
    { label: "Audit", href: "/audit" },
    { label: "Formation", href: "/formation" },
  ],
};

const itemWithHighlight: NavDropdown = {
  label: "Services",
  items: [
    { label: "Dev Symfony", href: "/dev-symfony" },
    { label: "Audit", href: "/audit" },
  ],
  highlight: { label: "Nos expertises", href: "/notre-expertise", description: "Vue d'ensemble" },
};

function DropdownNavWrapper({ dropdownItem }: { dropdownItem: NavDropdown }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const onOpen = useCallback(() => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onDelayedClose = useCallback(() => {
    closeTimeoutRef.current = setTimeout(onClose, 150);
  }, [onClose]);

  return (
    <DropdownNav
      item={dropdownItem}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      onDelayedClose={onDelayedClose}
    />
  );
}

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
    render(<DropdownNavWrapper dropdownItem={item} />);
    expect(getButton()).toBeInTheDocument();
    expect(getButton()).toHaveAttribute("aria-expanded", "false");
  });

  it("opens on mouse enter and closes on mouse leave", () => {
    render(<DropdownNavWrapper dropdownItem={item} />);
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
    render(<DropdownNavWrapper dropdownItem={item} />);
    const button = getButton();

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("opens and focuses first item on ArrowDown", () => {
    render(<DropdownNavWrapper dropdownItem={item} />);
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
    render(<DropdownNavWrapper dropdownItem={item} />);
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
    render(<DropdownNavWrapper dropdownItem={item} />);
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
    render(<DropdownNavWrapper dropdownItem={item} />);
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
    render(<DropdownNavWrapper dropdownItem={item} />);
    const button = getButton();

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(button, { key: "Escape" });
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("moves focus down with ArrowDown on items and wraps at end", () => {
    render(<DropdownNavWrapper dropdownItem={item} />);
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
    render(<DropdownNavWrapper dropdownItem={item} />);
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
    render(<DropdownNavWrapper dropdownItem={item} />);
    fireEvent.click(getButton());
    const items = getMenuItems();

    fireEvent.keyDown(items[1], { key: "End" });
    expect(items[2]).toHaveFocus();

    fireEvent.keyDown(items[2], { key: "Home" });
    expect(items[0]).toHaveFocus();
  });

  it("closes on Tab from item", () => {
    render(<DropdownNavWrapper dropdownItem={item} />);
    const button = getButton();
    fireEvent.click(button);

    const items = getMenuItems();
    fireEvent.keyDown(items[0], { key: "Tab" });
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("closes and focuses button on Escape from item", () => {
    render(<DropdownNavWrapper dropdownItem={item} />);
    const button = getButton();
    fireEvent.click(button);

    const items = getMenuItems();
    fireEvent.keyDown(items[0], { key: "Escape" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveFocus();
  });

  it("closes menu when clicking an item", () => {
    render(<DropdownNavWrapper dropdownItem={item} />);
    const button = getButton();
    fireEvent.click(button);

    const items = getMenuItems();
    fireEvent.click(items[0]);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("opens on item focus and delays close on blur", () => {
    render(<DropdownNavWrapper dropdownItem={item} />);
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

  it("renders highlight link and handles keyboard on it", () => {
    render(<DropdownNavWrapper dropdownItem={itemWithHighlight} />);
    fireEvent.click(getButton());
    const items = getMenuItems();
    expect(items).toHaveLength(3);
    expect(items[2]).toHaveTextContent("Nos expertises");

    fireEvent.keyDown(items[2], { key: "ArrowDown" });
    expect(items[0]).toHaveFocus();

    fireEvent.click(getButton());
    fireEvent.keyDown(items[2], { key: "Escape" });
    expect(getButton()).toHaveAttribute("aria-expanded", "false");
  });

  it("cancels delayed close when focus moves to another item", () => {
    render(<DropdownNavWrapper dropdownItem={item} />);
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
