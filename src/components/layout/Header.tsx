import Link from "next/link";
import Image from "next/image";
import { mainNav } from "@/../data/navigation";
import { isDropdown } from "@/types/navigation";
import DropdownNav from "./DropdownNav";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";

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
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {mainNav.map((item) =>
            isDropdown(item) ? (
              <DropdownNav key={item.label} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 font-medium text-dark transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ),
          )}
          <Button href="/audit-symfony-gratuit" size="sm" variant="outline" className="ml-4">
            Audit gratuit
          </Button>
          <Button href="/contact" size="sm" className="ml-2">
            Contact
          </Button>
        </nav>

        <MobileMenu items={mainNav} />
      </div>
    </header>
  );
}
