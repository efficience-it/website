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
import DashboardIllustration from "@/components/illustrations/DashboardIllustration";

const nodejsRelatedLinks: RelatedLink[] = [
  { title: "Les bonnes pratiques des APIs REST", description: "pour concevoir des interfaces performantes et maintenables", href: "/article/api-rest-les-bonnes-pratiques" },
  { title: "Microservices ou monolithe modulaire", description: "choisir la bonne architecture selon votre contexte", href: "/article/quelle-architecture-de-projet-choisir-entre-micro-service-ou-monolithe-modulaire" },
  { title: "Node.js, documentation officielle", description: "la référence du runtime JavaScript côté serveur", href: "https://nodejs.org/", external: true },
  { title: "NestJS, documentation officielle", description: "le framework Node.js structuré pour les applications d'entreprise", href: "https://nestjs.com/", external: true },
];

export const metadata = pageMetadata({
  title: "Développement Node.js sur mesure pour vos applications",
  description:
    "Agence Node.js spécialisée : API REST, GraphQL, microservices, temps réel et BFF. Développement avec NestJS, TypeScript et bonnes pratiques.",
  path: "/developpement-nodejs",
});

const expertises = [
  {
    title: "API REST et GraphQL",
    description:
      "Conception et développement d'APIs performantes avec NestJS, Fastify ou Express. Documentation automatique, validation des entrées, gestion des erreurs et versioning.",
  },
  {
    title: "Applications temps réel",
    description:
      "Chat, notifications push, tableaux de bord live : nous implémentons des communications bidirectionnelles avec WebSockets et des flux unidirectionnels avec Server-Sent Events.",
  },
  {
    title: "Microservices event-driven",
    description:
      "Architecture orientée événements avec des message queues (RabbitMQ, Kafka, Redis Streams) pour découpler vos services et garantir la résilience de votre système.",
  },
  {
    title: "BFF - Backend for Frontend",
    description:
      "Un backend dédié par type de client (web, mobile, partenaires) qui agrège vos APIs, optimise les payloads et réduit la charge réseau de vos applications frontend.",
  },
];

const stack = [
  { name: "Node.js", description: "Runtime JavaScript v20 LTS" },
  { name: "TypeScript", description: "Typage statique pour un code fiable" },
  { name: "NestJS", description: "Framework d'entreprise structuré et testable" },
  { name: "Fastify", description: "Pour les APIs haute performance" },
  { name: "Prisma", description: "ORM moderne avec migrations typées" },
  { name: "Jest / Vitest", description: "Tests unitaires et d'intégration" },
  { name: "Docker", description: "Conteneurisation et reproductibilité" },
];

const approche = [
  {
    title: "Architecture propre",
    description:
      "Séparation stricte des couches (domaine, application, infrastructure), injection de dépendances, inversions de contrôle : les mêmes principes qu'en Symfony, appliqués à Node.js.",
  },
  {
    title: "Tests automatisés",
    description:
      "Tests unitaires sur la logique métier, tests d'intégration sur les APIs, tests end-to-end sur les flux critiques. La couverture de tests est un critère de livraison.",
  },
  {
    title: "CI/CD et déploiement continu",
    description:
      "Pipeline de validation automatique : lint, tests, build, analyse de sécurité. Chaque merge request passe par la CI avant d'atterrir en production.",
  },
  {
    title: "Monitoring et observabilité",
    description:
      "Logs structurés, métriques applicatives, tracing distribué. Vous savez ce qui se passe dans vos services en production, en temps réel.",
  },
  {
    title: "Documentation API auto-générée",
    description:
      "Swagger / OpenAPI générés depuis le code : la documentation suit toujours l'implémentation. Plus de documentation périmée, plus de friction entre équipes.",
  },
];

