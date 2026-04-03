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
import Breadcrumb from "@/components/ui/Breadcrumb";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title:
    "Migration et modernisation d'applications legacy PHP avec Symfony",
  description:
    "Efficience IT modernise vos applications legacy PHP vers Symfony : migration progressive, zero downtime, Strangler Fig pattern et refactoring structurel.",
  path: "/secteur/migration-legacy",
});

const expertises = [
  {
    title: "Audit et diagnostic technique",
    description:
      "Avant de migrer, il faut comprendre. Nous auditons votre application pour cartographier la dette technique, identifier les zones critiques et estimer le niveau d'effort. Vous repartez avec un plan d'action concret et priorisé.",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
  },
  {
    title: "Migration progressive (Strangler Fig)",
    description:
      "Pas de big bang. Nous migrons brique par brique en appliquant le Strangler Fig pattern : chaque module est extrait, refactoré et déployé indépendamment. Votre application reste en production pendant toute la migration.",
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182",
  },
  {
    title: "Refactoring vers une architecture propre",
    description:
      "La migration technique ne suffit pas si l'architecture reste fragile. Nous restructurons le code vers une architecture hexagonale avec une séparation nette entre domaine métier, infrastructure et interface utilisateur.",
    icon: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z",
  },
  {
    title: "Montée de version Symfony",
    description:
      "Votre application tourne sur Symfony 2, 3 ou 4 et n'est plus maintenue ? Nous assurons la montée de version vers Symfony 6 ou 7, en automatisant ce qui peut l'être avec Rector et en migrant manuellement les zones sensibles.",
    icon: "M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25",
  },
];

const references = [
  { name: "Groupe Atlantic", image: "/images/clients/groupe-atlantic.webp" },
  { name: "Mobivia", image: "/images/clients/mobivia.webp" },
  { name: "OEMServices", image: "/images/clients/oems.webp" },
];

const faqItems = [
  {
    title: "Combien de temps dure une migration d'application legacy ?",
    content:
      "Ça dépend de la taille et de la complexité de l'application. Une migration progressive dure généralement entre 3 et 12 mois. L'avantage du Strangler Fig pattern, c'est que chaque incrément apporte de la valeur : vous n'attendez pas la fin du projet pour bénéficier des améliorations.",
  },
  {
    title: "Mon application reste-t-elle en production pendant la migration ?",
    content:
      "Oui, c'est un principe fondamental de notre approche. L'ancien code et le nouveau coexistent pendant la transition. Chaque brique migrée est déployée indépendamment et l'ancienne version est désactivée une fois la nouvelle validée en production.",
  },
  {
    title: "Faut-il migrer toute l'application d'un coup ?",
    content:
      "Non, et c'est rarement souhaitable. Nous priorisons les zones qui posent le plus de problèmes : les modules les plus sollicités, les parties les plus instables ou celles qui bloquent l'évolution du produit. Le reste peut être migré progressivement ou rester en l'état si ce n'est pas critique.",
  },
  {
    title: "Quelles technologies legacy pouvez-vous migrer ?",
    content:
      "PHP natif, CakePHP, CodeIgniter, Zend Framework, Symfony 2/3/4, Laravel ancien : nous avons l'habitude de reprendre des applications sur toutes les stacks PHP. Nous avons aussi l'expérience des migrations de bases de données, notamment de MySQL vers PostgreSQL.",
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
  { name: "Migration legacy", path: "/secteur/migration-legacy" },
]);

const service = serviceJsonLd({
  name: "Migration et modernisation d'applications legacy PHP",
  description:
    "Migration progressive d'applications legacy PHP vers Symfony : audit, Strangler Fig pattern, refactoring architectural, montée de version et zero downtime.",
  path: "/secteur/migration-legacy",
});

