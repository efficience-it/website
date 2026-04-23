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

const vuejsRelatedLinks: RelatedLink[] = [
  {
    title: "Développement frontend",
    description: "Notre expertise React, Vue.js et TypeScript pour vos interfaces",
    href: "/developpement-frontend",
  },
  {
    title: "API sur mesure Symfony",
    description: "Les APIs backend qui alimentent vos interfaces Vue.js",
    href: "/api-sur-mesure-symfony",
  },
  {
    title: "Quel framework JavaScript choisir",
    description: "Comparatif Node.js, React, Vue.js et Angular pour votre projet",
    href: "/article/quel-framework-javascript-choisir-node-js-react-js-vue-js-ou-angular",
  },
  {
    title: "Déployer Nuxt.js avec GitLab CI",
    description: "Pipeline CI/CD pour vos applications Nuxt avec S3 et CloudFront",
    href: "/article/deployer-nuxtjs-avec-gitlab-ci-s3-et-cloudfront",
  },
  {
    title: "Vue.js, documentation officielle",
    description: "Le framework JavaScript progressif pour construire des interfaces",
    href: "https://vuejs.org/",
    external: true,
  },
];

export const metadata = pageMetadata({
  title: "Développement Vue.js sur mesure : interfaces réactives et progressives",
  description:
    "Efficience IT développe des applications Vue.js et Nuxt sur mesure. Interfaces légères, intégration Symfony native et montée en charge progressive.",
  path: "/developpement-vuejs",
});

const expertises = [
  {
    title: "Applications Vue.js réactives",
    description:
      "Interfaces fluides et performantes avec Vue.js 3 et la Composition API. Single Page Applications, dashboards métier, backoffices : nous exploitons la réactivité fine de Vue.js pour créer des expériences utilisateur rapides et maintenables.",
  },
  {
    title: "SSR avec Nuxt",
    description:
      "Nuxt 3 apporte le Server Side Rendering, la génération statique et le rendu hybride à vos applications Vue.js. Idéal pour les projets avec des enjeux SEO ou de performance au premier chargement, sans sacrifier l'interactivité côté client.",
  },
  {
    title: "Intégration Symfony",
    description:
      "Vue.js s'intègre naturellement avec Symfony via Webpack Encore ou Vite. Nous connectons vos interfaces Vue.js à des APIs Symfony ou API Platform, avec une gestion propre de l'authentification, de la sérialisation et du cache.",
  },
  {
    title: "Migration progressive",
    description:
      "Vue.js excelle dans les migrations progressives. Vous pouvez intégrer Vue.js composant par composant dans une application Twig existante, sans réécrire tout le frontend d'un coup. C'est l'approche la moins risquée pour moderniser une interface.",
  },
];

const stack = [
  { name: "Vue.js 3", description: "Composition API et réactivité fine" },
  { name: "Nuxt 3", description: "SSR, SSG et rendu hybride" },
  { name: "TypeScript", description: "Typage statique sur chaque projet" },
  { name: "Pinia", description: "State management léger et typé" },
  { name: "Tailwind CSS", description: "Design system et styling performant" },
  { name: "Vitest / Cypress", description: "Tests unitaires et end-to-end" },
];

const whenToChoose = [
  "Vous voulez intégrer progressivement de la réactivité dans une application Symfony ou Twig existante, sans tout réécrire.",
  "Votre équipe backend monte en compétence sur le frontend : la courbe d'apprentissage de Vue.js est nettement plus douce que celle de React.",
  "Vous cherchez un framework opinioné avec un cadre clair (routing, state, build) plutôt qu'un puzzle d'outils à assembler.",
  "Le SEO compte : Nuxt apporte SSR, génération statique et rendu hybride avec une configuration minimale.",
];

const whenNotToChoose = [
  "Votre projet vise un marché où les profils Vue.js sont rares à recruter : React reste plus liquide sur le marché du travail.",
  "Vous avez besoin de l'écosystème React Native pour partager du code entre web et mobile natif.",
  "L'application est extrêmement complexe avec un état partagé énorme : l'écosystème React (Redux, Zustand, Jotai) est plus fourni en patterns avancés.",
];

const useCases = [
  {
    title: "Modernisation d'un backoffice Symfony",
    description:
      "Ajout progressif de Vue.js dans un backoffice Twig pour rendre certains écrans interactifs (filtres, tableaux dynamiques, éditeurs) sans réécrire l'ensemble de l'application.",
  },
  {
    title: "Application Nuxt full SSR",
    description:
      "Site éditorial pour un média B2B avec Nuxt 3 en SSR, génération statique des articles, intégration avec une API headless Symfony et déploiement automatisé sur S3 et CloudFront.",
  },
  {
    title: "Backoffice Vue.js dédié",
    description:
      "SPA Vue.js 3 avec Composition API et Pinia pour un éditeur de logiciel, gestion fine des permissions, intégration à un backend Symfony API Platform existant.",
  },
];

