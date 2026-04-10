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

const elasticsearchRelatedLinks: RelatedLink[] = [
  {
    title: "Développement PHP",
    description: "Applications sur mesure avec PHP 8 et Symfony",
    href: "/developpement-php",
  },
  {
    title: "API sur mesure Symfony",
    description: "APIs REST et GraphQL avec Symfony et API Platform",
    href: "/api-sur-mesure-symfony",
  },
  {
    title: "Elasticsearch, documentation officielle",
    description: "La référence pour le moteur de recherche distribué",
    href: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",
    external: true,
  },
  {
    title: "Symfony Messenger, documentation officielle",
    description: "Bus de messages pour les traitements asynchrones",
    href: "https://symfony.com/doc/current/messenger.html",
    external: true,
  },
];

export const metadata = pageMetadata({
  title: "Elasticsearch et Symfony",
  description:
    "Efficience IT intègre Elasticsearch dans vos projets Symfony. Indexation, recherche full-text, filtres à facettes et suggestions en temps réel.",
  path: "/integration-elasticsearch-symfony",
});

const expertises = [
  {
    title: "Recherche full-text",
    description:
      "Nous intégrons Elasticsearch dans vos applications Symfony pour offrir une recherche full-text rapide et pertinente. Analyseurs linguistiques, stemming, synonymes et scoring personnalisé pour des résultats qui correspondent aux attentes de vos utilisateurs.",
  },
  {
    title: "Filtres à facettes et agrégations",
    description:
      "Filtres par catégorie, prix, date, caractéristiques : Elasticsearch calcule les agrégations en temps réel pour afficher des compteurs à côté de chaque filtre. L'expérience de navigation est fluide, malgré des millions de documents indexés.",
  },
  {
    title: "Indexation en temps réel via Messenger",
    description:
      "Chaque modification en base de données déclenche un message Symfony Messenger qui met à jour l'index Elasticsearch de manière asynchrone. L'indexation ne ralentit pas l'application, et les résultats de recherche restent synchronisés avec vos données.",
  },
  {
    title: "Suggestions et autocomplétion",
    description:
      "Suggestions de recherche, correction orthographique et autocomplétion en temps réel. Nous configurons les suggest queries Elasticsearch pour guider vos utilisateurs vers les résultats pertinents avant même qu'ils aient fini de taper.",
  },
];

const stack = [
  { name: "Elasticsearch 8", description: "Moteur de recherche et d'analyse distribué" },
  { name: "Elastica / FOSElasticaBundle", description: "Client PHP et intégration Symfony pour Elasticsearch" },
  { name: "Symfony Messenger", description: "Indexation asynchrone via des messages" },
  { name: "Kibana", description: "Visualisation et monitoring des index Elasticsearch" },
];

const faqItems = [
  {
    title: "Pourquoi utiliser Elasticsearch plutôt que la recherche SQL ?",
    content:
      "SQL LIKE et FULLTEXT INDEX ont des limites : pas de pertinence par scoring, pas d'analyse linguistique, performances dégradées sur les gros volumes. Elasticsearch est conçu pour la recherche : index inversé, analyseurs linguistiques, scoring BM25 et agrégations en temps réel. Pour une recherche utilisateur de qualité, Elasticsearch est le standard.",
  },
  {
    title: "Comment Elasticsearch s'intègre-t-il avec Symfony ?",
    content:
      "FOSElasticaBundle connecte Elasticsearch à Symfony en quelques lignes de configuration. Les entités Doctrine sont mappées vers des index Elasticsearch, et Symfony Messenger assure l'indexation asynchrone. Les résultats de recherche sont accessibles via des repositories dédiés, comme avec Doctrine.",
  },
  {
    title: "Elasticsearch est-il adapté aux petites applications ?",
    content:
      "Elasticsearch ajoute de la complexité opérationnelle (cluster JVM, monitoring, mapping). Pour une application avec quelques milliers de documents et une recherche simple, PostgreSQL avec son index GIN peut suffire. Elasticsearch prend tout son sens à partir de dizaines de milliers de documents, ou quand la qualité de la recherche est un critère métier important.",
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
  { name: "Elasticsearch et Symfony", path: "/integration-elasticsearch-symfony" },
]);

