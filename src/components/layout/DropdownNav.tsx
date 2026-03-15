"use client";

import { useState } from "react";
import Link from "next/link";
import { NavDropdown } from "@/types/navigation";

interface DropdownNavProps {
  item: NavDropdown;
}

export default function DropdownNav({ item }: DropdownNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 px-3 py-2 font-medium text-dark transition-colors hover:text-primary"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <span
          className={`text-xs transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>

      <div
        className={`absolute left-0 top-full z-50 min-w-[240px] rounded-md bg-white py-2 shadow-lg transition-all duration-150 ${
          open ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1"
        }`}
      >
        {item.items.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block px-4 py-2 text-sm text-dark transition-colors hover:bg-light-gray hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
