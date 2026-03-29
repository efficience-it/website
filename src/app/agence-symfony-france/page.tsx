import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { BASE_URL } from "@/lib/metadata";
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
    title: "Travaillez-vous uniquement avec des entreprises basées en France ?",
    content:
      "Nous travaillons principalement avec des entreprises françaises, mais nous accompagnons aussi des clients francophones en Belgique, en Suisse et au Luxembourg. L'essentiel est de partager un fuseau horaire compatible et une langue commune pour une collaboration fluide.",
  },
  {
    title: "Comment se déroule une première collaboration ?",
    content:
      "Tout commence par un échange gratuit de 30 minutes pour comprendre votre projet, vos contraintes et vos objectifs. Nous vous proposons ensuite un cadrage technique et un devis détaillé. Le développement démarre en sprints courts avec des livraisons régulières.",
  },
  {
    title:
      "Pouvez-vous reprendre un projet Symfony existant développé par une autre équipe ?",
    content:
      "Oui, c'est même l'un de nos cas d'usage les plus fréquents. Nous réalisons un audit du code existant, identifions la dette technique et proposons un plan de reprise progressif. L'objectif : remettre le projet sur de bons rails sans tout réécrire.",
  },
  {
    title: "Quelle est la différence entre un prestataire Symfony et une agence web classique ?",
    content:
      "Une agence web classique couvre un large spectre (WordPress, Shopify, marketing, design). Un prestataire Symfony comme Efficience IT se concentre exclusivement sur le développement d'applications PHP et Symfony. Cette spécialisation garantit une expertise technique plus profonde et des choix architecturaux plus pertinents pour vos projets métier.",
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#organization`,
  name: "Efficience IT",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo/logo-bleu.webp`,
  image: `${BASE_URL}/images/logo/logo-bleu.webp`,
  description:
    "Prestataire Symfony en France, Efficience IT accompagne les entreprises dans le développement, la migration et la maintenance de leurs applications PHP et Symfony.",
  email: "contact@itefficience.com",
  knowsAbout: ["Symfony", "PHP", "API Platform", "Doctrine", "DevOps"],
  areaServed: { "@type": "Country", name: "France" },
  priceRange: "$$",
  sameAs: [
    "https://github.com/efficience-it",
    "https://www.linkedin.com/company/efficience-it",
  ],
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
  dateModified: "2026-03-17",
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
];

export default function AgenceSymfonyFrance() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
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
                  le développement d&apos;applications web PHP robustes et
                  maintenables. Nous accompagnons les PME, ETI et startups sur
                  l&apos;ensemble du territoire : développement sur mesure,
                  migration, audit technique et maintenance.
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
