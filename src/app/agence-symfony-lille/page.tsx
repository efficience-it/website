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
    "Efficience IT, agence Symfony à Lille : développement sur mesure, maintenance, migration et audit. Proximité, réactivité et expertise technique au service de vos projets.",
  path: "/agence-symfony-lille",
});

const expertises = [
  {
    title: "Développement Symfony dédié",
    description:
      "Conception et réalisation d'applications web métier avec Symfony : architecture propre, code maintenable, livraisons itératives.",
  },
  {
    title: "Maintenance et TMA",
    description:
      "Prise en charge technique de vos applications existantes : corrections, évolutions, mises à jour de sécurité et montées de version.",
  },
  {
    title: "Migration Symfony",
    description:
      "Migration de Symfony 3, 4 ou 5 vers les versions LTS actuelles. Stratégie progressive, sans interruption de service.",
  },
  {
    title: "API REST et API Platform",
    description:
      "Conception d'API robustes avec API Platform et Symfony. Interfaces documentées, versionnées et testées.",
  },
  {
    title: "Audit technique",
    description:
      "Analyse de votre application : architecture, dette technique, sécurité, performances. Rapport écrit avec recommandations priorisées.",
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
  dateModified: "2026-03-11",
});

const faqItems = [
  {
    title: "Pourquoi choisir une agence Symfony basée à Lille ?",
    content:
      "Lille est le 3e pôle tech de France, avec un écosystème PHP actif porté par l'AFUP Hauts-de-France. En choisissant une agence locale, vous bénéficiez de la proximité pour les réunions en présentiel, d'une connaissance directe du tissu économique régional et de tarifs plus compétitifs qu'à Paris, sans compromis sur l'expertise technique.",
  },
  {
    title: "Intervenez-vous uniquement à Lille ?",
    content:
      "Non, nous travaillons avec des entreprises dans toute la France, en remote ou sur site. Lille est notre point d'attache, mais notre organisation est pensée pour le travail distribué. Nous intervenons aussi régulièrement à Paris (1h20 en TGV), Lyon, Nantes et partout où le projet le nécessite.",
  },
  {
    title: "Comment se déroule une première collaboration ?",
    content:
      "Tout commence par un échange gratuit de 30 minutes pour comprendre votre projet et vos contraintes. Nous vous proposons ensuite un cadrage technique et un devis détaillé. Le développement démarre en sprints courts avec des livraisons régulières et une visibilité constante sur l'avancement.",
  },
  {
    title: "Pouvez-vous reprendre un projet Symfony existant ?",
    content:
      "Oui, c'est l'un de nos cas d'usage les plus fréquents. Nous réalisons un audit du code existant, identifions la dette technique et proposons un plan de reprise progressif. L'objectif est de remettre le projet sur de bons rails sans tout réécrire.",
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

const agenceRelatedLinks: RelatedLink[] = [
  { title: "Prestataire Symfony en France", description: "Notre expertise Symfony au-delà de Lille, en remote ou sur site", href: "/agence-symfony-france" },
  { title: "Agence Symfony à Paris", description: "Nos interventions en Île-de-France, à 1h20 en TGV", href: "/agence-symfony-paris" },
  { title: "Agence Symfony à Lyon", description: "Notre expertise Symfony en Auvergne-Rhône-Alpes", href: "/agence-symfony-lyon" },
  { title: "Agence Symfony à Nantes", description: "Nos interventions dans les Pays de la Loire", href: "/agence-symfony-nantes" },
  { title: "Documentation officielle Symfony", description: "La référence technique du framework", href: "https://symfony.com/doc/current/index.html", external: true },
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
                  évoluées. Nous accompagnons les PME, ETI et startups du
                  territoire dans leurs projets techniques : création, maintenance,
                  migration et audit.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Notre ancrage lillois nous permet d&apos;intervenir rapidement,
                  en présentiel ou à distance, avec une connaissance directe de
                  l&apos;écosystème tech de la région.
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
              Travailler avec une agence locale présente de vrais avantages
              concrets pour vos projets techniques.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <h3 className="font-display text-lg font-bold text-dark">
                  Proximité et réactivité
                </h3>
                <p className="mt-2 text-gray">
                  Réunions en présentiel possibles, interventions rapides sur
                  site, et une communication directe sans intermédiaire. Nous
                  sommes dans le même fuseau horaire, avec les mêmes contraintes
                  métier que vous.
                </p>
              </Card>
              <Card>
                <h3 className="font-display text-lg font-bold text-dark">
                  Connaissance de l&apos;écosystème local
                </h3>
                <p className="mt-2 text-gray">
                  Ancrés dans la métropole lilloise, nous connaissons les acteurs
                  tech de la région, participons aux événements de la communauté
                  PHP et Symfony, et entretenons des liens avec les structures
                  d&apos;accompagnement locales.
                </p>
              </Card>
              <Card>
                <h3 className="font-display text-lg font-bold text-dark">
                  Partenariat sur le long terme
                </h3>
                <p className="mt-2 text-gray">
                  Notre modèle n&apos;est pas celui de la prestation one-shot.
                  Nous construisons des relations durables avec nos clients :
                  vous avez un interlocuteur technique stable qui connaît votre
                  application et votre métier.
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
