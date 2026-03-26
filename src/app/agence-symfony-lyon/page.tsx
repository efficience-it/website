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
  title: "Agence Symfony à Lyon : expertise PHP et développement sur mesure",
  description:
    "Efficience IT, agence Symfony pour Lyon et Auvergne-Rhône-Alpes. Développement sur mesure, audit technique, migration et maintenance de vos applications PHP.",
  path: "/agence-symfony-lyon",
});

const expertises = [
  {
    title: "Développement Symfony sur mesure",
    description:
      "Applications web métier, plateformes SaaS, outils internes : nous concevons des solutions Symfony adaptées à vos enjeux fonctionnels et techniques.",
  },
  {
    title: "Audit et reprise de projets",
    description:
      "Analyse approfondie de votre codebase : dette technique, sécurité, performances. Reprise en main de projets Symfony existants sans documentation.",
  },
  {
    title: "Migration et modernisation",
    description:
      "Migration vers les versions LTS de Symfony, refonte progressive d'applications PHP legacy, passage à une architecture hexagonale.",
  },
  {
    title: "API REST et API Platform",
    description:
      "Conception d'API robustes avec API Platform : documentation OpenAPI, versioning, tests automatisés, intégration avec vos systèmes tiers.",
  },
  {
    title: "Maintenance applicative",
    description:
      "Corrections, évolutions fonctionnelles, montées de version et mises à jour de sécurité. Un suivi technique continu pour vos applications Symfony.",
  },
];

const faqItems = [
  {
    title: "Intervenez-vous directement à Lyon ?",
    content:
      "Notre agence est basée à Lille, mais nous intervenons régulièrement à Lyon en remote ou sur site. Notre organisation est pensée pour le travail distribué : rituels en visio, outils collaboratifs et déplacements quand le projet le nécessite.",
  },
  {
    title: "Comment se passe la collaboration à distance ?",
    content:
      "Nous utilisons les mêmes rituels agiles que pour nos clients locaux : daily en visio, sprint review, rétrospective. La distance ne change rien à la qualité de la communication ni au rythme des livraisons. Nos clients lyonnais travaillent avec nous exactement comme nos clients lillois.",
  },
  {
    title: "Pouvez-vous reprendre un projet Symfony développé par une autre équipe ?",
    content:
      "Oui, c'est l'un de nos cas d'usage les plus fréquents. Nous commençons par un audit du code existant, identifions la dette technique et proposons un plan de reprise progressif. Pas de rewrite complet : nous remettons le projet sur de bons rails étape par étape.",
  },
  {
    title: "Quels types d'entreprises lyonnaises accompagnez-vous ?",
    content:
      "Nous travaillons avec des startups, des PME et des ETI dans des secteurs variés : industrie, finance, santé, e-commerce, SaaS. Le point commun : des applications métier complexes où le choix de Symfony fait la différence.",
  },
  {
    title: "Pourquoi choisir Symfony plutôt qu'un autre framework PHP ?",
    content:
      "Symfony est le framework PHP le plus adapté aux applications métier complexes. Sa stabilité, son cycle de releases LTS, son écosystème mature (Doctrine, Messenger, Security) et sa communauté active en font le choix de référence pour les projets qui doivent durer dans le temps. Contrairement à Laravel, orienté prototypage rapide, Symfony privilégie la robustesse architecturale et la maintenabilité à long terme.",
  },
  {
    title: "Combien coûte le développement d'une application Symfony ?",
    content:
      "Le budget dépend de la complexité du projet : une API simple démarre autour de 10 000 euros, une application métier complète se situe entre 30 000 et 100 000 euros. Nous proposons un audit gratuit de 30 minutes pour évaluer votre besoin et vous donner une estimation réaliste. Chaque projet fait l'objet d'un devis détaillé, sans surprise.",
  },
  {
    title: "Comment migrer une application PHP legacy vers Symfony ?",
    content:
      "Nous privilégions une approche progressive : audit du code existant, identification des modules critiques, migration incrémentale sans interruption de service. L'utilisation de Rector et d'outils d'analyse statique comme PHPStan accélère le processus. L'objectif est de moderniser sans tout réécrire, en conservant la valeur métier du code existant.",
  },
  {
    title: "Symfony ou Laravel : lequel choisir pour mon projet ?",
    content:
      "Laravel excelle pour le prototypage rapide et les projets simples. Symfony est préférable pour les applications métier complexes, les projets à longue durée de vie et les équipes qui valorisent l'architecture logicielle. Si votre application doit gérer des règles métier complexes, une architecture hexagonale ou du CQRS, Symfony est le meilleur choix.",
  },
  {
    title: "Quels sont les délais pour un projet Symfony ?",
    content:
      "Un MVP fonctionnel peut être livré en 6 à 8 semaines. Une application métier complète nécessite généralement 3 à 6 mois. Nous travaillons en sprints courts avec des livraisons régulières, ce qui vous donne de la visibilité dès les premières semaines et la possibilité d'ajuster les priorités en cours de route.",
  },
  {
    title: "Quand utiliser API Platform avec Symfony ?",
    content:
      "API Platform est pertinent dès que votre projet implique une API REST ou GraphQL : application mobile, SPA, intégration avec des systèmes tiers ou architecture microservices. Il génère automatiquement la documentation OpenAPI, gère la pagination, le filtrage et la sérialisation. Pour les API simples, les controllers Symfony classiques suffisent.",
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
  { name: "Agence Symfony Lyon", path: "/agence-symfony-lyon" },
]);

