import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Accordion from "@/components/ui/Accordion";
import ContactForm from "@/components/sections/ContactForm";
import FadeIn from "@/components/ui/FadeIn";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { faqItems } from "@/../data/faq";
import { breadcrumbJsonLd, webPageJsonLd, pageGraphJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Contact Agence Web Symfony",
  description:
    "Contactez Efficience IT pour échanger autour de vos projets web, besoins techniques ou demandes de collaboration.",
  path: "/contact",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.title,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.content,
    },
  })),
};

const breadcrumb = breadcrumbJsonLd([{ name: "Contact", path: "/contact" }]);

const webPage = webPageJsonLd({
  name: "Contact | Agence web Symfony – Efficience IT",
  description: "Contactez Efficience IT pour échanger autour de vos projets web, besoins techniques ou demandes de collaboration.",
  path: "/contact",
  type: "ContactPage",
  datePublished: "2025-09-01",
  dateModified: "2025-09-01",
});

export default function Contact() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraphJsonLd(jsonLd, breadcrumb, webPage)) }} />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container className="text-center">
            <Breadcrumb items={[{ label: "Contact" }]} />
            <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
              Contactez-nous
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray">
              Vous avez un projet ? Une question ? N&apos;hésitez pas à nous
              écrire, nous vous répondrons rapidement.
            </p>
          </Container>
        </section>

        <FadeIn>
        <section className="py-16">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-2xl font-bold text-dark">
                  Envoyez-nous un message
                </h2>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-dark">
                  Coordonnées
                </h2>
                <div className="mt-6 space-y-4 text-gray">
                  <p>
                    <strong className="text-dark">Email :</strong>{" "}
                    contact@itefficience.com
                  </p>
                  <p>
                    <strong className="text-dark">Adresse :</strong> 677 Avenue
                    de la République, 59800 Lille, France
                  </p>
                </div>
                <div className="mt-8 space-y-2">
                  <p className="text-sm font-semibold text-dark">Vous pouvez aussi :</p>
                  <ul className="space-y-1 text-sm text-gray">
                    <li>
                      <Link href="/audit-symfony-gratuit" className="text-primary hover:underline">
                        Demander un audit Symfony gratuit de 30 minutes
                      </Link>
                    </li>
                    <li>
                      <Link href="/notre-expertise" className="text-primary hover:underline">
                        Découvrir nos expertises techniques
                      </Link>
                    </li>
                    <li>
                      <Link href="/l-entreprise" className="text-primary hover:underline">
                        En savoir plus sur l&apos;agence
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16">
          <Container>
            <SectionTitle>Questions fréquentes</SectionTitle>
            <div className="mx-auto max-w-2xl">
              <Accordion items={faqItems} />
            </div>
          </Container>
        </section>
        </FadeIn>
      </main>
    </>
  );
}
