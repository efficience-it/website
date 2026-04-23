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

const reactRelatedLinks: RelatedLink[] = [
  {
    title: "Développement frontend",
    description: "Notre expertise frontend complète : React, Vue.js, TypeScript",
    href: "/developpement-frontend",
  },
  {
    title: "API sur mesure Symfony",
    description: "Les APIs backend qui alimentent vos interfaces React",
    href: "/api-sur-mesure-symfony",
  },
  {
    title: "Développement Node.js",
    description: "Backend JavaScript et BFF pour vos applications React",
    href: "/developpement-nodejs",
  },
  {
    title: "Quel framework JavaScript choisir",
    description: "Comparatif Node.js, React, Vue.js et Angular pour votre projet",
    href: "/article/quel-framework-javascript-choisir-node-js-react-js-vue-js-ou-angular",
  },
  {
    title: "Les bonnes pratiques des APIs REST",
    description: "Concevoir des APIs propres pour alimenter vos frontends React",
    href: "/article/api-rest-les-bonnes-pratiques",
  },
  {
    title: "React, documentation officielle",
    description: "La référence pour le développement d'interfaces React",
    href: "https://react.dev/",
    external: true,
  },
];

export const metadata = pageMetadata({
  title: "Développement React dédié : applications rapides et maintenables",
  description:
    "Efficience IT développe des applications React et TypeScript personnalisées : SPA, dashboards, backoffices. Connectées à vos APIs Symfony ou Node.js.",
  path: "/developpement-react",
});

const expertises = [
  {
    title: "SPA et dashboards",
    description:
      "Single Page Applications, dashboards métier, backoffices complexes : nous concevons des interfaces React qui gèrent des milliers d'interactions sans ralentir. State management, lazy loading, code splitting : chaque optimisation est pensée pour votre cas d'usage.",
  },
  {
    title: "Server Side Rendering avec Next.js",
    description:
      "Next.js combine la puissance de React avec le rendu serveur. SEO, performance au premier chargement, React Server Components : nous déployons le SSR quand votre projet l'exige, sans complexité inutile.",
  },
  {
    title: "Intégration API Symfony",
    description:
      "Nos développeurs maîtrisent React et Symfony. Nous concevons les APIs et les interfaces qui les consomment : authentification JWT, pagination, cache côté client, gestion d'erreurs. Zéro friction entre frontend et backend.",
  },
  {
    title: "Design systems et composants",
    description:
      "Bibliothèques de composants réutilisables, documentées avec Storybook, testées unitairement. Un design system React accélère le développement et garantit la cohérence visuelle sur l'ensemble de votre application.",
  },
];

const stack = [
  { name: "React 19", description: "Server Components et hooks avancés" },
  { name: "Next.js", description: "SSR, SSG et App Router" },
  { name: "TypeScript", description: "Typage statique sur chaque projet" },
  { name: "Tailwind CSS", description: "Design system et styling performant" },
  { name: "React Query / TanStack", description: "Cache et synchronisation serveur" },
  { name: "Vitest / Cypress", description: "Tests unitaires et end-to-end" },
  { name: "Storybook", description: "Documentation et test visuel des composants" },
];

const whenToChoose = [
  "Vous construisez une application complexe avec beaucoup d'interactions et d'états partagés : dashboards métier, backoffices, outils SaaS multi-écrans.",
  "Votre équipe a une culture JavaScript moderne, ou vous recrutez des profils frontend confirmés sur le marché.",
  "Vous avez besoin d'un écosystème mature : design systems, librairies de graphiques, cartes interactives, éditeurs riches.",
  "Le SEO et la performance au premier chargement comptent : Next.js permet de combiner React et rendu serveur.",
];

const whenNotToChoose = [
  "Votre projet est un site vitrine ou un blog : un site statique généré avec Astro ou Next.js SSG sera plus simple et plus rapide.",
  "Votre équipe backend découvre le frontend et veut progresser sans surcharge cognitive : Vue.js est plus accessible.",
  "Vous avez besoin de réactivité ponctuelle dans une application Twig ou Symfony existante : montez Vue.js composant par composant plutôt que de tout réécrire.",
  "Vos contraintes de bundle size sont extrêmes (sites publics critiques en mobile dégradé) : regardez Solid, Svelte ou Preact.",
];

const useCases = [
  {
    title: "Dashboard métier B2B",
    description:
      "Backoffice pour un éditeur SaaS avec plusieurs dizaines d'écrans, gestion fine des permissions, tables paginées et exports asynchrones. Stack React, TypeScript, React Query, Tailwind, déployée sur un backend Symfony.",
  },
  {
    title: "Application collaborative temps réel",
    description:
      "Outil de gestion de projets pour une scale-up, avec édition collaborative, présence en temps réel via WebSockets et synchronisation hors-ligne. Architecture découplée frontend React et API Symfony.",
  },
  {
    title: "Frontoffice e-commerce performant",
    description:
      "Refonte du frontoffice d'une marketplace de services professionnels avec Next.js en mode hybride SSR/SSG, pour des temps de chargement rapides et un SEO de niveau professionnel.",
  },
];

