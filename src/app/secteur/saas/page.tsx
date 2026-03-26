import Image from "next/image";
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
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title:
    "Développement SaaS avec Symfony : architecture multi-tenant et API",
  description:
    "Efficience IT conçoit des applications SaaS robustes avec Symfony : architecture multi-tenant, API REST/GraphQL, scalabilité, CI/CD et monitoring en production.",
  path: "/secteur/saas",
});

const expertises = [
  {
    title: "Architecture multi-tenant",
    description:
      "Isolation des données par tenant avec Doctrine, gestion des schémas ou filtrage automatique au niveau du query builder. Chaque client a son espace isolé, avec la possibilité de personnaliser les fonctionnalités par plan.",
    icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  },
  {
    title: "API REST et GraphQL",
    description:
      "API Platform expose votre domaine métier en API versionnable et documentée automatiquement. Vos clients intègrent votre SaaS dans leurs outils, vos équipes front consomment une API propre et typée.",
    icon: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
  },
  {
    title: "Scalabilité horizontale",
    description:
      "Traitements asynchrones avec Messenger et RabbitMQ, cache distribué avec Redis, sessions externalisées. Votre application scale horizontalement : vous ajoutez des serveurs, pas des problèmes.",
    icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605",
  },
  {
    title: "CI/CD et monitoring",
    description:
      "Pipeline de déploiement continu avec tests automatisés, migrations Doctrine zero-downtime et monitoring applicatif. Vous déployez plusieurs fois par jour en toute confiance, avec des alertes en temps réel.",
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  },
];

const references = [
  { name: "Assoconnect", image: "/images/clients/assoconnect.webp" },
  { name: "Sesame IT", image: "/images/clients/sesame-it.webp" },
];

const faqItems = [
  {
    title: "Quelle approche multi-tenant recommandez-vous ?",
    content:
      "Ça dépend du volume et du niveau d'isolation requis. Pour la plupart des SaaS, un filtrage par tenant au niveau du query builder Doctrine suffit : simple, performant, facile à maintenir. Pour les cas qui nécessitent une isolation stricte (données sensibles, conformité), nous optons pour un schéma par tenant ou des bases séparées.",
  },
  {
    title: "Comment gérez-vous les migrations en production sans downtime ?",
    content:
      "Nous appliquons des migrations compatibles backward : ajout de colonnes nullable, création d'index en mode concurrent, scripts de backfill en arrière-plan. Le déploiement se fait en blue-green ou rolling update pour que vos utilisateurs ne voient aucune interruption.",
  },
  {
    title: "Pouvez-vous reprendre un SaaS existant ?",
    content:
      "Oui. Nous commençons par un audit technique pour évaluer la qualité du code, l'architecture et les performances. Ensuite, nous définissons un plan de reprise avec des priorités claires : correction des bugs critiques, refactoring des zones à risque, mise en place des tests.",
  },
  {
    title: "Comment assurez-vous la scalabilité ?",
    content:
      "L'architecture est conçue dès le départ pour scaler horizontalement. Les tâches lourdes (envoi d'emails, génération de rapports, imports) sont déplacées dans des workers Messenger. Le cache Redis et les sessions externalisées permettent de multiplier les instances applicatives sans contrainte.",
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
  { name: "SaaS", path: "/secteur/saas" },
]);

const service = serviceJsonLd({
  name: "Développement SaaS avec Symfony",
  description:
    "Conception et développement d'applications SaaS robustes avec Symfony : architecture multi-tenant, API REST/GraphQL, scalabilité, CI/CD et monitoring.",
  path: "/secteur/saas",
});

const webPage = webPageJsonLd({
  name: "Développement SaaS avec Symfony : architecture multi-tenant et API",
  description:
    "Efficience IT conçoit des applications SaaS robustes avec Symfony : architecture multi-tenant, API REST/GraphQL, scalabilité, CI/CD et monitoring en production.",
  path: "/secteur/saas",
  datePublished: "2026-03-12",
  dateModified: "2026-03-12",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "Micro-service ou monolithe modulaire ?",
    description:
      "Choisir la bonne architecture pour votre SaaS",
    href: "/article/quelle-architecture-de-projet-choisir-entre-micro-service-ou-monolithe-modulaire",
  },
  {
    title: "API REST : les bonnes pratiques",
    description:
      "Concevoir des API professionnelles pour vos intégrations",
    href: "/article/api-rest-les-bonnes-pratiques",
  },
  {
    title: "Docker en production",
    description:
      "Pourquoi Docker est indispensable pour déployer votre SaaS",
    href: "/article/pourquoi-docker-est-indispensable-en-production-aujourdhui",
  },
  {
    title: "Doctrine ORM 3.0",
    description:
      "Les nouveautés de l'ORM pour les applications multi-tenant",
    href: "/article/doctrine-orm-3-0-une-nouvelle-version-majeure-pour-les-bases-de-donnees",
  },
  {
    title: "Doctavis et Efficience IT",
    description:
      "Retour d'expérience sur le développement d'un MVP SaaS",
    href: "/article/doctavis-et-efficience-it-une-course-contre-la-montre-pour-sortir-un-mvp",
  },
  {
    title: "Maintenance applicative Symfony",
    description:
      "Assurez la pérennité de votre SaaS après le lancement",
    href: "/maintenance-applicative-symfony",
  },
  {
    title: "API Platform, doc officielle",
    description: "Framework pour créer des API REST et GraphQL en PHP",
    href: "https://api-platform.com/docs/",
    external: true,
  },
];

