import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CallToAction from "@/components/sections/CallToAction";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Audit de code PHP : qualite, securite et performance",
  description:
    "Audit de code PHP complet par des experts : analyse statique PHPStan niveau max, dette technique, securite, performance et couverture de tests. Rapport actionnable sous 48h.",
  path: "/audit-code-php",
});

const axes = [
  {
    title: "Analyse statique PHPStan niveau max",
    description:
      "Nous executons PHPStan au niveau le plus strict pour detecter les erreurs de typage, les appels invalides et les incoherences que les tests manuels ne revelent jamais.",
  },
  {
    title: "Couverture de tests",
    description:
      "Mesure de la couverture reelle de votre suite de tests, identification des zones critiques non couvertes et evaluation de la pertinence des tests existants.",
  },
  {
    title: "Dette technique",
    description:
      "Cartographie de la dette technique : code duplique, couplage excessif, complexite cyclomatique elevee et violations des principes SOLID.",
  },
  {
    title: "Securite applicative",
    description:
      "Identification des dependances Composer vulnerables, detection des failles courantes (injection SQL, XSS, CSRF) et verification de la configuration PHP.",
  },
  {
    title: "Performance",
    description:
      "Analyse des goulots d'etranglement : requetes SQL lentes, absence de cache, boucles couteuses et consommation memoire excessive.",
  },
  {
    title: "Conventions et maintenabilite",
    description:
      "Verification du respect des standards PSR, coherence du style de code, lisibilite et facilite de prise en main par un nouveau developpeur.",
  },
];

const etapes = [
  {
    num: "1",
    title: "Prise de contexte",
    description:
      "Un echange de 30 minutes pour comprendre votre projet, vos enjeux metier et les problemes que vous rencontrez au quotidien.",
  },
  {
    num: "2",
    title: "Analyse automatisee",
    description:
      "Execution de PHPStan au niveau maximum, Rector en mode dry-run, PHP_CodeSniffer et des outils de mesure de couverture sur l'ensemble de votre base de code.",
  },
  {
    num: "3",
    title: "Revue manuelle",
    description:
      "Un developpeur senior parcourt le code critique : architecture, patterns metier, gestion des erreurs et points de securite que les outils automatises ne detectent pas.",
  },
  {
    num: "4",
    title: "Rapport et restitution",
    description:
      "Vous recevez un rapport ecrit sous 48h avec les constats, les risques priorises et un plan d'action concret. Nous restituons les resultats en visioconference.",
  },
];

const pourquoi = [
  {
    title: "PHPStan niveau max, sans compromis",
    description:
      "La majorite des projets PHP tournent PHPStan au niveau 1 ou 2. Nous l'executons au niveau maximum pour identifier les problemes que les configurations permissives laissent passer.",
  },
  {
    title: "Rector pour mesurer la modernite du code",
    description:
      "Nous utilisons Rector en mode analyse pour evaluer combien de votre code peut etre automatiquement modernise et identifier les patterns obsoletes.",
  },
  {
    title: "Un rapport actionnable, pas un PDF de 200 pages",
    description:
      "Chaque constat est associe a une recommandation concrete et priorisee. Vous savez exactement par ou commencer et pourquoi.",
  },
];

const faqItems = [
  {
    title: "Quels types de projets PHP auditez-vous ?",
    content:
      "Nous auditons tout projet PHP : applications Symfony, Laravel, frameworks maison, ou PHP natif. L'essentiel est que le code soit accessible via un depot Git. Si votre application est specifiquement sous Symfony, notre audit Symfony gratuit est un bon point de depart.",
  },
  {
    title: "Combien de temps dure un audit de code PHP ?",
    content:
      "Un audit standard prend entre 3 et 5 jours ouvres selon la taille de la base de code. Vous recevez le rapport ecrit sous 48h apres la fin de l'analyse, suivi d'une restitution en visioconference.",
  },
  {
    title: "Que contient le rapport d'audit ?",
    content:
      "Le rapport couvre six axes : analyse statique (PHPStan), couverture de tests, dette technique, securite, performance et conventions de code. Chaque constat est classe par criticite avec une recommandation d'action et le temps estime de correction.",
  },
  {
    title: "L'audit inclut-il la correction des problemes identifies ?",
    content:
      "L'audit est une phase de diagnostic independante. Si vous souhaitez que nous intervenions sur les corrections, nous etablissons un plan d'action a partir du rapport. Cette separation garantit un diagnostic objectif et sans conflit d'interet.",
  },
  {
    title: "PHPStan niveau max, est-ce vraiment utile ?",
    content:
      "Oui. Les niveaux bas de PHPStan ne detectent que les erreurs les plus evidentes. Au niveau maximum, l'outil identifie les incoherences de typage, les appels potentiellement nuls et les violations de contrat qui provoquent des bugs en production. C'est la difference entre un controle visuel et une radiographie complete.",
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
  { name: "Audit de code PHP", path: "/audit-code-php" },
]);

