"use client";

import { ReactNode, useCallback, useRef, useState } from "react";
import Link from "next/link";
import { NavItem, isDropdown } from "@/types/navigation";
import DropdownNav from "./DropdownNav";

interface DesktopNavProps {
  items: NavItem[];
  children?: ReactNode;
}

export default function DesktopNav({ items, children }: DesktopNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const openDropdown = useCallback((label: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveDropdown(label);
  }, []);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const delayedClose = useCallback(() => {
    closeTimeoutRef.current = setTimeout(closeDropdown, 100);
  }, [closeDropdown]);

  return (
    <nav
      className="hidden items-center gap-1 lg:flex"
      aria-label="Navigation principale"
    >
      {items.map((item) =>
        isDropdown(item) ? (
          <DropdownNav
            key={item.label}
            item={item}
            isOpen={activeDropdown === item.label}
            onOpen={() => openDropdown(item.label)}
            onClose={closeDropdown}
            onDelayedClose={delayedClose}
          />
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className="px-3 py-2 font-medium text-dark transition-colors hover:text-primary"
            onMouseEnter={closeDropdown}
          >
            {item.label}
          </Link>
        ),
      )}
      {children}
    </nav>
  );
}
