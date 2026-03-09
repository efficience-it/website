import Link from "next/link";
import Image from "next/image";
import { footerNav } from "@/../data/navigation";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + description */}
          <div>
            <Image
              src="/images/logo/logo-blanc.webp"
              alt="Efficience IT"
              width={150}
              height={34}
            />
            <p className="mt-4 text-sm text-gray-300">
              Société de conseil et développement web sur mesure.
            </p>
          </div>

          {/* Expertises */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">
              {footerNav.expertises.title}
            </h3>
            <ul className="space-y-2">
              {footerNav.expertises.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Agence */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">
              {footerNav.agence.title}
            </h3>
            <ul className="space-y-2">
              {footerNav.agence.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">
              {footerNav.contact.title}
            </h3>
            <a
              href={`mailto:${footerNav.contact.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              {footerNav.contact.email}
            </a>
            <Link
              href={footerNav.contact.cta.href}
              className="mt-2 inline-block text-sm font-semibold text-primary-light transition-colors hover:text-white"
            >
              {footerNav.contact.cta.label}
            </Link>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              {footerNav.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  {link.icon ? (
                    <Image src={link.icon} alt={link.label} width={24} height={24} className="brightness-0 invert" />
                  ) : (
                    link.label
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          Copyright &copy; {currentYear} Efficience IT
        </div>
      </Container>
    </footer>
  );
}
