import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function EnglishHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/85 dark:bg-light-gray/95 dark:supports-backdrop-filter:bg-light-gray/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" hrefLang="fr" className="shrink-0">
          <Image
            src="/images/logo/logo-bleu.webp"
            alt="Efficience IT"
            width={180}
            height={40}
            className="h-auto dark:brightness-0 dark:invert"
            priority
          />
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