const webPage = webPageJsonLd({
  name: "Agence Symfony à Lyon : expertise PHP et développement sur mesure",
  description:
    "Efficience IT, agence Symfony pour Lyon et Auvergne-Rhône-Alpes. Développement sur mesure, audit technique, migration et maintenance de vos applications PHP.",
  path: "/agence-symfony-lyon",
  datePublished: "2026-03-20",
  dateModified: "2026-03-20",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "Agence Symfony à Lille",
    description:
      "Notre siège et notre ancrage dans les Hauts-de-France",
    href: "/agence-symfony-lille",
  },
  {
    title: "Prestataire Symfony en France",
    description:
      "Notre expertise Symfony partout en France, en remote ou sur site",
    href: "/agence-symfony-france",
  },
  {
    title: "Agence Symfony à Paris",
    description:
      "Nos interventions en Île-de-France",
    href: "/agence-symfony-paris",
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
];

export default function AgenceSymfonyLyon() {
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
            <Breadcrumb items={[{ label: "Agence Symfony Lyon" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Lyon - Auvergne-Rhône-Alpes
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Agence Symfony à Lyon : expertise PHP et développement sur
                  mesure
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Efficience IT accompagne les entreprises lyonnaises dans le{" "}
                  <strong>développement d&apos;applications Symfony</strong> sur
                  mesure. Notre équipe de spécialistes PHP intervient en remote
                  ou sur site pour vos projets les plus exigeants.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Lyon est le deuxième pôle tech français, avec un tissu
                  industriel et numérique dense. Nous accompagnons les
                  entreprises de la région dans la conception, la{" "}
                  <Link
                    href="/migration-symfony"
                    className="text-primary hover:underline"
                  >
                    migration
                  </Link>{" "}
                  et la{" "}
                  <Link
                    href="/maintenance-applicative-symfony"
                    className="text-primary hover:underline"
                  >
                    maintenance
                  </Link>{" "}
                  de leurs applications Symfony.
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
                    10
                  </span>
                  <div>
                    <p className="font-semibold text-dark">Ans d&apos;expérience</p>
                    <p className="text-sm text-gray">
                      Expertise Symfony depuis les premières versions LTS
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
                Pourquoi choisir Efficience IT depuis Lyon
              </SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Lyon possède un écosystème tech mature, avec des besoins
                croissants en développement PHP spécialisé. Notre expertise
                Symfony répond à ces exigences.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Spécialisation Symfony exclusive
                  </h3>
                  <p className="mt-2 text-gray">
                    Contrairement aux agences généralistes, nous travaillons
                    exclusivement avec PHP et Symfony. Cette spécialisation
                    garantit des choix architecturaux solides et un code de
                    qualité industrielle.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Travail distribué éprouvé
                  </h3>
                  <p className="mt-2 text-gray">
                    Notre équipe travaille en remote depuis nos débuts. Pas
                    d&apos;adaptation nécessaire : nos outils, nos rituels et
                    notre méthodologie sont conçus pour la collaboration à
                    distance.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Connaissance du tissu industriel
                  </h3>
                  <p className="mt-2 text-gray">
                    Nous accompagnons des entreprises industrielles et des ETI
                    dans toute la France. Les enjeux du{" "}
                    <Link
                      href="/secteur/industrie"
                      className="text-primary hover:underline"
                    >
                      secteur industriel
                    </Link>{" "}
                    font partie de notre quotidien.
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
                approfondie de{" "}
                <Link
                  href="/article/pourquoi-choisir-symfony-pour-vos-projets"
                  className="text-primary hover:underline"
                >
                  Symfony, le framework PHP de référence
                </Link>{" "}
                pour les applications métier exigeantes.
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
                  Besoin de reprendre une application sans documentation ?{" "}
                  <Link
                    href="/reprise-projet-symfony"
                    className="text-primary hover:underline"
                  >
                    Notre service de reprise de projets Symfony
                  </Link>{" "}
                  est conçu pour remettre sur pied les applications abandonnées.
                  Nous proposons aussi un{" "}
                  <Link
                    href="/audit-code-php"
                    className="text-primary hover:underline"
                  >
                    audit technique approfondi
                  </Link>{" "}
                  pour identifier les priorités avant toute intervention.
                </p>
                <p>
                  Pour les projets qui nécessitent une refonte architecturale,
                  découvrez notre retour d&apos;expérience sur la{" "}
                  <Link
                    href="/article/migration-symfony-architecture-hexagonale-retour-mission"
                    className="text-primary hover:underline"
                  >
                    migration vers une architecture hexagonale
                  </Link>
                  . Nos{" "}
                  <Link
                    href="/formation-symfony-entreprise"
                    className="text-primary hover:underline"
                  >
                    formations Symfony en entreprise
                  </Link>{" "}
                  permettent aussi à vos équipes de monter en compétences.
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
                    L&apos;écosystème tech lyonnais
                  </h2>
                  <p className="mt-6 text-lg text-gray">
                    Lyon est le <strong>deuxième pôle tech de France</strong>,
                    porté par un tissu industriel dense et un écosystème numérique
                    en pleine croissance. La métropole lyonnaise abrite des
                    clusters comme{" "}
                    <a
                      href="https://www.digital-league.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Digital League
                    </a>
                    , qui fédère les acteurs du numérique en Auvergne-Rhône-Alpes.
                  </p>
                  <p className="mt-4 text-lg text-gray">
                    La communauté PHP est bien représentée dans la région, avec
                    l&apos;
                    <a
                      href="https://afup.org/association/antennes-regionales/afup-lyon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      AFUP Lyon
                    </a>{" "}
                    qui organise des meetups et des conférences autour de PHP et
                    Symfony. L&apos;AFUP Day Lyon est l&apos;un des rendez-vous
                    annuels de la communauté PHP en région.
                  </p>
                  <p className="mt-4 text-lg text-gray">
                    Les secteurs de la santé, de l&apos;industrie et de la
                    fintech sont particulièrement dynamiques à Lyon, avec des
                    besoins croissants en applications métier robustes et
                    sécurisées.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                    <p className="font-display text-3xl font-bold text-primary">2e</p>
                    <p className="mt-1 text-gray">
                      Pôle tech français, après Paris
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                    <p className="font-display text-3xl font-bold text-primary">10 000+</p>
                    <p className="mt-1 text-gray">
                      Entreprises du numérique en Auvergne-Rhône-Alpes
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                    <p className="font-display text-3xl font-bold text-primary">Industrie</p>
                    <p className="mt-1 text-gray">
                      Un tissu industriel fort, avec des besoins en applications
                      métier sur mesure
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
                    Nous commençons par comprendre votre application et vos
                    contraintes. L&apos;
                    <Link
                      href="/audit-symfony-gratuit"
                      className="text-primary hover:underline"
                    >
                      audit Symfony gratuit de 30 minutes
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
                    constante sur l&apos;avancement et possibilité de réorienter
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
                    Après la mise en production, nous assurons la maintenance et
                    l&apos;évolution de votre application. Un seul interlocuteur,
                    une continuité technique réelle.
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
