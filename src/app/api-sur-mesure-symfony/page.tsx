import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "API sur mesure avec Symfony et API Platform",
  description:
    "Développement API Symfony sur mesure : REST, GraphQL, OAuth2/JWT, OpenAPI. Nous concevons des API robustes et performantes pour vos applications mobiles, SaaS et interconnexions SI.",
  path: "/api-sur-mesure-symfony",
});

const useCases = [
  {
    title: "API pour application mobile",
    description:
      "Exposez vos données métiers à vos applications iOS et Android via une API REST sécurisée, avec authentification JWT et versioning.",
  },
  {
    title: "API SaaS",
    description:
      "Construisez le coeur technique de votre produit SaaS avec une API evoluant au rythme de vos fonctionnalites, documentee automatiquement via OpenAPI.",
  },
  {
    title: "Interconnexion de systemes d'information",
    description:
      "Faites communiquer vos outils internes (ERP, CRM, WMS) sans couplage fort, grâce à des contrats d'interface clairs et des mecanismes de retry robustes.",
  },
  {
    title: "API partenaires et B2B",
    description:
      "Ouvrez votre plateforme a vos partenaires avec une API versionnee, documentee et protegee par OAuth2. Chaque partenaire dispose de ses propres acces et perimetre de droits.",
  },
  {
    title: "API e-commerce",
    description:
      "Synchronisez stocks, commandes et clients entre votre boutique, votre ERP et vos places de marche via des webhooks fiables et des endpoints atomiques.",
  },
];

const stackItems = [
  {
    title: "Symfony et API Platform",
    description:
      "API Platform s'appuie sur Symfony pour generer automatiquement des endpoints REST et GraphQL a partir de vos entites Doctrine. Moins de code repetitif, plus de temps pour la logique metier.",
  },
  {
    title: "REST et GraphQL",
    description:
      "Nous choisissons le paradigme adapte a votre besoin : REST pour la simplicite et l'interoperabilite, GraphQL quand les clients ont besoin de requetes flexibles sur des schemas riches.",
  },
  {
    title: "OpenAPI / Swagger",
    description:
      "La documentation interactive est generee automatiquement et reste toujours synchronisee avec le code. Vos equipes front-end et vos partenaires ont un contrat fiable des le premier sprint.",
  },
  {
    title: "Authentification OAuth2 et JWT",
    description:
      "Nous implementons les standards de securite modernes : OAuth2 pour les flux tiers, JWT pour les tokens legers, refresh token rotation pour eviter les sessions exposees.",
  },
  {
    title: "Versioning et compatibilite",
    description:
      "Chaque evolution de l'API suit une strategie de versioning explicite. Les clients existants continuent de fonctionner pendant la periode de deprecation, avec des avertissements dans les headers.",
  },
];

const approachSteps = [
  {
    step: "1",
    title: "Specification du contrat d'interface",
    description:
      "Avant d'ecrire une ligne de code, nous formalisons les endpoints, les schemas de donnees et les regles de securite. Ce contrat sert de reference a toutes les equipes impliquees.",
  },
  {
    step: "2",
    title: "Developpement oriente tests (TDD)",
    description:
      "Chaque endpoint est couvert par des tests fonctionnels automatises. PHPUnit et les fixtures Doctrine garantissent que les regressions sont detectees immediatement.",
  },
  {
    step: "3",
    title: "Documentation auto-generee",
    description:
      "La documentation OpenAPI est generee en continu. Vos clients et partenaires ont acces a un environnement Swagger UI pour tester les endpoints en conditions reelles.",
  },
  {
    step: "4",
    title: "Monitoring et alertes",
    description:
      "Nous instrumentons l'API avec des metriques de latence, de taux d'erreur et d'utilisation par endpoint. Les anomalies declenchent des alertes avant que vos utilisateurs ne les remarquent.",
  },
];

