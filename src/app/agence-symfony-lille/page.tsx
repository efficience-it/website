import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import CallToAction from "@/components/sections/CallToAction";
import RelatedLinks from "@/components/sections/RelatedLinks";
import Accordion from "@/components/ui/Accordion";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import FadeIn from "@/components/ui/FadeIn";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Agence Symfony à Lille, votre partenaire développement web",
  description:
    "Efficience IT, agence Symfony à Lille : développement sur mesure, maintenance, migration et audit. Proximité, réactivité et expertise technique.",
  path: "/agence-symfony-lille",
});

const expertises = [
  {
    title: "Développement Symfony dédié",
    description:
      "Conception d'applications web métier en direct depuis nos locaux lillois. Architecture propre, code maintenable, livraisons itératives avec des points réguliers en présentiel.",
  },
  {
    title: "Maintenance et TMA",
    description:
      "Prise en charge technique de vos applications existantes depuis Lille : corrections, évolutions, mises à jour de sécurité et montées de version avec une réactivité de proximité.",
  },
  {
    title: "Migration Symfony",
    description:
      "Migration de Symfony 3, 4 ou 5 vers les versions LTS actuelles. Stratégie progressive, sans interruption de service, pilotée depuis notre siège lillois.",
  },
  {
    title: "API REST et API Platform",
    description:
      "Conception d'API robustes avec API Platform et Symfony. Interfaces documentées, versionnées et testées, avec des ateliers de conception dans nos locaux.",
  },
  {
    title: "Audit technique",
    description:
      "Analyse de votre application avec restitution en face à face : architecture, dette technique, sécurité, performances. Rapport écrit avec recommandations priorisées.",
  },
];

const breadcrumb = breadcrumbJsonLd([
  { name: "Agence Symfony à Lille", path: "/agence-symfony-lille" },
]);

const webPage = webPageJsonLd({
  name: "Agence Symfony à Lille, votre partenaire développement web",
  description: "Efficience IT, agence Symfony à Lille : développement sur mesure, maintenance, migration et audit. Proximité, réactivité et expertise technique au service de vos projets.",
  path: "/agence-symfony-lille",
  datePublished: "2026-03-11",
  dateModified: "2026-04-10",
});

