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
  title: "Agence Symfony à Nantes",
  description:
    "Efficience IT, agence Symfony pour Nantes et les Pays de la Loire. Développement sur mesure, audit, migration et maintenance de vos applications PHP.",
  path: "/agence-symfony-nantes",
});

const expertises = [
  {
    title: "Développement Symfony sur mesure",
    description:
      "Applications web métier, plateformes collaboratives, outils internes : nous concevons des solutions Symfony adaptées aux besoins des entreprises nantaises, en full remote.",
  },
  {
    title: "Audit et reprise de projets",
    description:
      "Analyse technique de votre application existante : dette technique, sécurité, performances. Reprise de projets Symfony sans mainteneur actif, avec un plan d'action structuré.",
  },
  {
    title: "Migration et modernisation",
    description:
      "Migration vers les dernières versions LTS de Symfony, modernisation progressive d'applications PHP legacy. Un accompagnement complet, de l'audit à la mise en production.",
  },
  {
    title: "API REST et API Platform",
    description:
      "Conception d'API documentées et testées avec API Platform. Intégration avec vos systèmes existants, applications mobiles ou plateformes partenaires.",
  },
  {
    title: "Maintenance applicative",
    description:
      "Corrections, évolutions fonctionnelles, montées de version, mises à jour de sécurité. Un interlocuteur technique stable, disponible à distance comme s'il était dans vos locaux.",
  },
];

const faqItems = [
  {
    title: "Êtes-vous présents à Nantes ?",
    content:
      "Notre agence est basée à Lille. Nous intervenons à Nantes et dans les Pays de la Loire en full remote, avec des déplacements ponctuels sur site quand le projet le demande. Notre organisation remote-first garantit la même qualité de service que pour nos clients locaux.",
  },
  {
    title: "Comment collaborez-vous avec vos clients nantais au quotidien ?",
    content:
      "Nous utilisons les mêmes rituels agiles que pour tous nos clients : daily en visio, sprint review, rétrospective. Les outils collaboratifs (Git, CI/CD, messagerie) assurent une transparence totale sur l'avancement du projet. La distance n'impacte ni la qualité ni le rythme des livraisons.",
  },
  {
    title: "Le full remote fonctionne-t-il vraiment pour un projet Symfony complexe ?",
    content:
      "Oui, et c'est notre mode de fonctionnement principal pour les clients hors des Hauts-de-France. Les outils de visioconférence, les revues de code en ligne, les environnements Docker partagés et les pipelines CI/CD permettent une collaboration aussi efficace qu'en présentiel. Nos clients nantais en témoignent.",
  },
  {
    title: "Quels secteurs accompagnez-vous à Nantes ?",
    content:
      "Nantes est dynamique dans le numérique, le naval, l'agroalimentaire et les services. Nous accompagnons des entreprises de tous ces secteurs dès lors qu'elles ont besoin d'applications métier robustes et maintenables avec Symfony.",
  },
  {
    title: "Pouvez-vous intervenir sur un projet Symfony existant développé à Nantes ?",
    content:
      "Oui, la reprise de projets est l'un de nos cas d'usage les plus courants. Nous commençons par un audit technique pour cartographier la dette et les risques, puis nous proposons un plan d'action progressif. Pas de réécriture complète : nous privilégions une approche incrémentale qui préserve la valeur métier existante.",
  },
  {
    title: "Proposez-vous un accompagnement structuré pour les équipes nantaises ?",
    content:
      "Oui. Au-delà du développement, nous proposons des formations Symfony en entreprise à distance, du pair programming régulier et des revues d'architecture. L'objectif est de faire monter en compétences vos équipes tout en livrant votre projet.",
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
  { name: "Agence Symfony Nantes", path: "/agence-symfony-nantes" },
]);