const symfonyReasons = [
  {
    title: "Performance native",
    description:
      "Symfony est l'un des frameworks PHP les plus rapides. Combine avec l'OpCache PHP 8.x et un cache HTTP bien configure, vos API atteignent des temps de reponse inferieurs a 50 ms sous charge.",
  },
  {
    title: "Securite par defaut",
    description:
      "Le composant Security de Symfony gere les voters, les firewalls et les acces par role. Couple au composant HttpClient pour les appels sortants, vous beneficiez d'une posture de securite robuste.",
  },
  {
    title: "Ecosysteme API Platform",
    description:
      "API Platform est le standard de facto pour les API PHP. Il genere automatiquement la documentation, les filtres, la pagination et la serialisation, tout en restant totalement extensible.",
  },
  {
    title: "Support LTS et evolutivite",
    description:
      "Symfony publie une version Long Term Support tous les deux ans. Vos API beneficient de correctifs de securite pendant 3 ans, vous laissant le temps de planifier sereinement les migrations.",
  },
];

const faqItems = [
  {
    title: "Quelle est la difference entre REST et GraphQL avec API Platform ?",
    content:
      "REST est ideal pour des interfaces stables avec des schemas connus a l'avance, notamment pour les integrateurs partenaires. GraphQL convient mieux aux clients qui ont besoin de flexibilite dans la selection des champs, comme une application mobile avec plusieurs vues differentes. API Platform supporte les deux : nous choisissons selon votre contexte.",
  },
  {
    title: "Comment securisez-vous les API que vous developpez ?",
    content:
      "Nous mettons en place OAuth2 ou JWT selon le type d'integration, des firewalls Symfony pour controler l'acces par role, des rate limiters pour prevenir les abus, et HTTPS systematiquement. Chaque deploiement inclut un audit des headers de securite (CORS, CSP, HSTS).",
  },
  {
    title: "Peut-on reprendre une API existante developpee par une autre equipe ?",
    content:
      "Oui. Nous commençons par un audit technique pour evaluer la qualite du code, la couverture de tests et la dette accumulee. Selon les resultats, nous proposons un refactoring progressif ou une rearchitecture partielle, toujours en preservant la compatibilite avec les clients existants.",
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
  { name: "API sur mesure Symfony", path: "/api-sur-mesure-symfony" },
]);

const service = serviceJsonLd({
  name: "API sur mesure avec Symfony et API Platform",
  description:
    "Developpement d'API REST et GraphQL sur mesure avec Symfony et API Platform : authentification OAuth2/JWT, documentation OpenAPI, TDD et monitoring.",
  path: "/api-sur-mesure-symfony",
});

