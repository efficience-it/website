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

export const metadata = pageMetadata({
  title: "Audit de code PHP – Rapport détaillé & plan d'action",
  description:
    "Audit technique de votre code PHP : analyse statique PHPStan niveau max, revue par un développeur senior, rapport détaillé avec plan d'action. Sous 48h.",
  path: "/audit-code-php",
});

const axes = [
  {
    title: "Analyse statique PHPStan niveau max",
    description:
      "Nous exécutons PHPStan au niveau le plus strict pour détecter les erreurs de typage, les appels invalides et les incohérences que les tests manuels ne révèlent jamais.",
  },
  {
    title: "Couverture de tests",
    description:
      "Mesure de la couverture réelle de votre suite de tests, identification des zones critiques non couvertes et évaluation de la pertinence des tests existants.",
  },
  {
    title: "Dette technique",
    description:
      "Cartographie de la dette technique : code dupliqué, couplage excessif, complexité cyclomatique élevée et violations des principes SOLID.",
  },
  {
    title: "Sécurité applicative",
    description:
      "Identification des dépendances Composer vulnérables, détection des failles courantes (injection SQL, XSS, CSRF) et vérification de la configuration PHP.",
  },
  {
    title: "Performance",
    description:
      "Analyse des goulots d'étranglement : requêtes SQL lentes, absence de cache, boucles coûteuses et consommation mémoire excessive.",
  },
  {
    title: "Conventions et maintenabilité",
    description:
      "Vérification du respect des standards PSR, cohérence du style de code, lisibilité et facilité de prise en main par un nouveau développeur.",
  },
];

const etapes = [
  {
    num: "1",
    title: "Prise de contexte",
    description:
      "Un échange de 30 minutes pour comprendre votre projet, vos enjeux métier et les problèmes que vous rencontrez au quotidien.",
  },
  {
    num: "2",
    title: "Analyse automatisée",
    description:
      "Exécution de PHPStan au niveau maximum, Rector en mode dry-run, PHP_CodeSniffer et des outils de mesure de couverture sur l'ensemble de votre base de code.",
  },
  {
    num: "3",
    title: "Revue manuelle",
    description:
      "Un développeur senior parcourt le code critique : architecture, patterns métier, gestion des erreurs et points de sécurité que les outils automatisés ne détectent pas.",
  },
  {
    num: "4",
    title: "Rapport et restitution",
    description:
      "Vous recevez un rapport écrit sous 48h avec les constats, les risques priorisés et un plan d'action concret. Nous restituons les résultats en visioconférence.",
  },
];

const pourquoi = [
  {
    title: "PHPStan niveau max, sans compromis",
    description:
      "La majorité des projets PHP tournent PHPStan au niveau 1 ou 2. Nous l'exécutons au niveau maximum pour identifier les problèmes que les configurations permissives laissent passer.",
  },
  {
    title: "Rector pour mesurer la modernité du code",
    description:
      "Nous utilisons Rector en mode analyse pour évaluer combien de votre code peut être automatiquement modernisé et identifier les patterns obsolètes.",
  },
  {
    title: "Un rapport actionnable, pas un PDF de 200 pages",
    description:
      "Chaque constat est associé à une recommandation concrète et priorisée. Vous savez exactement par où commencer et pourquoi.",
  },
];