const webPage = webPageJsonLd({
  name: "Agence Symfony à Nantes : développement PHP et expertise technique",
  description:
    "Efficience IT, agence Symfony pour Nantes et les Pays de la Loire. Développement sur mesure, audit, migration et maintenance de vos applications PHP.",
  path: "/agence-symfony-nantes",
  datePublished: "2026-03-20",
  dateModified: "2026-04-10",
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
    title: "Agence Symfony à Lyon",
    description:
      "Notre expertise Symfony en Auvergne-Rhône-Alpes",
    href: "/agence-symfony-lyon",
  },
  {
    title: "Documentation officielle Symfony",
    description: "La référence technique du framework",
    href: "https://symfony.com/doc/current/index.html",
    external: true,
  },
  {
    title: "Architecture hexagonale avec Symfony",
    description: "Structurez vos applications avec le Domain-Driven Design",
    href: "/architecture-hexagonale-symfony",
  },
  {
    title: "Maintenance applicative Symfony",
    description: "TMA corrective, évolutive et préventive pour vos applications",
    href: "/maintenance-applicative-symfony",
  },
  {
    title: "Formation Symfony en entreprise",
    description: "Formations adaptées à votre équipe, à Lille ou à distance",
    href: "/formation-symfony-entreprise",
  },
];

