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
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd, pageGraphJsonLd } from "@/lib/structured-data";
import StrategyIllustration from "@/components/illustrations/StrategyIllustration";
import LastUpdated from "@/components/ui/LastUpdated";

export const metadata = pageMetadata({
  title:
    "Migration Symfony : montez de version en toute sécurité",
  description:
    "Migration Symfony 4, 5, 6 vers Symfony 7 : montée de version progressive, sans interruption de service. Expertise certifiée et outillage Rector.",
  path: "/migration-symfony",
});

const versions = [
  {
    from: "Symfony 4.x",
    to: "Symfony 5.4 LTS puis 6.4 LTS",
    description:
      "Migration en deux paliers via les versions LTS. Suppression des dépréciations, mise à jour des bundles tiers et adaptation aux changements de configuration.",
  },
  {
    from: "Symfony 5.x",
    to: "Symfony 6.4 LTS",
    description:
      "Passage direct vers la dernière LTS. Résolution des dépréciations introduites en 5.x, migration des annotations vers les attributs PHP 8.",
  },
  {
    from: "Symfony 6.x",
    to: "Symfony 7.x",
    description:
      "Montée vers la version majeure actuelle. Traitement des dépréciations 6.x, adoption des nouvelles fonctionnalités et optimisation des performances.",
  },
  {
    from: "Symfony 3.x",
    to: "Symfony 5.4 LTS (puis 6.4/7.x)",
    description:
      "Migration longue distance avec paliers intermédiaires. Chaque étape est validée en production avant de passer à la suivante.",
  },
];

const etapes = [
  {
    num: "1",
    title: "Audit des dépréciations",
    description:
      "Nous analysons votre base de code avec les outils Symfony (deprecation logs, PHPStan) et Rector pour dresser l'inventaire complet des points de migration. Vous obtenez une cartographie précise du travail à réaliser.",
  },
  {
    num: "2",
    title: "Couverture de tests",
    description:
      "Avant toute modification, nous renforçons la suite de tests sur les zones critiques. Ce filet de sécurité garantit que chaque étape de migration n'introduit aucune régression fonctionnelle.",
  },
  {
    num: "3",
    title: "Migration par paliers",
    description:
      "Nous progressons version par version en suivant le chemin de migration officiel Symfony. Chaque palier est déployé en production, validé par vos équipes, avant de passer au suivant.",
  },
  {
    num: "4",
    title: "Refactoring automatisé avec Rector",
    description:
      "Rector transforme automatiquement une grande partie du code : annotations vers attributs, signatures de méthodes, appels dépréciés. Nous validons chaque transformation manuellement.",
  },
  {
    num: "5",
    title: "Validation et déploiement",
    description:
      "Tests complets, revue de code, vérification des performances. La nouvelle version est déployée progressivement avec possibilité de rollback à chaque étape.",
  },
];

const pourquoi = [
  {
    title: "Expertise Symfony certifiée",
    description:
      "Nos développeurs sont certifiés Symfony et maîtrisent chaque version du framework depuis Symfony 2. Nous connaissons les pièges spécifiques de chaque montée de version.",
  },
  {
    title: "Expérience en architecture hexagonale",
    description:
      "Nous avons mené des migrations vers une architecture hexagonale sur des projets Symfony en production. Cette approche isole le métier du framework et facilite les futures montées de version.",
  },
  {
    title: "Zéro interruption de service",
    description:
      "Notre méthode par paliers garantit que votre application reste en production à chaque étape. Pas de Big Bang, pas de gel des fonctionnalités pendant la migration.",
  },
];

