import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CallToAction from "@/components/sections/CallToAction";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title:
    "Migration Symfony : montez de version en toute securite",
  description:
    "Migration Symfony 4, 5, 6 vers Symfony 7 : montee de version progressive, sans interruption de service. Expertise certifiee, architecture hexagonale et outillage Rector.",
  path: "/migration-symfony",
});

const versions = [
  {
    from: "Symfony 4.x",
    to: "Symfony 5.4 LTS puis 6.4 LTS",
    description:
      "Migration en deux paliers via les versions LTS. Suppression des deprecations, mise a jour des bundles tiers et adaptation aux changements de configuration.",
  },
  {
    from: "Symfony 5.x",
    to: "Symfony 6.4 LTS",
    description:
      "Passage direct vers la derniere LTS. Resolution des deprecations introduites en 5.x, migration des annotations vers les attributs PHP 8.",
  },
  {
    from: "Symfony 6.x",
    to: "Symfony 7.x",
    description:
      "Montee vers la version majeure actuelle. Traitement des deprecations 6.x, adoption des nouvelles fonctionnalites et optimisation des performances.",
  },
  {
    from: "Symfony 3.x",
    to: "Symfony 5.4 LTS (puis 6.4/7.x)",
    description:
      "Migration longue distance avec paliers intermediaires. Chaque etape est validee en production avant de passer a la suivante.",
  },
];

const etapes = [
  {
    num: "1",
    title: "Audit des deprecations",
    description:
      "Nous analysons votre base de code avec les outils Symfony (deprecation logs, PHPStan) et Rector pour dresser l'inventaire complet des points de migration. Vous obtenez une cartographie precise du travail a realiser.",
  },
  {
    num: "2",
    title: "Couverture de tests",
    description:
      "Avant toute modification, nous renforcons la suite de tests sur les zones critiques. Cette filet de securite garantit que chaque etape de migration n'introduit aucune regression fonctionnelle.",
  },
  {
    num: "3",
    title: "Migration par paliers",
    description:
      "Nous progressons version par version en suivant le chemin de migration officiel Symfony. Chaque palier est deploye en production, valide par vos equipes, avant de passer au suivant.",
  },
  {
    num: "4",
    title: "Refactoring automatise avec Rector",
    description:
      "Rector transforme automatiquement une grande partie du code : annotations vers attributs, signatures de methodes, appels deprecies. Nous validons chaque transformation manuellement.",
  },
  {
    num: "5",
    title: "Validation et deploiement",
    description:
      "Tests complets, revue de code, verification des performances. La nouvelle version est deployee progressivement avec possibilite de rollback a chaque etape.",
  },
];

const pourquoi = [
  {
    title: "Expertise Symfony certifiee",
    description:
      "Nos developpeurs sont certifies Symfony et maitrisent chaque version du framework depuis Symfony 2. Nous connaissons les pieges specifiques de chaque montee de version.",
  },
  {
    title: "Experience en architecture hexagonale",
    description:
      "Nous avons mene des migrations vers une architecture hexagonale sur des projets Symfony en production. Cette approche isole le metier du framework et facilite les futures montees de version.",
  },
  {
    title: "Zero interruption de service",
    description:
      "Notre methode par paliers garantit que votre application reste en production a chaque etape. Pas de Big Bang, pas de gel des fonctionnalites pendant la migration.",
  },
];

const faqItems = [
  {
    title: "Combien de temps dure une migration Symfony ?",
    content:
      "La duree depend de la version de depart, de la taille du projet et de la couverture de tests existante. Une migration d'une version majeure (ex. 5 vers 6) prend generalement 4 a 8 semaines. Pour un saut de deux versions majeures, comptez 2 a 4 mois avec les paliers intermediaires.",
  },
  {
    title: "Faut-il migrer vers chaque version intermediaire ?",
    content:
      "Oui. Symfony impose de passer par chaque version majeure dans l'ordre (4 vers 5, puis 5 vers 6, puis 6 vers 7). C'est la seule facon de traiter les deprecations progressivement et de garantir une migration sans regression. Nous utilisons les versions LTS comme points de stabilisation.",
  },
  {
    title: "Quelle est la difference avec la modernisation d'application PHP ?",
    content:
      "La migration Symfony concerne les applications deja construites sur Symfony qui doivent monter de version. La modernisation PHP s'adresse aux applications en PHP natif, CodeIgniter ou Zend qui doivent etre rearchitecturees, parfois vers Symfony. Si votre application n'est pas sous Symfony, consultez notre page modernisation d'application PHP.",
  },
  {
    title: "Peut-on migrer sans suite de tests existante ?",
    content:
      "Oui, mais nous commencons par ecrire les tests critiques avant de toucher au code. Sans tests, une migration est un pari. Nous ajoutons une couverture suffisante sur les parcours metier essentiels pour securiser chaque etape.",
  },
  {
    title: "Rector peut-il tout faire automatiquement ?",
    content:
      "Rector automatise environ 60 a 80 % des transformations de code (annotations vers attributs, signatures de methodes, appels deprecies). Le reste necessite une intervention manuelle : logique metier specifique, bundles tiers non compatibles, configuration personnalisee. Nous utilisons Rector comme accelerateur, pas comme solution unique.",
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
  { name: "Migration Symfony", path: "/migration-symfony" },
]);

const service = serviceJsonLd({
  name: "Migration Symfony",
  description:
    "Migration Symfony 4, 5, 6 vers Symfony 7 : montee de version progressive par paliers, sans interruption de service. Audit des deprecations, refactoring Rector et validation continue.",
  path: "/migration-symfony",
});

