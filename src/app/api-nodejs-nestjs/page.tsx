import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CallToAction from "@/components/sections/CallToAction";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "API performantes avec NestJS et Node.js",
  description:
    "Conception et développement d'API NestJS sur mesure : microservices, GraphQL, temps réel. Votre partenaire pour le développement API Node.js robuste et scalable.",
  path: "/api-nodejs-nestjs",
});

const useCases = [
  {
    title: "API temps réel",
    description:
      "WebSockets natifs avec les Gateways NestJS pour des applications de chat, notifications push, dashboards live ou jeux multijoueurs.",
  },
  {
    title: "Microservices",
    description:
      "Transport layer configurable : Redis, RabbitMQ, Kafka, gRPC. Chaque service est isolé, deployable independamment et communique via des contrats typés.",
  },
  {
    title: "GraphQL",
    description:
      "API GraphQL code-first ou schema-first. NestJS genere automatiquement le schema a partir de vos resolvers TypeScript et decorateurs.",
  },
  {
    title: "API Gateway",
    description:
      "Agregation de services, rate limiting, authentification centralisee, transformation de payloads. Une couche unique pour exposer vos microservices.",
  },
  {
    title: "CQRS et Event Sourcing",
    description:
      "Le module CQRS de NestJS separe clairement commandes et queries. Ideal pour les domaines metier complexes avec un historique complet des evenements.",
  },
];

const stackItems = [
  {
    name: "NestJS",
    description: "Framework Node.js de reference pour les API d'entreprise.",
  },
  {
    name: "TypeScript",
    description: "Typage strict de bout en bout, du controleur a la base de donnees.",
  },
  {
    name: "Prisma ou TypeORM",
    description: "ORM adapte a votre base de donnees et a la complexite du domaine.",
  },
  {
    name: "Jest",
    description: "Tests unitaires et d'integration avec la suite de test integree a NestJS.",
  },
  {
    name: "Docker",
    description: "Conteneurisation pour des environnements reproductibles en dev et en prod.",
  },
  {
    name: "OpenAPI / Swagger",
    description: "Documentation interactive generee automatiquement depuis vos decorateurs.",
  },
];

const approachItems = [
  {
    title: "Architecture hexagonale",
    description:
      "Separation stricte entre la logique metier et les details d'infrastructure (base de donnees, HTTP, messagerie). Votre domaine est testable sans framework.",
  },
  {
    title: "TDD et couverture de tests",
    description:
      "Nous pratiquons le Test Driven Development : chaque fonctionnalite est couverte par des tests unitaires et d'integration avant la mise en production.",
  },
  {
    title: "Documentation automatique",
    description:
      "Swagger UI genere depuis les decorateurs NestJS : vos equipes front et vos partenaires ont toujours acces a une doc a jour.",
  },
  {
    title: "Monitoring et observabilite",
    description:
      "Logs structures, tracing distribue, health checks. Vous savez en temps reel ce qui se passe dans votre API.",
  },
  {
    title: "Code review systematique",
    description:
      "Chaque pull request est relue par un second developpeur. La qualite n'est pas negociable, meme sous pression.",
  },
];

const comparisonRows = [
  { concept: "Injection de dependances", nestjs: "Module NestJS + @Injectable()", symfony: "Service Container + autowiring" },
  { concept: "Modules", nestjs: "@Module() avec imports/exports", symfony: "Bundles et extensions" },
  { concept: "Middleware", nestjs: "Middleware NestJS", symfony: "Kernel events / middleware" },
  { concept: "Guards / Voters", nestjs: "@Guard() + CanActivate", symfony: "Voter + Security component" },
  { concept: "Interceptors", nestjs: "@Interceptor() + NestInterceptor", symfony: "Event listeners / kernel.response" },
];