const faqItems = [
  {
    title: "Combien de temps dure une migration Symfony ?",
    content:
      "La durée dépend de la version de départ, de la taille du projet et de la couverture de tests existante. Une migration d'une version majeure (ex. 5 vers 6) prend généralement 4 à 8 semaines. Pour un saut de deux versions majeures, comptez 2 à 4 mois avec les paliers intermédiaires.",
  },
  {
    title: "Faut-il migrer vers chaque version intermédiaire ?",
    content:
      "Oui. Symfony impose de passer par chaque version majeure dans l'ordre (4 vers 5, puis 5 vers 6, puis 6 vers 7). C'est la seule façon de traiter les dépréciations progressivement et de garantir une migration sans régression. Nous utilisons les versions LTS comme points de stabilisation.",
  },
  {
    title: "Quelle est la différence avec la modernisation d'application PHP ?",
    content:
      "La migration Symfony concerne les applications déjà construites sur Symfony qui doivent monter de version. La modernisation PHP s'adresse aux applications en PHP natif, CodeIgniter ou Zend qui doivent être réarchitecturées, parfois vers Symfony. Si votre application n'est pas sous Symfony, consultez notre page modernisation d'application PHP.",
  },
  {
    title: "Peut-on migrer sans suite de tests existante ?",
    content:
      "Oui, mais nous commençons par écrire les tests critiques avant de toucher au code. Sans tests, une migration est un pari. Nous ajoutons une couverture suffisante sur les parcours métier essentiels pour sécuriser chaque étape.",
  },
  {
    title: "Rector peut-il tout faire automatiquement ?",
    content:
      "Rector automatise environ 60 à 80 % des transformations de code (annotations vers attributs, signatures de méthodes, appels dépréciés). Le reste nécessite une intervention manuelle : logique métier spécifique, bundles tiers non compatibles, configuration personnalisée. Nous utilisons Rector comme accélérateur, pas comme solution unique.",
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
  { name: "Migration Symfony", path: "/migration-symfony" },
]);

const service = serviceJsonLd({
  name: "Migration Symfony",
  description:
    "Migration Symfony 4, 5, 6 vers Symfony 7 : montée de version progressive par paliers, sans interruption de service. Audit des dépréciations, refactoring Rector et validation continue.",
  path: "/migration-symfony",
  mainTech: ["symfony","php"],
});

const webPage = webPageJsonLd({
  name: "Migration Symfony : montez de version en toute sécurité",
  description:
    "Migration Symfony 4, 5, 6 vers Symfony 7 : montée de version progressive, sans interruption de service. Expertise certifiée et outillage Rector.",
  path: "/migration-symfony",
  datePublished: "2026-03-12",
  dateModified: "2026-03-12",
});

const migrationRelatedLinks: RelatedLink[] = [
  { title: "Modernisation applicative", description: "situer la migration dans le parcours global de modernisation", href: "/modernisation-applicative" },
  { title: "Audit Symfony gratuit", description: "30 minutes pour évaluer votre effort de migration", href: "/audit-symfony-gratuit" },
  { title: "Guide de migration dans un projet Symfony", description: "notre méthodologie détaillée pas à pas", href: "/article/guide-de-migration-dans-un-projet-symfony" },
  { title: "Migration Symfony et architecture hexagonale : retour de mission", description: "un cas concret de migration avancée", href: "/article/migration-symfony-architecture-hexagonale-retour-mission" },
  { title: "Rector : maîtrisez l'évolution de votre code Symfony", description: "l'outil indispensable pour automatiser les migrations", href: "/article/rector-et-ses-pouvoirs-maitrisez-levolution-de-votre-code-symfony" },
  { title: "Calendrier des versions Symfony", description: "dates de fin de maintenance officielle", href: "https://symfony.com/releases", external: true },
  { title: "Prestataire Symfony en France", description: "notre expertise Symfony partout en France, en remote ou sur site", href: "/agence-symfony-france" },
  { title: "Agence Symfony à Paris", description: "nos interventions en Île-de-France, à 1h20 en TGV", href: "/agence-symfony-paris" },
];

