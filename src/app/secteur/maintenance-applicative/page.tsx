import Image from "next/image";
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
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title:
    "TMA et maintenance applicative Symfony : continuité de service garantie",
  description:
    "Efficience IT assure la maintenance de vos applications Symfony : TMA corrective, évolutive et préventive, SLA, mises à jour de sécurité et monitoring.",
  path: "/secteur/maintenance-applicative",
});

const expertises = [
  {
    title: "Maintenance corrective",
    description:
      "Correction de bugs, résolution d'incidents et stabilisation de votre application. Notre équipe intervient rapidement pour rétablir le fonctionnement normal, avec un suivi complet de chaque incident jusqu'à sa résolution définitive.",
    icon: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z",
  },
  {
    title: "Maintenance évolutive",
    description:
      "Nouvelles fonctionnalités, améliorations d'interface, optimisations de performances. Votre application évolue avec votre métier, sans nécessiter de refonte complète. Chaque évolution est livrée avec ses tests et sa documentation.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
  },
  {
    title: "Maintenance préventive",
    description:
      "Mises à jour de sécurité, montées de version PHP et Symfony, audit de dépendances, monitoring des performances. Nous anticipons les problèmes avant qu'ils n'impactent vos utilisateurs.",
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  },
  {
    title: "SLA et engagement de réactivité",
    description:
      "Des niveaux de service adaptés à vos enjeux : temps de prise en charge garanti, astreintes optionnelles, reporting mensuel. Vous savez exactement à quoi vous attendre et vous avez un interlocuteur dédié.",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
];

const references = [
  { name: "Comme J'aime", image: "/images/clients/comme-jaime.webp" },
  { name: "DPDO", image: "/images/clients/dpdo.webp" },
  { name: "Espérer 95", image: "/images/clients/esperer-95.webp" },
];

const faqItems = [
  {
    title: "Quelle est la différence entre TMA et infogérance ?",
    content:
      "La TMA (Tierce Maintenance Applicative) couvre le code et les fonctionnalités de votre application : bugs, évolutions, mises à jour. L'infogérance couvre l'infrastructure : serveurs, bases de données, réseau. Nous proposons la TMA et pouvons vous accompagner sur l'hébergement via notre offre dédiée.",
  },
  {
    title: "Pouvez-vous reprendre la maintenance d'une application que vous n'avez pas développée ?",
    content:
      "Oui, c'est même courant. Nous commençons par un audit technique pour évaluer l'état du code, la couverture de tests et l'architecture. Ensuite, nous proposons un plan de reprise avec les actions prioritaires pour stabiliser l'application avant d'engager des évolutions.",
  },
  {
    title: "Quel est le coût d'un contrat de maintenance ?",
    content:
      "Le coût dépend de la taille de l'application, du volume d'évolutions prévu et du niveau de SLA souhaité. Nous proposons des forfaits mensuels à partir de quelques jours par mois, ajustables en fonction de vos besoins réels.",
  },
  {
    title: "Comment sont gérées les urgences ?",
    content:
      "Les incidents critiques (application indisponible, faille de sécurité, perte de données) sont pris en charge en priorité, avec un temps de réponse garanti par le SLA. Pour les clients qui le nécessitent, nous proposons des astreintes en dehors des heures ouvrées.",
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
  { name: "Maintenance applicative", path: "/secteur/maintenance-applicative" },
]);

const service = serviceJsonLd({
  name: "TMA et maintenance applicative Symfony",
  description:
    "Maintenance applicative Symfony : TMA corrective, évolutive et préventive, SLA, mises à jour de sécurité, monitoring et support réactif.",
  path: "/secteur/maintenance-applicative",
});

const webPage = webPageJsonLd({
  name: "TMA et maintenance applicative Symfony : continuité de service garantie",
  description:
    "Efficience IT assure la maintenance de vos applications Symfony : TMA corrective, évolutive et préventive, SLA, mises à jour de sécurité et monitoring.",
  path: "/secteur/maintenance-applicative",
  datePublished: "2026-03-30",
  dateModified: "2026-03-30",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "Confier la maintenance de vos applications",
    description:
      "Pourquoi externaliser la maintenance de vos applications web",
    href: "/article/decouvrez-les-raisons-de-nous-confier-la-maintenance-de-vos-applications-web",
  },
  {
    title: "Maintenance applicative Symfony",
    description:
      "Notre offre détaillée de TMA Symfony",
    href: "/maintenance-applicative-symfony",
  },
  {
    title: "CVE : comprendre les failles de sécurité",
    description:
      "Pourquoi les mises à jour de sécurité sont critiques",
    href: "/article/cve-comprendre-les-failles-pour-mieux-se-proteger",
  },
  {
    title: "Guide de migration Symfony",
    description:
      "Assurer les montées de version dans le cadre de la maintenance",
    href: "/article/guide-de-migration-dans-un-projet-symfony",
  },
  {
    title: "Hébergement Symfony",
    description:
      "Infrastructure fiable pour vos applications en production",
    href: "/hebergement-symfony",
  },
  {
    title: "Audit de code PHP",
    description:
      "Évaluer l'état de votre application avant de signer un contrat",
    href: "/audit-code-php",
  },
  {
    title: "Symfony, politique de versions",
    description: "Calendrier de support et de maintenance des versions Symfony",
    href: "https://symfony.com/releases",
    external: true,
  },
];

export default function SecteurMaintenanceApplicative() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
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
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Maintenance applicative
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  TMA et maintenance applicative Symfony : continuité de service garantie
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre application est en production, vos utilisateurs en
                  dépendent au quotidien. Mais les bugs s&apos;accumulent, les
                  mises à jour de sécurité prennent du retard, et personne
                  n&apos;a le temps de s&apos;en occuper.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT assure la{" "}
                  <Link
                    href="/maintenance-applicative-symfony"
                    className="text-primary hover:underline"
                  >
                    maintenance applicative
                  </Link>{" "}
                  de vos applications Symfony. Correction de bugs, évolutions
                  fonctionnelles, mises à jour de sécurité et monitoring :
                  votre application reste fiable, performante et sécurisée.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">
                    Demander un devis
                  </Button>
                  <Button href="/audit-symfony-gratuit" variant="outline">
                    Audit gratuit
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="flex h-64 w-64 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-32 w-32 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Nos engagements de maintenance</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Une maintenance structurée qui couvre toutes les dimensions
              de la pérennité de votre application.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {expertises.map((item) => (
                <Card key={item.title}>
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
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray">{item.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>La maintenance, un investissement rentable</SectionTitle>
            <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg text-gray">
              <p>
                Une application non maintenue, c&apos;est une bombe a
                retardement. Les{" "}
                <Link
                  href="/article/cve-comprendre-les-failles-pour-mieux-se-proteger"
                  className="text-primary hover:underline"
                >
                  failles de sécurité
                </Link>{" "}
                s&apos;accumulent, les performances se dégradent, et le jour où
                vous avez besoin d&apos;une évolution urgente, plus personne ne
                comprend le code. La{" "}
                <Link
                  href="/article/la-dette-technique-faut-il-vraiment-en-avoir-peur"
                  className="text-primary hover:underline"
                >
                  dette technique
                </Link>{" "}
                finit par coûter plus cher que la maintenance elle-même.
              </p>
              <p>
                Notre approche préventive inclut les montées de version
                Symfony selon le{" "}
                <Link
                  href="/article/guide-de-migration-dans-un-projet-symfony"
                  className="text-primary hover:underline"
                >
                  calendrier officiel
                </Link>
                , l&apos;audit régulier des dépendances et le monitoring des
                performances. Chaque intervention est couverte par des{" "}
                <Link
                  href="/tests-automatises-php"
                  className="text-primary hover:underline"
                >
                  tests automatisés
                </Link>{" "}
                pour garantir qu&apos;une correction ne crée pas de régression.
              </p>
              <p>
                Si votre application a besoin d&apos;un coup de neuf avant
                de passer en maintenance, nous proposons un{" "}
                <Link
                  href="/audit-code-php"
                  className="text-primary hover:underline"
                >
                  audit de code
                </Link>{" "}
                complet suivi d&apos;un plan de{" "}
                <Link
                  href="/secteur/migration-legacy"
                  className="text-primary hover:underline"
                >
                  modernisation
                </Link>{" "}
                pour remettre l&apos;application sur de bons rails avant
                d&apos;engager un contrat de TMA.
              </p>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Ils nous font confiance</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Des entreprises nous confient la maintenance de leurs
              applications critiques au quotidien.
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-8">
              {references.map((client) => (
                <div
                  key={client.name}
                  className="overflow-hidden rounded-lg shadow-sm"
                >
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={600}
                    height={400}
                    className="aspect-[3/2] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Sécurisez la continuité de vos applications
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Discutons de votre besoin en maintenance. Nous auditons votre
              application et vous proposons un contrat adapté à vos enjeux
              et à votre budget.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
            >
              Demander un devis
            </Link>
          </div>
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
