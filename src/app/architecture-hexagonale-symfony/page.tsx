import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CallToAction from "@/components/sections/CallToAction";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import FadeIn from "@/components/ui/FadeIn";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";
import CodeThinkingIllustration from "@/components/illustrations/CodeThinkingIllustration";

export const metadata = pageMetadata({
  title:
    "Architecture hexagonale avec Symfony : Domain-Driven Design appliqué",
  description:
    "Structurez vos applications Symfony avec l'architecture hexagonale et le Domain-Driven Design. Principes, avantages et retours d'expérience.",
  path: "/architecture-hexagonale-symfony",
});

const principes = [
  {
    title: "Le domaine au centre",
    description:
      "Le code métier est isolé dans un noyau indépendant de tout framework. Les règles de gestion ne dépendent ni de Symfony, ni de Doctrine, ni d'aucune bibliothèque externe.",
  },
  {
    title: "Ports et adaptateurs",
    description:
      "Les interactions avec l'extérieur passent par des interfaces (ports) implémentées par des adaptateurs concrets. Changer de base de données ou de système de file d'attente ne touche pas au domaine.",
  },
  {
    title: "Inversion de dépendance",
    description:
      "Les couches externes dépendent du domaine, jamais l'inverse. Le domaine définit les contrats, l'infrastructure les implémente.",
  },
  {
    title: "Testabilité native",
    description:
      "Un domaine sans dépendance externe se teste unitairement sans mock complexe. Les tests deviennent rapides, fiables et faciles à maintenir.",
  },
  {
    title: "Ubiquitous Language",
    description:
      "Le code utilise le vocabulaire métier. Développeurs et experts fonctionnels parlent le même langage, ce qui réduit les malentendus et accélère les échanges.",
  },
  {
    title: "Séparation des responsabilités",
    description:
      "Chaque couche a un rôle précis : le domaine porte les règles, l'application orchestre les cas d'usage, l'infrastructure gère la persistance et les I/O.",
  },
];

const avantages = [
  {
    title: "Évolutivité maîtrisée",
    description:
      "Ajouter une fonctionnalité métier ne nécessite pas de modifier l'infrastructure. Le domaine évolue indépendamment des choix techniques.",
  },
  {
    title: "Migration facilitée",
    description:
      "Changer de version Symfony, remplacer Doctrine par un autre ORM ou migrer vers une API : le noyau métier reste intact car il ne connaît pas ces outils.",
  },
  {
    title: "Onboarding accéléré",
    description:
      "Un nouveau développeur comprend les règles métier en lisant le domaine, sans devoir naviguer dans les controllers, les templates et la configuration Symfony.",
  },
  {
    title: "Dette technique réduite",
    description:
      "La séparation stricte des couches empêche le couplage accidentel. Le code reste modulaire même après des années de maintenance et d'évolutions.",
  },
];

const experience = [
  {
    title: "Migration progressive",
    description:
      "Nous ne réécrivons jamais tout d'un coup. Nous extrayons progressivement le domaine métier des controllers Symfony existants, fonctionnalité par fonctionnalité, sans interruption de service.",
  },
  {
    title: "CQRS et Messenger",
    description:
      "Nous combinons l'architecture hexagonale avec CQRS et Symfony Messenger pour séparer lectures et écritures. Cette approche simplifie les flux complexes et prépare le terrain pour l'asynchrone.",
  },
  {
    title: "Accompagnement des équipes",
    description:
      "Nous formons vos développeurs aux principes du DDD et de l'architecture hexagonale. L'objectif est que votre équipe soit autonome pour maintenir et faire évoluer l'architecture.",
  },
];

const quandUtiliser = [
  {
    title: "Règles métier complexes",
    description:
      "Votre application gère des workflows métier avec de nombreuses conditions, validations et calculs. L'architecture hexagonale isole cette complexité dans un domaine testable.",
  },
  {
    title: "Projet à longue durée de vie",
    description:
      "L'application sera maintenue pendant des années par des équipes qui changeront. La séparation des couches garantit que le code reste compréhensible et évoluable.",
  },
  {
    title: "Équipe pluridisciplinaire",
    description:
      "Développeurs, product owners et experts métier collaborent étroitement. Le langage ubiquitaire du DDD facilite la communication entre tous les acteurs du projet.",
  },
  {
    title: "Besoin d'indépendance technique",
    description:
      "Vous anticipez un changement de framework, de base de données ou d'infrastructure. Le domaine isolé vous protège de ces évolutions techniques.",
  },
];

