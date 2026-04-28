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
  title:
    "Prestataire Symfony en France : expertise PHP et accompagnement sur mesure",
  description:
    "Efficience IT, prestataire Symfony en France. Développement, migration, audit et maintenance de vos applications PHP et Symfony, en remote ou sur site.",
  path: "/agence-symfony-france",
});

const cards = [
  {
    title: "Expertise Symfony certifiée",
    description:
      "Nos développeurs sont spécialisés sur l'écosystème Symfony et PHP. Pas de généralistes : chaque intervenant maîtrise le framework en profondeur, de Doctrine à Messenger.",
  },
  {
    title: "Intervention remote ou sur site",
    description:
      "Où que vous soyez en France, nous intervenons à distance ou dans vos locaux. Nos outils et nos rituels sont pensés pour le travail distribué, sans perte de qualité.",
  },
  {
    title: "De l'audit au déploiement",
    description:
      "Nous couvrons l'ensemble du cycle de vie de votre application : audit technique, développement, tests, mise en production et maintenance continue.",
  },
  {
    title: "Stack technique maîtrisée",
    description:
      "Symfony, API Platform, Doctrine, PHPStan, PHPUnit, Docker, CI/CD : nous maîtrisons les outils qui font la différence entre un projet qui tient et un projet qui s'effondre.",
  },
];

const faqItems = [
  {
    title: "Comment fonctionne votre modèle d'intervention national ?",
    content:
      "Notre siège est à Lille, mais notre organisation est pensée pour intervenir partout en France. Nous travaillons principalement en remote, avec des déplacements sur site quand le projet le nécessite. Nos outils collaboratifs, nos rituels agiles et nos pipelines CI/CD garantissent la même qualité de service que vous soyez à Paris, Lyon, Nantes ou Bordeaux.",
  },
  {
    title: "Travaillez-vous uniquement avec des entreprises basées en France ?",
    content:
      "Nous travaillons principalement avec des entreprises françaises, mais nous accompagnons aussi des clients francophones en Belgique, en Suisse et au Luxembourg. L'essentiel est de partager un fuseau horaire compatible et une langue commune pour une collaboration fluide.",
  },
  {
    title: "Quelle est la différence entre un prestataire Symfony et une agence web classique ?",
    content:
      "Une agence web classique couvre un large spectre (WordPress, Shopify, marketing, design). Un prestataire Symfony comme Efficience IT se concentre exclusivement sur le développement d'applications PHP et Symfony. Cette spécialisation garantit une expertise technique plus profonde et des choix architecturaux plus pertinents pour vos projets métier.",
  },
  {
    title: "Dans quelles villes intervenez-vous le plus souvent ?",
    content:
      "Nos interventions les plus fréquentes concernent Lille (notre siège, avec des réunions en présentiel), Paris (à 1h20 en TGV, avec des déplacements réguliers), Lyon et Nantes. Mais nous accompagnons aussi des entreprises à Bordeaux, Toulouse, Marseille et dans toute la France en remote.",
  },
  {
    title: "Pouvez-vous reprendre un projet Symfony développé par un autre prestataire ?",
    content:
      "Oui, c'est même l'un de nos cas d'usage les plus fréquents. Nous réalisons un audit du code existant, identifions la dette technique et proposons un plan de reprise progressif. L'objectif : remettre le projet sur de bons rails sans tout réécrire, en préservant la valeur métier du code existant.",
  },
  {
    title: "Comment garantissez-vous la qualité à distance ?",
    content:
      "La qualité ne dépend pas de la proximité géographique mais des processus. Nous appliquons des pratiques rigoureuses : analyse statique PHPStan au niveau maximal, tests PHPUnit systématiques, revues de code à chaque merge request, pipelines CI/CD et environnements Docker reproductibles. Ces pratiques sont les mêmes pour tous nos clients, qu'ils soient à Lille ou à Marseille.",
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
  { name: "Prestataire Symfony France", path: "/agence-symfony-france" },
]);

const webPage = webPageJsonLd({
  name: "Prestataire Symfony en France : expertise PHP et accompagnement sur mesure",
  description:
    "Efficience IT, prestataire Symfony en France. Développement, migration, audit et maintenance de vos applications PHP et Symfony, en remote ou sur site.",
  path: "/agence-symfony-france",
  datePublished: "2026-03-17",
  dateModified: "2026-04-10",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "Agence Symfony à Lille",
    description:
      "Notre ancrage lillois pour les entreprises des Hauts-de-France",
    href: "/agence-symfony-lille",
  },
  {
    title: "Agence Symfony à Paris",
    description:
      "Nos interventions en Île-de-France, à 1h20 en TGV",
    href: "/agence-symfony-paris",
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
    title: "Guide de migration Symfony",
    description: "Notre méthodologie pour les mises à jour de version",
    href: "/article/guide-de-migration-dans-un-projet-symfony",
  },
  {
    title: "Migration Symfony",
    description: "Montez de version en toute sécurité avec notre expertise",
    href: "/migration-symfony",
  },
  {
    title: "Maintenance applicative Symfony",
    description: "TMA corrective, évolutive et préventive pour vos applications",
    href: "/maintenance-applicative-symfony",
  },
  {
    title: "API sur mesure avec Symfony",
    description: "Conception d'API REST et GraphQL avec API Platform",
    href: "/api-sur-mesure-symfony",
  },
  {
    title: "Pourquoi choisir Efficience IT",
    description: "Agence vs freelance, ESN ou agence générique : notre comparatif",
    href: "/pourquoi-efficience-it",
  },
];

