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
import Breadcrumb from "@/components/ui/Breadcrumb";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd, pageGraphJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title:
    "Développement d'API et intégration SI avec Symfony et API Platform",
  description:
    "Efficience IT conçoit des API REST et GraphQL avec Symfony et API Platform : intégration SI, connecteurs sur mesure et flux asynchrones fiables.",
  path: "/secteur/api-integration",
});

const expertises = [
  {
    title: "API REST et GraphQL",
    description:
      "Conception d'API professionnelles avec API Platform : documentation automatique, pagination, filtrage, validation, versioning. Des API typées, testées et prêtes à être consommées par vos applications front, mobiles ou partenaires.",
    icon: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
  },
  {
    title: "Connecteurs sur mesure",
    description:
      "Intégration avec vos ERP, CRM, PIM, outils de facturation et services tiers via des connecteurs dédiés. Chaque connecteur gère les erreurs, les retries et la réconciliation pour garantir la fiabilité des échanges.",
    icon: "M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
  },
  {
    title: "Flux asynchrones",
    description:
      "Les échanges entre systèmes ne peuvent pas toujours être synchrones. Nous utilisons Symfony Messenger avec RabbitMQ pour les flux asynchrones : imports, synchronisations, notifications. Chaque message est idempotent et rejouable en cas d'échec.",
    icon: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z",
  },
  {
    title: "Architecture orientée événements",
    description:
      "Pour les SI complexes, nous mettons en place une architecture event-driven où les systèmes communiquent par événements. Découplage maximal, résilience et traçabilité complète de chaque échange entre vos applications.",
    icon: "M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z",
  },
];

const references = [
  { name: "Carter Cash", image: "/images/clients/carter-cash.webp" },
  { name: "Assoconnect", image: "/images/clients/assoconnect.webp" },
  { name: "Sesame IT", image: "/images/clients/sesame-it.webp" },
];

const faqItems = [
  {
    title: "Pourquoi choisir API Platform plutôt qu'une API Symfony classique ?",
    content:
      "API Platform accélère le développement en générant automatiquement la documentation OpenAPI, la pagination, les filtres et la validation. Vous obtenez une API professionnelle en une fraction du temps, tout en gardant la flexibilité de personnaliser chaque endpoint. Pour les projets qui ne nécessitent pas toute cette stack, nous développons aussi des API Symfony classiques.",
  },
  {
    title: "Comment gérez-vous la sécurité des API ?",
    content:
      "Authentification par JWT ou OAuth2, rate limiting, validation stricte des entrées, chiffrement en transit. Chaque API est testée pour les vulnérabilités OWASP Top 10 et les injections. Les tokens sont gérés avec des durées de vie courtes et des mécanismes de refresh sécurisés.",
  },
  {
    title: "Pouvez-vous reprendre une API existante ?",
    content:
      "Oui. Nous auditons l'API existante (design, performances, sécurité), puis nous proposons un plan d'amélioration : refactoring, ajout de tests, migration vers API Platform si pertinent, ou optimisation des endpoints critiques.",
  },
  {
    title: "Comment assurez-vous la fiabilité des flux entre systèmes ?",
    content:
      "Chaque connecteur est conçu pour être idempotent (un message traité deux fois ne crée pas de doublon) et résilient (retry automatique avec backoff exponentiel en cas d'échec). Les messages en erreur sont isolés dans une dead letter queue pour analyse, sans bloquer le reste du flux.",
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
  { name: "API et intégration", path: "/secteur/api-integration" },
]);

const service = serviceJsonLd({
  name: "Développement d'API et intégration SI",
  description:
    "Conception d'API REST et GraphQL avec Symfony et API Platform, intégration SI, connecteurs sur mesure et flux asynchrones fiables.",
  path: "/secteur/api-integration",
});

