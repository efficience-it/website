import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Accordion from "@/components/ui/Accordion";
import ContactForm from "@/components/sections/ContactForm";
import { faqItems } from "@/../data/faq";

export const metadata = pageMetadata({
  title: "Contact | Agence web Symfony – Efficience IT",
  description:
    "Contactez Efficience IT pour échanger autour de vos projets web, besoins techniques ou demandes de collaboration.",
  path: "/contact",
  absoluteTitle: true,
});

export default function Contact() {
  return (
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
            Contactez-nous
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray">
            Vous avez un projet ? Une question ? N&apos;hésitez pas à nous
            écrire, nous vous répondrons rapidement.
          </p>
        </Container>
      </section>

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
                  <strong className="text-dark">Téléphone :</strong>{" "}
                  +33 9 79 32 05 08
                </p>
                <p>
                  <strong className="text-dark">Adresse :</strong>{" "}
                  677 Avenue de la République, 59800 Lille, France
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-light-gray py-16">
        <Container>
          <SectionTitle>Questions fréquentes</SectionTitle>
          <div className="mx-auto max-w-2xl">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>
    </main>
  );
}