const faqItems = [
  {
    title: "Quels types de projets PHP auditez-vous ?",
    content:
      "Nous auditons tout projet PHP : applications Symfony, Laravel, frameworks maison, ou PHP natif. L'essentiel est que le code soit accessible via un dépôt Git. Si votre application est spécifiquement sous Symfony, notre audit Symfony gratuit est un bon point de départ.",
  },
  {
    title: "Combien de temps dure un audit de code PHP ?",
    content:
      "Un audit standard prend entre 3 et 5 jours ouvrés selon la taille de la base de code. Vous recevez le rapport écrit sous 48h après la fin de l'analyse, suivi d'une restitution en visioconférence.",
  },
  {
    title: "Que contient le rapport d'audit ?",
    content:
      "Le rapport couvre six axes : analyse statique (PHPStan), couverture de tests, dette technique, sécurité, performance et conventions de code. Chaque constat est classé par criticité avec une recommandation d'action et le temps estimé de correction.",
  },
  {
    title: "L'audit inclut-il la correction des problèmes identifiés ?",
    content:
      "L'audit est une phase de diagnostic indépendante. Si vous souhaitez que nous intervenions sur les corrections, nous établissons un plan d'action à partir du rapport. Cette séparation garantit un diagnostic objectif et sans conflit d'intérêt.",
  },
  {
    title: "PHPStan niveau max, est-ce vraiment utile ?",
    content:
      "Oui. Les niveaux bas de PHPStan ne détectent que les erreurs les plus évidentes. Au niveau maximum, l'outil identifie les incohérences de typage, les appels potentiellement nuls et les violations de contrat qui provoquent des bugs en production. C'est la différence entre un contrôle visuel et une radiographie complète.",
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
  { name: "Audit technique approfondi de code PHP", path: "/audit-code-php" },
]);

const service = serviceJsonLd({
  name: "Audit technique approfondi de code PHP",
  description:
    "Audit technique approfondi de votre code PHP : analyse statique PHPStan niveau max, revue manuelle, rapport détaillé avec plan d'action priorisé et recommandations concrètement actionnables.",
  path: "/audit-code-php",
});

const webPage = webPageJsonLd({
  name: "Audit technique approfondi de code PHP : rapport détaillé et plan d'action",
  description:
    "Audit technique de votre code PHP : analyse statique PHPStan niveau max, revue par un développeur senior, rapport détaillé avec plan d'action. Sous 48h.",
  path: "/audit-code-php",
  datePublished: "2026-03-12",
  dateModified: "2026-03-12",
});

const auditRelatedLinks: RelatedLink[] = [
  { title: "Modernisation applicative", description: "première étape du parcours de modernisation", href: "/modernisation-applicative" },
  { title: "Audit Symfony gratuit", description: "30 minutes pour évaluer l'état de votre application", href: "/audit-symfony-gratuit" },
  { title: "PHPStan 2.0 : niveau 10 et nouvelles fonctionnalités", description: "les nouveautés de la dernière version majeure", href: "/article/phpstan-2-0-niveau-10-et-nouvelles-fonctionnalites-pour-un-code-impeccable" },
  { title: "PHPStan niveau max sous Symfony : les 10 erreurs les plus courantes", description: "les problèmes que nous trouvons le plus souvent", href: "/article/phpstan-niveau-max-symfony-10-erreurs" },
  { title: "Modernisation d'application PHP", description: "pour aller au-delà de l'audit et moderniser votre code", href: "/modernisation-application-php" },
  { title: "Documentation officielle PHPStan", description: "guide de démarrage et référence des niveaux d'analyse", href: "https://phpstan.org/user-guide/getting-started", external: true },
];

