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
  title:
    "Architecture hexagonale avec Symfony : Domain-Driven Design applique",
  description:
    "Structurez vos applications Symfony avec l'architecture hexagonale et le Domain-Driven Design. Principes, avantages, retours d'experience et accompagnement par Efficience IT.",
  path: "/architecture-hexagonale-symfony",
});

const principes = [
  {
    title: "Le domaine au centre",
    description:
      "Le code metier est isole dans un noyau independant de tout framework. Les regles de gestion ne dependent ni de Symfony, ni de Doctrine, ni d'aucune librairie externe.",
  },
  {
    title: "Ports et adaptateurs",
    description:
      "Les interactions avec l'exterieur passent par des interfaces (ports) implementees par des adaptateurs concrets. Changer de base de donnees ou de systeme de file d'attente ne touche pas au domaine.",
  },
  {
    title: "Inversion de dependance",
    description:
      "Les couches externes dependent du domaine, jamais l'inverse. Le domaine definit les contrats, l'infrastructure les implemente.",
  },
  {
    title: "Testabilite native",
    description:
      "Un domaine sans dependance externe se teste unitairement sans mock complexe. Les tests deviennent rapides, fiables et faciles a maintenir.",
  },
  {
    title: "Ubiquitous Language",
    description:
      "Le code utilise le vocabulaire metier. Developpeurs et experts fonctionnels parlent le meme langage, ce qui reduit les malentendus et accelere les echanges.",
  },
  {
    title: "Separation des responsabilites",
    description:
      "Chaque couche a un role precis : le domaine porte les regles, l'application orchestre les cas d'usage, l'infrastructure gere la persistance et les I/O.",
  },
];

const avantages = [
  {
    title: "Evolutivite maitrisee",
    description:
      "Ajouter une fonctionnalite metier ne necessite pas de modifier l'infrastructure. Le domaine evolue independamment des choix techniques.",
  },
  {
    title: "Migration facilitee",
    description:
      "Changer de version Symfony, remplacer Doctrine par un autre ORM ou migrer vers une API : le noyau metier reste intact car il ne connait pas ces outils.",
  },
  {
    title: "Onboarding accelere",
    description:
      "Un nouveau developpeur comprend les regles metier en lisant le domaine, sans devoir naviguer dans les controllers, les templates et la configuration Symfony.",
  },
  {
    title: "Dette technique reduite",
    description:
      "La separation stricte des couches empeche le couplage accidentel. Le code reste modulaire meme apres des annees de maintenance et d'evolutions.",
  },
];

const experience = [
  {
    title: "Migration progressive",
    description:
      "Nous ne reecrivons jamais tout d'un coup. Nous extrayons progressivement le domaine metier des controllers Symfony existants, fonctionnalite par fonctionnalite, sans interruption de service.",
  },
  {
    title: "CQRS et Messenger",
    description:
      "Nous combinons l'architecture hexagonale avec CQRS et Symfony Messenger pour separer lectures et ecritures. Cette approche simplifie les flux complexes et prepare le terrain pour l'asynchrone.",
  },
  {
    title: "Accompagnement des equipes",
    description:
      "Nous formons vos developpeurs aux principes du DDD et de l'architecture hexagonale. L'objectif est que votre equipe soit autonome pour maintenir et faire evoluer l'architecture.",
  },
];

const quandUtiliser = [
  {
    title: "Regles metier complexes",
    description:
      "Votre application gere des workflows metier avec de nombreuses conditions, validations et calculs. L'architecture hexagonale isole cette complexite dans un domaine testable.",
  },
  {
    title: "Projet a longue duree de vie",
    description:
      "L'application sera maintenue pendant des annees par des equipes qui changeront. La separation des couches garantit que le code reste comprehensible et evoluable.",
  },
  {
    title: "Equipe pluridisciplinaire",
    description:
      "Developpeurs, product owners et experts metier collaborent etroitement. Le langage ubiquitaire du DDD facilite la communication entre tous les acteurs du projet.",
  },
  {
    title: "Besoin d'independance technique",
    description:
      "Vous anticipez un changement de framework, de base de donnees ou d'infrastructure. Le domaine isole vous protege de ces evolutions techniques.",
  },
];