export default function AgenceSymfonyFrance() {
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
            <Breadcrumb
              items={[{ label: "Prestataire Symfony France" }]}
            />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Prestataire Symfony en France
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Prestataire Symfony en France : expertise PHP et
                  accompagnement sur mesure
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Efficience IT est un{" "}
                  <strong>prestataire Symfony en France</strong>, spécialisé dans
                  le développement d&apos;applications web PHP solides et
                  maintenables. Basée à Lille, notre équipe intervient sur
                  l&apos;ensemble du territoire : à{" "}
                  <Link href="/agence-symfony-paris" className="text-primary hover:underline">
                    Paris
                  </Link>
                  , à{" "}
                  <Link href="/agence-symfony-lyon" className="text-primary hover:underline">
                    Lyon
                  </Link>
                  , à{" "}
                  <Link href="/agence-symfony-nantes" className="text-primary hover:underline">
                    Nantes
                  </Link>
                  {" "}et partout en France.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  En remote ou sur site, nous mettons à votre disposition une
                  équipe d&apos;
                  <Link
                    href="/notre-expertise"
                    className="text-primary hover:underline"
                  >
                    experts Symfony
                  </Link>{" "}
                  dédiée, capable d&apos;intervenir rapidement sur vos projets
                  les plus exigeants.
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
                    <p className="font-semibold text-dark">
                      Ans d&apos;expérience
                    </p>
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
                    <p className="font-semibold text-dark">
                      Projets Symfony livrés
                    </p>
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
                    <p className="font-semibold text-dark">
                      Focus PHP et Symfony
                    </p>
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
                Pourquoi nous choisir comme prestataire Symfony
              </SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Choisir un <strong>prestataire technique PHP en France</strong>{" "}
                spécialisé, c&apos;est s&apos;assurer d&apos;un accompagnement
                adapté à la complexité de vos applications métier.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {cards.map((item) => (
                  <Card key={item.title}>
                    <h3 className="font-display text-lg font-bold text-dark">
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
              <div className="mx-auto max-w-3xl">
                <h2 className="font-display text-3xl font-bold text-dark md:text-4xl">
                  Une agence technique, pas une agence web généraliste
                </h2>
                <div className="mt-8 space-y-4 text-lg text-gray">
                  <p>
                    Beaucoup d&apos;agences web proposent du Symfony parmi une
                    dizaine d&apos;autres technologies. Chez Efficience IT, PHP
                    et Symfony sont notre cœur de métier. C&apos;est cette
                    spécialisation qui fait la différence quand il s&apos;agit de
                    concevoir des architectures solides, de migrer un projet
                    legacy ou de reprendre une application sans documentation.
                    Nous intervenons dans de nombreux{" "}
                    <Link
                      href="/secteur"
                      className="text-primary hover:underline"
                    >
                      secteurs d&apos;activité
                    </Link>
                    {" "}: e-commerce, finance, industrie et SaaS.
                  </p>
                  <p>
                    En tant qu&apos;
                    <strong>agence Symfony</strong> dédiée, nous intervenons sur
                    des problématiques techniques avancées : mise en place
                    d&apos;une{" "}
                    <Link
                      href="/architecture-hexagonale-symfony"
                      className="text-primary hover:underline"
                    >
                      architecture hexagonale avec Symfony
                    </Link>
                    , intégration de{" "}
                    <Link
                      href="/article/symfony-messenger-colonne-vertebrale-archi-hexagonale"
                      className="text-primary hover:underline"
                    >
                      Symfony Messenger pour les traitements asynchrones
                    </Link>
                    , ou encore{" "}
                    <Link
                      href="/audit-code-php"
                      className="text-primary hover:underline"
                    >
                      audit de code PHP
                    </Link>{" "}
                    approfondi avec PHPStan et des revues manuelles.
                  </p>
                  <p>
                    Nous proposons également des{" "}
                    <Link
                      href="/formation-symfony-entreprise"
                      className="text-primary hover:underline"
                    >
                      formations Symfony en entreprise
                    </Link>{" "}
                    pour permettre à vos équipes de monter en compétences sur le
                    framework. Et pour les entreprises qui souhaitent moderniser
                    progressivement leur SI, notre offre de{" "}
                    <Link
                      href="/modernisation-applicative"
                      className="text-primary hover:underline"
                    >
                      modernisation applicative
                    </Link>{" "}
                    couvre l&apos;ensemble du parcours, de l&apos;audit initial
                    au déploiement de la nouvelle architecture.
                  </p>
                  <p>
                    Si vous cherchez un{" "}
                    <strong>expert Symfony</strong> capable d&apos;intervenir
                    avec la même rigueur à Lille, Paris, Lyon ou Bordeaux, vous
                    êtes au bon endroit. Notre{" "}
                    <Link
                      href="/agence-symfony-lille"
                      className="text-primary hover:underline"
                    >
                      agence Symfony à Lille
                    </Link>{" "}
                    est notre point d&apos;attache, mais nous travaillons avec
                    des entreprises dans toute la France, en full remote ou en
                    mode hybride.
                  </p>
                </div>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>Nos implantations en France</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Depuis notre siège lillois, nous intervenons dans les principales
                métropoles françaises. Chaque ville a ses spécificités, et nous
                adaptons notre mode d&apos;intervention en conséquence.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    <Link href="/agence-symfony-lille" className="text-primary hover:underline">
                      Lille - Siège social
                    </Link>
                  </h3>
                  <p className="mt-2 text-gray">
                    Notre siège dans les Hauts-de-France. Réunions en présentiel,
                    collaboration directe, ancrage dans l&apos;écosystème tech
                    lillois autour d&apos;EuraTechnologies et de l&apos;AFUP.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    <Link href="/agence-symfony-paris" className="text-primary hover:underline">
                      Paris - Île-de-France
                    </Link>
                  </h3>
                  <p className="mt-2 text-gray">
                    À 1h20 en TGV, nous intervenons régulièrement dans les
                    locaux de nos clients parisiens. Ateliers sur site, cadrage
                    en présentiel et développement en mode hybride.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    <Link href="/agence-symfony-lyon" className="text-primary hover:underline">
                      Lyon - Auvergne-Rhône-Alpes
                    </Link>
                  </h3>
                  <p className="mt-2 text-gray">
                    Deuxième pôle tech de France, Lyon concentre des besoins forts
                    en applications métier industrielles et fintech. Nous y
                    intervenons en remote avec des déplacements ponctuels.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    <Link href="/agence-symfony-nantes" className="text-primary hover:underline">
                      Nantes - Pays de la Loire
                    </Link>
                  </h3>
                  <p className="mt-2 text-gray">
                    Pôle tech attractif en pleine croissance, Nantes partage
                    avec Lille un écosystème de PME innovantes. Collaboration
                    100% remote avec un accompagnement structuré.
                  </p>
                </Card>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>L&apos;écosystème Symfony que nous maîtrisons</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Notre spécialisation Symfony va au-delà du framework. Nous maîtrisons l&apos;ensemble de son écosystème pour répondre aux exigences de vos projets métier.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">Doctrine ORM</h3>
                  <p className="mt-2 text-gray">
                    Mapping objet-relationnel, migrations de schéma, optimisation des requêtes DQL. Nous concevons des modèles de données performants, adaptés à vos règles métier et à vos volumes de données.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">Symfony Messenger</h3>
                  <p className="mt-2 text-gray">
                    Files de messages asynchrones, workers, retry et dead letter queues. Messenger est au cœur de nos{" "}
                    <Link href="/article/symfony-messenger-colonne-vertebrale-archi-hexagonale" className="text-primary hover:underline">
                      architectures hexagonales
                    </Link>
                    {" "}pour découpler les traitements lourds.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">API Platform</h3>
                  <p className="mt-2 text-gray">
                    Conception d&apos;
                    <Link href="/api-sur-mesure-symfony" className="text-primary hover:underline">
                      API REST et GraphQL
                    </Link>
                    {" "}documentées, versionnées et testées. Génération automatique de la documentation OpenAPI, gestion fine des sérialisations et des filtres.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">Symfony Security</h3>
                  <p className="mt-2 text-gray">
                    Authentification OAuth2/JWT, gestion des rôles et des voters, protection CSRF. La{" "}
                    <Link href="/securite-application-symfony" className="text-primary hover:underline">
                      sécurité applicative
                    </Link>
                    {" "}est intégrée dès la conception, pas ajoutée après coup.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">PHPStan et qualité</h3>
                  <p className="mt-2 text-gray">
                    Analyse statique au niveau maximal, tests PHPUnit, couverture de code et revues systématiques. Découvrez{" "}
                    <Link href="/article/comment-phpstan-peut-vous-aider-a-ameliorer-la-qualite-de-votre-code-php" className="text-primary hover:underline">
                      comment PHPStan améliore la qualité de votre code
                    </Link>
                    .
                  </p>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">Docker et CI/CD</h3>
                  <p className="mt-2 text-gray">
                    Environnements reproductibles avec{" "}
                    <Link href="/integration-docker-symfony" className="text-primary hover:underline">
                      Docker
                    </Link>
                    , pipelines d&apos;intégration continue, déploiements automatisés. Chaque livraison est testée et validée avant mise en production.
                  </p>
                </Card>
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

        <CallToAction />
        <StickyMobileCta />
      </main>
    </>
  );
}
