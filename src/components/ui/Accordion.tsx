"use client";

import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`divide-y divide-border ${className}`}>
      {items.map((item, index) => (
        <div key={index}>
          <button
            type="button"
            className="flex w-full items-center justify-between py-4 text-left font-semibold text-dark transition-colors hover:text-primary"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            {item.title}
            <span
              className={`ml-4 transform transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? "max-h-[32rem] pb-4" : "max-h-0"
            }`}
          >
            <p className="text-gray">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
