"use client";

import { useState, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainNav } from "@/../data/navigation";
import { isDropdown } from "@/types/navigation";
import DropdownNav from "./DropdownNav";
import MobileMenu from "./MobileMenu";
import HeaderCtas from "./HeaderCtas";

export default function Header() {
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
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo/logo-bleu.webp"
            alt="Efficience IT"
            width={180}
            height={40}
            className="h-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {mainNav.map((item) =>
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
          <HeaderCtas />
        </nav>

        <MobileMenu items={mainNav} />
      </div>
    </header>
  );
}
