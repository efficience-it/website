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

const redisRelatedLinks: RelatedLink[] = [
  {
    title: "Tout savoir sur la mise en cache",
    description: "Stratégies et bonnes pratiques pour le cache applicatif",
    href: "/article/tout-savoir-sur-la-mise-en-cache-tips",
  },
  {
    title: "Cloud et DevOps",
    description: "Infrastructure cloud et automatisation pour vos applications",
    href: "/cloud-et-devops",
  },
  {
    title: "Redis, documentation officielle",
    description: "La référence pour le store clé-valeur en mémoire",
    href: "https://redis.io/docs/",
    external: true,
  },
  {
    title: "Symfony Cache, documentation officielle",
    description: "Le composant de cache du framework Symfony",
    href: "https://symfony.com/doc/current/cache.html",
    external: true,
  },
];

export const metadata = pageMetadata({
  title: "Redis et Symfony",
  description:
    "Efficience IT intègre Redis dans vos applications Symfony pour le cache, les sessions, les files d'attente Messenger et l'amélioration des performances.",
  path: "/integration-redis-symfony",
});

const expertises = [
  {
    title: "Cache applicatif avec Redis",
    description:
      "Nous mettons en place un cache Redis multi-niveaux dans vos applications Symfony : cache de requêtes Doctrine, cache HTTP, cache de résultats métier. Chaque stratégie est choisie en fonction de vos patterns d'accès pour un gain de performance mesurable.",
  },
  {
    title: "Sessions distribuées",
    description:
      "Redis comme backend de sessions permet de scaler horizontalement votre application Symfony. Les sessions sont partagées entre les instances, le sticky session disparaît et le load balancing devient transparent pour vos utilisateurs.",
  },
  {
    title: "Files d'attente Messenger",
    description:
      "Symfony Messenger avec un transport Redis pour les traitements asynchrones : envoi d'emails, génération de PDF, synchronisation de données. Redis offre des performances excellentes pour les files d'attente à haut débit avec un minimum de latence.",
  },
  {
    title: "Invalidation et stratégies de cache",
    description:
      "Le cache sans stratégie d'invalidation crée plus de problèmes qu'il n'en résout. Nous définissons des TTL adaptés, des tags d'invalidation avec Symfony Cache et des patterns de cache-aside pour garantir la fraîcheur des données servies à vos utilisateurs.",
  },
];

const stack = [
  { name: "Redis 7", description: "Store clé-valeur en mémoire, performant et polyvalent" },
  { name: "Symfony Cache", description: "Composant de cache PSR-6/PSR-16 avec support Redis natif" },
  { name: "Symfony Messenger", description: "Bus de messages pour les traitements asynchrones" },
  { name: "Predis / phpredis", description: "Clients PHP pour communiquer avec Redis" },
  { name: "Redis Sentinel / Cluster", description: "Haute disponibilité et répartition de charge Redis" },
];

const faqItems = [
  {
    title: "Pourquoi utiliser Redis avec Symfony ?",
    content:
      "Redis stocke les données en mémoire, ce qui le rend des centaines de fois plus rapide qu'une base de données relationnelle pour les lectures. Intégré à Symfony via le composant Cache et Messenger, Redis accélère les temps de réponse, permet de distribuer les sessions entre les serveurs et offre un transport performant pour les files d'attente asynchrones.",
  },
  {
    title: "Redis remplace-t-il PostgreSQL ou MySQL ?",
    content:
      "Non. Redis est complémentaire à votre base de données relationnelle. PostgreSQL stocke vos données métier de manière durable, Redis les met en cache en mémoire pour accélérer les lectures fréquentes. Les deux fonctionnent ensemble : Redis soulage la base de données et réduit les temps de réponse de votre application Symfony.",
  },
  {
    title: "Comment gérer la haute disponibilité de Redis ?",
    content:
      "Redis Sentinel surveille vos instances Redis et bascule automatiquement sur un replica en cas de panne du primaire. Pour les charges importantes, Redis Cluster répartit les données sur plusieurs nœuds. Nous configurons l'architecture Redis adaptée à vos contraintes de disponibilité et de performance.",
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
  { name: "Redis et Symfony", path: "/integration-redis-symfony" },
]);

