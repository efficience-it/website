import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import CallToAction from "@/components/sections/CallToAction";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import FadeIn from "@/components/ui/FadeIn";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Accordion from "@/components/ui/Accordion";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Agence Symfony à Paris : développement PHP sur mesure",
  description:
    "Efficience IT, agence Symfony pour Paris et Île-de-France. Développement sur mesure, audit, migration et maintenance de vos applications PHP, en remote ou sur site.",
  path: "/agence-symfony-paris",
});

const expertises = [
  {
    title: "Développement Symfony sur mesure",
    description:
      "Conception d'applications web métier avec Symfony : API, back-office, plateformes SaaS. Architecture pensée pour la maintenabilité et la scalabilité.",
  },
  {
    title: "Audit et reprise de projets",
    description:
      "Analyse technique de votre application existante : dette technique, sécurité, performances. Reprise de projets Symfony laissés sans mainteneur.",
  },
  {
    title: "Migration et modernisation",
    description:
      "Migration de Symfony 3, 4 ou 5 vers les versions LTS actuelles. Modernisation progressive de vos applications PHP legacy.",
  },
  {
    title: "API REST et API Platform",
    description:
      "Conception d'API documentées, versionnées et testées avec API Platform et Symfony. Intégration avec vos systèmes existants.",
  },
  {
    title: "Maintenance applicative",
    description:
      "Suivi technique continu de vos applications : corrections, évolutions fonctionnelles, mises à jour de sécurité et montées de version.",
  },
];

const faqItems = [
  {
    title: "Êtes-vous basés à Paris ?",
    content:
      "Notre agence est basée à Lille, à 1h20 de Paris en TGV. Nous intervenons régulièrement à Paris et en Île-de-France, en présentiel ou en remote. Notre organisation est pensée pour le travail distribué, sans compromis sur la qualité des échanges.",
  },
  {
    title: "Comment travaillez-vous avec vos clients parisiens ?",
    content:
      "Nous combinons des rituels en visio (daily, sprint review) avec des déplacements réguliers dans vos locaux quand le projet le nécessite. Nos outils collaboratifs et notre méthodologie agile garantissent une communication fluide, que vous soyez à Paris, La Défense ou en proche banlieue.",
  },
  {
    title: "Pouvez-vous intervenir sur site dans nos locaux à Paris ?",
    content:
      "Oui. Pour les phases de cadrage, les ateliers fonctionnels ou les périodes de développement intensif, nous nous déplaçons dans vos locaux. La proximité Lille-Paris en TGV rend ces interventions simples et fréquentes.",
  },
  {
    title: "Quel est votre avantage par rapport à une agence parisienne ?",
    content:
      "Notre spécialisation exclusive sur Symfony et PHP nous distingue des agences généralistes parisiennes. Vous bénéficiez d'une expertise technique pointue, avec la réactivité d'une équipe dédiée et des tarifs compétitifs par rapport au marché parisien.",
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
  { name: "Agence Symfony Paris", path: "/agence-symfony-paris" },
]);

const webPage = webPageJsonLd({
  name: "Agence Symfony à Paris : développement PHP sur mesure",
  description:
    "Efficience IT, agence Symfony pour Paris et Île-de-France. Développement sur mesure, audit, migration et maintenance de vos applications PHP, en remote ou sur site.",
  path: "/agence-symfony-paris",
  datePublished: "2026-03-20",
  dateModified: "2026-03-20",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "Agence Symfony à Lille",
    description:
      "Notre siège lillois, à 1h20 de Paris en TGV",
    href: "/agence-symfony-lille",
  },
  {
    title: "Prestataire Symfony en France",
    description:
      "Notre expertise Symfony partout en France, en remote ou sur site",
    href: "/agence-symfony-france",
  },
  {
    title: "Agence Symfony à Lyon",
    description:
      "Notre expertise Symfony en Auvergne-Rhône-Alpes",
    href: "/agence-symfony-lyon",
  },
  {
    title: "Agence Symfony à Nantes",
    description:
      "Nos interventions dans les Pays de la Loire",
    href: "/agence-symfony-nantes",
  },
  {
    title: "Documentation officielle Symfony",
    description: "La référence technique du framework",
    href: "https://symfony.com/doc/current/index.html",
    external: true,
  },
  {
    title: "Migration Symfony",
    description: "Montez de version en toute sécurité avec notre expertise",
    href: "/migration-symfony",
  },
  {
    title: "Architecture hexagonale avec Symfony",
    description: "Structurez vos applications avec le Domain-Driven Design",
    href: "/architecture-hexagonale-symfony",
  },
  {
    title: "Reprise de projet Symfony",
    description: "Nous prenons le relais de votre ancien prestataire",
    href: "/reprise-projet-symfony",
  },
];

