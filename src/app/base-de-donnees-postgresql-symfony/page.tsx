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
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";

const postgresqlRelatedLinks: RelatedLink[] = [
  {
    title: "Migration MySQL vers PostgreSQL avec Doctrine",
    description: "Guide complet pour migrer votre base de données",
    href: "/article/migration-mysql-postgresql-doctrine-guide",
  },
  {
    title: "Doctrine ORM 3.0 : nouvelle version majeure",
    description: "Ce qui change avec Doctrine ORM 3 pour vos bases de données",
    href: "/article/doctrine-orm-3-0-une-nouvelle-version-majeure-pour-les-bases-de-donnees",
  },
  {
    title: "Développement PHP",
    description: "Applications sur mesure avec PHP 8 et Symfony",
    href: "/developpement-php",
  },
  {
    title: "PostgreSQL, documentation officielle",
    description: "La référence pour le SGBD relationnel open source le plus avancé",
    href: "https://www.postgresql.org/docs/current/",
    external: true,
  },
];

export const metadata = pageMetadata({
  title: "PostgreSQL et Symfony : base de données performante pour vos applications",
  description:
    "Efficience IT intègre PostgreSQL dans vos projets Symfony avec Doctrine. Optimisation des requêtes, migration depuis MySQL, types avancés et indexation.",
  path: "/base-de-donnees-postgresql-symfony",
});

const expertises = [
  {
    title: "Migration MySQL vers PostgreSQL",
    description:
      "Nous migrons vos bases MySQL vers PostgreSQL sans perte de données ni interruption de service. Analyse du schéma, conversion des types, migration des données avec pgloader et adaptation des requêtes Doctrine pour tirer parti des fonctionnalités avancées de PostgreSQL.",
  },
  {
    title: "Optimisation des requêtes Doctrine",
    description:
      "Requêtes N+1, jointures mal indexées, hydratation excessive : nous identifions et corrigeons les goulots d'étranglement Doctrine. EXPLAIN ANALYZE et pg_stat_statements guident chaque optimisation pour des temps de réponse mesurables.",
  },
  {
    title: "Types avancés PostgreSQL (jsonb, arrays, UUID)",
    description:
      "PostgreSQL offre des types natifs que MySQL ne propose pas : jsonb pour les données semi-structurées, arrays pour les listes, UUID pour les identifiants distribués. Nous configurons Doctrine pour exploiter ces types et simplifier votre modèle de données.",
  },
  {
    title: "Indexation et performances",
    description:
      "Index B-tree, GIN, GiST, partiels et couvrants : nous choisissons la stratégie d'indexation adaptée à vos requêtes. Chaque index est validé par EXPLAIN ANALYZE pour garantir un gain de performance réel, pas théorique.",
  },
];

const stack = [
  { name: "PostgreSQL 16", description: "Le SGBD relationnel open source le plus avancé" },
  { name: "Doctrine ORM 3", description: "Mapping objet-relationnel de référence pour Symfony" },
  { name: "pgloader", description: "Migration de données depuis MySQL, SQLite ou CSV" },
  { name: "EXPLAIN ANALYZE", description: "Analyse des plans d'exécution des requêtes" },
  { name: "pg_stat_statements", description: "Suivi des requêtes les plus consommatrices en production" },
  { name: "Symfony Messenger (SKIP LOCKED)", description: "Files d'attente fiables avec verrouillage PostgreSQL natif" },
];

const whenToChoose = [
  "Vous démarrez un nouveau projet Symfony et n'êtes pas contraint par une base existante : PostgreSQL est notre choix par défaut pour sa robustesse et ses fonctionnalités avancées.",
  "Vous manipulez des données semi-structurées (jsonb), des arrays, ou avez besoin de types complexes que MySQL gère mal.",
  "Vous voulez un transport Symfony Messenger fiable basé sur la base de données : SKIP LOCKED de PostgreSQL est le mécanisme idéal.",
  "Vous avez besoin d'index avancés (GIN, GiST, partiels) pour la recherche full-text, la géolocalisation ou des cas d'usage spécifiques.",
];

const whenNotToChoose = [
  "Votre application MySQL est stable, performante et correctement administrée : la migration vers PostgreSQL n'apporterait pas un gain à la hauteur du risque.",
  "Vos équipes d'exploitation ne maîtrisent que MySQL et vous n'avez pas la capacité à monter en compétence sur PostgreSQL : la stabilité opérationnelle prime.",
  "Vous avez besoin d'un SGBD ultra simple à opérer pour un petit projet : SQLite peut suffire en environnement contraint, ou un MySQL managed.",
];

