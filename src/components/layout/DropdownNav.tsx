"use client";

import { useRef, useId } from "react";
import Link from "next/link";
import { NavDropdown } from "@/types/navigation";

interface DropdownNavProps {
  item: NavDropdown;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onDelayedClose: () => void;
}

export default function DropdownNav({ item, isOpen, onOpen, onClose, onDelayedClose }: DropdownNavProps) {
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const allItems = item.highlight
    ? [...item.items, item.highlight]
    : item.items;
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const handleButtonKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
      case "Enter":
      case " ":
        e.preventDefault();
        onOpen();
        requestAnimationFrame(() => itemRefs.current[0]?.focus());
        break;
      case "ArrowUp":
        e.preventDefault();
        onOpen();
        requestAnimationFrame(() =>
          itemRefs.current[allItems.length - 1]?.focus(),
        );
        break;
      case "Escape":
        onClose();
        break;
    }
  };

  const handleItemKeyDown = (e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (index < allItems.length - 1) {
          itemRefs.current[index + 1]?.focus();
        } else {
          itemRefs.current[0]?.focus();
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (index > 0) {
          itemRefs.current[index - 1]?.focus();
        } else {
          itemRefs.current[allItems.length - 1]?.focus();
        }
        break;
      case "Escape":
        onClose();
        buttonRef.current?.focus();
        break;
      case "Tab":
        onClose();
        break;
      case "Home":
        e.preventDefault();
        itemRefs.current[0]?.focus();
        break;
      case "End":
        e.preventDefault();
        itemRefs.current[allItems.length - 1]?.focus();
        break;
    }
  };

  const hasDescriptions = item.items.some((link) => link.description);
  const columns = item.columns || 1;

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onDelayedClose}
    >
      <button
        ref={buttonRef}
        type="button"
        className={`flex items-center gap-1 px-3 py-2 font-medium transition-colors hover:text-primary ${isOpen ? "text-primary" : "text-dark"}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => (isOpen ? onClose() : onOpen())}
        onKeyDown={handleButtonKeyDown}
      >
        {item.label}
        <svg
          aria-hidden="true"
          className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180 text-primary" : "text-gray"}`}
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
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 rounded-xl border border-border bg-white shadow-xl transition-all duration-150 dark:bg-light-gray dark:shadow-black/40 ${
          hasDescriptions ? (columns >= 2 ? "w-[560px]" : "w-[320px]") : "min-w-[220px]"
        } ${
          isOpen
            ? "visible translate-y-2 opacity-100"
            : "invisible translate-y-0 opacity-0 pointer-events-none"
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
              tabIndex={isOpen ? 0 : -1}
              className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-light-gray"
              onClick={onClose}
              onKeyDown={(e) => handleItemKeyDown(e, index)}
              onFocus={onOpen}
              onBlur={onDelayedClose}
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
          <div className="border-t border-border p-2">
            <Link
              ref={(el) => {
                itemRefs.current[item.items.length] = el;
              }}
              href={item.highlight.href}
              role="menuitem"
              tabIndex={isOpen ? 0 : -1}
              className="flex items-center gap-3 rounded-lg bg-primary/5 px-3 py-2.5 transition-colors hover:bg-primary/10"
              onClick={onClose}
              onKeyDown={(e) => handleItemKeyDown(e, item.items.length)}
              onFocus={onOpen}
              onBlur={onDelayedClose}
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