const faqItems = [
  {
    title: "Quelle est la difference entre NestJS et Express ?",
    content:
      "Express est un micro-framework minimaliste : il fournit le routing HTTP et peu d'autre chose. NestJS est un framework applicatif complet construit par-dessus Express (ou Fastify). Il apporte l'injection de dependances, la modularite, les guards, les interceptors, les pipes de validation et une structure opinatee. Pour un projet d'entreprise, NestJS reduit considerablement la dette architecturale par rapport a un projet Express sans conventions.",
  },
  {
    title: "NestJS est-il adapte aux gros projets ?",
    content:
      "Oui, c'est precisement son point fort. L'architecture modulaire de NestJS permet de structurer des codebases de plusieurs centaines de milliers de lignes sans que la complexite explose. Des entreprises comme Adidas, Roche ou Decathlon utilisent NestJS en production pour des systemes critiques. La separation stricte des responsabilites et l'injection de dependances facilitent les tests et l'evolution du code dans le temps.",
  },
  {
    title: "Pouvez-vous migrer une API Express vers NestJS ?",
    content:
      "Oui. Nous procedons en plusieurs etapes : audit du code existant, identification des modules fonctionnels, migration progressive route par route sans interruption de service. NestJS etant compatible Express, les deux peuvent coexister pendant la transition. Nous etablissons un plan de migration detaille avant de commencer.",
  },
  {
    title: "Comment NestJS se compare-t-il a Symfony ?",
    content:
      "Les deux frameworks partagent la meme philosophie : injection de dependances, architecture modulaire, decorateurs, testabilite. NestJS est l'equivalent TypeScript/Node.js de Symfony pour PHP. Le choix depend de votre ecosysteme existant, de vos equipes et des contraintes de performance. Pour un projet PHP, Symfony reste notre recommandation. Pour Node.js, NestJS est le choix naturel.",
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
  { name: "API NestJS et Node.js", path: "/api-nodejs-nestjs" },
]);

const service = serviceJsonLd({
  name: "Developpement API NestJS et Node.js",
  description:
    "Conception et developpement d'API performantes avec NestJS et Node.js : microservices, GraphQL, temps reel, architecture hexagonale.",
  path: "/api-nodejs-nestjs",
});

