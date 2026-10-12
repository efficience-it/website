import Link from "next/link";
import Image from "next/image";
import { getMessages } from "@/lib/i18n/messages";
import ThemeToggle from "./ThemeToggle";

export default function EnglishHeader() {
  const messages = getMessages("en");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/85 dark:bg-light-gray/95 dark:supports-backdrop-filter:bg-light-gray/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/en/blog" className="shrink-0">
          <Image
            src="/images/logo/logo-bleu.webp"
            alt="Efficience IT"
            width={180}
            height={40}
            className="h-auto dark:brightness-0 dark:invert"
            priority
          />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-4">
          <Link href="/en/blog" className="text-sm font-semibold text-dark hover:text-primary">
            {messages.blog}
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