const faqItems = [
  {
    title: "Pourquoi choisir une agence Symfony basée à Lille ?",
    content:
      "Lille est la 3e ville tech de France, avec un écosystème PHP actif porté par l'AFUP Hauts-de-France. En choisissant une agence locale, vous bénéficiez de la proximité pour les réunions en présentiel, d'une connaissance directe du tissu économique régional et d'une réactivité que le travail à distance seul ne peut pas offrir.",
  },
  {
    title: "Peut-on se rencontrer dans vos locaux à Lille ?",
    content:
      "Oui, et c'est même ce que nous recommandons pour les phases de cadrage et les ateliers fonctionnels. Notre siège à Lille est ouvert à nos clients pour des réunions de travail, des sessions de pair programming ou des restitutions d'audit. La collaboration en face à face accélère la compréhension mutuelle et la prise de décision.",
  },
  {
    title: "Comment fonctionne la collaboration de proximité au quotidien ?",
    content:
      "Nous combinons les avantages du présentiel et du remote. Les ateliers de cadrage, les revues d'architecture et les points stratégiques se font en face à face dans nos locaux ou les vôtres. Le développement au quotidien s'appuie sur des rituels agiles en visio, des livraisons régulières et une communication continue via nos outils collaboratifs.",
  },
  {
    title: "Travaillez-vous avec des entreprises hors de Lille ?",
    content:
      "Oui. Notre siège est à Lille, mais nous accompagnons des entreprises dans toute la France. Nous intervenons régulièrement à Paris (1h20 en TGV), Lyon, Nantes et partout où le projet le nécessite. Pour les entreprises de la métropole lilloise, la proximité est un atout supplémentaire, pas une condition exclusive.",
  },
  {
    title: "Quel est l'avantage de travailler avec une agence locale plutôt qu'un freelance ?",
    content:
      "Une agence locale comme Efficience IT offre la stabilité d'une équipe dédiée, avec un interlocuteur technique qui connaît votre application et votre métier dans la durée. Contrairement à un freelance, nous assurons la continuité en cas d'absence, la revue de code croisée et une capacité de montée en charge si votre projet l'exige.",
  },
  {
    title: "Participez-vous à la communauté tech lilloise ?",
    content:
      "Oui, nous sommes actifs dans l'écosystème tech des Hauts-de-France. Nous participons aux meetups organisés par l'AFUP Hauts-de-France, aux événements d'EuraTechnologies et aux conférences de la communauté PHP. Cette implication nous permet de rester à la pointe des pratiques et de tisser des liens avec les autres acteurs tech de la région.",
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

const agenceRelatedLinks: RelatedLink[] = [
  { title: "Prestataire Symfony en France", description: "Notre expertise Symfony au-delà de Lille, en remote ou sur site", href: "/agence-symfony-france" },
  { title: "Agence Symfony à Paris", description: "Nos interventions en Île-de-France, à 1h20 en TGV", href: "/agence-symfony-paris" },
  { title: "Agence Symfony à Lyon", description: "Notre expertise Symfony en Auvergne-Rhône-Alpes", href: "/agence-symfony-lyon" },
  { title: "Agence Symfony à Nantes", description: "Nos interventions dans les Pays de la Loire", href: "/agence-symfony-nantes" },
  { title: "Documentation officielle Symfony", description: "La référence technique du framework", href: "https://symfony.com/doc/current/index.html", external: true },
  { title: "Maintenance applicative Symfony", description: "TMA corrective, évolutive et préventive pour vos applications", href: "/maintenance-applicative-symfony" },
  { title: "Formation Symfony en entreprise", description: "Formations sur site à Lille ou à distance", href: "/formation-symfony-entreprise" },
  { title: "Audit Symfony gratuit", description: "30 minutes pour évaluer l'état de votre application", href: "/audit-symfony-gratuit" },
];

export default function AgenceSymfonyLille() {
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
            <Breadcrumb items={[{ label: "Agence Symfony Lille" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Lille - Hauts-de-France
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Agence Symfony à Lille, votre partenaire développement web
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Efficience IT est une{" "}
                  <strong>agence Symfony basée à Lille</strong>, spécialisée
                  dans le développement d&apos;applications web PHP robustes et
                  évoluées. Notre siège lillois est le point de départ de toutes
                  nos missions : un ancrage local qui garantit la proximité, la
                  réactivité et une collaboration directe avec nos clients.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Réunions dans nos locaux, ateliers en face à face, pair
                  programming sur site : la proximité n&apos;est pas un argument
                  marketing, c&apos;est notre mode de fonctionnement pour les
                  entreprises de la métropole lilloise et des Hauts-de-France.
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
                    <p className="text-sm text-gray">Expertise Symfony depuis les premières versions LTS</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    50+
                  </span>
                  <div>
                    <p className="font-semibold text-dark">Projets Symfony livrés</p>
                    <p className="text-sm text-gray">Applications métier, API, e-commerce, SaaS</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    100%
                  </span>
                  <div>
                    <p className="font-semibold text-dark">Focus PHP et Symfony</p>
                    <p className="text-sm text-gray">Spécialistes, pas généralistes</p>
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
              Pourquoi choisir une agence Symfony à Lille
            </SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Notre siège lillois est bien plus qu&apos;une adresse : c&apos;est
              le socle d&apos;une collaboration de proximité avec vos équipes.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <h3 className="font-display text-lg font-bold text-dark">
                  Collaboration directe
                </h3>
                <p className="mt-2 text-gray">
                  Réunions dans nos locaux ou les vôtres, ateliers de
                  conception en face à face, restitutions d&apos;audit en
                  présentiel. La proximité géographique permet des échanges
                  plus riches et des décisions plus rapides.
                </p>
              </Card>
              <Card>
                <h3 className="font-display text-lg font-bold text-dark">
                  Ancrage dans l&apos;écosystème lillois
                </h3>
                <p className="mt-2 text-gray">
                  Actifs dans la communauté tech des Hauts-de-France, nous
                  participons aux événements de l&apos;AFUP, aux meetups
                  d&apos;EuraTechnologies et aux conférences PHP locales.
                  Nous connaissons les acteurs et les enjeux de la région.
                </p>
              </Card>
              <Card>
                <h3 className="font-display text-lg font-bold text-dark">
                  Interlocuteur stable et accessible
                </h3>
                <p className="mt-2 text-gray">
                  Pas de turnover, pas de sous-traitance. Votre interlocuteur
                  technique est à Lille, connaît votre application et votre
                  métier, et reste disponible pour un café ou une session de
                  travail imprévue.
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
              Toutes nos interventions s&apos;appuient sur une maîtrise approfondie
              de{" "}
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
                Besoin de reprendre une application legacy ?{" "}
                <Link
                  href="/article/migration-symfony-architecture-hexagonale-retour-mission"
                  className="text-primary hover:underline"
                >
                  Notre retour d&apos;expérience sur la migration vers une
                  architecture hexagonale
                </Link>{" "}
                détaille notre approche concrète. Nous proposons aussi un service dédié de{" "}
                <Link
                  href="/reprise-projet-symfony"
                  className="text-primary hover:underline"
                >
                  reprise de projets Symfony
                </Link>{" "}
                pour les applications sans mainteneur.
              </p>
              <p>
                Au-delà de Symfony, nous intervenons sur la{" "}
                <Link
                  href="/modernisation-application-php"
                  className="text-primary hover:underline"
                >
                  modernisation d&apos;applications PHP
                </Link>{" "}
                legacy, ainsi que sur le{" "}
                <Link
                  href="/api-sur-mesure-symfony"
                  className="text-primary hover:underline"
                >
                  développement d&apos;API sur mesure
                </Link>{" "}
                avec API Platform. Nos{" "}
                <Link
                  href="/formation-symfony-entreprise"
                  className="text-primary hover:underline"
                >
                  formations Symfony
                </Link>{" "}
                permettent à vos équipes de monter en compétences sur le framework.
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
                  L&apos;écosystème tech lillois
                </h2>
                <p className="mt-6 text-lg text-gray">
                  Lille est la <strong>3e ville tech de France</strong>, après
                  Paris et Lyon. La métropole lilloise accueille plusieurs milliers
                  de profils IT, portée par des initiatives comme{" "}
                  <a
                    href="https://euratechnologies.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    EuraTechnologies
                  </a>
                  , l&apos;un des premiers incubateurs tech européens.
                </p>
                <p className="mt-4 text-lg text-gray">
                  La communauté PHP est particulièrement active dans les
                  Hauts-de-France, avec l&apos;
                  <a
                    href="https://afup.org/association/antennes-regionales/afup-hauts-de-france"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    AFUP Hauts-de-France
                  </a>{" "}
                  qui organise régulièrement des meetups et conférences autour de
                  PHP, Symfony et les bonnes pratiques de développement.
                </p>
                <p className="mt-4 text-lg text-gray">
                  Efficience IT s&apos;inscrit dans cet écosystème : nous
                  participons à la vie de la communauté, formons nos équipes et
                  contribuons aux débats techniques locaux. C&apos;est aussi ce qui
                  nous permet de vous trouver les meilleurs profils pour renforcer
                  vos équipes.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="font-display text-3xl font-bold text-primary">3e</p>
                  <p className="mt-1 text-gray">Ville tech en France par le nombre de profils IT</p>
                </div>
                <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="font-display text-3xl font-bold text-primary">30 000+</p>
                  <p className="mt-1 text-gray">Étudiants en écoles et universités tech dans la métropole</p>
                </div>
                <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="font-display text-3xl font-bold text-primary">1h20</p>
                  <p className="mt-1 text-gray">De Paris en TGV : l&apos;accessibilité d&apos;une capitale, les avantages d&apos;une région</p>
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
                  Nous commençons par comprendre votre application, votre métier
                  et vos contraintes. L&apos;
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
                  Nous travaillons en sprints courts avec des livraisons
                  régulières. Vous avez une visibilité constante sur
                  l&apos;avancement et pouvez réorienter les priorités à tout
                  moment.
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
            <div className="mx-auto max-w-3xl">
              <SectionTitle>Ce que vous pouvez attendre de nous</SectionTitle>
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xl text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Un code maintenable et documenté
                    </h3>
                    <p className="mt-1 text-gray">
                      Nous appliquons les bonnes pratiques Symfony : injection de
                      dépendances, séparation des couches, tests automatisés.{" "}
                      <Link
                        href="/article/les-bundles-les-plus-utilises-dans-les-projets-symfony"
                        className="text-primary hover:underline"
                      >
                        Notre utilisation rigoureuse des bundles Symfony
                      </Link>{" "}
                      garantit des projets évolutifs sur le long terme.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xl text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Une communication claire
                    </h3>
                    <p className="mt-1 text-gray">
                      Pas de jargon inutile avec vos équipes métier, pas de
                      sur-simplification avec vos équipes techniques. Nous
                      adaptons notre niveau de communication à votre
                      interlocuteur.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xl text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Une équipe stable
                    </h3>
                    <p className="mt-1 text-gray">
                      Vous ne changez pas d&apos;interlocuteur à chaque sprint.
                      Les développeurs qui démarrent votre projet le suivent dans
                      la durée.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xl text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Une culture qualité
                    </h3>
                    <p className="mt-1 text-gray">
                      PHPStan, tests PHPUnit, revues de code, intégration
                      continue : la qualité n&apos;est pas une option mais une
                      pratique quotidienne. Découvrez{" "}
                      <Link
                        href="/article/comment-phpstan-peut-vous-aider-a-ameliorer-la-qualite-de-votre-code-php"
                        className="text-primary hover:underline"
                      >
                        comment PHPStan améliore la qualité de votre code PHP
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Nos interventions Symfony les plus fréquentes</SectionTitle>
              <div className="mx-auto max-w-3xl space-y-4 text-lg text-gray">
                <p>
                  La majorité de nos missions à Lille et dans les Hauts-de-France portent sur la{" "}
                  <Link href="/migration-symfony" className="text-primary hover:underline">
                    migration de versions Symfony
                  </Link>
                  {" "}(de Symfony 4 ou 5 vers les versions LTS actuelles), la{" "}
                  <Link href="/reprise-projet-symfony" className="text-primary hover:underline">
                    reprise de projets
                  </Link>
                  {" "}laissés sans mainteneur, et le développement d&apos;
                  <Link href="/api-sur-mesure-symfony" className="text-primary hover:underline">
                    API sur mesure
                  </Link>
                  {" "}pour connecter vos systèmes d&apos;information.
                </p>
                <p>
                  Nous intervenons aussi sur la mise en place d&apos;
                  <Link href="/architecture-hexagonale-symfony" className="text-primary hover:underline">
                    architectures hexagonales
                  </Link>
                  {" "}pour les applications métier complexes, et sur l&apos;intégration de solutions techniques comme{" "}
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
                  . Chaque projet bénéficie d&apos;un environnement{" "}
                  <Link href="/integration-docker-symfony" className="text-primary hover:underline">
                    Docker
                  </Link>
                  {" "}reproductible et d&apos;un{" "}
                  <Link href="/hebergement-symfony" className="text-primary hover:underline">
                    hébergement optimisé
                  </Link>
                  .
                </p>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Un projet Symfony à Lille ou en Hauts-de-France ?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Parlez-nous de votre projet. Un premier échange gratuit de 30
              minutes pour évaluer vos besoins et voir si nous sommes le bon
              partenaire.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/audit-symfony-gratuit"
                className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
              >
                Demander un audit gratuit
              </Link>
              <Link
                href="/contact"
                className="inline-block rounded-lg border border-white/50 px-8 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Nous contacter
              </Link>
            </div>
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
        <RelatedLinks links={agenceRelatedLinks} />
        </FadeIn>

        <CallToAction />
        <StickyMobileCta />
      </main>
    </>
  );
}
