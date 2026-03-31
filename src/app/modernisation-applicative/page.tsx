import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import FadeIn from "@/components/ui/FadeIn";
import Breadcrumb from "@/components/ui/Breadcrumb";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import TaskIllustration from "@/components/illustrations/TaskIllustration";

const relatedLinks: RelatedLink[] = [
  { title: "La dette technique : faut-il vraiment en avoir peur ?", description: "comprendre et anticiper l'accumulation de dette", href: "/article/la-dette-technique-faut-il-vraiment-en-avoir-peur" },
  { title: "Guide de migration dans un projet Symfony", description: "méthodes et bonnes pratiques pour migrer en douceur", href: "/article/guide-de-migration-dans-un-projet-symfony" },
  { title: "Rector et ses pouvoirs", description: "automatiser les mises à jour de syntaxe PHP", href: "/article/rector-et-ses-pouvoirs-maitrisez-levolution-de-votre-code-symfony" },
  { title: "PHPStan pour la qualité du code", description: "analyser et objectiver la dette technique", href: "/article/comment-phpstan-peut-vous-aider-a-ameliorer-la-qualite-de-votre-code-php" },
  { title: "Symfony Releases", description: "calendrier de support et versions LTS", href: "https://symfony.com/releases", external: true },
];

export const metadata = pageMetadata({
  title:
    "Modernisation applicative : du diagnostic à la migration",
  description:
    "Parcours complet de modernisation applicative : diagnostic, audit de dette technique, refactoring progressif et migration architecturale.",
  path: "/modernisation-applicative",
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Modernisation applicative", path: "/modernisation-applicative" },
]);

const webPage = webPageJsonLd({
  name: "Modernisation applicative : du diagnostic à la migration",
  description:
    "Parcours complet de modernisation applicative : diagnostic, audit de dette technique, refactoring progressif et migration architecturale.",
  path: "/modernisation-applicative",
  datePublished: "2026-03-16",
  dateModified: "2026-03-16",
});

const service = serviceJsonLd({
  name: "Modernisation applicative",
  description: "Parcours structuré de modernisation d'applications PHP et Symfony : audit technique, refactoring progressif, migration architecturale et maintenance continue.",
  path: "/modernisation-applicative",
});

const situations = [
  {
    title: "Application PHP vieillissante",
    description:
      "Votre application tourne sur PHP 5 ou 7, un framework abandonné ou du code sans structure. Les développeurs ont peur d'y toucher, chaque évolution prend des semaines.",
    phase: "Commencer par la phase 1 (diagnostic) puis phase 3 (modernisation).",
  },
  {
    title: "Changement de prestataire",
    description:
      "Votre ancien prestataire est parti, l'équipe interne ne connaît pas le code, la documentation est inexistante. Il faut reprendre le projet en urgence.",
    phase: "Commencer par la phase 2 (stabilisation) puis phases 3-4.",
  },
  {
    title: "Symfony en version obsolète",
    description:
      "Votre application Symfony 3, 4 ou 5 fonctionne mais n'est plus maintenue. Les mises à jour de sécurité ne sont plus disponibles, les nouvelles bibliothèques sont incompatibles.",
    phase: "Commencer par la phase 1 (diagnostic) puis phase 4 (migration).",
  },
  {
    title: "Besoin de montée en qualité",
    description:
      "Le code fonctionne mais les bugs en production sont fréquents, il n'y a pas de tests, les déploiements sont manuels et stressants.",
    phase: "Commencer par la phase 3 (tests et refactoring) puis phase 5 (pérenniser).",
  },
];