export default function MigrationSymfony() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraphJsonLd(breadcrumb, service, faqJsonLd, webPage)) }} />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <Breadcrumb items={[{ label: "Modernisation applicative", href: "/modernisation-applicative" }, { label: "Migration Symfony" }]} />
            <LastUpdated path="/migration-symfony" />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Migration Symfony
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Migration Symfony : montez de version en toute sécurité
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre application tourne sur Symfony 4, 5 ou 6 ? Chaque
                  version non maintenue est une faille de sécurité ouverte et un
                  frein à l&apos;évolution de votre produit.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT vous accompagne dans la{" "}
                  <strong>montée de version progressive</strong> de votre
                  application Symfony. Nous migrons par paliers, sans
                  interruption de service, en validant chaque étape en
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
                <StrategyIllustration className="h-96 w-full text-primary" />
              </div>
            </div>
          </Container>
        </section>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Versions supportées et chemins de migration</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Nous intervenons sur toutes les versions de Symfony encore
              déployées en production. Chaque migration suit le{" "}
              <a
                href="https://symfony.com/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                calendrier officiel des versions Symfony
              </a>{" "}
              et passe par les paliers LTS recommandés.
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
              Pour un aperçu détaillé de notre démarche, consultez notre{" "}
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
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Notre méthodologie de migration</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Une approche en cinq étapes pour monter de version sans risque et
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
              L&apos;étape 4 s&apos;appuie largement sur{" "}
              <Link
                href="/article/rector-et-ses-pouvoirs-maitrisez-levolution-de-votre-code-symfony"
                className="text-primary hover:underline"
              >
                Rector et ses capacités de transformation automatique
              </Link>{" "}
              pour accélérer le travail tout en gardant le contrôle sur chaque
              modification.
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
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
                Notre expérience de{" "}
                <Link
                  href="/article/migration-symfony-architecture-hexagonale-retour-mission"
                  className="text-primary hover:underline"
                >
                  migration Symfony vers une architecture hexagonale
                </Link>{" "}
                nous a appris à découpler le code métier du framework, ce qui
                rend chaque future montée de version plus rapide et moins
                risquée.
              </p>
              <p>
                La{" "}
                <Link
                  href="/article/la-dette-technique-faut-il-vraiment-en-avoir-peur"
                  className="text-primary hover:underline"
                >
                  dette technique
                </Link>{" "}
                s&apos;accumule à chaque version non mise à jour. Reporter une
                migration ne fait qu&apos;augmenter le volume de travail et les
                risques de sécurité.
              </p>
              <p>
                Votre application n&apos;est pas sous Symfony ? Découvrez notre
                offre de{" "}
                <Link
                  href="/modernisation-application-php"
                  className="text-primary hover:underline"
                >
                  modernisation d&apos;application PHP
                </Link>{" "}
                pour les projets en PHP natif, CodeIgniter ou Zend.
              </p>
              <p>
                Si vous héritez d&apos;un projet Symfony abandonné par un ancien
                prestataire, notre service de{" "}
                <Link
                  href="/reprise-projet-symfony"
                  className="text-primary hover:underline"
                >
                  reprise de projet Symfony
                </Link>{" "}
                couvre l&apos;audit, la stabilisation et la montée de version.
                Une fois le projet stabilisé, nous assurons la{" "}
                <Link
                  href="/maintenance-applicative-symfony"
                  className="text-primary hover:underline"
                >
                  maintenance applicative Symfony
                </Link>{" "}
                dans la durée.
              </p>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl space-y-12">
              <div>
                <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                  Rector pour automatiser la migration Symfony
                </h2>
                <p className="mt-4 text-lg text-gray">
                  Rector applique des règles de transformation qui réécrivent
                  automatiquement le code obsolète : déprécations remplacées,
                  annotations converties en attributs PHP 8, signatures de
                  méthodes mises à jour. Sur une montée de version, il absorbe la
                  part répétitive du travail et laisse l&apos;équipe se concentrer
                  sur les changements qui demandent une vraie réflexion métier.
                  Nous configurons des sets de règles ciblés par version puis
                  relisons chaque diff, car l&apos;automatisation ne dispense
                  jamais de la revue. Pour comprendre la mécanique et les limites
                  de l&apos;outil, notre article sur{" "}
                  <Link
                    href="/article/rector-et-ses-pouvoirs-maitrisez-levolution-de-votre-code-symfony"
                    className="text-primary hover:underline"
                  >
                    Rector et ses capacités de transformation du code Symfony
                  </Link>{" "}
                  détaille les cas où il fait gagner des journées entières.
                </p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                  Tests automatisés pendant une migration de version
                </h2>
                <p className="mt-4 text-lg text-gray">
                  Une migration sans filet de tests revient à changer un moteur
                  en roulant. Avant de toucher au code, nous vérifions la
                  couverture existante et complétons les zones critiques par des
                  tests fonctionnels qui figent le comportement attendu. Chaque
                  palier de version est validé contre cette suite : si un test
                  casse, la régression est identifiée immédiatement, pas en
                  production. Quand la base est trop peu testée, nous mettons en
                  place une stratégie de{" "}
                  <Link
                    href="/tests-automatises-php"
                    className="text-primary hover:underline"
                  >
                    tests automatisés PHP
                  </Link>{" "}
                  progressive, en priorisant les parcours métier les plus
                  sensibles. PHPStan complète le dispositif en détectant
                  statiquement les appels à des API supprimées entre deux
                  versions.
                </p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                  Performance applicative après migration
                </h2>
                <p className="mt-4 text-lg text-gray">
                  Monter de version n&apos;apporte pas seulement des correctifs de
                  sécurité : chaque release majeure de Symfony améliore le
                  conteneur de services, le routeur et le composant Cache. Encore
                  faut-il en profiter. Après la migration, nous profilons
                  l&apos;application pour mesurer les gains réels et traquer les
                  régressions éventuelles, comme des services mal configurés en
                  lazy ou un autowiring trop large. L&apos;optimisation passe
                  souvent par une révision des stratégies de cache : notre guide
                  pour{" "}
                  <Link
                    href="/article/tout-savoir-sur-la-mise-en-cache-tips"
                    className="text-primary hover:underline"
                  >
                    maîtriser la mise en cache dans Symfony
                  </Link>{" "}
                  couvre le cache HTTP, le cache applicatif et l&apos;invalidation.
                  Le résultat se mesure en temps de réponse et en consommation
                  mémoire, pas en numéro de version.
                </p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                  Migration Symfony 4 vers 7 : étapes clés
                </h2>
                <p className="mt-4 text-lg text-gray">
                  Passer de Symfony 4 à 7 ne se fait pas d&apos;un bloc. Le chemin
                  recommandé suit les paliers LTS : 4.4, puis 5.4, puis 6.4, avant
                  d&apos;atteindre 7. Chaque palier neutralise les déprécations
                  avant qu&apos;elles ne deviennent des erreurs fatales à la
                  version suivante. Les chantiers structurants concernent la
                  configuration (passage au format attributs et au répertoire
                  config/), le composant Security entièrement refondu en 5.x, et
                  la montée de Doctrine. Nous traitons les déprécations version par
                  version, en gardant une application livrable à chaque étape.
                  Notre{" "}
                  <Link
                    href="/article/guide-de-migration-dans-un-projet-symfony"
                    className="text-primary hover:underline"
                  >
                    guide de migration dans un projet Symfony
                  </Link>{" "}
                  décrit la démarche pas à pas.
                </p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                  Migration Symfony 5 vers 7 : étapes clés
                </h2>
                <p className="mt-4 text-lg text-gray">
                  Depuis Symfony 5.4 LTS, la route vers la 7 passe par la 6.4. La
                  principale rupture se situe entre 5 et 6 : montée à PHP 8.1
                  minimum, généralisation des attributs, et refonte de plusieurs
                  signatures dans les composants HttpFoundation et Security. La 6.4
                  puis la 7 demandent surtout de nettoyer les dernières
                  déprécations et d&apos;aligner les dépendances tierces
                  compatibles. Le composant Doctrine mérite une attention
                  particulière : la mise à jour de l&apos;ORM s&apos;accompagne
                  souvent de changements de comportement sur les types et les
                  requêtes. Pour anticiper ce volet, consultez notre retour sur{" "}
                  <Link
                    href="/article/doctrine-orm-3-0-une-nouvelle-version-majeure-pour-les-bases-de-donnees"
                    className="text-primary hover:underline"
                  >
                    la version majeure de Doctrine ORM 3.0
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                  Migration Symfony 6 vers 7 : étapes clés
                </h2>
                <p className="mt-4 text-lg text-gray">
                  La migration de Symfony 6.4 vers 7 est la plus douce des trois.
                  Comme 6.4 et 7.0 partagent la même base, l&apos;essentiel du
                  travail consiste à supprimer tout usage de code déprécé signalé
                  en 6.4 : le pont de dépréciations permet justement de tout
                  corriger avant le saut. Une fois l&apos;application sans
                  avertissement sous 6.4, le passage à 7 se résume à mettre à jour
                  les contraintes de version dans composer.json et à relancer la
                  suite de tests. C&apos;est le scénario idéal que nous visons pour
                  toutes nos migrations : faire de chaque LTS un point d&apos;appui
                  stable plutôt qu&apos;un grand saut risqué. Reporter ces mises à
                  jour ne fait qu&apos;accroître la{" "}
                  <Link
                    href="/article/la-dette-technique-faut-il-vraiment-en-avoir-peur"
                    className="text-primary hover:underline"
                  >
                    dette technique
                  </Link>{" "}
                  et la facture finale.
                </p>
              </div>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Votre version de Symfony arrive en fin de vie ?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Commencez par un audit de 30 minutes, gratuit et sans engagement.
              Nous évaluons l&apos;effort de migration et vous proposons un plan
              par étapes.
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
        <RelatedLinks links={migrationRelatedLinks} className="bg-light-gray" />
        </FadeIn>

        <FadeIn>
        <CallToAction />
        <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}