const webPage = webPageJsonLd({
  name: "Migration Symfony : montez de version en toute securite",
  description:
    "Migration Symfony 4, 5, 6 vers Symfony 7 : montee de version progressive, sans interruption de service. Expertise certifiee, architecture hexagonale et outillage Rector.",
  path: "/migration-symfony",
  datePublished: "2026-03-12",
  dateModified: "2026-03-12",
});

export default function MigrationSymfony() {
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
                  Migration Symfony
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Migration Symfony : montez de version en toute securite
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre application tourne sur Symfony 4, 5 ou 6 ? Chaque
                  version non maintenue est une faille de securite ouverte et un
                  frein a l&apos;evolution de votre produit.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT vous accompagne dans la{" "}
                  <strong>montee de version progressive</strong> de votre
                  application Symfony. Nous migrons par paliers, sans
                  interruption de service, en validant chaque etape en
                  production.
                </p>
                <p className="mt-6 text-lg font-semibold text-dark">
                  Un premier audit de 30 minutes, gratuit et sans engagement.
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
                      d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5-6L16.5 15m0 0L12 10.5m4.5 4.5V1.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Versions supportees et chemins de migration</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Nous intervenons sur toutes les versions de Symfony encore
              deployees en production. Chaque migration suit le{" "}
              <a
                href="https://symfony.com/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                calendrier officiel des versions Symfony
              </a>{" "}
              et passe par les paliers LTS recommandes.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {versions.map((version) => (
                <Card key={version.from}>
                  <div className="flex items-center gap-3">
                    <span className="rounded bg-red-100 px-2 py-1 text-sm font-semibold text-red-700">
                      {version.from}
                    </span>
                    <span className="text-gray">→</span>
                    <span className="rounded bg-green-100 px-2 py-1 text-sm font-semibold text-green-700">
                      {version.to}
                    </span>
                  </div>
                  <p className="mt-3 text-gray">{version.description}</p>
                </Card>
              ))}
            </div>
            <p className="mt-10 text-center text-lg text-gray">
              Pour un apercu detaille de notre demarche, consultez notre{" "}
              <Link
                href="/article/guide-de-migration-dans-un-projet-symfony"
                className="text-primary hover:underline"
              >
                guide de migration dans un projet Symfony
              </Link>
              .
            </p>
          </Container>
        </section>

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Notre methodologie de migration</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Une approche en cinq etapes pour monter de version sans risque et
              sans interruption de service.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {etapes.map((etape) => (
                <Card key={etape.title}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {etape.num}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-dark">
                    {etape.title}
                  </h3>
                  <p className="mt-2 text-gray">{etape.description}</p>
                </Card>
              ))}
            </div>
            <p className="mt-10 text-center text-lg text-gray">
              L&apos;etape 4 s&apos;appuie largement sur{" "}
              <Link
                href="/article/rector-et-ses-pouvoirs-maitrisez-levolution-de-votre-code-symfony"
                className="text-primary hover:underline"
              >
                Rector et ses capacites de transformation automatique
              </Link>{" "}
              pour accelerer le travail tout en gardant le controle sur chaque
              modification.
            </p>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Pourquoi nous confier votre migration</SectionTitle>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {pourquoi.map((item) => (
                <Card key={item.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray">{item.description}</p>
                </Card>
              ))}
            </div>
            <div className="mt-10 space-y-4 text-center text-lg text-gray">
              <p>
                Notre experience de{" "}
                <Link
                  href="/article/migration-symfony-architecture-hexagonale-retour-mission"
                  className="text-primary hover:underline"
                >
                  migration Symfony vers une architecture hexagonale
                </Link>{" "}
                nous a appris a decoupler le code metier du framework, ce qui
                rend chaque future montee de version plus rapide et moins
                risquee.
              </p>
              <p>
                La{" "}
                <Link
                  href="/article/la-dette-technique-faut-il-vraiment-en-avoir-peur"
                  className="text-primary hover:underline"
                >
                  dette technique
                </Link>{" "}
                s&apos;accumule a chaque version non mise a jour. Reporter une
                migration ne fait qu&apos;augmenter le volume de travail et les
                risques de securite.
              </p>
              <p>
                Votre application n&apos;est pas sous Symfony ? Decouvrez notre
                offre de{" "}
                <Link
                  href="/modernisation-application-php"
                  className="text-primary hover:underline"
                >
                  modernisation d&apos;application PHP
                </Link>{" "}
                pour les projets en PHP natif, CodeIgniter ou Zend.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Votre version de Symfony arrive en fin de vie ?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Commencez par un audit de 30 minutes, gratuit et sans engagement.
              Nous evaluons l&apos;effort de migration et vous proposons un plan
              par etapes.
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
                , 30 minutes pour evaluer votre effort de migration
              </li>
              <li>
                <Link
                  href="/article/guide-de-migration-dans-un-projet-symfony"
                  className="text-primary hover:underline"
                >
                  Guide de migration dans un projet Symfony
                </Link>{" "}
                , notre methodologie detaillee pas a pas
              </li>
              <li>
                <Link
                  href="/article/migration-symfony-architecture-hexagonale-retour-mission"
                  className="text-primary hover:underline"
                >
                  Migration Symfony et architecture hexagonale : retour de mission
                </Link>{" "}
                , un cas concret de migration avancee
              </li>
              <li>
                <Link
                  href="/article/rector-et-ses-pouvoirs-maitrisez-levolution-de-votre-code-symfony"
                  className="text-primary hover:underline"
                >
                  Rector : maitrisez l&apos;evolution de votre code Symfony
                </Link>{" "}
                , l&apos;outil indispensable pour automatiser les migrations
              </li>
              <li>
                <a
                  href="https://symfony.com/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Calendrier des versions Symfony
                </a>{" "}
                , dates de fin de maintenance officielle
              </li>
            </ul>
          </Container>
        </section>

        <CallToAction />
      </main>
    </>
  );
}