const faqItems = [
  {
    title: "Pourquoi choisir Vue.js plutôt qu'un autre framework ?",
    content:
      "Vue.js se distingue par sa courbe d'apprentissage rapide, sa documentation exemplaire et sa capacité à s'intégrer progressivement dans un projet existant. Contrairement à React qui impose son écosystème, Vue.js fournit un cadre complet dès l'installation : routing, state management, build tooling. C'est le choix naturel quand votre équipe backend Symfony veut monter rapidement sur le frontend.",
  },
  {
    title: "Vue.js peut-il se connecter à une API Symfony ?",
    content:
      "C'est l'un des cas d'usage les plus courants. Vue.js consomme des APIs REST ou GraphQL exposées par Symfony ou API Platform. Nous concevons les deux côtés de la stack ensemble : sérialisation, pagination, filtres, authentification JWT ou session. Symfony Webpack Encore et Vite permettent aussi d'intégrer Vue.js directement dans vos templates Twig.",
  },
  {
    title: "Peut-on migrer une application jQuery ou Twig vers Vue.js ?",
    content:
      "Oui, et c'est précisément la force de Vue.js. Vous pouvez monter un composant Vue.js sur une portion de page Twig existante, puis étendre progressivement la couverture. Pas de big bang, pas de réécriture complète. Nous accompagnons cette migration composant par composant, en maintenant la stabilité de l'application à chaque étape.",
  },
  {
    title: "Combien de temps pour livrer une première version Vue.js ?",
    content:
      "Pour une SPA Vue.js de taille moyenne, une première version utilisable est généralement livrée en 6 à 8 semaines. Pour une intégration progressive de composants Vue.js dans une application Twig existante, les premiers écrans réactifs peuvent être livrés en 2 à 3 semaines. Tout dépend du périmètre fonctionnel et de la maturité de l'API backend.",
  },
  {
    title: "Quels outils utilisez-vous pour garantir la qualité du code Vue.js ?",
    content:
      "Chaque projet est développé en TypeScript avec un linting ESLint et Prettier configurés en pre-commit. Les composants critiques sont couverts par Vitest pour les tests unitaires et Cypress pour le end-to-end. Pinia gère l'état global avec un typage strict, et le bundle size est mesuré à chaque build pour éviter les régressions de performance.",
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
  { name: "Développement Vue.js", path: "/developpement-vuejs" },
]);

const service = serviceJsonLd({
  name: "Développement Vue.js sur mesure",
  description:
    "Conception et développement d'applications Vue.js et Nuxt sur mesure. Interfaces légères, intégration Symfony native et montée en charge progressive.",
  path: "/developpement-vuejs",
});

const webPage = webPageJsonLd({
  name: "Développement Vue.js sur mesure : interfaces réactives et progressives",
  description:
    "Efficience IT développe des applications Vue.js et Nuxt sur mesure. Interfaces légères, intégration Symfony native et montée en charge progressive.",
  path: "/developpement-vuejs",
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
});

export default function DeveloppementVuejs() {
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
                { label: "Développement Vue.js" },
              ]}
            />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Développement Vue.js personnalisé
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Développement Vue.js adapté à vos besoins : interfaces réactives et progressives
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Vue.js est le framework JavaScript le plus naturel pour les
                  équipes Symfony. Efficience IT conçoit des{" "}
                  <strong>applications Vue.js performantes et maintenables</strong>,
                  connectées à vos{" "}
                  <Link
                    href="/api-sur-mesure-symfony"
                    className="text-primary hover:underline"
                  >
                    APIs Symfony
                  </Link>{" "}
                  existantes ou à construire.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Interfaces réactives, rendu serveur avec Nuxt, migration
                  progressive depuis Twig : nous adaptons la stack Vue.js à
                  votre contexte technique et à vos objectifs métier.
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
                      d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
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
              <SectionTitle>Nos expertises Vue.js</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Quatre domaines où notre expertise Vue.js apporte une valeur
                concrète à vos projets{" "}
                <Link
                  href="/developpement-frontend"
                  className="text-primary hover:underline"
                >
                  frontend
                </Link>
                .
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
                Pour comparer Vue.js avec React et Angular, consultez notre{" "}
                <Link
                  href="/article/quel-framework-javascript-choisir-node-js-react-js-vue-js-ou-angular"
                  className="text-primary hover:underline"
                >
                  guide comparatif des frameworks JavaScript
                </Link>
                .
              </p>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Notre stack Vue.js</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Des outils matures et bien intégrés, choisis pour leur
                fiabilité en production.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                  Vue.js et Symfony : intégration naturelle
                </h2>
                <p className="mt-4 text-lg text-gray">
                  Vue.js a été conçu pour s&apos;intégrer progressivement dans
                  une application existante. Avec Symfony, cette intégration est
                  encore plus fluide : Webpack Encore et Vite supportent Vue.js
                  nativement, et la Composition API se marie parfaitement avec
                  les APIs exposées par{" "}
                  <Link
                    href="/api-sur-mesure-symfony"
                    className="text-primary hover:underline"
                  >
                    API Platform
                  </Link>
                  .
                </p>
                <p className="mt-4 text-lg text-gray">
                  Que vous partiez d&apos;une application Twig monolithique ou
                  d&apos;un{" "}
                  <Link
                    href="/developpement-web-sur-mesure"
                    className="text-primary hover:underline"
                  >
                    projet web sur mesure
                  </Link>{" "}
                  en architecture découplée, Vue.js s&apos;adapte à votre
                  rythme. Pas de réécriture complète, pas de changement
                  d&apos;infrastructure : vous ajoutez de la réactivité là où
                  elle apporte le plus de valeur.
                </p>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Quand choisir Vue.js</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Vue.js brille dans certains contextes et reste discutable dans
                d&apos;autres. Voici comment trancher.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Choisir Vue.js si
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
                Trois exemples concrets de projets Vue.js sur lesquels nous
                intervenons.
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
          <RelatedLinks links={vuejsRelatedLinks} />
        </FadeIn>

        <FadeIn>
          <CallToAction />
          <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}