export default function ApiSurMesureSymfony() {
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
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Developpement API Symfony
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  API sur mesure avec Symfony et API Platform
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Connectez vos systemes avec des API robustes et performantes.
                  Que ce soit pour alimenter une application mobile, ouvrir
                  votre plateforme a des partenaires B2B ou synchroniser vos
                  outils internes, nous concevons des{" "}
                  <strong>API Symfony sur mesure</strong> adaptees a vos
                  contraintes techniques et metier. Ce service fait partie de
                  l&apos;offre globale de notre{" "}
                  <Link
                    href="/agence-symfony-lille"
                    className="text-primary hover:underline"
                  >
                    agence Symfony a Lille
                  </Link>
                  .
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Notre stack repose sur{" "}
                  <a
                    href="https://api-platform.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    API Platform
                  </a>
                  , le standard de facto pour le{" "}
                  <strong>developpement API PHP</strong>, qui genere
                  automatiquement la documentation OpenAPI et accelere la
                  livraison des premiers endpoints.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/audit-symfony-gratuit">
                    Audit gratuit 30 min
                  </Button>
                  <Button href="/contact" variant="outline">
                    Discuter de votre projet
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-xl bg-white p-8 shadow-sm">
                <h2 className="font-display text-xl font-bold text-dark">
                  Ce que nous livrons
                </h2>
                <ul className="space-y-3 text-gray">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">&#10003;</span>
                    <span>API REST ou GraphQL documentee via OpenAPI/Swagger</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">&#10003;</span>
                    <span>Authentification OAuth2 ou JWT selon vos besoins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">&#10003;</span>
                    <span>Tests fonctionnels automatises sur chaque endpoint</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">&#10003;</span>
                    <span>Versioning et deprecation planifiee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">&#10003;</span>
                    <span>Monitoring et alertes sur les metriques cles</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Cas d&apos;usage</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Nous intervenons sur des projets d&apos;API tres differents. Voici
              les contextes dans lesquels notre expertise{" "}
              <strong>API Symfony</strong> apporte le plus de valeur.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((item) => (
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

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Notre stack technique</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Nous ne reinventons pas la roue : nous utilisons les outils
              eprouves par la communaute PHP et les enrichissons avec nos
              pratiques d&apos;ingenierie.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {stackItems.map((item) => (
                <Card key={item.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray">{item.description}</p>
                </Card>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-gray">
              Nous respectons les{" "}
              <Link
                href="/article/api-rest-les-bonnes-pratiques"
                className="text-primary hover:underline"
              >
                bonnes pratiques API REST
              </Link>{" "}
              documentees dans notre blog pour garantir des interfaces
              maintenables sur le long terme.
            </p>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Notre approche</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Un projet d&apos;API reussi commence bien avant le premier commit.
              Notre methodologie garantit que chaque livraison est stable,
              documentee et prete pour la production.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {approachSteps.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-dark">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Pourquoi Symfony pour vos API</SectionTitle>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {symfonyReasons.map((item) => (
                <Card key={item.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray">{item.description}</p>
                </Card>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-gray">
              Pour comprendre en profondeur les atouts du framework,{" "}
              <Link
                href="/article/pourquoi-choisir-symfony-pour-vos-projets"
                className="text-primary hover:underline"
              >
                consultez notre article sur le choix de Symfony
              </Link>
              . La documentation officielle de{" "}
              <a
                href="https://symfony.com/doc/current/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Symfony
              </a>{" "}
              reste la reference pour les composants utilises.
            </p>
          </Container>
        </section>

        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Vous avez un projet d&apos;API Symfony ?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Commencez par un audit gratuit de 30 minutes pour cadrer votre
              besoin et evaluer la faisabilite technique.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/audit-symfony-gratuit"
                className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
              >
                Demander mon audit gratuit
              </Link>
              <Link
                href="/contact"
                className="inline-block rounded-lg border border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Questions frequentes</SectionTitle>
            <div className="mx-auto max-w-2xl">
              <Accordion items={faqItems} />
            </div>
          </Container>
        </section>

        <section className="bg-light-gray py-16">
          <Container>
            <SectionTitle>Pour aller plus loin</SectionTitle>
            <ul className="mx-auto mt-8 max-w-3xl space-y-3 text-lg">
              <li>
                <Link
                  href="/article/api-rest-les-bonnes-pratiques"
                  className="text-primary hover:underline"
                >
                  Bonnes pratiques API REST
                </Link>{" "}
                , les standards a respecter pour une API maintenable
              </li>
              <li>
                <Link
                  href="/developpement-web-sur-mesure"
                  className="text-primary hover:underline"
                >
                  Developpement web sur mesure
                </Link>{" "}
                , notre expertise PHP et Symfony au service de vos projets
              </li>
              <li>
                <Link
                  href="/audit-symfony-gratuit"
                  className="text-primary hover:underline"
                >
                  Audit Symfony gratuit
                </Link>{" "}
                , evaluez l&apos;etat technique de votre application en 30 minutes
              </li>
              <li>
                <a
                  href="https://api-platform.com/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Documentation API Platform
                </a>{" "}
                , la reference officielle du framework
              </li>
            </ul>
          </Container>
        </section>
      </main>
    </>
  );
}