const faqItems = [
  {
    title: "Pourquoi choisir React plutôt qu'un autre framework frontend ?",
    content:
      "React domine l'écosystème frontend par la taille de sa communauté, la richesse de son écosystème et sa flexibilité. Il convient particulièrement aux applications complexes avec beaucoup d'états partagés : dashboards, backoffices, applications temps réel. Avec Next.js, il couvre aussi les besoins SEO et performance au premier chargement. Pour les projets plus simples, Vue.js peut être un meilleur choix. Notre comparatif des frameworks JavaScript détaille les critères de décision.",
  },
  {
    title: "Comment connectez-vous React à une API Symfony existante ?",
    content:
      "Nous concevons la couche d'intégration entre React et Symfony : appels API typés avec TypeScript, gestion du cache avec React Query, authentification JWT ou session, gestion optimiste des mutations. En tant qu'agence Symfony, nous intervenons aussi côté backend pour adapter les endpoints aux besoins du frontend. Le résultat : une intégration fluide, sans allers-retours inutiles entre équipes.",
  },
  {
    title: "Reprenez-vous des projets React existants ?",
    content:
      "Oui. Nous auditons le code React existant : architecture des composants, gestion d'état, couverture de tests, performances (bundle size, rendering, waterfalls réseau). Nous proposons ensuite un plan de refactoring progressif : migration vers TypeScript, modernisation des hooks, mise en place de tests, optimisation du bundle.",
  },
  {
    title: "Combien de temps pour démarrer un nouveau projet React ?",
    content:
      "Une première version livrable est généralement prête en 4 à 8 semaines, selon la complexité du périmètre. Nous démarrons par un atelier de cadrage de 2 à 3 jours pour définir l'architecture, le design system et le découpage en sprints. Le premier sprint livre l'authentification, le routing et un premier écran fonctionnel pour valider la stack et la chaîne de déploiement.",
  },
  {
    title: "Comment garantissez-vous la qualité du code React ?",
    content:
      "Chaque projet est développé en TypeScript strict, avec un linting ESLint et Prettier configurés en pre-commit. La couverture de tests combine Vitest pour l'unitaire et Cypress pour le end-to-end. Le code est revu en pair sur chaque pull request, le bundle size est mesuré à chaque build pour éviter les régressions, et Storybook documente les composants critiques. La qualité est outillée, pas espérée.",
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
  { name: "Développement React", path: "/developpement-react" },
]);

const service = serviceJsonLd({
  name: "Développement React sur mesure",
  description:
    "Conception et développement d'applications React et TypeScript adaptées : SPA, dashboards, backoffices. Connectées à vos APIs Symfony ou Node.js.",
  path: "/developpement-react",
});

const webPage = webPageJsonLd({
  name: "Développement React personnalisé : applications fluides et maintenables",
  description:
    "Efficience IT développe des applications React et TypeScript sur mesure : SPA, dashboards, backoffices. Connectées à vos APIs Symfony ou Node.js.",
  path: "/developpement-react",
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
});

export default function DeveloppementReact() {
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
                { label: "Développement frontend", href: "/developpement-frontend" },
                { label: "Développement React" },
              ]}
            />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Développement React spécialisé
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Développement React dédié : applications performantes et maintenables
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Vous avez besoin d&apos;une interface riche, réactive et
                  maintenable. Efficience IT conçoit des{" "}
                  <strong>applications React personnalisées</strong> en TypeScript,
                  connectées à vos{" "}
                  <Link
                    href="/api-sur-mesure-symfony"
                    className="text-primary hover:underline"
                  >
                    APIs Symfony
                  </Link>{" "}
                  ou{" "}
                  <Link
                    href="/developpement-nodejs"
                    className="text-primary hover:underline"
                  >
                    Node.js
                  </Link>
                  .
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  SPA, dashboards métier, backoffices, interfaces temps réel :
                  chaque{" "}
                  <Link
                    href="/developpement-web-sur-mesure"
                    className="text-primary hover:underline"
                  >
                    projet web personnalisé
                  </Link>{" "}
                  a ses contraintes, et React est souvent la réponse la plus
                  solide pour les interfaces complexes.
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
              <SectionTitle>Nos expertises React</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Quatre domaines où notre expertise React apporte une valeur
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
                Pour comparer React avec les autres options, consultez notre{" "}
                <Link
                  href="/article/quel-framework-javascript-choisir-node-js-react-js-vue-js-ou-angular"
                  className="text-primary hover:underline"
                >
                  guide comparatif des frameworks JavaScript
                </Link>{" "}
                ou découvrez notre{" "}
                <Link
                  href="/developpement-frontend"
                  className="text-primary hover:underline"
                >
                  expertise frontend complète
                </Link>
                .
              </p>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Notre stack React</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Des outils matures, adoptés par l&apos;industrie et soutenus par
                des communautés actives.
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
                  React connecté à Symfony
                </h2>
                <p className="mt-4 text-lg text-gray">
                  La majorité de nos projets React s&apos;appuient sur un
                  backend{" "}
                  <Link
                    href="/api-sur-mesure-symfony"
                    className="text-primary hover:underline"
                  >
                    API Symfony
                  </Link>
                  . Nos développeurs maîtrisent les deux côtés de la stack :
                  ils conçoivent les endpoints et les interfaces qui les
                  consomment. Cette approche{" "}
                  <strong>frontend React + backend PHP</strong> élimine les
                  allers-retours entre équipes, réduit les bugs
                  d&apos;intégration et accélère les livraisons.
                </p>
                <p className="mt-4 text-lg text-gray">
                  Authentification JWT, pagination typée, serialization
                  optimisée, cache HTTP : l&apos;intégration React-Symfony est
                  notre quotidien. Découvrez comment nous concevons les{" "}
                  <Link
                    href="/article/api-rest-les-bonnes-pratiques"
                    className="text-primary hover:underline"
                  >
                    APIs REST selon les bonnes pratiques
                  </Link>{" "}
                  pour alimenter vos interfaces.
                </p>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Quand choisir React</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                React est puissant, mais ce n&apos;est pas la bonne réponse à
                toutes les questions. Voici quand React est le bon choix, et
                quand il vaut mieux regarder ailleurs.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Choisir React si
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
                Trois exemples concrets de projets React sur lesquels nous
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
          <RelatedLinks links={reactRelatedLinks} />
        </FadeIn>

        <FadeIn>
          <CallToAction />
          <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}