const faqItems = [
  {
    title:
      "Quelle est la différence entre architecture hexagonale et clean architecture ?",
    content:
      "L'architecture hexagonale (ports et adaptateurs) et la clean architecture partagent le même principe fondamental : isoler le domaine métier des détails techniques. La différence est surtout terminologique. L'architecture hexagonale parle de ports et d'adaptateurs, la clean architecture de use cases et d'interactors. En pratique, sur un projet Symfony, les deux approches mènent à une structure très similaire.",
  },
  {
    title:
      "L'architecture hexagonale est-elle adaptée à tous les projets Symfony ?",
    content:
      "Non. Pour un CRUD simple ou un back-office avec peu de logique métier, l'architecture hexagonale ajoute une complexité inutile. Elle prend tout son sens quand le domaine métier est riche, que le projet vivra longtemps ou que plusieurs équipes y contribuent. Nous vous aidons à évaluer si votre projet justifie cette approche.",
  },
  {
    title: "Comment migrer une application Symfony existante vers l'architecture hexagonale ?",
    content:
      "La migration se fait progressivement. Nous commençons par identifier les règles métier enfouies dans les controllers et les services Symfony, puis nous les extrayons dans un domaine isolé. Chaque extraction est validée par des tests. Il n'est jamais nécessaire de tout réécrire d'un coup.",
  },
  {
    title:
      "Comment Symfony Messenger s'intègre-t-il dans une architecture hexagonale ?",
    content:
      "Symfony Messenger sert de bus de commandes et d'événements. Les commandes représentent les intentions métier (ports d'entrée), les handlers orchestrent les cas d'usage, et les adaptateurs (Doctrine, Mailer, API externes) sont injectés via les interfaces du domaine. Messenger devient la colonne vertébrale de l'architecture.",
  },
  {
    title: "Faut-il utiliser Doctrine avec l'architecture hexagonale ?",
    content:
      "Doctrine reste un excellent choix, mais le domaine ne doit pas en dépendre directement. Nous définissons des interfaces de repository dans le domaine et les implémentons avec Doctrine dans la couche infrastructure. Ainsi, le domaine ignore complètement comment les données sont persistées.",
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
  { name: "Modernisation applicative", path: "/modernisation-applicative" },
  {
    name: "Architecture hexagonale avec Symfony",
    path: "/architecture-hexagonale-symfony",
  },
]);

const service = serviceJsonLd({
  name: "Architecture hexagonale avec Symfony",
  description:
    "Conception et migration d'applications Symfony vers l'architecture hexagonale et le Domain-Driven Design : domaine isolé, ports et adaptateurs, testabilité et évolutivité.",
  path: "/architecture-hexagonale-symfony",
});

const webPage = webPageJsonLd({
  name: "Architecture hexagonale avec Symfony : Domain-Driven Design appliqué",
  description:
    "Structurez vos applications Symfony avec l'architecture hexagonale et le Domain-Driven Design. Principes, avantages et retours d'expérience.",
  path: "/architecture-hexagonale-symfony",
  datePublished: "2026-03-12",
  dateModified: "2026-03-12",
});