const faqItems = [
  {
    title:
      "Quelle est la difference entre architecture hexagonale et clean architecture ?",
    content:
      "L'architecture hexagonale (ports et adaptateurs) et la clean architecture partagent le meme principe fondamental : isoler le domaine metier des details techniques. La difference est surtout terminologique. L'architecture hexagonale parle de ports et d'adaptateurs, la clean architecture de use cases et d'interactors. En pratique, sur un projet Symfony, les deux approches menent a une structure tres similaire.",
  },
  {
    title:
      "L'architecture hexagonale est-elle adaptee a tous les projets Symfony ?",
    content:
      "Non. Pour un CRUD simple ou un back-office avec peu de logique metier, l'architecture hexagonale ajoute une complexite inutile. Elle prend tout son sens quand le domaine metier est riche, que le projet vivra longtemps ou que plusieurs equipes y contribuent. Nous vous aidons a evaluer si votre projet justifie cette approche.",
  },
  {
    title: "Comment migrer une application Symfony existante vers l'architecture hexagonale ?",
    content:
      "La migration se fait progressivement. Nous commencons par identifier les regles metier enfouies dans les controllers et les services Symfony, puis nous les extrayons dans un domaine isole. Chaque extraction est validee par des tests. Il n'est jamais necessaire de tout reecrire d'un coup.",
  },
  {
    title:
      "Comment Symfony Messenger s'integre-t-il dans une architecture hexagonale ?",
    content:
      "Symfony Messenger sert de bus de commandes et d'evenements. Les commandes representent les intentions metier (ports d'entree), les handlers orchestrent les cas d'usage, et les adaptateurs (Doctrine, Mailer, API externes) sont injectes via les interfaces du domaine. Messenger devient la colonne vertebrale de l'architecture.",
  },
  {
    title: "Faut-il utiliser Doctrine avec l'architecture hexagonale ?",
    content:
      "Doctrine reste un excellent choix, mais le domaine ne doit pas en dependre directement. Nous definissons des interfaces de repository dans le domaine et les implementons avec Doctrine dans la couche infrastructure. Ainsi, le domaine ignore completement comment les donnees sont persistees.",
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
  {
    name: "Architecture hexagonale avec Symfony",
    path: "/architecture-hexagonale-symfony",
  },
]);

const service = serviceJsonLd({
  name: "Architecture hexagonale avec Symfony",
  description:
    "Conception et migration d'applications Symfony vers l'architecture hexagonale et le Domain-Driven Design : domaine isole, ports et adaptateurs, testabilite et evolutivite.",
  path: "/architecture-hexagonale-symfony",
});