const service = serviceJsonLd({
  name: "Redis et Symfony",
  description:
    "Intégration de Redis dans vos applications Symfony pour le cache, les sessions, les files d'attente Messenger et l'amélioration des performances.",
  path: "/integration-redis-symfony",
});

const webPage = webPageJsonLd({
  name: "Redis et Symfony : cache, sessions et performance applicative",
  description:
    "Efficience IT intègre Redis dans vos applications Symfony pour le cache, les sessions, les files d'attente Messenger et l'amélioration des performances.",
  path: "/integration-redis-symfony",
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
});

export default function IntegrationRedisSymfony() {
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
            <Breadcrumb items={[{ label: "Nos expertises", href: "/notre-expertise" }, { label: "Redis et Symfony" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Performance Symfony
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Redis et Symfony : cache, sessions et performance applicative
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre application Symfony est lente, vos sessions ne scalent pas,
                  vos traitements asynchrones saturent.
                  Efficience IT <strong>intègre Redis dans vos applications Symfony</strong> pour
                  accélérer les temps de réponse, distribuer les sessions et fiabiliser
                  vos files d&apos;attente Messenger.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Cache applicatif, sessions distribuées, transport Messenger : Redis
                  est le complément naturel de vos{" "}
                  <Link
                    href="/developpement-php"
                    className="text-primary hover:underline"
                  >
                    applications PHP
                  </Link>{" "}
                  pour gagner en performance. Découvrez{" "}
                  <Link
                    href="/article/tout-savoir-sur-la-mise-en-cache-tips"
                    className="text-primary hover:underline"
                  >
                    nos conseils sur la mise en cache
                  </Link>{" "}
                  pour comprendre les enjeux.
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
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
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
              <SectionTitle>Nos expertises Redis</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Quatre axes pour intégrer Redis dans votre architecture Symfony
                et améliorer vos performances.
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
                Redis fonctionne en synergie avec votre infrastructure{" "}
                <Link
                  href="/cloud-et-devops"
                  className="text-primary hover:underline"
                >
                  Cloud et DevOps
                </Link>
                . Pour un{" "}
                <Link
                  href="/hebergement-symfony"
                  className="text-primary hover:underline"
                >
                  hébergement Symfony optimisé
                </Link>
                , Redis est souvent la première brique à mettre en place.
              </p>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Notre stack Redis</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Des outils éprouvés pour intégrer, configurer et monitorer Redis
                dans vos applications Symfony.
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
                  Redis : la brique performance de votre architecture Symfony
                </h2>
                <p className="mt-4 text-lg text-gray">
                  Ajouter Redis à une application Symfony est simple. L&apos;intégrer
                  correctement, c&apos;est autre chose. Une stratégie de cache mal
                  pensée provoque des données obsolètes, une saturation mémoire ou
                  des stampede effects qui mettent votre application à genoux.
                </p>
                <p className="mt-4 text-lg text-gray">
                  Chez Efficience IT, nous configurons Redis avec des stratégies
                  d&apos;invalidation adaptées à vos cas d&apos;usage. Tags Symfony
                  Cache, TTL différenciés par type de données, lock distribué pour
                  éviter les recalculs concurrents. Chaque décision est guidée par
                  les métriques de votre{" "}
                  <Link
                    href="/developpement-php"
                    className="text-primary hover:underline"
                  >
                    application PHP
                  </Link>{" "}
                  en production.
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
          <RelatedLinks links={redisRelatedLinks} />
        </FadeIn>

        <FadeIn>
          <CallToAction />
          <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}
