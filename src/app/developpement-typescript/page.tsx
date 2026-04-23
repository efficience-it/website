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

const typescriptRelatedLinks: RelatedLink[] = [
  {
    title: "Développement frontend",
    description: "Nos expertises React, Vue.js et TypeScript pour vos interfaces",
    href: "/developpement-frontend",
  },
  {
    title: "Développement Node.js",
    description: "Backend JavaScript et TypeScript pour vos applications serveur",
    href: "/developpement-nodejs",
  },
  {
    title: "Développement Vue.js",
    description: "Interfaces progressives et typées avec Vue.js et TypeScript",
    href: "/developpement-vuejs",
  },
  {
    title: "TypeScript, documentation officielle",
    description: "La référence pour le langage TypeScript et son écosystème",
    href: "https://www.typescriptlang.org/",
    external: true,
  },
];

export const metadata = pageMetadata({
  title: "Développement TypeScript sur mesure : applications typées et maintenables",
  description:
    "Efficience IT développe en TypeScript sur tous ses projets frontend et Node.js. Typage statique, refactoring sûr et code maintenable sur la durée.",
  path: "/developpement-typescript",
});

const expertises = [
  {
    title: "Migration JavaScript vers TypeScript",
    description:
      "Nous migrons vos projets JavaScript existants vers TypeScript de manière progressive. Fichier par fichier, sans casser la production. Le typage strict est activé graduellement pour sécuriser le code sans bloquer les livraisons.",
  },
  {
    title: "Applications React TypeScript",
    description:
      "Interfaces réactives et typées avec React et TypeScript : composants fortement typés, hooks génériques, props validées à la compilation. Le résultat est un code frontend lisible et maintenable sur la durée.",
  },
  {
    title: "Applications Node.js TypeScript",
    description:
      "APIs et services backend développés en TypeScript avec Node.js. Le typage couvre les routes, les modèles de données et les appels externes. Les erreurs sont détectées avant le déploiement, pas en production.",
  },
  {
    title: "Configuration et outillage",
    description:
      "tsconfig adapté à votre projet, intégration ESLint et Prettier, pipelines CI/CD avec vérification de types. Nous configurons l'outillage TypeScript pour que l'équipe soit productive dès le premier jour.",
  },
];

const whyTypescript = [
  {
    number: "01",
    title: "Typage statique",
    description:
      "TypeScript détecte les erreurs de type avant l'exécution. Les bugs liés aux valeurs null, aux propriétés manquantes ou aux types incompatibles disparaissent de la production.",
  },
  {
    number: "02",
    title: "Refactoring sûr",
    description:
      "Renommer une propriété, modifier une signature de fonction, restructurer un module : le compilateur signale chaque endroit à mettre à jour. Le refactoring devient une opération fiable, pas un pari.",
  },
  {
    number: "03",
    title: "Autocomplétion et DX",
    description:
      "L'éditeur connaît la forme de chaque objet, chaque paramètre, chaque retour de fonction. L'autocomplétion est précise, la navigation dans le code est instantanée, la documentation est intégrée au type.",
  },
  {
    number: "04",
    title: "Écosystème compatible",
    description:
      "TypeScript s'intègre avec l'ensemble de l'écosystème JavaScript. Les bibliothèques populaires fournissent leurs types, et DefinitelyTyped couvre le reste. Aucun compromis sur le choix des outils.",
  },
];

const whenToChoose = [
  "Votre codebase JavaScript dépasse quelques milliers de lignes : le typage statique évite les régressions silencieuses au refactoring.",
  "Vous travaillez en équipe : TypeScript fait office de documentation vivante et accélère l'onboarding des nouveaux développeurs.",
  "Vos APIs sont stables et vous voulez partager des types entre frontend et backend pour éliminer les bugs d'intégration.",
  "Vous démarrez un nouveau projet React, Vue.js ou Node.js : TypeScript est le standard de fait depuis plusieurs années.",
];