const useCases = [
  {
    title: "Migration MySQL vers PostgreSQL",
    description:
      "Migration d'une plateforme métier d'un acteur du retail B2B de MySQL vers PostgreSQL, avec analyse du schéma, conversion des types via pgloader et adaptation des requêtes Doctrine pour exploiter jsonb et les index GIN.",
  },
  {
    title: "Optimisation Doctrine sur application existante",
    description:
      "Audit de performance d'une application Symfony qui ralentit en production : identification des requêtes N+1, ajout d'index ciblés guidés par EXPLAIN ANALYZE et refactoring des hydrations Doctrine pour faire baisser la latence p95.",
  },
  {
    title: "Modélisation jsonb et types avancés",
    description:
      "Conception du modèle de données pour une scale-up SaaS, en exploitant jsonb pour les configurations utilisateur dynamiques, les arrays pour les permissions et les UUID pour les identifiants distribués entre microservices.",
  },
];

const faqItems = [
  {
    title: "Pourquoi migrer de MySQL vers PostgreSQL ?",
    content:
      "PostgreSQL offre des fonctionnalités que MySQL ne propose pas nativement : types jsonb, arrays, UUID, index GIN et GiST, transactions plus fiables et conformité SQL plus stricte. Pour les applications Symfony avec Doctrine, PostgreSQL permet de simplifier le modèle de données et d'améliorer les performances sur les requêtes complexes.",
  },
  {
    title: "La migration MySQL vers PostgreSQL est-elle risquée ?",
    content:
      "Avec une préparation rigoureuse, la migration se fait sans perte de données. Nous analysons le schéma, identifions les incompatibilités (auto_increment vs sequences, types spécifiques), migrons les données avec pgloader et validons chaque table. L'application continue de tourner sur MySQL pendant la migration, le basculement se fait sur une fenêtre de maintenance courte.",
  },
  {
    title: "Comment optimiser les performances PostgreSQL avec Doctrine ?",
    content:
      "L'optimisation passe par plusieurs leviers : réduire les requêtes N+1 avec les bons fetch modes, ajouter des index adaptés aux requêtes réelles (pas aux requêtes supposées), utiliser les types natifs PostgreSQL via Doctrine, et monitorer en continu avec pg_stat_statements pour détecter les régressions.",
  },
  {
    title: "Quel type d'identifiant choisir : int, UUID ou ULID ?",
    content:
      "Les auto-increment (int) sont simples mais exposent des informations sur le volume de données. Les UUID v4 sont uniques mais fragmentent les index B-tree. Les ULID combinent unicité et tri chronologique, ce qui préserve les performances d'insertion. Le choix dépend de vos contraintes de sécurité et de performance.",
  },
  {
    title: "Combien de temps pour migrer une base MySQL vers PostgreSQL ?",
    content:
      "Pour une base de quelques dizaines de gigaoctets et une application Symfony correctement structurée avec Doctrine, comptez 2 à 6 semaines selon les spécificités MySQL utilisées (types ENUM non standards, requêtes natives MySQL, fonctions spécifiques). La migration des données elle-même est rapide avec pgloader, l'essentiel du temps va à l'adaptation des requêtes et à la validation fonctionnelle.",
  },
  {
    title: "Quelles métriques surveiller en production sur PostgreSQL ?",
    content:
      "Les requêtes les plus consommatrices via pg_stat_statements, le taux de cache hit (shared buffers), les locks et les long-running transactions, le bloat des tables et index, la réplication si vous avez un standby. Côté Symfony, surveillez le nombre de requêtes par requête HTTP (pour détecter les N+1) et le temps passé en base via un APM. pgBadger et Datadog Database Monitoring couvrent l'essentiel.",
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
  { name: "Nos expertises", path: "/notre-expertise" },
  { name: "PostgreSQL et Symfony", path: "/base-de-donnees-postgresql-symfony" },
]);

const service = serviceJsonLd({
  name: "PostgreSQL et Symfony",
  description:
    "Intégration de PostgreSQL dans vos projets Symfony avec Doctrine. Optimisation des requêtes, migration depuis MySQL, types avancés et indexation.",
  path: "/base-de-donnees-postgresql-symfony",
});

const webPage = webPageJsonLd({
  name: "PostgreSQL et Symfony : base de données performante pour vos applications",
  description:
    "Efficience IT intègre PostgreSQL dans vos projets Symfony avec Doctrine. Optimisation des requêtes, migration depuis MySQL, types avancés et indexation.",
  path: "/base-de-donnees-postgresql-symfony",
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
});