const webPage = webPageJsonLd({
  name: "Développement d'API et intégration SI avec Symfony et API Platform",
  description:
    "Efficience IT conçoit des API REST et GraphQL avec Symfony et API Platform : intégration SI, connecteurs sur mesure et flux asynchrones fiables.",
  path: "/secteur/api-integration",
  datePublished: "2026-03-30",
  dateModified: "2026-03-30",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "API REST : les bonnes pratiques",
    description:
      "Concevoir des API robustes et professionnelles",
    href: "/article/api-rest-les-bonnes-pratiques",
  },
  {
    title: "REST vs GraphQL",
    description:
      "Choisir le bon paradigme pour votre projet",
    href: "/article/que-vaut-rest-face-a-son-nouveau-challenger-graphql",
  },
  {
    title: "Symfony Messenger en archi hexagonale",
    description:
      "La colonne vertébrale de vos flux asynchrones",
    href: "/article/symfony-messenger-colonne-vertebrale-archi-hexagonale",
  },
  {
    title: "API sur mesure Symfony",
    description:
      "Notre offre détaillée de développement d'API",
    href: "/api-sur-mesure-symfony",
  },
  {
    title: "Swagger et NelmioApiDoc",
    description:
      "Documenter automatiquement vos API Symfony",
    href: "/article/swagger-nelmio-bundle-et-ses-fonctionnalites-pourquoi-lutilise-t-on",
  },
  {
    title: "Migration MySQL vers PostgreSQL",
    description:
      "Préparer votre base de données pour les intégrations avancées",
    href: "/article/migration-mysql-postgresql-doctrine-guide",
  },
  {
    title: "API Platform, doc officielle",
    description: "Le framework pour créer des API REST et GraphQL en PHP",
    href: "https://api-platform.com/docs/",
    external: true,
  },
];

export default function SecteurApiIntegration() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraphJsonLd(breadcrumb, service, faqJsonLd, webPage)) }} />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <Breadcrumb items={[{ label: "Nos secteurs", href: "/secteur" }, { label: "API et intégration" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  API et intégration
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Développement d&apos;API et intégration SI avec Symfony et API Platform
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Vos systèmes d&apos;information ne communiquent pas entre eux.
                  Les données sont saisies en double, les synchronisations
                  sont manuelles, et chaque nouvelle intégration prend des
                  semaines à mettre en place.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT conçoit des{" "}
                  <Link
                    href="/api-sur-mesure-symfony"
                    className="text-primary hover:underline"
                  >
                    API sur mesure
                  </Link>{" "}
                  avec Symfony et API Platform pour interconnecter vos
                  systèmes. Des flux fiables, documentés et sécurisés qui
                  permettent à votre SI de fonctionner comme un ensemble
                  cohérent.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">
                    Discutons de votre projet
                  </Button>
                  <Button href="/audit-symfony-gratuit" variant="outline">
                    Audit gratuit
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
                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
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
            <SectionTitle>Notre expertise API et intégration</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              De la conception à la mise en production, des API robustes
              et des intégrations fiables.
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
            <SectionTitle>Des API conçues pour durer</SectionTitle>
            <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg text-gray">
              <p>
                Une API mal conçue, c&apos;est une source de problèmes pour
                toutes les applications qui en dépendent. Nous concevons des
                API avec les{" "}
                <Link
                  href="/article/api-rest-les-bonnes-pratiques"
                  className="text-primary hover:underline"
                >
                  bonnes pratiques REST
                </Link>{" "}
                : ressources bien nommées, codes HTTP sémantiques,
                pagination, versioning et documentation{" "}
                <Link
                  href="/article/swagger-nelmio-bundle-et-ses-fonctionnalites-pourquoi-lutilise-t-on"
                  className="text-primary hover:underline"
                >
                  OpenAPI automatique
                </Link>
                .
              </p>
              <p>
                Pour les projets qui nécessitent plus de flexibilité côté
                client, nous proposons des API{" "}
                <Link
                  href="/article/que-vaut-rest-face-a-son-nouveau-challenger-graphql"
                  className="text-primary hover:underline"
                >
                  GraphQL
                </Link>{" "}
                qui permettent à chaque consommateur de récupérer exactement
                les données dont il a besoin. Le tout sécurisé par JWT,
                avec une{" "}
                <Link
                  href="/securite-application-symfony"
                  className="text-primary hover:underline"
                >
                  couche de sécurité
                </Link>{" "}
                robuste.
              </p>
              <p>
                Les flux entre systèmes passent par{" "}
                <Link
                  href="/article/symfony-messenger-colonne-vertebrale-archi-hexagonale"
                  className="text-primary hover:underline"
                >
                  Symfony Messenger
                </Link>{" "}
                pour les échanges asynchrones. Chaque message est traçable,
                rejouable et idempotent. En cas de panne d&apos;un système
                tiers, les messages sont mis en file d&apos;attente et
                retraités automatiquement dès que le système est de
                nouveau disponible.
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
              Des entreprises nous confient la conception et l&apos;intégration
              de leurs API critiques.
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
              Connectez vos systèmes avec des API fiables
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Décrivez-nous votre besoin d&apos;intégration. Nous concevons
              l&apos;architecture API adaptée et vous livrons des flux
              robustes et documentés.
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
