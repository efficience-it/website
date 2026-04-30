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
import { breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd, pageGraphJsonLd } from "@/lib/structured-data";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import ProgrammingIllustration from "@/components/illustrations/ProgrammingIllustration";

const phpRelatedLinks: RelatedLink[] = [
  {
    title: "Développement web sur mesure",
    description: "Notre approche globale du développement d'applications web",
    href: "/developpement-web-sur-mesure",
  },
  {
    title: "Modernisation applicative",
    description:
      "Modernisez vos applications legacy pour gagner en maintenabilité",
    href: "/modernisation-applicative",
  },
  {
    title: "Tests automatisés PHP",
    description: "Sécurisez vos évolutions avec une couverture de tests solide",
    href: "/tests-automatises-php",
  },
  {
    title: "PHP, documentation officielle",
    description: "La référence du langage PHP et de ses fonctions natives",
    href: "https://www.php.net/",
    external: true,
  },
  {
    title: "Symfony, documentation officielle",
    description:
      "Le framework PHP de référence pour les applications web d'entreprise",
    href: "https://symfony.com/doc/current/index.html",
    external: true,
  },
];

export const metadata = pageMetadata({
  title:
    "Développement PHP sur mesure : applications web robustes et performantes",
  description:
    "Agence de développement PHP sur mesure. Efficience IT conçoit des applications web avec PHP 8, Symfony, Doctrine et les bonnes pratiques.",
  path: "/developpement-php",
});

const expertises = [
  {
    title: "Applications métier sur mesure",
    description:
      "Nous concevons des applications PHP taillées pour vos processus : CRM internes, plateformes de gestion, outils de pilotage. Chaque projet s'appuie sur Symfony et une architecture pensée pour évoluer avec vos besoins métier.",
  },
  {
    title: "Migration et modernisation PHP",
    description:
      "Votre application PHP legacy freine vos équipes. Nous la modernisons progressivement : montée de version PHP 8, migration vers Symfony, refactoring du code spaghetti en couches propres. Pas de big bang, un plan par étapes.",
  },
  {
    title: "API et intégrations",
    description:
      "APIs REST et GraphQL avec Symfony et API Platform, intégrations ERP, CRM, passerelles de paiement. Nous connectons votre application PHP à l'ensemble de votre écosystème technique.",
  },
  {
    title: "Qualité et maintenabilité du code",
    description:
      "Analyse statique avec PHPStan, refactoring automatisé avec Rector, tests unitaires et fonctionnels avec PHPUnit. Nous mettons en place les garde-fous qui garantissent un code PHP maintenable sur le long terme.",
  },
];

const stack = [
  {
    name: "PHP 8.x",
    description: "Typage strict, enums, fibers et performances natives",
  },
  {
    name: "Symfony",
    description: "Le framework PHP de référence pour l'entreprise",
  },
  {
    name: "Doctrine ORM",
    description: "Mapping objet-relationnel et migrations de base",
  },
  {
    name: "PHPStan",
    description: "Analyse statique pour détecter les bugs avant l'exécution",
  },
  {
    name: "Rector",
    description: "Refactoring et montées de version automatisés",
  },
  {
    name: "Composer",
    description: "Gestion des dépendances et autoloading PSR-4",
  },
  {
    name: "PHPUnit",
    description: "Tests unitaires, fonctionnels et couverture de code",
  },
];

const whenToChoose = [
  "Vous avez déjà une application PHP en production : moderniser sur PHP 8 et Symfony coûte bien moins qu'une réécriture complète.",
  "Votre application est riche fonctionnellement (CRM, ERP, plateforme métier) et bénéficie de la maturité de Symfony et de Doctrine.",
  "Vous voulez un écosystème mature pour les besoins courants : authentification, files d'attente Messenger, génération de PDF, intégrations tierces.",
  "Vous avez besoin de profils confirmés disponibles sur le marché : la communauté PHP/Symfony est large, en France comme à l'international.",
];

const whenNotToChoose = [
  "Vous construisez une application temps réel haute performance avec des connexions persistantes massives : Node.js ou Go seront plus pertinents.",
  "Vous avez des besoins en calcul intensif ou en traitement de données massif : Python avec son écosystème data, ou Java pour les charges JVM, sont mieux outillés.",
  "Votre équipe ne connaît ni PHP ni Symfony et vous démarrez de zéro : choisir une stack alignée avec les compétences existantes est plus rationnel.",
];

