import Link from "next/link";
import Image from "next/image";
import { footerNav } from "@/../data/navigation";
import Container from "@/components/ui/Container";
import TrackedEmailLink from "@/components/ui/TrackedEmailLink";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Logo + description */}
          <div>
            <Image
              src="/images/logo/logo-blanc.webp"
              alt="Efficience IT"
              width={150}
              height={34}
            />
            <p className="mt-4 text-sm text-gray-300">
              Agence web et cloud à votre service : développement
              d&apos;applications, infrastructure DevOps, automatisation et
              conseil IT pour une transformation numérique performante et
              durable.
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

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">
              {footerNav.symfony.title}
            </h3>
            <ul className="space-y-2">
              {footerNav.symfony.links.map((link) => (
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

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">
              {footerNav.secteurs.title}
            </h3>
            <ul className="space-y-2">
              {footerNav.secteurs.links.map((link) => (
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
            <TrackedEmailLink
              email={footerNav.contact.email}
              className="text-sm text-gray-300 transition-colors hover:text-white"
            />
            <address className="mt-4 text-sm not-italic text-gray-300">
              Efficience IT<br />
              677 Avenue de la République<br />
              59800 Lille, France
            </address>
            <Link
              href={footerNav.contact.cta.href}
              className="mt-2 inline-block text-sm font-semibold text-primary-light transition-colors hover:text-white"
            >
              {footerNav.contact.cta.label}
            </Link>
            <Link
              href={footerNav.contact.auditCta.href}
              className="mt-1 block text-sm font-semibold text-primary-light transition-colors hover:text-white"
            >
              {footerNav.contact.auditCta.label}
            </Link>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {footerNav.social.map((link) => {
                const isVectorIcon = link.icon?.endsWith(".svg");

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-sm text-gray-300 transition-opacity hover:opacity-80 hover:text-white"
                  >
                    {link.icon ? (
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={28}
                        height={28}
                        className={`h-7 w-7 rounded-full object-contain ${isVectorIcon ? "brightness-0 invert" : ""}`}
                      />
                    ) : (
                      link.label
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <span>Copyright &copy; {currentYear} Efficience IT</span>
          <Link href="/plan-du-site" className="hover:text-white">
            Plan du site
          </Link>
        </div>
      </Container>
    </footer>
  );
}
