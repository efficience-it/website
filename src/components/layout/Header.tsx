import Link from "next/link";
import Image from "next/image";
import { mainNav } from "@/../data/navigation";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import HeaderCtas from "./HeaderCtas";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/85 dark:bg-white/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo/logo-bleu.webp"
            alt="Efficience IT"
            width={180}
            height={40}
            className="h-auto dark:brightness-0 dark:invert"
            priority
          />
        </Link>

        <DesktopNav items={mainNav}>
          <HeaderCtas />
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </DesktopNav>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <MobileMenu items={mainNav} />
        </div>
      </div>
    </header>
  );
}