export default function SecteurSaas() {
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
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Secteur SaaS
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Développement SaaS avec Symfony : architecture multi-tenant et API
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Vous construisez un SaaS et vous avez besoin d&apos;une
                  architecture qui tient la charge, isole les données de vos
                  clients et permet de déployer sans interruption de service.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT conçoit des{" "}
                  <strong>applications SaaS robustes</strong> avec Symfony. Une{" "}
                  <Link
                    href="/architecture-hexagonale-symfony"
                    className="text-primary hover:underline"
                  >
                    architecture hexagonale
                  </Link>{" "}
                  qui sépare votre logique métier de l&apos;infrastructure,
                  des{" "}
                  <Link
                    href="/api-sur-mesure-symfony"
                    className="text-primary hover:underline"
                  >
                    API sur mesure
                  </Link>{" "}
                  pour vos intégrations, et un{" "}
                  <Link
                    href="/hebergement-symfony"
                    className="text-primary hover:underline"
                  >
                    hébergement Symfony
                  </Link>{" "}
                  conçu pour scaler. Le tout pour un produit maintenable et
                  évolutif sur le long terme.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">
                    Discutons de votre projet
                  </Button>
                  <Button href="/nos-references" variant="outline">
                    Voir nos références
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
                      d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
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
            <SectionTitle>Notre expertise SaaS</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              De l&apos;architecture multi-tenant au déploiement continu, nous
              couvrons l&apos;ensemble du cycle de vie d&apos;un produit SaaS.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {expertises.map((item) => (
                <Card key={item.title}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-dark">
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
            <SectionTitle>Pourquoi Symfony pour un SaaS</SectionTitle>

            <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg text-gray">
              <p>
                Un SaaS, c&apos;est un produit qui doit évoluer vite, scaler
                proprement et rester stable en production. Symfony apporte la
                structure nécessaire pour ça : injection de dépendances,
                composants découplés, écosystème mature.
              </p>
              <p>
                L&apos;architecture que nous mettons en place sépare clairement le{" "}
                <Link
                  href="/article/domain-ne-devrait-jamais-connaitre-symfony"
                  className="text-primary hover:underline"
                >
                  domaine métier du framework
                </Link>
                . Votre logique business est indépendante de Symfony : elle est
                testable, portable et ne subit pas les breaking changes lors des
                montées de version.
              </p>
              <p>
                Notre{" "}
                <Link
                  href="/tests-automatises-php"
                  className="text-primary hover:underline"
                >
                  approche par tests automatisés
                </Link>{" "}
                sécurise chaque déploiement. Pour les traitements lourds
                (génération de rapports, envoi de notifications,
                synchronisation de données), nous utilisons{" "}
                <Link
                  href="/article/quelles-sont-les-differences-entre-symfony-messenger-php-enqueue-quoi-utiliser"
                  className="text-primary hover:underline"
                >
                  Symfony Messenger
                </Link>{" "}
                avec RabbitMQ. Les jobs sont traités en arrière-plan par des
                workers que vous pouvez scaler indépendamment de l&apos;application
                web.
              </p>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Ils nous font confiance</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Des éditeurs SaaS nous confient le développement et
              l&apos;évolution de leur produit.
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-8">
              {references.map((client) => (
                <div
                  key={client.name}
                  className="overflow-hidden rounded-lg shadow-sm"
                >
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={600}
                    height={400}
                    className="aspect-[3/2] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Construisons votre SaaS sur des bases solides
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Que vous lanciez un MVP ou que vous ayez besoin de scaler un
              produit existant, parlons de votre projet et définissons
              l&apos;architecture qui vous permettra de grandir sereinement.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
            >
              Parlons de votre projet
            </Link>
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
        <RelatedLinks links={relatedLinks} />
        </FadeIn>

        <FadeIn>
        <CallToAction />
        <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}