export default function BaseDeDonneesPostgresqlSymfony() {
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
            <Breadcrumb items={[{ label: "Nos expertises", href: "/notre-expertise" }, { label: "PostgreSQL et Symfony" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Base de données Symfony
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  PostgreSQL et Symfony : base de données performante pour vos applications
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre base MySQL montre ses limites, ou vous démarrez un nouveau
                  projet et cherchez le meilleur SGBD.
                  Efficience IT <strong>intègre PostgreSQL dans vos projets Symfony</strong> avec
                  Doctrine pour exploiter les types avancés, optimiser les requêtes
                  et garantir des performances solides en production.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  <Link
                    href="/article/migration-mysql-postgresql-doctrine-guide"
                    className="text-primary hover:underline"
                  >
                    Migration MySQL vers PostgreSQL
                  </Link>
                  , optimisation Doctrine, indexation avancée : nous intervenons sur
                  toute la chaîne de données de vos{" "}
                  <Link
                    href="/developpement-php"
                    className="text-primary hover:underline"
                  >
                    applications PHP
                  </Link>.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Discuter de votre projet</Button>
                  <Button href="/audit-symfony-gratuit" variant="outline">
                    Audit gratuit 30 min
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
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
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
              <SectionTitle>Nos expertises PostgreSQL</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Quatre domaines pour tirer le meilleur de PostgreSQL dans vos projets
                Symfony.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {expertises.map((expertise) => (
                  <Card key={expertise.title}>
                    <h3 className="font-display text-lg font-bold text-dark">
                      {expertise.title}
                    </h3>
                    <p className="mt-2 text-gray">{expertise.description}</p>
                  </Card>
                ))}
              </div>
              <p className="mx-auto mt-8 max-w-3xl text-center text-gray">
                Doctrine ORM 3 apporte des changements majeurs pour la gestion des
                bases de données.{" "}
                <Link
                  href="/article/doctrine-orm-3-0-une-nouvelle-version-majeure-pour-les-bases-de-donnees"
                  className="text-primary hover:underline"
                >
                  Découvrez ce qui change avec Doctrine ORM 3.0
                </Link>{" "}
                et comment cela impacte vos projets. Pour le choix de vos
                identifiants,{" "}
                <Link
                  href="/article/prendre-int-uuid-ou-ulid-pour-un-index-de-base-de-donnees"
                  className="text-primary hover:underline"
                >
                  notre comparatif int vs UUID vs ULID
                </Link>{" "}
                vous aide à trancher.
              </p>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Notre stack base de données</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Des outils matures pour gérer, migrer et optimiser vos bases de
                données PostgreSQL.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stack.map((item) => (
                  <Card key={item.name}>
                    <p className="font-display text-base font-bold text-primary">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-gray">{item.description}</p>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-12">
                <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                  PostgreSQL et Doctrine : le socle de vos applications Symfony
                </h2>
                <p className="mt-4 text-lg text-gray">
                  PostgreSQL n&apos;est pas qu&apos;une alternative à MySQL. C&apos;est
                  un SGBD qui offre des fonctionnalités avancées nativement : jsonb
                  pour les données semi-structurées, SKIP LOCKED pour les files
                  d&apos;attente fiables avec Symfony Messenger, des index GIN pour
                  la recherche full-text et une conformité SQL stricte qui évite les
                  mauvaises surprises en production.
                </p>
                <p className="mt-4 text-lg text-gray">
                  Chez Efficience IT, PostgreSQL est notre SGBD de référence pour le{" "}
                  <Link
                    href="/developpement-php"
                    className="text-primary hover:underline"
                  >
                    développement PHP
                  </Link>
                  . Combiné à Doctrine ORM 3, il permet de construire des applications
                  Symfony dont la couche données est performante, maintenable et
                  évolutive.
                </p>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Quand choisir PostgreSQL</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                PostgreSQL est notre choix par défaut, mais ce n&apos;est pas
                toujours la bonne réponse. Voici quand l&apos;adopter ou s&apos;abstenir.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Choisir PostgreSQL si
                  </h3>
                  <ul className="mt-4 space-y-3 text-gray">
                    {whenToChoose.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Regarder ailleurs si
                  </h3>
                  <ul className="mt-4 space-y-3 text-gray">
                    {whenNotToChoose.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>Cas d&apos;usage typiques</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Trois exemples concrets de missions PostgreSQL que nous menons
                régulièrement.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {useCases.map((useCase) => (
                  <Card key={useCase.title}>
                    <h3 className="font-display text-lg font-bold text-dark">
                      {useCase.title}
                    </h3>
                    <p className="mt-2 text-gray">{useCase.description}</p>
                  </Card>
                ))}
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
          <RelatedLinks links={postgresqlRelatedLinks} />
        </FadeIn>

        <FadeIn>
          <CallToAction />
          <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}