export default function ArchitectureHexagonaleSymfony() {
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
                  Architecture hexagonale PHP / DDD Symfony
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Architecture hexagonale avec Symfony : Domain-Driven Design
                  applique
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre application Symfony melange regles metier, controllers et
                  requetes Doctrine dans les memes classes ? Chaque evolution
                  devient risquee et chaque test un calvaire ?
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  L&apos;architecture hexagonale isole votre{" "}
                  <Link
                    href="/article/domain-ne-devrait-jamais-connaitre-symfony"
                    className="text-primary hover:underline"
                  >
                    domaine metier de Symfony
                  </Link>
                  . Le framework devient un detail d&apos;implementation, pas une
                  contrainte structurante. Votre code metier reste pur, testable
                  et independant.
                </p>
                <p className="mt-6 text-lg font-semibold text-dark">
                  Un premier echange de 30 minutes, gratuit et sans engagement.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="/audit-symfony-gratuit">
                    Demander un audit gratuit
                  </Button>
                  <Button href="/contact" variant="outline">
                    Contactez-nous
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
                      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>
              Les principes de l&apos;architecture hexagonale
            </SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              L&apos;architecture hexagonale, aussi appelee architecture ports et
              adaptateurs, repose sur un principe simple : le domaine metier ne
              depend de rien. Tout le reste gravite autour de lui.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {principes.map((principe) => (
                <Card key={principe.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {principe.title}
                  </h3>
                  <p className="mt-2 text-gray">{principe.description}</p>
                </Card>
              ))}
            </div>
            <p className="mt-10 text-center text-lg text-gray">
              Pour approfondir ces principes, consultez notre retour
              d&apos;experience sur la{" "}
              <Link
                href="/article/migration-symfony-architecture-hexagonale-retour-mission"
                className="text-primary hover:underline"
              >
                migration vers l&apos;architecture hexagonale sur un projet
                Symfony en production
              </Link>
              .
            </p>
          </Container>
        </section>

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>
              Les avantages concrets pour votre projet
            </SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              L&apos;architecture hexagonale n&apos;est pas un exercice
              academique. Elle apporte des benefices mesurables sur la
              maintenabilite, la testabilite et la capacite d&apos;evolution de
              votre application.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {avantages.map((avantage) => (
                <Card key={avantage.title}>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 text-primary">
                      &#10003;
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-dark">
                        {avantage.title}
                      </h3>
                      <p className="mt-2 text-gray">{avantage.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <p className="mt-10 text-center text-lg text-gray">
              Symfony Messenger joue un role cle dans cette architecture.
              Decouvrez comment il devient la{" "}
              <Link
                href="/article/symfony-messenger-colonne-vertebrale-archi-hexagonale"
                className="text-primary hover:underline"
              >
                colonne vertebrale d&apos;une architecture hexagonale
              </Link>{" "}
              en gerant commandes et evenements.
            </p>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Notre experience terrain</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Nous appliquons l&apos;architecture hexagonale et le DDD sur des
              projets Symfony en production depuis plusieurs annees. Voici
              comment nous procedons concretement.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {experience.map((item) => (
                <Card key={item.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray">{item.description}</p>
                </Card>
              ))}
            </div>
            <p className="mt-10 text-center text-lg text-gray">
              Le choix entre{" "}
              <Link
                href="/article/quelle-architecture-de-projet-choisir-entre-micro-service-ou-monolithe-modulaire"
                className="text-primary hover:underline"
              >
                micro-services et monolithe modulaire
              </Link>{" "}
              est une question que nous abordons systematiquement. L&apos;architecture
              hexagonale s&apos;applique aux deux approches, mais le monolithe
              modulaire reste souvent le meilleur point de depart.
            </p>
          </Container>
        </section>

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>
              Quand adopter l&apos;architecture hexagonale
            </SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              L&apos;architecture hexagonale n&apos;est pas la reponse a tous
              les projets. Voici les situations ou elle apporte une reelle
              valeur.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {quandUtiliser.map((item) => (
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

        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Pret a structurer votre application Symfony ?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Que vous partiez de zero ou que vous souhaitiez migrer une
              application existante vers l&apos;architecture hexagonale, nous
              vous accompagnons a chaque etape.
            </p>
            <Link
              href="/audit-symfony-gratuit"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
            >
              Demander mon audit gratuit
            </Link>
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
                  href="/audit-symfony-gratuit"
                  className="text-primary hover:underline"
                >
                  Audit Symfony gratuit
                </Link>{" "}
                , 30 minutes pour evaluer votre architecture actuelle
              </li>
              <li>
                <Link
                  href="/article/domain-ne-devrait-jamais-connaitre-symfony"
                  className="text-primary hover:underline"
                >
                  Votre domaine ne devrait jamais connaitre Symfony
                </Link>{" "}
                , le principe fondateur de l&apos;architecture hexagonale
              </li>
              <li>
                <Link
                  href="/article/migration-symfony-architecture-hexagonale-retour-mission"
                  className="text-primary hover:underline"
                >
                  Migration vers l&apos;architecture hexagonale : retour de
                  mission
                </Link>{" "}
                , un cas concret de migration en production
              </li>
              <li>
                <Link
                  href="/article/symfony-messenger-colonne-vertebrale-archi-hexagonale"
                  className="text-primary hover:underline"
                >
                  Symfony Messenger, colonne vertebrale de l&apos;archi
                  hexagonale
                </Link>{" "}
                , le role de Messenger dans cette architecture
              </li>
              <li>
                <a
                  href="https://symfony.com/doc/current/the-fast-track/en/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Documentation officielle Symfony
                </a>{" "}
                , reference technique du framework
              </li>
            </ul>
          </Container>
        </section>

        <CallToAction />
      </main>
    </>
  );
}
