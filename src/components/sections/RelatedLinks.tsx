import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

interface RelatedLink {
  title: string;
  description: string;
  href: string;
  external?: boolean;
}

interface RelatedLinksProps {
  links: RelatedLink[];
  className?: string;
}

export type { RelatedLink };

export default function RelatedLinks({ links, className = "" }: RelatedLinksProps) {
  return (
    <section className={`py-16 ${className}`}>
      <Container>
        <SectionTitle>Pour aller plus loin</SectionTitle>
        <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => {
            const content = (
              <>
                <h3 className="font-display text-lg font-semibold text-dark group-hover:text-primary">
                  {link.title}
                </h3>
                <p className="mt-2 text-sm text-gray">{link.description}</p>
              </>
            );

            if (link.external) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg bg-white p-5 shadow-md transition-shadow duration-200 hover:shadow-lg"
                >
                  {content}
                  <span className="mt-3 inline-block text-sm font-medium text-primary">
                    Consulter <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">↗</span>
                  </span>
                </a>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-lg bg-white p-5 shadow-md transition-shadow duration-200 hover:shadow-lg"
              >
                {content}
                <span className="mt-3 inline-block text-sm font-medium text-primary">
                  Découvrir <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