const service = serviceJsonLd({
  name: "Elasticsearch et Symfony",
  description:
    "Intégration d'Elasticsearch dans vos projets Symfony. Indexation, recherche full-text, filtres à facettes et suggestions pour une expérience utilisateur fluide.",
  path: "/integration-elasticsearch-symfony",
});

const webPage = webPageJsonLd({
  name: "Elasticsearch et Symfony : recherche performante pour vos applications",
  description:
    "Efficience IT intègre Elasticsearch dans vos projets Symfony. Indexation, recherche full-text, filtres à facettes et suggestions en temps réel.",
  path: "/integration-elasticsearch-symfony",
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
});

export default function IntegrationElasticsearchSymfony() {
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
            <Breadcrumb items={[{ label: "Nos expertises", href: "/notre-expertise" }, { label: "Elasticsearch et Symfony" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Recherche Symfony
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Elasticsearch et Symfony : recherche performante pour vos applications
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Vos utilisateurs ne trouvent pas ce qu&apos;ils cherchent, votre
                  recherche SQL montre ses limites.
                  Efficience IT <strong>intègre Elasticsearch dans vos projets Symfony</strong> pour
                  offrir une recherche full-text rapide, des filtres à facettes et des
                  suggestions intelligentes.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Indexation en temps réel via{" "}
                  <Link
                    href="/article/quelles-sont-les-differences-entre-symfony-messenger-php-enqueue-quoi-utiliser"
                    className="text-primary hover:underline"
                  >
                    Symfony Messenger
                  </Link>
                  , scoring pertinent et autocomplétion : nous construisons le moteur
                  de recherche qui manque à vos{" "}
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
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
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
              <SectionTitle>Nos expertises Elasticsearch</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Quatre axes pour intégrer Elasticsearch dans vos applications
                Symfony et transformer l&apos;expérience de recherche.
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
                Elasticsearch s&apos;intègre naturellement dans une{" "}
                <Link
                  href="/api-sur-mesure-symfony"
                  className="text-primary hover:underline"
                >
                  API sur mesure Symfony
                </Link>{" "}
                pour exposer la recherche via des endpoints dédiés, consommables
                par vos frontaux React, Vue.js ou mobiles.
              </p>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Notre stack Elasticsearch</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Des outils éprouvés pour indexer, rechercher et monitorer vos
                données avec Elasticsearch.
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
                  Elasticsearch et Symfony : une recherche qui change tout
                </h2>
                <p className="mt-4 text-lg text-gray">
                  Un moteur de recherche performant transforme l&apos;expérience
                  utilisateur. Les visiteurs trouvent ce qu&apos;ils cherchent en
                  quelques frappes, les filtres à facettes affinent les résultats
                  instantanément, et les suggestions guident la navigation.
                </p>
                <p className="mt-4 text-lg text-gray">
                  Chez Efficience IT, nous intégrons Elasticsearch dans vos{" "}
                  <Link
                    href="/developpement-php"
                    className="text-primary hover:underline"
                  >
                    applications PHP
                  </Link>{" "}
                  avec une indexation asynchrone via Symfony Messenger. L&apos;index
                  reste synchronisé avec votre base de données sans impacter les
                  performances de l&apos;application. Le monitoring via Kibana,
                  intégré à votre infrastructure{" "}
                  <Link
                    href="/cloud-et-devops"
                    className="text-primary hover:underline"
                  >
                    Cloud et DevOps
                  </Link>
                  , permet d&apos;optimiser le scoring en continu.
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
          <RelatedLinks links={elasticsearchRelatedLinks} />
        </FadeIn>

        <FadeIn>
          <CallToAction />
          <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}
