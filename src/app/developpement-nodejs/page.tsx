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
  title: "Developpement Node.js sur mesure pour vos applications",
  description:
    "Agence Node.js specialisee : API REST, GraphQL, microservices, temps reel et BFF. Developpement Node.js avec NestJS, TypeScript et les meilleures pratiques d'architecture.",
  path: "/developpement-nodejs",
});

const expertises = [
  {
    title: "API REST et GraphQL",
    description:
      "Conception et developpement d'APIs performantes avec NestJS, Fastify ou Express. Documentation automatique, validation des entrees, gestion des erreurs et versioning.",
  },
  {
    title: "Applications temps reel",
    description:
      "Chat, notifications push, tableaux de bord live : nous implementons des communications bidirectionnelles avec WebSockets et des flux unidirectionnels avec Server-Sent Events.",
  },
  {
    title: "Microservices event-driven",
    description:
      "Architecture orientee evenements avec des message queues (RabbitMQ, Kafka, Redis Streams) pour decoupler vos services et garantir la resilience de votre systeme.",
  },
  {
    title: "BFF - Backend for Frontend",
    description:
      "Un backend dedie par type de client (web, mobile, partenaires) qui aggregate vos APIs, optimise les payloads et reduit la charge reseau de vos applications frontend.",
  },
];

const stack = [
  { name: "Node.js", description: "Runtime JavaScript v20 LTS" },
  { name: "TypeScript", description: "Typage statique pour un code fiable" },
  { name: "NestJS", description: "Framework d'entreprise structure et testable" },
  { name: "Fastify", description: "Pour les APIs haute performance" },
  { name: "Prisma", description: "ORM moderne avec migrations typees" },
  { name: "Jest / Vitest", description: "Tests unitaires et d'integration" },
  { name: "Docker", description: "Conteneurisation et reproductibilite" },
];

const approche = [
  {
    title: "Architecture propre",
    description:
      "Separation stricte des couches (domaine, application, infrastructure), injection de dependances, inversions de controle : les memes principes qu'en Symfony, appliques a Node.js.",
  },
  {
    title: "Tests automatises",
    description:
      "Tests unitaires sur la logique metier, tests d'integration sur les APIs, tests end-to-end sur les flux critiques. La couverture de tests est un critere de livraison.",
  },
  {
    title: "CI/CD et deploiement continu",
    description:
      "Pipeline de validation automatique : lint, tests, build, analyse de securite. Chaque merge request passe par la CI avant d'atterrir en production.",
  },
  {
    title: "Monitoring et observabilite",
    description:
      "Logs structures, metriques applicatives, tracing distribue. Vous savez ce qui se passe dans vos services en production, en temps reel.",
  },
  {
    title: "Documentation API auto-generee",
    description:
      "Swagger / OpenAPI generes depuis le code : la documentation suit toujours l'implementation. Plus de documentation perimee, plus de friction entre equipes.",
  },
];

const faqItems = [
  {
    title: "Pourquoi choisir Node.js plutot que PHP ?",
    content:
      "PHP et Node.js ne s'opposent pas : ils repondent a des contextes differents. Node.js excelle pour les APIs haute concurrence, les applications temps reel et les architectures microservices a faible latence, grace a son modele I/O non-bloquant. PHP avec Symfony reste superieur pour les applications metier complexes avec beaucoup de logique domaine. Le bon choix depend de votre cas d'usage, pas d'une mode.",
  },
  {
    title: "Quel framework Node.js utilisez-vous ?",
    content:
      "NestJS est notre choix par defaut pour les projets d'envergure : il impose une structure, supporte l'injection de dependances et genere la documentation OpenAPI automatiquement. Pour les APIs legeres a haute performance, nous utilisons Fastify. Pour les projets existants sous Express, nous pouvons intervenir sans recrire l'existant.",
  },
  {
    title: "Faites-vous de la maintenance d'applications Node.js existantes ?",
    content:
      "Oui. Nous realisons un audit du code existant pour evaluer la dette technique, la couverture de tests et les risques de securite. Nous proposons ensuite un plan de refactoring progressif pour stabiliser l'application sans tout recrire d'un coup.",
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
  { name: "Developpement Node.js", path: "/developpement-nodejs" },
]);