const whenNotToChoose = [
  "Votre projet est un script jetable, un POC de quelques jours ou un prototype à valider rapidement : la friction du typage n'apporte pas de valeur.",
  "Votre équipe n'a pas la culture des langages typés et vous n'avez pas le temps d'investir dans la montée en compétence.",
  "Vous travaillez exclusivement avec des données dynamiques sans schéma stable (parsing libre, scraping ad hoc) : les types deviennent vite un fardeau.",
];

const useCases = [
  {
    title: "Migration d'une SPA React vers TypeScript",
    description:
      "Migration progressive d'une application React de 80 000 lignes en JavaScript vers TypeScript strict, fichier par fichier, sans interrompre les livraisons fonctionnelles.",
  },
  {
    title: "API Node.js typée de bout en bout",
    description:
      "API Node.js TypeScript pour une scale-up SaaS, avec génération automatique des types depuis le schéma OpenAPI et partage des types avec le frontend Vue.js.",
  },
  {
    title: "Mise en place d'un linting strict",
    description:
      "Audit et configuration de tsconfig strict, ESLint et Prettier sur un projet existant, intégration au pipeline CI pour bloquer les régressions de typage.",
  },
];

const faqItems = [
  {
    title: "Faut-il migrer tout le projet JavaScript en TypeScript d'un coup ?",
    content:
      "Non. TypeScript permet une migration progressive. Nous renommons les fichiers .js en .ts un par un, en commençant par les modules les plus critiques. Le mode allowJs permet de faire cohabiter JavaScript et TypeScript dans le même projet. Chaque fichier migré est immédiatement couvert par le typage, sans attendre la fin de la migration complète.",
  },
  {
    title: "TypeScript ralentit-il le développement ?",
    content:
      "Au contraire. Le temps investi dans les types est récupéré en débogage, en revue de code et en maintenance. Sur un projet de plus de 6 mois, le gain est mesurable : moins de bugs en production, refactoring plus rapide, onboarding des nouveaux développeurs accéléré. Le compilateur attrape les erreurs que les tests unitaires ne couvrent pas.",
  },
  {
    title: "TypeScript fonctionne-t-il avec React et Node.js ?",
    content:
      "TypeScript est le standard de fait pour les projets React et Node.js. React supporte nativement les fichiers .tsx, Next.js génère le tsconfig automatiquement, et Node.js exécute du TypeScript via ts-node ou le transpile en amont. Chez Efficience IT, chaque projet frontend et backend est développé en TypeScript.",
  },
  {
    title: "Combien de temps pour migrer une codebase JavaScript existante ?",
    content:
      "Pour une codebase de 50 000 à 100 000 lignes, comptez 2 à 4 mois de migration progressive en parallèle des livraisons fonctionnelles. Nous démarrons par les modules critiques et les types partagés (modèles de données, helpers), puis étendons la couverture fichier par fichier. Le mode allowJs garde l'application fonctionnelle pendant toute la migration.",
  },
  {
    title: "Comment garantir que TypeScript ne devient pas un frein au quotidien ?",
    content:
      "Une configuration trop laxiste rend le typage inutile, une configuration trop stricte décourage l'équipe. Nous calibrons tsconfig en fonction de la maturité de l'équipe et des contraintes du projet : strict mode activé par défaut sur les nouveaux modules, mode permissif sur le code legacy en attente de migration. Le typage doit accélérer le développement, pas le ralentir.",
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
  { name: "Développement frontend", path: "/developpement-frontend" },
  { name: "Développement TypeScript", path: "/developpement-typescript" },
]);

const service = serviceJsonLd({
  name: "Développement TypeScript sur mesure",
  description:
    "Développement d'applications typées et maintenables en TypeScript. Migration JavaScript, applications React et Node.js, configuration et outillage.",
  path: "/developpement-typescript",
});

const webPage = webPageJsonLd({
  name: "Développement TypeScript sur mesure : applications typées et maintenables",
  description:
    "Efficience IT développe en TypeScript sur tous ses projets frontend et Node.js. Typage statique, refactoring sûr et code maintenable sur la durée.",
  path: "/developpement-typescript",
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
});