export default function AgenceSymfonyNantes() {
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
            <Breadcrumb items={[{ label: "Agence Symfony Nantes" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Nantes - Pays de la Loire
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Agence Symfony à Nantes : développement PHP et expertise
                  technique
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Efficience IT accompagne les entreprises nantaises dans le{" "}
                  <strong>développement d&apos;applications Symfony</strong> en
                  full remote. Notre organisation remote-first nous permet de
                  collaborer avec vos équipes nantaises avec la même fluidité
                  qu&apos;une agence locale.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Nantes s&apos;est imposée comme l&apos;un des pôles tech les
                  plus attractifs de France. Nous mettons à disposition des
                  entreprises de la région une{" "}
                  <Link
                    href="/notre-expertise"
                    className="text-primary hover:underline"
                  >
                    expertise Symfony de référence
                  </Link>{" "}
                  pour répondre à leurs enjeux techniques, sans les contraintes
                  d&apos;une présence physique.
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
                Pourquoi choisir Efficience IT depuis Nantes
              </SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                L&apos;écosystème nantais est en pleine croissance et les
                besoins en développement PHP spécialisé augmentent. Notre
                expertise Symfony, combinée à notre organisation remote-first,
                répond à ces exigences.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Spécialisation Symfony exclusive
                  </h3>
                  <p className="mt-2 text-gray">
                    Nous ne faisons que du PHP et du Symfony. Cette
                    spécialisation nous permet de traiter les sujets techniques
                    avancés : architecture hexagonale, DDD, CQRS, event
                    sourcing. Découvrez{" "}
                    <Link
                      href="/article/domain-ne-devrait-jamais-connaitre-symfony"
                      className="text-primary hover:underline"
                    >
                      pourquoi le domaine ne devrait jamais connaître Symfony
                    </Link>
                    .
                  </p>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Organisation remote-first
                  </h3>
                  <p className="mt-2 text-gray">
                    Nos outils et rituels sont pensés pour le travail distribué
                    depuis le premier jour. Pas d&apos;adaptation : la
                    collaboration à distance est notre mode de fonctionnement
                    standard, pas un plan B.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Écosystème numérique partagé
                  </h3>
                  <p className="mt-2 text-gray">
                    Nantes et Lille partagent un ADN tech similaire : communauté
                    PHP active, tissu de PME innovantes, startups ambitieuses.
                    Nous comprenons les enjeux des entreprises nantaises car
                    nous les vivons au quotidien.
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
                  Pour les projets e-commerce, nous intervenons sur{" "}
                  <Link
                    href="/ecommerce-sylius"
                    className="text-primary hover:underline"
                  >
                    Sylius, la solution e-commerce Symfony
                  </Link>
                  . Besoin d&apos;une API performante ? Découvrez notre approche du{" "}
                  <Link
                    href="/api-sur-mesure-symfony"
                    className="text-primary hover:underline"
                  >
                    développement d&apos;API sur mesure avec Symfony
                  </Link>
                  .
                </p>
                <p>
                  Nous accompagnons aussi les équipes dans leur montée en
                  compétences grâce à nos{" "}
                  <Link
                    href="/formation-symfony-entreprise"
                    className="text-primary hover:underline"
                  >
                    formations Symfony en entreprise
                  </Link>
                  . Et pour sécuriser vos livraisons, découvrez comment nous
                  mettons en place des{" "}
                  <Link
                    href="/tests-automatises-php"
                    className="text-primary hover:underline"
                  >
                    tests automatisés PHP
                  </Link>{" "}
                  sur chaque projet.
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
                    L&apos;écosystème tech nantais
                  </h2>
                  <p className="mt-6 text-lg text-gray">
                    Nantes s&apos;est imposée ces dernières années comme{" "}
                    <strong>
                      l&apos;un des pôles tech les plus attractifs de France
                    </strong>
                    . La métropole attire des profils techniques qualifiés et
                    abrite un écosystème numérique dynamique, porté par des
                    structures comme{" "}
                    <a
                      href="https://www.ladigitalfactory.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      La Digital Factory
                    </a>{" "}
                    et le quartier de la création sur l&apos;île de Nantes.
                  </p>
                  <p className="mt-4 text-lg text-gray">
                    La communauté PHP nantaise est active, avec l&apos;
                    <a
                      href="https://afup.org/association/antennes-regionales/afup-nantes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      AFUP Nantes
                    </a>{" "}
                    qui fédère les développeurs PHP et Symfony de la région
                    autour de meetups et de conférences techniques réguliers.
                  </p>
                  <p className="mt-4 text-lg text-gray">
                    Le tissu économique nantais est diversifié : numérique,
                    naval, agroalimentaire, services. Autant de secteurs où les
                    applications métier sur mesure, construites avec Symfony,
                    répondent à des besoins concrets de performance et de
                    fiabilité.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                    <p className="font-display text-3xl font-bold text-primary">Top 5</p>
                    <p className="mt-1 text-gray">
                      Des villes les plus attractives pour les talents tech en
                      France
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                    <p className="font-display text-3xl font-bold text-primary">3 000+</p>
                    <p className="mt-1 text-gray">
                      Entreprises du numérique dans la métropole nantaise
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                    <p className="font-display text-3xl font-bold text-primary">Diversité</p>
                    <p className="mt-1 text-gray">
                      Numérique, naval, agroalimentaire : des secteurs variés
                      aux besoins techniques forts
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
                    Un premier échange gratuit de 30 minutes pour comprendre
                    votre projet. L&apos;
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
              <SectionTitle>Les technologies Symfony que nous déployons</SectionTitle>
              <div className="mx-auto max-w-3xl space-y-4 text-lg text-gray">
                <p>
                  Chaque projet Symfony que nous livrons s&apos;appuie sur les composants les plus adaptés à vos besoins. Doctrine ORM pour la modélisation des données,{" "}
                  <Link href="/article/symfony-messenger-colonne-vertebrale-archi-hexagonale" className="text-primary hover:underline">
                    Messenger pour les traitements asynchrones
                  </Link>
                  , Security pour la gestion des authentifications et des autorisations.
                </p>
                <p>
                  Les entreprises nantaises qui ont besoin d&apos;interconnecter leurs systèmes bénéficient de notre expertise en{" "}
                  <Link href="/api-sur-mesure-symfony" className="text-primary hover:underline">
                    conception d&apos;API sur mesure avec API Platform
                  </Link>
                  . Documentation OpenAPI générée automatiquement, versioning, pagination et filtres avancés sont intégrés nativement.
                </p>
                <p>
                  Pour les projets à forte volumétrie, nous mettons en place des architectures performantes avec{" "}
                  <Link href="/base-de-donnees-postgresql-symfony" className="text-primary hover:underline">
                    PostgreSQL
                  </Link>
                  ,{" "}
                  <Link href="/integration-redis-symfony" className="text-primary hover:underline">
                    Redis
                  </Link>
                  {" "}et{" "}
                  <Link href="/integration-elasticsearch-symfony" className="text-primary hover:underline">
                    Elasticsearch
                  </Link>
                  . L&apos;
                  <Link href="/integration-docker-symfony" className="text-primary hover:underline">
                    intégration Docker
                  </Link>
                  {" "}garantit des environnements reproductibles du développement à la production.
                </p>
                <p>
                  La qualité est non négociable :{" "}
                  <Link href="/article/comment-phpstan-peut-vous-aider-a-ameliorer-la-qualite-de-votre-code-php" className="text-primary hover:underline">
                    analyse statique PHPStan
                  </Link>
                  {" "}au niveau maximal,{" "}
                  <Link href="/tests-automatises-php" className="text-primary hover:underline">
                    tests automatisés
                  </Link>
                  {" "}sur chaque fonctionnalité critique, et revues de code à chaque merge request.
                </p>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
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

        <CallToAction />
        <StickyMobileCta />
      </main>
    </>
  );
}