const useCases = [
  {
    title: "Plateforme métier B2B sur mesure",
    description:
      "Conception et développement d'une plateforme de gestion pour un acteur du retail B2B : pilotage des opérations, intégrations ERP, exports comptables, le tout en Symfony 7 et PostgreSQL.",
  },
  {
    title: "Modernisation d'un legacy PHP 5",
    description:
      "Reprise d'une application PHP 5.6 sans framework, montée progressive en PHP 8, introduction de Symfony composant par composant, refactoring du code spaghetti vers une architecture en couches.",
  },
  {
    title: "API headless pour une scale-up SaaS",
    description:
      "API Symfony et API Platform pour un éditeur de logiciel, alimentant un frontend React et plusieurs intégrations partenaires, avec authentification JWT et documentation OpenAPI générée.",
  },
];

const faqItems = [
  {
    title: "Pourquoi choisir PHP en 2026 pour un nouveau projet ?",
    content:
      "PHP 8 a profondément modernisé le langage : typage strict, enums, fibers, performances en forte hausse. Combiné à Symfony, PHP reste le choix le plus pragmatique pour les applications web d'entreprise. L'écosystème est mature, les développeurs PHP seniors sont disponibles et l'application reste maintenable sur la durée.",
  },
  {
    title: "Comment moderniser une application PHP legacy ?",
    content:
      "La modernisation se fait par étapes : audit du code existant, montée de version PHP, introduction progressive de Symfony, refactoring des couches métier. Des outils comme Rector automatisent une partie des migrations. L'objectif est de rendre le code maintenable sans tout réécrire.",
  },
  {
    title: "Quelle différence entre un développeur PHP junior et senior ?",
    content:
      "Un développeur PHP senior ne se contente pas de faire fonctionner le code. Il structure l'application avec une architecture propre, écrit des tests, utilise l'analyse statique, anticipe les problèmes de performance et de sécurité. Chez Efficience IT, chaque projet est mené par des développeurs PHP seniors.",
  },
  {
    title: "Combien de temps pour une première version livrable ?",
    content:
      "Pour une application PHP Symfony de taille moyenne, une première version utilisable en production est généralement livrée en 8 à 12 semaines. Nous démarrons par un sprint de cadrage qui pose l'architecture, le modèle de données et la chaîne de déploiement, puis avançons en sprints de deux semaines avec une démo et un retour à chaque cycle.",
  },
  {
    title: "Comment vous intégrez-vous à une équipe interne déjà en place ?",
    content:
      "Oui. Selon le contexte, nous intervenons en équipe autonome, en renfort d'une équipe interne, ou en mode pair programming pour faire monter vos développeurs en compétence. Le mode de collaboration est défini en début de mission et peut évoluer selon vos besoins, avec des rituels d'équipe partagés (daily, revue de sprint, rétro).",
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
  { name: "Développement PHP", path: "/developpement-php" },
]);

const service = serviceJsonLd({
  name: "Développement PHP sur mesure",
  description:
    "Conception et développement d'applications web PHP sur mesure avec PHP 8, Symfony, Doctrine et les meilleures pratiques d'architecture logicielle.",
  path: "/developpement-php",
  mainTech: ["php","symfony"],
});

const webPage = webPageJsonLd({
  name: "Développement PHP sur mesure : applications web robustes et performantes",
  description:
    "Agence de développement PHP sur mesure. Efficience IT conçoit des applications web avec PHP 8, Symfony, Doctrine et les bonnes pratiques.",
  path: "/developpement-php",
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
});