const architectureRelatedLinks: RelatedLink[] = [
  { title: "Modernisation applicative", description: "intégrer l'architecture hexagonale dans un parcours de modernisation", href: "/modernisation-applicative" },
  { title: "Audit Symfony gratuit", description: "30 minutes pour évaluer votre architecture actuelle", href: "/audit-symfony-gratuit" },
  { title: "Votre domaine ne devrait jamais connaître Symfony", description: "le principe fondateur de l'architecture hexagonale", href: "/article/domain-ne-devrait-jamais-connaitre-symfony" },
  { title: "Migration vers l'architecture hexagonale : retour de mission", description: "un cas concret de migration en production", href: "/article/migration-symfony-architecture-hexagonale-retour-mission" },
  { title: "Symfony Messenger, colonne vertébrale de l'archi hexagonale", description: "le rôle de Messenger dans cette architecture", href: "/article/symfony-messenger-colonne-vertebrale-archi-hexagonale" },
  { title: "Documentation officielle Symfony", description: "référence technique du framework", href: "https://symfony.com/doc/current/the-fast-track/en/index.html", external: true },
  { title: "Agence Symfony à Nantes", description: "nos interventions dans les Pays de la Loire", href: "/agence-symfony-nantes" },
  { title: "Agence Symfony à Paris", description: "nos interventions en Île-de-France, à 1h20 en TGV", href: "/agence-symfony-paris" },
];

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <Breadcrumb items={[{ label: "Modernisation applicative", href: "/modernisation-applicative" }, { label: "Architecture hexagonale" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Architecture hexagonale PHP / DDD Symfony
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Architecture hexagonale avec Symfony : Domain-Driven Design
                  appliqué
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre application Symfony mélange règles métier, controllers et
                  requêtes Doctrine dans les mêmes classes ? Chaque évolution
                  devient risquée et chaque test un calvaire ?
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  L&apos;architecture hexagonale isole votre{" "}
                  <Link
                    href="/article/domain-ne-devrait-jamais-connaitre-symfony"
                    className="text-primary hover:underline"
                  >
                    domaine métier de Symfony
                  </Link>
                  . Le framework devient un détail d&apos;implémentation, pas une
                  contrainte structurante. Votre code métier reste pur, testable
                  et indépendant.
                </p>
                <p className="mt-6 text-lg font-semibold text-dark">
                  Un premier échange de 30 minutes, gratuit et sans engagement.
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
                <CodeThinkingIllustration className="h-96 w-full text-primary" />
              </div>
            </div>
          </Container>
        </section>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>
              Les principes de l&apos;architecture hexagonale
            </SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              L&apos;architecture hexagonale, aussi appelée architecture ports et
              adaptateurs, repose sur un principe simple : le domaine métier ne
              dépend de rien. Tout le reste gravite autour de lui.
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
              d&apos;expérience sur la{" "}
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
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>
              Les avantages concrets pour votre projet
            </SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              L&apos;architecture hexagonale n&apos;est pas un exercice
              académique. Elle apporte des bénéfices mesurables sur la
              maintenabilité, la testabilité et la capacité d&apos;évolution de
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
              Symfony Messenger joue un rôle clé dans cette architecture.
              Découvrez comment il devient la{" "}
              <Link
                href="/article/symfony-messenger-colonne-vertebrale-archi-hexagonale"
                className="text-primary hover:underline"
              >
                colonne vertébrale d&apos;une architecture hexagonale
              </Link>{" "}
              en gérant commandes et événements.
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Notre expérience terrain</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Nous appliquons l&apos;architecture hexagonale et le DDD sur des
              projets Symfony en production depuis plusieurs années. Voici
              comment nous procédons concrètement.
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
              est une question que nous abordons systématiquement. L&apos;architecture
              hexagonale s&apos;applique aux deux approches, mais le monolithe
              modulaire reste souvent le meilleur point de départ.
              Pour évaluer la qualité architecturale de votre projet existant,
              notre{" "}
              <Link
                href="/audit-code-php"
                className="text-primary hover:underline"
              >
                audit de code PHP
              </Link>{" "}
              mesure le couplage, la séparation des couches et le respect des
              principes SOLID.
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>
              Quand adopter l&apos;architecture hexagonale
            </SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              L&apos;architecture hexagonale n&apos;est pas la réponse à tous
              les projets. Voici les situations où elle apporte une réelle
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
        </FadeIn>

        <FadeIn>
        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Prêt à structurer votre application Symfony ?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Que vous partiez de zéro ou que vous souhaitiez migrer une
              application existante vers l&apos;architecture hexagonale, nous
              vous accompagnons à chaque étape.
            </p>
            <Link
              href="/audit-symfony-gratuit"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
            >
              Demander mon audit gratuit
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
        <RelatedLinks links={architectureRelatedLinks} className="bg-light-gray" />
        </FadeIn>

        <FadeIn>
        <CallToAction />
        <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}