export default function AgenceSymfonyParis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <Breadcrumb items={[{ label: "Agence Symfony Paris" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Paris - Île-de-France
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Agence Symfony à Paris : développement PHP sur mesure
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Efficience IT accompagne les entreprises parisiennes dans le{" "}
                  <strong>développement d&apos;applications Symfony</strong> sur
                  mesure. Basée à Lille, à 1h20 en TGV, notre équipe intervient
                  régulièrement à Paris et en Île-de-France pour vos projets PHP
                  les plus exigeants.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Que vous soyez une startup, une PME ou un grand groupe, nous
                  mettons à votre disposition une équipe de{" "}
                  <Link
                    href="/notre-expertise"
                    className="text-primary hover:underline"
                  >
                    spécialistes Symfony
                  </Link>{" "}
                  capable d&apos;intervenir en remote ou dans vos locaux.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/audit-symfony-gratuit">
                    Audit Symfony gratuit
                  </Button>
                  <Button href="/contact" variant="outline">
                    Contactez-nous
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-lg bg-white p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    1h20
                  </span>
                  <div>
                    <p className="font-semibold text-dark">Paris en TGV</p>
                    <p className="text-sm text-gray">
                      Déplacements réguliers dans vos locaux parisiens
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    50+
                  </span>
                  <div>
                    <p className="font-semibold text-dark">Projets Symfony livrés</p>
                    <p className="text-sm text-gray">
                      Applications métier, API, e-commerce, SaaS
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    100%
                  </span>
                  <div>
                    <p className="font-semibold text-dark">Focus PHP et Symfony</p>
                    <p className="text-sm text-gray">
                      Spécialistes, pas généralistes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>
                Pourquoi choisir Efficience IT pour vos projets parisiens
              </SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Paris concentre une forte demande en développement Symfony. Notre
                positionnement de spécialiste PHP vous garantit un niveau
                d&apos;expertise que les agences généralistes ne peuvent pas offrir.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Expertise technique pointue
                  </h3>
                  <p className="mt-2 text-gray">
                    Nos développeurs travaillent exclusivement avec Symfony et PHP.
                    Cette spécialisation se traduit par des choix architecturaux plus
                    pertinents et un code de meilleure qualité, comme le détaille notre
                    article sur{" "}
                    <Link
                      href="/article/pourquoi-choisir-symfony-pour-vos-projets"
                      className="text-primary hover:underline"
                    >
                      les raisons de choisir Symfony
                    </Link>
                    .
                  </p>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Accessibilité Lille-Paris
                  </h3>
                  <p className="mt-2 text-gray">
                    À 1h20 en TGV, nous sommes plus accessibles que beaucoup
                    d&apos;agences parisiennes bloquées dans les transports en
                    commun. Réunions en présentiel, ateliers sur site : la
                    distance n&apos;est jamais un frein.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Tarifs compétitifs
                  </h3>
                  <p className="mt-2 text-gray">
                    Basés en région, nous proposons des tarifs plus compétitifs que
                    les agences parisiennes, sans compromis sur la qualité
                    technique. Votre budget va plus loin avec le même niveau
                    d&apos;exigence.
                  </p>
                </Card>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Nos expertises Symfony</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Toutes nos interventions s&apos;appuient sur une maîtrise
                approfondie de Symfony et de son écosystème.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {expertises.map((item) => (
                  <Card key={item.title}>
                    <h3 className="font-display text-lg font-bold text-dark">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray">{item.description}</p>
                  </Card>
                ))}
              </div>
              <div className="mt-10 space-y-4 text-center text-lg text-gray">
                <p>
                  Vous cherchez à moderniser une application legacy ?{" "}
                  <Link
                    href="/modernisation-application-php"
                    className="text-primary hover:underline"
                  >
                    Notre offre de modernisation PHP
                  </Link>{" "}
                  couvre l&apos;ensemble du parcours, de l&apos;audit à la refonte.
                  Pour les projets e-commerce, nous intervenons aussi sur{" "}
                  <Link
                    href="/ecommerce-sylius"
                    className="text-primary hover:underline"
                  >
                    Sylius, la solution e-commerce Symfony
                  </Link>
                  .
                </p>
                <p>
                  Besoin de renforcer la qualité de votre codebase ? Découvrez
                  comment{" "}
                  <Link
                    href="/article/comment-phpstan-peut-vous-aider-a-ameliorer-la-qualite-de-votre-code-php"
                    className="text-primary hover:underline"
                  >
                    PHPStan améliore la qualité de votre code PHP
                  </Link>{" "}
                  et comment nous mettons en place des{" "}
                  <Link
                    href="/tests-automatises-php"
                    className="text-primary hover:underline"
                  >
                    tests automatisés
                  </Link>{" "}
                  pour sécuriser chaque livraison.
                </p>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Écosystème tech
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-bold text-dark md:text-4xl">
                    L&apos;écosystème tech parisien
                  </h2>
                  <p className="mt-6 text-lg text-gray">
                    Paris est le premier pôle tech français et l&apos;un des plus
                    dynamiques d&apos;Europe. La capitale concentre des milliers
                    d&apos;entreprises tech, de startups Station F aux grands
                    groupes de La Défense, toutes avec des besoins croissants en
                    développement PHP et Symfony.
                  </p>
                  <p className="mt-4 text-lg text-gray">
                    La communauté PHP parisienne est la plus active de France,
                    avec l&apos;
                    <a
                      href="https://afup.org/association/antennes-regionales/afup-paris"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      AFUP Paris
                    </a>{" "}
                    qui organise des meetups réguliers et le{" "}
                    <a
                      href="https://event.afup.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Forum PHP
                    </a>
                    , la conférence de référence de la communauté.
                  </p>
                  <p className="mt-4 text-lg text-gray">
                    Efficience IT participe activement à ces événements et
                    entretient des liens étroits avec la communauté PHP
                    francilienne. Cette implication nous permet de rester à la
                    pointe des pratiques et de comprendre les enjeux spécifiques
                    du marché parisien.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                    <p className="font-display text-3xl font-bold text-primary">1er</p>
                    <p className="mt-1 text-gray">
                      Pôle tech français par le nombre d&apos;entreprises et de
                      développeurs
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                    <p className="font-display text-3xl font-bold text-primary">Station F</p>
                    <p className="mt-1 text-gray">
                      Plus grand campus de startups au monde, au cœur de Paris
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                    <p className="font-display text-3xl font-bold text-primary">1h20</p>
                    <p className="mt-1 text-gray">
                      De Lille en TGV : la proximité sans le coût parisien
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Comment nous travaillons</SectionTitle>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    1
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-dark">
                    Audit et cadrage
                  </h3>
                  <p className="mt-2 text-gray">
                    Un premier échange gratuit de 30 minutes pour comprendre votre
                    projet et vos contraintes. L&apos;
                    <Link
                      href="/audit-symfony-gratuit"
                      className="text-primary hover:underline"
                    >
                      audit Symfony gratuit
                    </Link>{" "}
                    est le point d&apos;entrée naturel.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    2
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-dark">
                    Développement itératif
                  </h3>
                  <p className="mt-2 text-gray">
                    Sprints courts avec livraisons régulières. Visibilité
                    constante sur l&apos;avancement, possibilité de réorienter
                    les priorités à chaque itération.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    3
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-dark">
                    Suivi et évolution
                  </h3>
                  <p className="mt-2 text-gray">
                    Après la mise en production, nous assurons la{" "}
                    <Link
                      href="/maintenance-applicative-symfony"
                      className="text-primary hover:underline"
                    >
                      maintenance applicative
                    </Link>{" "}
                    et l&apos;évolution de votre application.
                  </p>
                </div>
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
          <RelatedLinks links={relatedLinks} className="bg-light-gray" />
        </FadeIn>

        <CallToAction />
        <StickyMobileCta />
      </main>
    </>
  );
}
