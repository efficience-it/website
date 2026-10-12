import Link from "next/link";
import { getMessages } from "@/lib/i18n/messages";
import type { BlogLanguage } from "@/types/blog";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  language?: BlogLanguage;
}

export default function Breadcrumb({ items, language }: BreadcrumbProps) {
  const messages = getMessages(language);
  const homeHref = language === "en" ? "/en" : "/";
  return (
    <nav aria-label={messages.breadcrumb} className="mb-4 text-sm text-gray">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href={homeHref} className="hover:text-primary transition-colors">
            {messages.home}
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <span aria-hidden="true">/</span>
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-dark font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