export default function DeveloppementPhp() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraphJsonLd(breadcrumb, service, faqJsonLd, webPage)) }} />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <Breadcrumb
              items={[
                { label: "Nos expertises", href: "/notre-expertise" },
                { label: "Développement PHP" },
              ]}
            />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Agence PHP sur mesure
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Développement PHP sur mesure : applications web robustes et
                  performantes
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre application PHP vieillit mal, ou vous partez de zéro.
                  Efficience IT est une{" "}
                  <strong>agence de développement PHP sur mesure</strong> qui
                  conçoit des applications web robustes avec PHP 8, Symfony et
                  Doctrine. Chaque projet est mené par des{" "}
                  <strong>développeurs PHP seniors</strong> qui maîtrisent
                  l&apos;architecture logicielle autant que le framework.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Applications métier,{" "}
                  <Link
                    href="/modernisation-applicative"
                    className="text-primary hover:underline"
                  >
                    modernisation d&apos;applications legacy
                  </Link>
                  , APIs,{" "}
                  <Link
                    href="/developpement-web-sur-mesure"
                    className="text-primary hover:underline"
                  >
                    développement web sur mesure
                  </Link>{" "}
                  : nous intervenons comme prestataire PHP de confiance sur vos
                  projets critiques.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Discuter de votre projet</Button>
                  <Button href="/audit-symfony-gratuit" variant="outline">
                    Audit gratuit 30 min
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <ProgrammingIllustration className="h-96 w-full text-primary" />
              </div>
            </div>
          </Container>
        </section>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>Nos expertises PHP</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Quatre domaines où notre expertise PHP apporte une valeur
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
                Pour aller plus loin sur la qualité,{" "}
                <Link
                  href="/article/comment-phpstan-peut-vous-aider-a-ameliorer-la-qualite-de-votre-code-php"
                  className="text-primary hover:underline"
                >
                  découvrez comment PHPStan améliore la qualité de votre code
                  PHP
                </Link>{" "}
                et pourquoi l&apos;
                <Link
                  href="/audit-code-php"
                  className="text-primary hover:underline"
                >
                  audit de code PHP
                </Link>{" "}
                est la première étape de tout refactoring PHP sérieux.
              </p>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Notre stack PHP</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Des outils matures, éprouvés en production et soutenus par des
                communautés actives.
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
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-12">
                <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                  PHP et Symfony : un duo éprouvé
                </h2>
                <p className="mt-4 text-lg text-gray">
                  PHP seul ne suffit pas. C&apos;est l&apos;association de PHP 8
                  avec Symfony qui produit des applications d&apos;entreprise
                  maintenables sur le long terme. Symfony impose une structure,
                  une gestion des dépendances propre et des conventions que vos
                  équipes peuvent suivre sans documentation interne de 200
                  pages.
                </p>
                <p className="mt-4 text-lg text-gray">
                  Chez Efficience IT, chaque{" "}
                  <Link
                    href="/developpement-web-sur-mesure"
                    className="text-primary hover:underline"
                  >
                    projet de développement web sur mesure
                  </Link>{" "}
                  s&apos;appuie sur cette base. Et quand il faut reprendre un
                  existant, notre démarche de{" "}
                  <Link
                    href="/modernisation-applicative"
                    className="text-primary hover:underline"
                  >
                    modernisation applicative
                  </Link>{" "}
                  permet de migrer progressivement vers Symfony sans interrompre
                  la production. PHP 9 approche, et{" "}
                  <Link
                    href="/article/php-9-0-devoile-ce-que-vous-devez-savoir-avant-la-sortie"
                    className="text-primary hover:underline"
                  >
                    les nouveautés de PHP 9.0
                  </Link>{" "}
                  renforcent encore la pertinence de cette stack.
                </p>
                <p className="mt-4 text-lg text-gray">
                  Pour les projets qui nécessitent une{" "}
                  <Link
                    href="/migration-symfony"
                    className="text-primary hover:underline"
                  >
                    migration Symfony
                  </Link>{" "}
                  ou la mise en place de{" "}
                  <Link
                    href="/tests-automatises-php"
                    className="text-primary hover:underline"
                  >
                    tests automatisés PHP
                  </Link>
                  , nous accompagnons vos équipes de l&apos;audit initial
                  jusqu&apos;à la mise en production.
                </p>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Quand choisir PHP</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                PHP est un excellent choix pour la majorité des applications
                web métier, mais il y a des contextes où une autre stack sera
                plus pertinente.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Choisir PHP si
                  </h3>
                  <ul className="mt-4 space-y-3 text-gray">
                    {whenToChoose.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Regarder ailleurs si
                  </h3>
                  <ul className="mt-4 space-y-3 text-gray">
                    {whenNotToChoose.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>Cas d&apos;usage typiques</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Trois exemples concrets de projets PHP sur lesquels nous
                intervenons régulièrement.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {useCases.map((useCase) => (
                  <Card key={useCase.title}>
                    <h3 className="font-display text-lg font-bold text-dark">
                      {useCase.title}
                    </h3>
                    <p className="mt-2 text-gray">{useCase.description}</p>
                  </Card>
                ))}
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
          <RelatedLinks links={phpRelatedLinks} />
        </FadeIn>

        <FadeIn>
          <CallToAction />
          <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}