const faqItems = [
  {
    title: "Pourquoi choisir Node.js plutôt que PHP ?",
    content:
      "PHP et Node.js ne s'opposent pas : ils répondent à des contextes différents. Node.js excelle pour les APIs haute concurrence, les applications temps réel et les architectures microservices à faible latence, grâce à son modèle I/O non-bloquant. PHP avec Symfony reste supérieur pour les applications métier complexes avec beaucoup de logique domaine. Le bon choix dépend de votre cas d'usage, pas d'une mode.",
  },
  {
    title: "Quel framework Node.js utilisez-vous ?",
    content:
      "NestJS est notre choix par défaut pour les projets d'envergure : il impose une structure, supporte l'injection de dépendances et génère la documentation OpenAPI automatiquement. Pour les APIs légères à haute performance, nous utilisons Fastify. Pour les projets existants sous Express, nous pouvons intervenir sans réécrire l'existant.",
  },
  {
    title: "Faites-vous de la maintenance d'applications Node.js existantes ?",
    content:
      "Oui. Nous réalisons un audit du code existant pour évaluer la dette technique, la couverture de tests et les risques de sécurité. Nous proposons ensuite un plan de refactoring progressif pour stabiliser l'application sans tout réécrire d'un coup.",
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
  { name: "Développement Node.js", path: "/developpement-nodejs" },
]);

const service = serviceJsonLd({
  name: "Développement Node.js sur mesure",
  description:
    "Conception et développement d'applications Node.js sur mesure : APIs REST et GraphQL, temps réel, microservices et BFF avec NestJS, TypeScript et les meilleures pratiques d'architecture.",
  path: "/developpement-nodejs",
});

const webPage = webPageJsonLd({
  name: "Développement Node.js sur mesure pour vos applications",
  description: "Agence Node.js spécialisée : API REST, GraphQL, microservices, temps réel et BFF. Développement Node.js avec NestJS, TypeScript et les meilleures pratiques d'architecture.",
  path: "/developpement-nodejs",
  datePublished: "2025-09-01",
  dateModified: "2026-03-11",
});

