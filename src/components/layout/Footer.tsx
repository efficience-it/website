import Link from "next/link";
import Image from "next/image";
import { footerNav } from "@/../data/navigation";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <Container className="py-12">
        {/* Navigation columns */}
        <div className="grid gap-8 md:grid-cols-3">
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
              className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
            >
              <Image
                src={footerNav.contact.icon}
                alt=""
                width={16}
                height={16}
                className="brightness-0 invert"
              />
              {footerNav.contact.email}
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="mt-10 text-center text-sm text-gray-300">
          Agence web et cloud à votre service : développement d&apos;applications,
          infrastructure DevOps, automatisation et conseil IT pour une
          transformation numérique performante et durable.
        </p>

        {/* Logo */}
        <div className="mt-8 flex justify-center">
          <Image
            src="/images/logo/logo-blanc.webp"
            alt="Efficience IT"
            width={150}
            height={34}
          />
        </div>

        {/* Badge icons */}
        <div className="mt-8 flex items-center justify-center gap-6">
          {footerNav.badges.map((badge) => (
            <a
              key={badge.label}
              href={badge.href}
              target="_blank"
              rel="noopener noreferrer"
              title={badge.label}
            >
              <Image
                src={badge.icon}
                alt={badge.label}
                width={32}
                height={32}
                className="rounded"
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          Copyright &copy; {currentYear} Efficience IT
        </div>
      </Container>
    </footer>
  );
}