export default function AuditCodePhp() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraphJsonLd(breadcrumb, service, faqJsonLd, webPage)) }} />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <Breadcrumb items={[{ label: "Modernisation applicative", href: "/modernisation-applicative" }, { label: "Audit technique de code PHP" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Audit technique approfondi
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Audit technique approfondi de code PHP : rapport détaillé et plan d&apos;action
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre application PHP grossit, les bugs se multiplient et
                  chaque modification devient risquée ? Vous soupçonnez une{" "}
                  <Link
                    href="/article/la-dette-technique-faut-il-vraiment-en-avoir-peur"
                    className="text-primary hover:underline"
                  >
                    dette technique
                  </Link>{" "}
                  importante mais vous n&apos;avez pas de visibilité sur son
                  étendue réelle ?
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT réalise un audit de code PHP complet avec{" "}
                  <strong>PHPStan au niveau maximum</strong>, Rector, et une
                  revue manuelle par un développeur senior. Vous obtenez un
                  diagnostic précis et un plan d&apos;action priorisé.
                </p>
                <p className="mt-6 text-lg font-semibold text-dark">
                  Un premier échange de 30 minutes, gratuit et sans engagement.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="/audit-symfony-gratuit">
                    Commencer par un diagnostic gratuit
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
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
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
            <SectionTitle>Ce que nous auditons</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Notre audit couvre six axes complémentaires pour vous donner une
              vision complète de la santé de votre code PHP.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {axes.map((axe) => (
                <Card key={axe.title}>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 text-primary">&#10003;</span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-dark">
                        {axe.title}
                      </h3>
                      <p className="mt-2 text-gray">{axe.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <p className="mt-10 text-center text-lg text-gray">
              L&apos;analyse statique avec{" "}
              <Link
                href="/article/comment-phpstan-peut-vous-aider-a-ameliorer-la-qualite-de-votre-code-php"
                className="text-primary hover:underline"
              >
                PHPStan
              </Link>{" "}
              est le socle de notre audit. Découvrez comment cet outil détecte
              les erreurs que les tests manuels ne révèlent pas.
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Notre méthodologie en 4 étapes</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Un processus structuré pour vous livrer un diagnostic fiable et
              exploitable, quel que soit l&apos;état de votre projet.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              Nous utilisons{" "}
              <Link
                href="/article/rector-et-ses-pouvoirs-maitrisez-levolution-de-votre-code-symfony"
                className="text-primary hover:underline"
              >
                Rector
              </Link>{" "}
              en mode analyse pour mesurer la modernité de votre code et
              identifier les refactorisations automatisables.
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Pourquoi choisir Efficience IT</SectionTitle>
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
                Nous vérifions systématiquement les{" "}
                <Link
                  href="/article/cve-comprendre-les-failles-pour-mieux-se-proteger"
                  className="text-primary hover:underline"
                >
                  CVE connues
                </Link>{" "}
                dans vos dépendances pour garantir que votre application ne
                repose pas sur des bibliothèques vulnérables.
                L&apos;audit inclut aussi une évaluation de votre couverture de{" "}
                <Link
                  href="/tests-automatises-php"
                  className="text-primary hover:underline"
                >
                  tests automatisés
                </Link>{" "}
                et de la conformité de votre code aux principes d&apos;
                <Link
                  href="/architecture-hexagonale-symfony"
                  className="text-primary hover:underline"
                >
                  architecture hexagonale
                </Link>
                .
              </p>
              <p>
                Pour un premier diagnostic rapide et gratuit, commencez par
                notre{" "}
                <Link
                  href="/audit-symfony-gratuit"
                  className="text-primary hover:underline"
                >
                  audit Symfony gratuit de 30 minutes
                </Link>
                . Si un diagnostic approfondi est nécessaire, nous enchaînons
                avec l&apos;audit complet.
              </p>
              <p>
                Le respect des{" "}
                <Link
                  href="/article/coding-conventions"
                  className="text-primary hover:underline"
                >
                  conventions de code
                </Link>{" "}
                est un indicateur clé de la maintenabilité d&apos;un projet.
                Nous évaluons la cohérence de votre codebase selon les
                standards PSR et les bonnes pratiques PHP.
              </p>
              <p>
                Pour un suivi continu de la qualité,{" "}
                <Link
                  href="/article/symfony-insight-a-quoi-ca-sert-et-comment-le-met-on-en-place"
                  className="text-primary hover:underline"
                >
                  Symfony Insight
                </Link>{" "}
                est un complément idéal à l&apos;audit ponctuel.
              </p>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Besoin d&apos;un regard objectif sur votre code PHP ?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Commencez par un échange de 30 minutes, gratuit et sans
              engagement. Nous évaluons ensemble si un audit complet est
              pertinent pour votre situation.
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
        <RelatedLinks links={auditRelatedLinks} className="bg-light-gray" />
        </FadeIn>

        <FadeIn>
        <CallToAction />
        <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}