export default function DeveloppementTypescript() {
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
            <Breadcrumb
              items={[
                { label: "Nos expertises", href: "/notre-expertise" },
                { label: "Développement frontend", href: "/developpement-frontend" },
                { label: "Développement TypeScript" },
              ]}
            />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Développement TypeScript personnalisé
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Développement TypeScript sur mesure : applications typées et maintenables
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre codebase JavaScript grossit, et chaque modification devient
                  un risque. Efficience IT développe en{" "}
                  <strong>TypeScript sur tous ses projets</strong>, du{" "}
                  <Link
                    href="/developpement-frontend"
                    className="text-primary hover:underline"
                  >
                    frontend React et Vue.js
                  </Link>{" "}
                  au{" "}
                  <Link
                    href="/developpement-nodejs"
                    className="text-primary hover:underline"
                  >
                    backend Node.js
                  </Link>
                  . Le typage statique sécurise le code, accélère le refactoring et
                  rend chaque projet maintenable sur la durée.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Migration JavaScript vers TypeScript, applications React typées,
                  APIs Node.js durables : nous adaptons notre approche à votre
                  contexte et à la maturité de votre codebase.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Discuter de votre projet</Button>
                  <Button href="/audit-symfony-gratuit" variant="outline">
                    Audit gratuit 30 min
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
                      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
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
              <SectionTitle>Pourquoi TypeScript</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Quatre raisons pour lesquelles TypeScript est devenu le standard
                des projets JavaScript professionnels.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {whyTypescript.map((item) => (
                  <Card key={item.number}>
                    <p className="font-display text-3xl font-bold text-primary/20">
                      {item.number}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold text-dark">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray">{item.description}</p>
                  </Card>
                ))}
              </div>
              <p className="mx-auto mt-8 max-w-3xl text-center text-gray">
                Sur un projet{" "}
                <Link
                  href="/developpement-vuejs"
                  className="text-primary hover:underline"
                >
                  Vue.js
                </Link>{" "}
                comme sur une application React, le typage statique transforme
                la manière dont l&apos;équipe travaille au quotidien.
              </p>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Nos expertises TypeScript</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Quatre domaines où notre expertise TypeScript apporte une valeur
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
                Pour comprendre comment TypeScript s&apos;intègre dans une
                architecture frontend complète, consultez notre page{" "}
                <Link
                  href="/developpement-frontend"
                  className="text-primary hover:underline"
                >
                  développement frontend
                </Link>
                .
              </p>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-12">
                <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                  TypeScript partout : frontend et backend
                </h2>
                <p className="mt-4 text-lg text-gray">
                  Chez Efficience IT, TypeScript n&apos;est pas réservé au
                  frontend. Nos{" "}
                  <Link
                    href="/developpement-nodejs"
                    className="text-primary hover:underline"
                  >
                    APIs Node.js
                  </Link>{" "}
                  sont développées en TypeScript, avec les mêmes exigences de
                  typage strict que nos interfaces React ou{" "}
                  <Link
                    href="/developpement-vuejs"
                    className="text-primary hover:underline"
                  >
                    Vue.js
                  </Link>
                  . Un seul langage typé du client au serveur, des types
                  partagés entre le frontend et le backend, et une équipe qui
                  navigue dans toute la stack sans changer de contexte.
                </p>
                <p className="mt-4 text-lg text-gray">
                  Cette cohérence réduit la surface de bugs, simplifie le
                  partage de modèles de données et accélère le développement
                  des fonctionnalités qui traversent toute l&apos;application.
                </p>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Quand choisir TypeScript</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                TypeScript apporte une vraie valeur dans la majorité des
                projets, mais il y a des contextes où la friction n&apos;en
                vaut pas la peine.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Choisir TypeScript si
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
                Trois exemples concrets d&apos;interventions TypeScript que
                nous menons régulièrement.
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
          <RelatedLinks links={typescriptRelatedLinks} />
        </FadeIn>

        <FadeIn>
          <CallToAction />
          <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}
