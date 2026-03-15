"use client";

import { useState, useRef, useCallback, useId } from "react";
import Link from "next/link";
import { NavDropdown } from "@/types/navigation";

interface DropdownNavProps {
  item: NavDropdown;
}

export default function DropdownNav({ item }: DropdownNavProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const openMenu = useCallback(() => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
    setActiveIndex(-1);
  }, []);

  const delayedClose = useCallback(() => {
    closeTimeoutRef.current = setTimeout(closeMenu, 150);
  }, [closeMenu]);

  const handleButtonKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
      case "Enter":
      case " ":
        e.preventDefault();
        setOpen(true);
        setActiveIndex(0);
        requestAnimationFrame(() => itemRefs.current[0]?.focus());
        break;
      case "ArrowUp":
        e.preventDefault();
        setOpen(true);
        setActiveIndex(item.items.length - 1);
        requestAnimationFrame(() =>
          itemRefs.current[item.items.length - 1]?.focus(),
        );
        break;
      case "Escape":
        closeMenu();
        break;
    }
  };

  const handleItemKeyDown = (e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (index < item.items.length - 1) {
          setActiveIndex(index + 1);
          itemRefs.current[index + 1]?.focus();
        } else {
          setActiveIndex(0);
          itemRefs.current[0]?.focus();
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (index > 0) {
          setActiveIndex(index - 1);
          itemRefs.current[index - 1]?.focus();
        } else {
          setActiveIndex(item.items.length - 1);
          itemRefs.current[item.items.length - 1]?.focus();
        }
        break;
      case "Escape":
        closeMenu();
        buttonRef.current?.focus();
        break;
      case "Tab":
        closeMenu();
        break;
      case "Home":
        e.preventDefault();
        setActiveIndex(0);
        itemRefs.current[0]?.focus();
        break;
      case "End":
        e.preventDefault();
        setActiveIndex(item.items.length - 1);
        itemRefs.current[item.items.length - 1]?.focus();
        break;
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={delayedClose}
    >
      <button
        ref={buttonRef}
        type="button"
        className="flex items-center gap-1 px-3 py-2 font-medium text-dark transition-colors hover:text-primary"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => (open ? closeMenu() : openMenu())}
        onKeyDown={handleButtonKeyDown}
      >
        {item.label}
        <span
          aria-hidden="true"
          className={`text-xs transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>

      <div
        id={menuId}
        role="menu"
        aria-label={item.label}
        className={`absolute left-0 top-full z-50 min-w-[240px] rounded-md bg-white py-2 shadow-lg transition-all duration-150 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        }`}
      >
        {item.items.map((link, index) => (
          <Link
            key={link.href}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            href={link.href}
            role="menuitem"
            tabIndex={open ? 0 : -1}
            className={`block px-4 py-2 text-sm text-dark transition-colors hover:bg-light-gray hover:text-primary ${
              activeIndex === index ? "bg-light-gray text-primary" : ""
            }`}
            onClick={closeMenu}
            onKeyDown={(e) => handleItemKeyDown(e, index)}
            onFocus={openMenu}
            onBlur={delayedClose}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