export default function DeveloppementNodejs() {
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
            <Breadcrumb items={[{ label: "Développement Node.js" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Développement Node.js sur mesure
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Développement Node.js sur mesure pour vos applications
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Des applications rapides, scalables et modernes avec{" "}
                  <strong>Node.js</strong>. Efficience IT conçoit des{" "}
                  <strong>APIs REST et GraphQL</strong>, des backends temps réel
                  et des architectures microservices avec les mêmes exigences
                  qualité que nos projets Symfony. Découvrez notre comparatif des{" "}
                  <Link href="/article/express-fastify-hono-quel-framework-nodejs-choisir" className="text-primary hover:underline">
                    frameworks Node.js Express, Fastify et Hono
                  </Link>{" "}
                  pour comprendre nos choix techniques.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  TypeScript, NestJS, tests automatisés, CI/CD : nous apportons
                  une architecture d&apos;entreprise à vos projets{" "}
                  <a
                    href="https://nodejs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Node.js
                  </a>
                  .
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Discuter de votre projet</Button>
                  <Button href="/audit-symfony-gratuit" variant="outline">
                    Audit gratuit 30 min
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <DashboardIllustration className="h-96 w-full text-primary" />
              </div>
            </div>
          </Container>
        </section>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Pourquoi choisir Node.js</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Node.js s&apos;impose dans des cas d&apos;usage précis où il surpasse les
              alternatives traditionnelles. Le choix du{" "}
              <Link href="/article/quel-framework-javascript-choisir-node-js-react-js-vue-js-ou-angular" className="text-primary hover:underline">
                bon framework JavaScript
              </Link>{" "}
              conditionne la réussite de votre projet.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                  1
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-dark">
                    I/O non-bloquant natif
                  </h3>
                  <p className="mt-2 text-gray">
                    Le modèle événementiel de Node.js gère des milliers de
                    connexions simultanées sans créer un thread par requête. Pour
                    les APIs à forte concurrence, c&apos;est un avantage décisif en
                    termes de performances et d&apos;efficacité infrastructure.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                  2
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-dark">
                    JavaScript fullstack
                  </h3>
                  <p className="mt-2 text-gray">
                    Partager du code TypeScript entre le frontend et le backend
                    réduit la duplication, accélère les livraisons et simplifie
                    la montée en compétences des équipes. Un seul langage pour
                    toute la stack.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                  3
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Écosystème npm
                  </h3>
                  <p className="mt-2 text-gray">
                    Le plus grand registre de paquets au monde. Authentification,
                    PDF, email, paiement, ML : il existe une bibliothèque mature
                    pour presque chaque besoin, ce qui accélère considérablement
                    les développements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                  4
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Temps réel natif avec WebSockets
                  </h3>
                  <p className="mt-2 text-gray">
                    Node.js est le choix naturel pour les applications
                    collaboratives, les chats, les notifications en direct et
                    les tableaux de bord live. Le temps réel n&apos;est pas une
                    surcouche, c&apos;est dans l&apos;ADN du runtime.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Nos expertises Node.js</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Quatre domaines où notre expertise Node.js apporte une valeur
              immédiate à vos projets.
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
              Pour les projets qui impliquent à la fois REST et GraphQL, notre analyse de{" "}
              <Link
                href="/article/que-vaut-rest-face-a-son-nouveau-challenger-graphql"
                className="text-primary hover:underline"
              >
                REST face à GraphQL
              </Link>{" "}
              aide à choisir la bonne approche. Nos APIs Node.js respectent les{" "}
              <Link
                href="/article/api-rest-les-bonnes-pratiques"
                className="text-primary hover:underline"
              >
                bonnes pratiques REST
              </Link>{" "}
              : nommage cohérent, codes HTTP sémantiques, pagination, gestion
              des erreurs et documentation OpenAPI générée depuis le code. Pour
              les projets qui nécessitent une architecture d&apos;entreprise
              poussée, nous intervenons en priorité via nos{" "}
              <Link
                href="/api-nodejs-nestjs"
                className="text-primary hover:underline"
              >
                API avec NestJS
              </Link>
              .
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Notre stack technique Node.js</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Des outils choisis pour leur maturité, leur maintenabilité et leur
              adoption dans l&apos;industrie.
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
            <p className="mx-auto mt-8 max-w-3xl text-center text-gray">
              Nous utilisons{" "}
              <a
                href="https://nestjs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                NestJS
              </a>{" "}
              comme framework de référence pour les projets d&apos;envergure : il
              impose une structure modulaire, supporte l&apos;injection de
              dépendances et génère la documentation OpenAPI automatiquement.
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Notre approche</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Livrer du code qui fonctionne en production ne suffit pas : nous
              livrons du code qui dure, qui se maintient et qui évolue avec vos
              besoins.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {approche.map((item) => (
                <Card key={item.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray">{item.description}</p>
                </Card>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-gray">
              Notre approche des microservices suit les mêmes principes que
              ceux décrits dans notre analyse de{" "}
              <Link
                href="/article/quelle-architecture-de-projet-choisir-entre-micro-service-ou-monolithe-modulaire"
                className="text-primary hover:underline"
              >
                microservices versus monolithe modulaire
              </Link>
              . Le choix de l&apos;architecture dépend de vos contraintes réelles,
              pas d&apos;une tendance.
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-12">
              <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                Node.js et Symfony : le meilleur des deux mondes
              </h2>
              <p className="mt-4 text-lg text-gray">
                Efficience IT est avant tout une agence Symfony. Nous avons
                appliqué les mêmes principes d&apos;architecture à nos projets
                Node.js : séparation des couches, injection de dépendances,
                tests systématiques, revue de code rigoureuse.
              </p>
              <p className="mt-4 text-lg text-gray">
                Le résultat : des projets Node.js avec la rigueur d&apos;un
                backend Symfony. Pas du code JavaScript quick-and-dirty, mais
                une architecture qui tient dans le temps. Si votre système
                implique à la fois des applications Symfony et des services
                Node.js, nous pouvons concevoir une architecture cohérente qui
                tire le meilleur des deux technologies.
              </p>
              <p className="mt-4 text-lg text-gray">
                Découvrez notre expertise en{" "}
                <Link
                  href="/developpement-web-sur-mesure"
                  className="text-primary hover:underline"
                >
                  développement d&apos;API sur mesure avec Symfony
                </Link>{" "}
                pour comprendre comment les deux approches se complètent.
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
        <RelatedLinks links={nodejsRelatedLinks} />
        </FadeIn>

        <FadeIn>
        <CallToAction />
        <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}
