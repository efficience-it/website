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
  const allItems = item.highlight
    ? [...item.items, item.highlight]
    : item.items;
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
        setActiveIndex(allItems.length - 1);
        requestAnimationFrame(() =>
          itemRefs.current[allItems.length - 1]?.focus(),
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
        if (index < allItems.length - 1) {
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
          setActiveIndex(allItems.length - 1);
          itemRefs.current[allItems.length - 1]?.focus();
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
        setActiveIndex(allItems.length - 1);
        itemRefs.current[allItems.length - 1]?.focus();
        break;
    }
  };

  const hasDescriptions = item.items.some((link) => link.description);
  const columns = item.columns || 1;

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
        <svg
          aria-hidden="true"
          className={`h-3.5 w-3.5 text-gray transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      <div
        id={menuId}
        role="menu"
        aria-label={item.label}
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 rounded-xl border border-gray-100 bg-white shadow-xl transition-all duration-200 ${
          hasDescriptions ? (columns >= 2 ? "w-[560px]" : "w-[320px]") : "min-w-[220px]"
        } ${
          open
            ? "visible translate-y-2 opacity-100"
            : "invisible translate-y-0 opacity-0"
        }`}
      >
        <div className={`p-2 ${hasDescriptions && columns >= 2 ? "grid grid-cols-2 gap-1" : ""}`}>
          {item.items.map((link, index) => (
            <Link
              key={link.href}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              href={link.href}
              role="menuitem"
              tabIndex={open ? 0 : -1}
              className={`block rounded-lg px-3 py-2.5 transition-colors hover:bg-light-gray ${
                activeIndex === index ? "bg-light-gray" : ""
              }`}
              onClick={closeMenu}
              onKeyDown={(e) => handleItemKeyDown(e, index)}
              onFocus={openMenu}
              onBlur={delayedClose}
            >
              <span className="block text-sm font-medium text-dark">
                {link.label}
              </span>
              {link.description && (
                <span className="mt-0.5 block text-xs leading-relaxed text-gray">
                  {link.description}
                </span>
              )}
            </Link>
          ))}
        </div>

        {item.highlight && (
          <div className="border-t border-gray-100 p-2">
            <Link
              ref={(el) => {
                itemRefs.current[item.items.length] = el;
              }}
              href={item.highlight.href}
              role="menuitem"
              tabIndex={open ? 0 : -1}
              className={`flex items-center gap-3 rounded-lg bg-primary/5 px-3 py-2.5 transition-colors hover:bg-primary/10 ${
                activeIndex === item.items.length ? "bg-primary/10" : ""
              }`}
              onClick={closeMenu}
              onKeyDown={(e) => handleItemKeyDown(e, item.items.length)}
              onFocus={openMenu}
              onBlur={delayedClose}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
              <div>
                <span className="block text-sm font-semibold text-primary">
                  {item.highlight.label}
                </span>
                {item.highlight.description && (
                  <span className="mt-0.5 block text-xs text-gray">
                    {item.highlight.description}
                  </span>
                )}
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