const webPage = webPageJsonLd({
  name: "Migration et modernisation d'applications legacy PHP avec Symfony",
  description:
    "Efficience IT modernise vos applications legacy PHP vers Symfony : migration progressive, zero downtime, Strangler Fig pattern et refactoring structurel.",
  path: "/secteur/migration-legacy",
  datePublished: "2026-03-30",
  dateModified: "2026-03-30",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "Moderniser une application PHP legacy sans tout réécrire",
    description:
      "Notre méthodologie de modernisation progressive en détail",
    href: "/article/moderniser-application-php-legacy-sans-tout-reecrire",
  },
  {
    title: "Guide de migration Symfony",
    description:
      "Mettre à jour un projet Symfony en toute sécurité",
    href: "/article/guide-de-migration-dans-un-projet-symfony",
  },
  {
    title: "Migration vers l'architecture hexagonale",
    description:
      "Retour de mission sur la modernisation d'une application couplée",
    href: "/article/migration-symfony-architecture-hexagonale-retour-mission",
  },
  {
    title: "Rector : automatiser l'évolution de votre code",
    description:
      "L'outil qui accélère les migrations Symfony à grande échelle",
    href: "/article/rector-et-ses-pouvoirs-maitrisez-levolution-de-votre-code-symfony",
  },
  {
    title: "Modernisation applicative",
    description:
      "Notre offre complète de modernisation d'applications",
    href: "/modernisation-applicative",
  },
  {
    title: "La dette technique, faut-il en avoir peur ?",
    description:
      "Comprendre et gérer la dette technique de votre application",
    href: "/article/la-dette-technique-faut-il-vraiment-en-avoir-peur",
  },
  {
    title: "Symfony, doc officielle des montées de version",
    description: "Le guide officiel pour migrer entre versions de Symfony",
    href: "https://symfony.com/doc/current/setup/upgrade_major.html",
    external: true,
  },
];

export default function SecteurMigrationLegacy() {
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
            <Breadcrumb items={[{ label: "Nos secteurs", href: "/secteur" }, { label: "Migration legacy" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Migration et modernisation
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Migration et modernisation d&apos;applications legacy PHP avec Symfony
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre application PHP vieillit, la{" "}
                  <Link
                    href="/article/la-dette-technique-faut-il-vraiment-en-avoir-peur"
                    className="text-primary hover:underline"
                  >
                    dette technique
                  </Link>{" "}
                  s&apos;accumule, et chaque évolution prend plus de temps que la
                  précédente. Vos développeurs passent plus de temps à contourner
                  les limites du code qu&apos;à créer de la valeur.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT{" "}
                  <Link
                    href="/modernisation-application-php"
                    className="text-primary hover:underline"
                  >
                    modernise vos applications legacy
                  </Link>{" "}
                  vers Symfony avec une approche progressive. Pas de réécriture
                  complète, pas d&apos;interruption de service : nous migrons
                  brique par brique pour que votre application retrouve
                  performance, maintenabilité et évolutivité.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/audit-symfony-gratuit">
                    Demander un audit gratuit
                  </Button>
                  <Button href="/contact" variant="outline">
                    Contactez-nous
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
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182"
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
            <SectionTitle>Notre approche de migration</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Une méthodologie éprouvée pour moderniser sans risque,
              incrément par incrément.
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
            <SectionTitle>Pourquoi migrer maintenant</SectionTitle>
            <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg text-gray">
              <p>
                Une application legacy, c&apos;est un risque qui augmente avec
                le temps. Les failles de sécurité ne sont plus corrigées, les
                développeurs compétents sur votre stack deviennent rares, et
                chaque nouvelle fonctionnalité coûte plus cher que la
                précédente. La{" "}
                <Link
                  href="/securite-application-symfony"
                  className="text-primary hover:underline"
                >
                  sécurité de votre application
                </Link>{" "}
                dépend directement de la fraîcheur de votre stack technique.
              </p>
              <p>
                Notre approche de{" "}
                <Link
                  href="/article/moderniser-application-php-legacy-sans-tout-reecrire"
                  className="text-primary hover:underline"
                >
                  modernisation progressive
                </Link>{" "}
                réduit ces risques sans parier sur une réécriture complète.
                Nous commençons par un{" "}
                <Link
                  href="/audit-code-php"
                  className="text-primary hover:underline"
                >
                  audit de code
                </Link>{" "}
                pour identifier les zones les plus critiques, puis nous
                migrons les modules un par un vers une{" "}
                <Link
                  href="/architecture-hexagonale-symfony"
                  className="text-primary hover:underline"
                >
                  architecture hexagonale
                </Link>{" "}
                propre et testée.
              </p>
              <p>
                Chaque module migré bénéficie immédiatement de{" "}
                <Link
                  href="/tests-automatises-php"
                  className="text-primary hover:underline"
                >
                  tests automatisés
                </Link>{" "}
                qui sécurisent les déploiements futurs. Et une fois la
                migration terminée, notre{" "}
                <Link
                  href="/secteur/maintenance-applicative"
                  className="text-primary hover:underline"
                >
                  maintenance applicative
                </Link>{" "}
                prend le relais pour garantir la pérennité de l&apos;investissement.
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
              Des entreprises nous confient la modernisation de leurs
              applications critiques.
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
              Votre application legacy mérite une seconde vie
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Discutons de votre projet lors d&apos;un audit gratuit de 30 minutes.
              Nous évaluons votre dette technique et vous proposons un plan
              de migration concret.
            </p>
            <Link
              href="/audit-symfony-gratuit"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
            >
              Demander mon audit gratuit
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