const service = serviceJsonLd({
  name: "Developpement Node.js sur mesure",
  description:
    "Conception et developpement d'applications Node.js sur mesure : APIs REST et GraphQL, temps reel, microservices et BFF avec NestJS, TypeScript et les meilleures pratiques d'architecture.",
  path: "/developpement-nodejs",
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
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Developpement Node.js sur mesure
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Developpement Node.js sur mesure pour vos applications
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Des applications rapides, scalables et modernes avec{" "}
                  <strong>Node.js</strong>. Efficience IT conoit des{" "}
                  <strong>APIs REST et GraphQL</strong>, des backends temps reel
                  et des architectures microservices avec les memes exigences
                  qualite que nos projets Symfony.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  TypeScript, NestJS, tests automatises, CI/CD : nous apportons
                  une architecture d&apos;entreprise a vos projets{" "}
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
                <div className="flex h-64 w-64 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    viewBox="0 0 256 292"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-40 w-40"
                    aria-label="Logo Node.js"
                  >
                    <path
                      d="M128 0C93.1 0 60.5 18.1 43.1 47.4L4.3 115.9C-3.6 129.3-1.5 146.1 8.9 157.3L43.1 244.6C60.5 273.9 93.1 292 128 292s67.5-18.1 84.9-47.4l34.2-87.3c10.4-11.2 12.5-28 4.6-41.4L212.9 47.4C195.5 18.1 162.9 0 128 0z"
                      fill="#83CD29"
                    />
                    <path
                      d="M128 16.3c-30.4 0-58.7 15.6-74.7 41.3L15.6 123.5c-6.9 11.7-5.2 26.4 4.2 36.2l34.2 87.8c16 25.7 44.3 41.3 74.7 41.3V16.3z"
                      fill="#404137"
                    />
                    <path
                      d="M128 16.3v259c30.4 0 58.7-15.6 74.7-41.3l34.2-87.8c9.4-9.8 11.1-24.5 4.2-36.2L203.2 57.6C187.2 31.9 158.9 16.3 128 16.3z"
                      fill="#83CD29"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Pourquoi choisir Node.js</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Node.js s&apos;impose dans des cas d&apos;usage precis ou il surpasse les
              alternatives traditionnelles.
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
                    Le modele evenementiel de Node.js gere des milliers de
                    connexions simultanees sans creer un thread par requete. Pour
                    les APIs a forte concurrence, c&apos;est un avantage decisif en
                    termes de performances et d&apos;efficacite infrastructure.
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
                    reduit la duplication, acelere les livraisons et simplifie
                    la montee en competences des equipes. Un seul langage pour
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
                    Ecosysteme npm
                  </h3>
                  <p className="mt-2 text-gray">
                    Le plus grand registre de paquets au monde. Authentication,
                    PDF, email, paiement, ML : il existe une librairie mature
                    pour presque chaque besoin, ce qui accelere considerablement
                    les developpements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                  4
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Temps reel natif avec WebSockets
                  </h3>
                  <p className="mt-2 text-gray">
                    Node.js est le choix naturel pour les applications
                    collaboratives, les chats, les notifications en direct et
                    les tableaux de bord live. Le temps reel n&apos;est pas une
                    surcouche, c&apos;est dans l&apos;ADN du runtime.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Nos expertises Node.js</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Quatre domaines ou notre expertise Node.js apporte une valeur
              immediate a vos projets.
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
              Nos APIs Node.js respectent les{" "}
              <Link
                href="/article/api-rest-les-bonnes-pratiques"
                className="text-primary hover:underline"
              >
                bonnes pratiques REST
              </Link>{" "}
              : nommage coherent, codes HTTP semantiques, pagination, gestion
              des erreurs et documentation OpenAPI generee depuis le code.
            </p>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Notre stack technique Node.js</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Des outils choisis pour leur maturite, leur maintenabilite et leur
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
              comme framework de reference pour les projets d&apos;envergure : il
              impose une structure modulaire, supporte l&apos;injection de
              dependances et genere la documentation OpenAPI automatiquement.
            </p>
          </Container>
        </section>

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Notre approche</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Livrer du code qui fonctionne en production ne suffit pas : nous
              livrons du code qui dure, qui se maintient et qui evolue avec vos
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
              Notre approche des microservices suit les memes principes que
              ceux decrits dans notre analyse de{" "}
              <Link
                href="/article/quelle-architecture-de-projet-choisir-entre-micro-service-ou-monolithe-modulaire"
                className="text-primary hover:underline"
              >
                microservices versus monolithe modulaire
              </Link>
              . Le choix de l&apos;architecture depend de vos contraintes reelles,
              pas d&apos;une tendance.
            </p>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-12">
              <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                Node.js et Symfony : le meilleur des deux mondes
              </h2>
              <p className="mt-4 text-lg text-gray">
                Efficience IT est avant tout une agence Symfony. Nous avons
                applique les memes principes d&apos;architecture a nos projets
                Node.js : separation des couches, injection de dependances,
                tests systematiques, revue de code rigoureuse.
              </p>
              <p className="mt-4 text-lg text-gray">
                Le resultat : des projets Node.js avec la rigueur d&apos;un
                backend Symfony. Pas du code JavaScript quick-and-dirty, mais
                une architecture qui tient dans le temps. Si votre systeme
                implique a la fois des applications Symfony et des services
                Node.js, nous pouvons concevoir une architecture coherente qui
                tire le meilleur des deux technologies.
              </p>
              <p className="mt-4 text-lg text-gray">
                Decouvrez notre expertise en{" "}
                <Link
                  href="/developpement-web-sur-mesure"
                  className="text-primary hover:underline"
                >
                  developpement d&apos;API sur mesure avec Symfony
                </Link>{" "}
                pour comprendre comment les deux approches se complementent.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Questions frequentes</SectionTitle>
            <div className="mx-auto max-w-2xl">
              <Accordion items={faqItems} />
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Pour aller plus loin</SectionTitle>
            <ul className="mx-auto mt-8 max-w-3xl space-y-3 text-lg">
              <li>
                <Link
                  href="/article/api-rest-les-bonnes-pratiques"
                  className="text-primary hover:underline"
                >
                  Les bonnes pratiques des APIs REST
                </Link>
                , pour concevoir des interfaces performantes et maintenables
              </li>
              <li>
                <Link
                  href="/article/quelle-architecture-de-projet-choisir-entre-micro-service-ou-monolithe-modulaire"
                  className="text-primary hover:underline"
                >
                  Microservices ou monolithe modulaire
                </Link>
                , choisir la bonne architecture selon votre contexte
              </li>
              <li>
                <a
                  href="https://nodejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Node.js, documentation officielle
                </a>
                , la reference du runtime JavaScript cote serveur
              </li>
              <li>
                <a
                  href="https://nestjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  NestJS, documentation officielle
                </a>
                , le framework Node.js structure pour les applications d&apos;entreprise
              </li>
            </ul>
          </Container>
        </section>

        <CallToAction />
      </main>
    </>
  );
}
