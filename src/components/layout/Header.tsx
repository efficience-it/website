import Link from "next/link";
import Image from "next/image";
import { mainNav } from "@/../data/navigation";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import HeaderCtas from "./HeaderCtas";

export default function Header() {
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

        <DesktopNav items={mainNav}>
          <HeaderCtas />
        </DesktopNav>

        <MobileMenu items={mainNav} />
      </div>
    </header>
  );
}