const service = serviceJsonLd({
  name: "Audit de code PHP",
  description:
    "Audit de code PHP complet : analyse statique PHPStan niveau max, dette technique, securite, performance et couverture de tests. Rapport actionnable avec recommandations priorisees.",
  path: "/audit-code-php",
});

const webPage = webPageJsonLd({
  name: "Audit de code PHP : qualite, securite et performance",
  description:
    "Audit de code PHP complet par des experts : analyse statique PHPStan niveau max, dette technique, securite, performance et couverture de tests. Rapport actionnable sous 48h.",
  path: "/audit-code-php",
  datePublished: "2026-03-12",
  dateModified: "2026-03-12",
});

export default function AuditCodePhp() {
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
                  Audit de code
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Audit de code PHP : qualite, securite et performance
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre application PHP grossit, les bugs se multiplient et
                  chaque modification devient risquee ? Vous soupconnez une{" "}
                  <Link
                    href="/article/la-dette-technique-faut-il-vraiment-en-avoir-peur"
                    className="text-primary hover:underline"
                  >
                    dette technique
                  </Link>{" "}
                  importante mais vous n&apos;avez pas de visibilite sur son
                  etendue reelle ?
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT realise un audit de code PHP complet avec{" "}
                  <strong>PHPStan au niveau maximum</strong>, Rector, et une
                  revue manuelle par un developpeur senior. Vous obtenez un
                  diagnostic precis et un plan d&apos;action priorise.
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
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Ce que nous auditons</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Notre audit couvre six axes complementaires pour vous donner une
              vision complete de la sante de votre code PHP.
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
              est le socle de notre audit. Decouvrez comment cet outil detecte
              les erreurs que les tests manuels ne revelent pas.
            </p>
          </Container>
        </section>

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Notre methodologie en 4 etapes</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Un processus structure pour vous livrer un diagnostic fiable et
              exploitable, quel que soit l&apos;etat de votre projet.
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
              en mode analyse pour mesurer la modernite de votre code et
              identifier les refactorisations automatisables.
            </p>
          </Container>
        </section>

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
                Nous verifions systematiquement les{" "}
                <Link
                  href="/article/cve-comprendre-les-failles-pour-mieux-se-proteger"
                  className="text-primary hover:underline"
                >
                  CVE connues
                </Link>{" "}
                dans vos dependances pour garantir que votre application ne
                repose pas sur des librairies vulnerables.
              </p>
              <p>
                Le respect des{" "}
                <Link
                  href="/article/coding-conventions"
                  className="text-primary hover:underline"
                >
                  conventions de code
                </Link>{" "}
                est un indicateur cle de la maintenabilite d&apos;un projet.
                Nous evaluons la coherence de votre codebase selon les
                standards PSR et les bonnes pratiques PHP.
              </p>
              <p>
                Pour un suivi continu de la qualite,{" "}
                <Link
                  href="/article/symfony-insight-a-quoi-ca-sert-et-comment-le-met-on-en-place"
                  className="text-primary hover:underline"
                >
                  Symfony Insight
                </Link>{" "}
                est un complement ideal a l&apos;audit ponctuel.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Besoin d&apos;un regard objectif sur votre code PHP ?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Commencez par un echange de 30 minutes, gratuit et sans
              engagement. Nous evaluons ensemble si un audit complet est
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
                , 30 minutes pour evaluer l&apos;etat de votre application
              </li>
              <li>
                <Link
                  href="/article/phpstan-2-0-niveau-10-et-nouvelles-fonctionnalites-pour-un-code-impeccable"
                  className="text-primary hover:underline"
                >
                  PHPStan 2.0 : niveau 10 et nouvelles fonctionnalites
                </Link>{" "}
                , les nouveautes de la derniere version majeure
              </li>
              <li>
                <Link
                  href="/article/phpstan-niveau-max-symfony-10-erreurs"
                  className="text-primary hover:underline"
                >
                  PHPStan niveau max sous Symfony : les 10 erreurs les plus courantes
                </Link>{" "}
                , les problemes que nous trouvons le plus souvent
              </li>
              <li>
                <Link
                  href="/modernisation-application-php"
                  className="text-primary hover:underline"
                >
                  Modernisation d&apos;application PHP
                </Link>{" "}
                , pour aller au-dela de l&apos;audit et moderniser votre code
              </li>
              <li>
                <a
                  href="https://phpstan.org/user-guide/getting-started"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Documentation officielle PHPStan
                </a>{" "}
                , guide de demarrage et reference des niveaux d&apos;analyse
              </li>
            </ul>
          </Container>
        </section>

        <CallToAction />
        <StickyMobileCta />
      </main>
    </>
  );
}