const faqItems = [
  {
    title: "Quelle est la différence entre modernisation et migration ?",
    content:
      "La modernisation couvre l'ensemble du parcours : audit, refactoring du code, mise à jour des dépendances, introduction de tests. La migration est une étape spécifique qui concerne le changement de version de framework (par exemple Symfony 4 vers 7). On peut moderniser sans migrer (refactoring sur la même version) ou migrer sans moderniser en profondeur (montée de version seule).",
  },
  {
    title: "Par où commencer quand tout semble urgent ?",
    content:
      "Par un diagnostic. En 30 minutes d'audit gratuit, nous identifions les risques les plus critiques (sécurité, stabilité) et les quick wins. Cela permet de définir un plan d'action priorisé plutôt que de tout attaquer en même temps.",
  },
  {
    title: "Combien de temps dure une modernisation complète ?",
    content:
      "Cela dépend de la taille et de l'état de l'application. Un refactoring progressif sur une application moyenne prend entre 3 et 12 mois, en parallèle de l'activité courante. L'avantage de notre approche par phases : chaque phase livre de la valeur, vous n'attendez pas la fin du chantier pour voir des résultats.",
  },
  {
    title: "Mon application reste-t-elle en production pendant la modernisation ?",
    content:
      "Oui. Notre approche progressive garantit zéro interruption de service. Chaque phase est livrée, testée et déployée avant de passer à la suivante. Votre application continue de fonctionner normalement pour vos utilisateurs.",
  },
  {
    title: "Faut-il tout réécrire ou peut-on moderniser progressivement ?",
    content:
      "La réécriture complète est rarement la bonne stratégie. Elle coûte cher, prend du temps et introduit de nouveaux risques. Nous privilégions le refactoring progressif : on identifie les modules les plus critiques, on les modernise en priorité, et on avance par étapes. Chaque module migré est couvert par des tests et livré en production.",
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

export default function ModernisationApplicative() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
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
            <Breadcrumb items={[{ label: "Modernisation applicative" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Parcours modernisation
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Modernisation applicative : du diagnostic à la migration
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre application PHP vieillit, accumule de la{" "}
                  <Link
                    href="/article/la-dette-technique-faut-il-vraiment-en-avoir-peur"
                    className="text-primary hover:underline"
                  >
                    dette technique
                  </Link>{" "}
                  ou tourne sur un framework en fin de vie. Plutôt que de tout
                  réécrire, nous vous proposons un parcours structuré en 5 phases
                  pour la remettre à niveau progressivement, sans interruption
                  de service.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Chaque phase est indépendante et livre de la valeur. Vous
                  choisissez par où commencer selon votre situation.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/audit-symfony-gratuit">
                    Diagnostic gratuit 30 min
                  </Button>
                  <Button href="/contact" variant="outline">
                    Discuter de mon projet
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <TaskIllustration className="h-96 w-full text-primary" />
              </div>
            </div>
          </Container>
        </section>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>
              Pourquoi ne pas reporter la modernisation
            </SectionTitle>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <h2 className="font-display text-lg font-bold text-dark">
                  Sécurité en danger
                </h2>
                <p className="mt-2 text-gray">
                  Une version PHP ou Symfony en fin de vie ne reçoit plus
                  de correctifs de sécurité. Chaque jour sans mise à jour
                  augmente votre surface d&apos;attaque face aux{" "}
                  <Link href="/article/cve-comprendre-les-failles-pour-mieux-se-proteger" className="text-primary hover:underline">vulnérabilités connues</Link>.
                </p>
              </Card>
              <Card>
                <h2 className="font-display text-lg font-bold text-dark">
                  Coûts de maintenance croissants
                </h2>
                <p className="mt-2 text-gray">
                  Plus la{" "}
                  <Link href="/article/la-dette-technique-faut-il-vraiment-en-avoir-peur" className="text-primary hover:underline">dette technique</Link>
                  {" "}s&apos;accumule, plus chaque évolution coûte cher.
                  Un bug corrigé en crée deux autres. Les développeurs
                  passent plus de temps à contourner les problèmes qu&apos;à
                  livrer de la valeur.
                </p>
              </Card>
              <Card>
                <h2 className="font-display text-lg font-bold text-dark">
                  Difficulté de recrutement
                </h2>
                <p className="mt-2 text-gray">
                  Les développeurs expérimentés refusent de travailler sur du
                  code legacy sans tests, sans documentation et sans framework
                  moderne. Moderniser rend votre projet attractif pour les
                  talents.
                </p>
              </Card>
              <Card>
                <h2 className="font-display text-lg font-bold text-dark">
                  Incompatibilité croissante
                </h2>
                <p className="mt-2 text-gray">
                  Les bibliothèques tierces, les API partenaires et les
                  services cloud évoluent. Une application figée sur une
                  ancienne stack devient progressivement incompatible avec
                  son écosystème.
                </p>
              </Card>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle subtitle="5 phases, de l'audit à la maintenance">
              Le parcours de modernisation
            </SectionTitle>
            <div className="mt-12 space-y-12">
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    1
                  </div>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-dark">
                    Audit technique de votre application PHP
                  </h2>
                  <p className="mt-3 max-w-3xl text-lg text-gray">
                    Avant de toucher une ligne de code, il faut comprendre.
                    Un audit technique révèle l&apos;état réel de votre
                    application : niveau de dette technique, failles de
                    sécurité, dépendances obsolètes, couverture de tests.
                  </p>
                  <p className="mt-3 max-w-3xl text-lg text-gray">
                    Nous utilisons{" "}
                    <Link href="/article/comment-phpstan-peut-vous-aider-a-ameliorer-la-qualite-de-votre-code-php" className="text-primary hover:underline">PHPStan</Link>
                    {" "}pour objectiver la qualité du code et produisons un
                    rapport détaillé avec un plan d&apos;action priorisé.
                    Le diagnostic peut commencer par un{" "}
                    <Link href="/audit-symfony-gratuit" className="text-primary hover:underline">audit gratuit de 30 minutes</Link>
                    {" "}pour identifier les premiers risques.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href="/audit-code-php"
                      className="inline-flex items-center text-primary font-semibold hover:underline"
                    >
                      Audit technique approfondi &rarr;
                    </Link>
                    <Link
                      href="/audit-symfony-gratuit"
                      className="inline-flex items-center text-primary font-semibold hover:underline"
                    >
                      Commencer par un diagnostic gratuit &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    2
                  </div>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-dark">
                    Stabilisation et reprise de projet Symfony
                  </h2>
                  <p className="mt-3 max-w-3xl text-lg text-gray">
                    Si votre application est en situation critique (changement
                    de prestataire, départ du développeur principal, bugs
                    bloquants), la priorité est de reprendre le contrôle :
                    comprendre le code existant, corriger les urgences,
                    documenter.
                  </p>
                  <p className="mt-3 max-w-3xl text-lg text-gray">
                    Cette phase est essentielle quand personne dans l&apos;équipe
                    ne maîtrise le code. Nous prenons le relais, stabilisons
                    l&apos;existant et posons les bases pour la suite du parcours
                    de modernisation.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href="/reprise-projet-symfony"
                      className="inline-flex items-center text-primary font-semibold hover:underline"
                    >
                      Reprise de projet Symfony &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    3
                  </div>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-dark">
                    Refactoring et modernisation du code PHP
                  </h2>
                  <p className="mt-3 max-w-3xl text-lg text-gray">
                    Une fois l&apos;application stabilisée, on attaque le
                    refactoring : mise à jour vers PHP 8, élimination du{" "}
                    <Link href="/article/code-mort-mission-elimination" className="text-primary hover:underline">code mort</Link>
                    , introduction de tests automatisés, migration progressive
                    vers une architecture propre.
                  </p>
                  <p className="mt-3 max-w-3xl text-lg text-gray">
                    Nous combinons{" "}
                    <Link href="/article/rector-et-ses-pouvoirs-maitrisez-levolution-de-votre-code-symfony" className="text-primary hover:underline">Rector</Link>
                    {" "}pour automatiser les mises à jour de syntaxe et PHPStan
                    pour garantir la qualité à chaque étape. Le code est
                    refactoré module par module, sans jamais bloquer votre
                    activité.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href="/modernisation-application-php"
                      className="inline-flex items-center text-primary font-semibold hover:underline"
                    >
                      Modernisation PHP &rarr;
                    </Link>
                    <Link
                      href="/tests-automatises-php"
                      className="inline-flex items-center text-primary font-semibold hover:underline"
                    >
                      Tests automatisés PHP &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    4
                  </div>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-dark">
                    Migration Symfony et architecture hexagonale
                  </h2>
                  <p className="mt-3 max-w-3xl text-lg text-gray">
                    Le code est propre, les tests sont en place : c&apos;est
                    le moment de migrer vers une architecture pérenne. Montée
                    de version Symfony, passage à l&apos;
                    <Link href="/article/migration-symfony-architecture-hexagonale-retour-mission" className="text-primary hover:underline">architecture hexagonale</Link>
                    , séparation des responsabilités.
                  </p>
                  <p className="mt-3 max-w-3xl text-lg text-gray">
                    La migration se fait par paliers (Symfony 4 vers 5, puis
                    5 vers 6, puis 6 vers 7) en suivant les{" "}
                    <Link href="/article/guide-de-migration-dans-un-projet-symfony" className="text-primary hover:underline">guides de migration</Link>
                    {" "}officiels. Chaque palier est validé par les tests avant
                    de passer au suivant.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href="/migration-symfony"
                      className="inline-flex items-center text-primary font-semibold hover:underline"
                    >
                      Migration Symfony &rarr;
                    </Link>
                    <Link
                      href="/architecture-hexagonale-symfony"
                      className="inline-flex items-center text-primary font-semibold hover:underline"
                    >
                      Architecture hexagonale &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    5
                  </div>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-dark">
                    Maintenance applicative et pérennité
                  </h2>
                  <p className="mt-3 max-w-3xl text-lg text-gray">
                    La modernisation ne s&apos;arrête pas à la livraison. Une
                    maintenance applicative continue garantit que votre
                    application reste à jour, performante et sécurisée dans
                    la durée.
                  </p>
                  <p className="mt-3 max-w-3xl text-lg text-gray">
                    Mises à jour de sécurité, montées de version mineures,
                    surveillance des{" "}
                    <Link href="/article/cve-comprendre-les-failles-pour-mieux-se-proteger" className="text-primary hover:underline">CVE</Link>
                    , évolutions fonctionnelles : nous assurons le maintien
                    en conditions opérationnelles pour que votre investissement
                    de modernisation porte ses fruits sur le long terme.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href="/maintenance-applicative-symfony"
                      className="inline-flex items-center text-primary font-semibold hover:underline"
                    >
                      Maintenance applicative &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle subtitle="Trouvez votre point d'entrée">
              Quelle est votre situation ?
            </SectionTitle>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {situations.map((situation) => (
                <Card key={situation.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {situation.title}
                  </h3>
                  <p className="mt-2 text-gray">{situation.description}</p>
                  <p className="mt-3 text-sm font-semibold text-primary">
                    {situation.phase}
                  </p>
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
              Prêt à démarrer ?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Commencez par un diagnostic gratuit de 30 minutes. Nous analysons
              votre situation et vous orientons vers la bonne phase du parcours.
            </p>
            <Link
              href="/audit-symfony-gratuit"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
            >
              Demander mon diagnostic gratuit
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
        <RelatedLinks links={relatedLinks} className="bg-light-gray" />
        <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}