export default function ApiNodejsNestjs() {
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
                  NestJS et Node.js
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  API performantes avec NestJS et Node.js
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Construisez des API robustes et scalables avec NestJS. Un framework
                  TypeScript d&apos;entreprise qui combine la puissance de{" "}
                  <Link
                    href="/developpement-nodejs"
                    className="text-primary hover:underline"
                  >
                    developpement Node.js
                  </Link>{" "}
                  avec une architecture modulaire et opinatee, pensee pour durer.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Que vous ayez besoin d&apos;une{" "}
                  <strong>API REST performante</strong>, d&apos;une architecture{" "}
                  <strong>microservices</strong> ou d&apos;une{" "}
                  <strong>API GraphQL</strong>, NestJS offre les briques
                  necessaires pour construire des systemes maintenables et
                  testables.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Discuter de votre projet</Button>
                  <Button href="/audit-symfony-gratuit" variant="outline">
                    Audit gratuit 30 min
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl bg-dark p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Pourquoi NestJS ?
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">&#10003;</span>
                    <span>TypeScript natif de bout en bout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">&#10003;</span>
                    <span>Architecture modulaire inspir&eacute;e d&apos;Angular et Symfony</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">&#10003;</span>
                    <span>Injection de d&eacute;pendances et d&eacute;corateurs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">&#10003;</span>
                    <span>Swagger / OpenAPI auto-g&eacute;n&eacute;r&eacute;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">&#10003;</span>
                    <span>Testabilit&eacute; native avec Jest int&eacute;gr&eacute;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">&#10003;</span>
                    <span>Support microservices (Redis, Kafka, gRPC...)</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Pourquoi NestJS pour vos API</SectionTitle>
            <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center text-lg text-gray">
              <p>
                NestJS s&apos;est impose comme le framework de reference pour le{" "}
                <strong>developpement API Node.js</strong> en entreprise. Sa
                philosophie s&apos;inspire directement d&apos;Angular et de Symfony : modules
                decouplees, injection de dependances, decorateurs, middlewares. Une
                structure que les developpeurs back-end reconnaissent immediatement.
              </p>
              <p>
                La gestion native de <strong>TypeScript</strong> elimine une categorie
                entiere de bugs au runtime. Les contrats entre services sont verifies
                a la compilation, pas en production. Combine a{" "}
                <a
                  href="https://nestjs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  l&apos;ecosysteme riche de NestJS
                </a>
                , vous disposez d&apos;un framework pret pour les projets d&apos;envergure.
              </p>
              <p>
                Contrairement a Express, NestJS impose une{" "}
                <strong>architecture opinatee</strong> qui reduit les decisions
                arbitraires et la dette technique. Chaque fonctionnalite a sa place.
                Le code est previsible, testable et transmissible a une nouvelle
                equipe.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Cas d&apos;usage NestJS</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              NestJS couvre un large spectre de besoins. Voici les cas d&apos;usage
              pour lesquels nous l&apos;utilisons le plus frequemment.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((useCase) => (
                <Card key={useCase.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-gray">{useCase.description}</p>
                </Card>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-gray">
              Vous hesitez entre une architecture{" "}
              <Link
                href="/article/quelle-architecture-de-projet-choisir-entre-micro-service-ou-monolithe-modulaire"
                className="text-primary hover:underline"
              >
                microservices ou monolithe modulaire
              </Link>{" "}
              ? Notre equipe vous aide a choisir l&apos;approche la plus adaptee a
              votre contexte.
            </p>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Notre stack NestJS</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Les outils que nous utilisons systematiquement dans nos projets
              NestJS, selectionnes pour leur maturite et leur maintenabilite.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {stackItems.map((item) => (
                <Card key={item.name}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-gray">{item.description}</p>
                </Card>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-gray">
              La{" "}
              <a
                href="https://docs.nestjs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                documentation officielle NestJS
              </a>{" "}
              couvre l&apos;ensemble de ces composants avec des exemples concrets.
            </p>
          </Container>
        </section>

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>
              NestJS et Symfony : meme philosophie, deux ecosystemes
            </SectionTitle>
            <div className="mx-auto mt-6 max-w-3xl space-y-4 text-lg text-gray">
              <p>
                Si vous connaissez Symfony, NestJS ne vous depaysera pas. Les deux
                frameworks partagent les memes fondamentaux : injection de
                dependances, architecture modulaire, separation des responsabilites.
                La courbe d&apos;apprentissage est faible pour une equipe PHP experiente.
              </p>
              <p>
                Le tableau ci-dessous illustre les correspondances entre les deux
                ecosystemes :
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-4xl overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-dark">
                    <th className="pb-3 pr-6 font-semibold">Concept</th>
                    <th className="pb-3 pr-6 font-semibold">NestJS (TypeScript)</th>
                    <th className="pb-3 font-semibold">Symfony (PHP)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray">
                  {comparisonRows.map((row) => (
                    <tr key={row.concept}>
                      <td className="py-3 pr-6 font-medium text-dark">
                        {row.concept}
                      </td>
                      <td className="py-3 pr-6">{row.nestjs}</td>
                      <td className="py-3">{row.symfony}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-lg text-gray">
              Votre projet est en PHP ? Decouvrez notre offre d&apos;
              <Link
                href="/api-sur-mesure-symfony"
                className="text-primary hover:underline"
              >
                API avec Symfony et API Platform
              </Link>
              , conçue avec la meme rigueur architecturale.
            </p>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Notre approche</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Nous ne livrons pas simplement du code NestJS. Nous construisons des
              systemes conçus pour etre maintenus, etendus et transmis.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {approachItems.map((item) => (
                <Card key={item.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray">{item.description}</p>
                </Card>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-gray">
              Nos pratiques de conception incluent le respect des{" "}
              <Link
                href="/article/api-rest-les-bonnes-pratiques"
                className="text-primary hover:underline"
              >
                bonnes pratiques API REST
              </Link>{" "}
              pour garantir des interfaces coherentes et previsibles.
            </p>
          </Container>
        </section>

        <section className="bg-primary py-16 text-center text-white">
          <Container>
            <h2 className="font-display text-3xl font-bold">
              Un projet d&apos;API NestJS en tete ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Decrivez votre besoin. Nous analysons votre contexte et vous proposons
              une architecture adaptee, avec une estimation claire.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
              >
                Nous contacter
              </Link>
              <Link
                href="/audit-symfony-gratuit"
                className="rounded-lg border border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Audit gratuit 30 min
              </Link>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Questions frequentes</SectionTitle>
            <div className="mx-auto max-w-2xl">
              <Accordion items={faqItems} />
            </div>
          </Container>
        </section>

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Pour aller plus loin</SectionTitle>
            <ul className="mx-auto mt-8 max-w-3xl space-y-3 text-lg">
              <li>
                <Link
                  href="/article/que-vaut-rest-face-a-son-nouveau-challenger-graphql"
                  className="text-primary hover:underline"
                >
                  REST vs GraphQL : quel protocole choisir pour votre API ?
                </Link>{" "}
                , une comparaison technique pour orienter vos choix d&apos;architecture
              </li>
              <li>
                <Link
                  href="/article/quel-framework-javascript-choisir-node-js-react-js-vue-js-ou-angular"
                  className="text-primary hover:underline"
                >
                  Quel framework JavaScript choisir ?
                </Link>{" "}
                , Node.js, React, Vue ou Angular : notre analyse comparative
              </li>
              <li>
                <Link
                  href="/developpement-web-sur-mesure"
                  className="text-primary hover:underline"
                >
                  API sur mesure avec Symfony
                </Link>{" "}
                , notre offre API Platform pour les projets PHP
              </li>
              <li>
                <a
                  href="https://docs.nestjs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Documentation officielle NestJS
                </a>{" "}
                , la reference technique du framework
              </li>
            </ul>
          </Container>
        </section>

        <CallToAction />
      </main>
    </>
  );
}
