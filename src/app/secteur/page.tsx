import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CallToAction from "@/components/sections/CallToAction";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import FadeIn from "@/components/ui/FadeIn";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Nos secteurs d'intervention : e-commerce, finance, industrie et SaaS",
  description:
    "Efficience IT accompagne les entreprises du e-commerce, de la finance, de l'industrie et du SaaS avec des applications Symfony sur mesure.",
  path: "/secteur",
});

const secteurs = [
  {
    title: "E-commerce",
    description:
      "Plateformes e-commerce sur mesure avec Symfony et Sylius : catalogue produit, API headless, intégration PIM/ERP et scalabilité pour encaisser les pics de trafic.",
    href: "/secteur/e-commerce",
    icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
  },
  {
    title: "Finance",
    description:
      "Applications sécurisées pour la banque, la fintech et l'assurance : conformité réglementaire, haute disponibilité, chiffrement et traitement de données sensibles.",
    href: "/secteur/finance",
    icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z",
  },
  {
    title: "Industrie",
    description:
      "Outils métier sur mesure pour la production industrielle : interconnexion des systèmes d'information, workflows complexes et modernisation d'applications legacy.",
    href: "/secteur/industrie",
    icon: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z",
  },
  {
    title: "SaaS",
    description:
      "Applications SaaS robustes avec Symfony : architecture multi-tenant, API REST et GraphQL, scalabilité horizontale, CI/CD et monitoring en production.",
    href: "/secteur/saas",
    icon: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
  },
];

const faqItems = [
  {
    title: "Travaillez-vous uniquement avec Symfony ?",
    content:
      "Symfony est notre expertise principale, mais nous intervenons aussi avec Node.js et NestJS pour les projets qui le justifient. Le choix de la stack se fait en fonction de vos contraintes techniques et métier, pas par dogmatisme.",
  },
  {
    title: "Pouvez-vous intervenir sur un projet existant dans mon secteur ?",
    content:
      "Oui. Nous réalisons un audit technique pour évaluer l'état du code et de l'architecture, puis nous proposons un plan d'action adapté : reprise en main, modernisation, migration ou maintenance. Chaque secteur a ses contraintes spécifiques que nous prenons en compte.",
  },
  {
    title: "Comment gérez-vous les contraintes réglementaires sectorielles ?",
    content:
      "Finance, santé, e-commerce : chaque secteur a ses obligations (PCI-DSS, RGPD, HDS, PSD2). Nous intégrons ces contraintes dès la conception de l'architecture, pas en fin de projet. Notre expérience dans ces secteurs nous permet d'anticiper les points de conformité critiques.",
  },
];

const faqJsonLd = {
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

const breadcrumb = breadcrumbJsonLd([
  { name: "Nos secteurs", path: "/secteur" },
]);

const webPage = webPageJsonLd({
  name: "Nos secteurs d'intervention : e-commerce, finance, industrie et SaaS",
  description:
    "Efficience IT accompagne les entreprises du e-commerce, de la finance, de l'industrie et du SaaS avec des applications Symfony sur mesure.",
  path: "/secteur",
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "Développement web sur mesure",
    description:
      "Notre approche du développement d'applications web professionnelles",
    href: "/developpement-web-sur-mesure",
  },
  {
    title: "Modernisation applicative",
    description:
      "Moderniser vos applications existantes pour les adapter à vos enjeux actuels",
    href: "/modernisation-applicative",
  },
  {
    title: "API sur mesure Symfony",
    description:
      "Concevoir des API robustes pour interconnecter vos systèmes",
    href: "/api-sur-mesure-symfony",
  },
  {
    title: "Nos références",
    description: "Les entreprises qui nous font confiance",
    href: "/nos-references",
  },
];

export default function SecteursIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <Breadcrumb
              items={[{ label: "Nos secteurs" }]}
            />
            <h1 className="mt-4 font-display text-4xl font-bold text-dark md:text-5xl">
              Nos secteurs d&apos;intervention : e-commerce, finance, industrie
              et SaaS
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-gray">
              Chaque secteur a ses contraintes métier, ses exigences de sécurité
              et ses attentes en performance. Nous concevons des applications{" "}
              <Link
                href="/developpement-web-sur-mesure"
                className="text-primary hover:underline"
              >
                web sur mesure
              </Link>{" "}
              qui répondent précisément à ces enjeux, avec Symfony comme socle
              technique.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/audit-symfony-gratuit">
                Demander un audit gratuit
              </Button>
              <Button href="/contact" variant="outline">
                Contactez-nous
              </Button>
            </div>
          </Container>
        </section>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>
                Des applications adaptées à votre secteur
              </SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                E-commerce, finance, industrie ou SaaS : nous maîtrisons les
                contraintes spécifiques de chaque domaine pour livrer des
                solutions fiables et performantes.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {secteurs.map((secteur) => (
                  <Link key={secteur.title} href={secteur.href} className="group">
                    <Card>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6 text-primary"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={secteur.icon}
                          />
                        </svg>
                      </div>
                      <h2 className="mt-4 font-display text-lg font-bold text-dark group-hover:text-primary">
                        {secteur.title}
                      </h2>
                      <p className="mt-2 text-gray">{secteur.description}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>
                Pourquoi Symfony pour tous ces secteurs
              </SectionTitle>
              <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg text-gray">
                <p>
                  Symfony est un framework PHP conçu pour les applications
                  d&apos;entreprise. Sa stabilité, sa politique de versions
                  prévisible et son écosystème de composants en font le choix
                  naturel pour les projets critiques, quel que soit le secteur.
                </p>
                <p>
                  La force de Symfony, c&apos;est sa capacité à s&apos;adapter à
                  des contraintes métier radicalement différentes. Un{" "}
                  <Link
                    href="/secteur/e-commerce"
                    className="text-primary hover:underline"
                  >
                    e-commerce Sylius
                  </Link>{" "}
                  ne ressemble pas à une application de{" "}
                  <Link
                    href="/secteur/finance"
                    className="text-primary hover:underline"
                  >
                    conformité bancaire
                  </Link>
                  , qui ne ressemble pas à un{" "}
                  <Link
                    href="/secteur/saas"
                    className="text-primary hover:underline"
                  >
                    SaaS multi-tenant
                  </Link>
                  . Pourtant, les mêmes composants (Security, Messenger,
                  Workflow, Serializer) servent de fondation à chacun de ces
                  projets.
                </p>
                <p>
                  Notre{" "}
                  <Link
                    href="/notre-expertise"
                    className="text-primary hover:underline"
                  >
                    expertise transversale
                  </Link>{" "}
                  nous permet d&apos;apporter les bonnes pratiques d&apos;un
                  secteur à un autre : les exigences de sécurité de la finance
                  bénéficient aux projets e-commerce, les patterns de scalabilité
                  du SaaS renforcent les applications industrielles.
                </p>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>Questions fréquentes</SectionTitle>
              <div className="mx-auto max-w-2xl">
                <Accordion items={faqItems} />
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <RelatedLinks links={relatedLinks} />
        </FadeIn>

        <FadeIn>
          <CallToAction />
          <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}
