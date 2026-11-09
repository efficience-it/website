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
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd, pageGraphJsonLd } from "@/lib/structured-data";
import LastUpdated from "@/components/ui/LastUpdated";

export const metadata = pageMetadata({
  title: "GEO : optimisez votre visibilité dans les moteurs IA",
  description:
    "Generative Engine Optimization (GEO) : rendez votre contenu citable par ChatGPT, Perplexity et les AI Overviews de Google. Passages clairs et données structurées valides.",
  path: "/geo-optimisation-ia",
});

const techniques = [
  {
    title: "Données structurées avancées",
    description:
      "Nous implémentons des schémas valides (TechArticle, Organization, BreadcrumbList, FAQPage quand la page contient une vraie FAQ) qui reflètent le contenu visible et aident les moteurs à identifier clairement vos entités.",
  },
  {
    title: "Fichier llms.txt",
    description:
      "Nous pouvons créer un fichier llms.txt à la racine de votre site. Ce fichier facultatif est lu par certains outils et assistants, il résume votre activité et vos contenus clés. Il n'a aucun effet sur Google et ne sert pas à indexer vos pages.",
  },
  {
    title: "Optimisation pour les AI Overviews",
    description:
      "Nous structurons vos contenus pour qu'ils puissent être repris dans les AI Overviews et AI Mode de Google : réponses directes, passages autonomes, listes, tableaux et définitions claires. Google ne demande aucun balisage spécifique pour ces fonctionnalités.",
  },
  {
    title: "Contenu cité par les LLM",
    description:
      "Nous reformulons et enrichissons vos pages pour augmenter les chances d'être cités par ChatGPT, Perplexity, Gemini et les autres moteurs conversationnels. Chaque passage est rédigé pour être compréhensible seul, sans garantie de citation.",
  },
  {
    title: "Audit de visibilité IA",
    description:
      "Nous analysons votre présence actuelle dans les réponses des principaux moteurs IA et identifions les opportunités manquées : requêtes où vos concurrents apparaissent et pas vous.",
  },
  {
    title: "Suivi et mesure",
    description:
      "Nous relevons périodiquement, sur un panel de requêtes défini avec vous, si vos pages sont citées, et nous analysons les accès des robots IA dans vos logs et le trafic référent. Ces mesures restent indicatives : les moteurs IA ne publient pas de statistiques officielles de citation.",
  },
];

const livrables = [
  {
    title: "Audit de visibilité IA",
    description:
      "Un rapport complet de votre présence dans les réponses de ChatGPT, Perplexity, Gemini et Google AI Overviews, avec les requêtes clés de votre secteur.",
  },
  {
    title: "Implémentation technique",
    description:
      "Mise en place et validation des données structurées (TechArticle, Organization, BreadcrumbList), création optionnelle du fichier llms.txt et amélioration du balisage sémantique.",
  },
  {
    title: "Optimisation du contenu",
    description:
      "Reformulation et structuration de vos pages clés pour augmenter leurs chances d'être citées par les moteurs IA, sans sacrifier le référencement classique.",
  },
  {
    title: "Suivi périodique",
    description:
      "Un point régulier sur un panel de requêtes défini ensemble, pour observer l'évolution de vos citations IA dans le temps. Les résultats sont indicatifs.",
  },
];

const seoGeoRows = [
  {
    criterion: "Objectif",
    seo: "Positionner vos pages dans une liste de résultats",
    geo: "Faire reprendre vos contenus dans une réponse générée",
  },
  {
    criterion: "Résultat affiché",
    seo: "Un lien et un extrait",
    geo: "Une synthèse qui cite ses sources",
  },
  {
    criterion: "Ce qui compte",
    seo: "Contenu utile, accessibilité technique, autorité, liens",
    geo: "Les mêmes bases, avec des passages autonomes et des entités claires",
  },
  {
    criterion: "Données structurées",
    seo: "Valides et conformes au contenu visible",
    geo: "Idem, sans effet garanti sur les réponses IA",
  },
  {
    criterion: "llms.txt",
    seo: "Sans effet sur Google",
    geo: "Facultatif, lu par certains outils",
  },
  {
    criterion: "Mesure",
    seo: "Search Console, positions, trafic organique",
    geo: "Relevés périodiques, logs des robots IA, trafic référent",
  },
];

const faqItems = [
  {
    title: "Quelle est la différence entre le SEO classique et le GEO ?",
    content:
      "Le SEO classique optimise votre site pour apparaître dans les résultats de recherche traditionnels de Google. Le GEO (Generative Engine Optimization) optimise votre contenu pour être cité dans les réponses générées par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. Les deux approches sont complémentaires : un bon GEO s'appuie sur les fondamentaux du SEO, et Google précise que ses fonctionnalités IA reposent sur les mêmes bases que la recherche.",
  },
  {
    title: "Qu'est-ce qu'un fichier llms.txt et à quoi sert-il ?",
    content:
      "Le fichier llms.txt est une proposition de format Markdown, facultative, qui résume votre site pour les outils et assistants IA qui choisissent de le lire. Contrairement à un robots.txt, il ne contrôle ni l'accès ni l'indexation. Google ne l'utilise pas pour la recherche et aucun grand moteur ne s'en sert pour indexer : c'est un fichier d'orientation, pas un levier de classement.",
  },
  {
    title: "Quels types de données structurées utilisez-vous pour le GEO ?",
    content:
      "Nous implémentons principalement TechArticle (contenus techniques), Organization, BreadcrumbList et FAQPage lorsque la page contient réellement une FAQ. Le balisage doit être valide et refléter le contenu visible : il aide à identifier les entités, sans garantie d'influence sur les réponses IA. Nous n'utilisons pas HowTo, dont Google a retiré les résultats enrichis, ni SpeakableSpecification, limité aux actualités.",
  },
  {
    title: "Est-ce que le GEO remplace le SEO traditionnel ?",
    content:
      "Non. Le GEO est un complément du SEO, pas un remplacement. Les moteurs IA s'appuient largement sur les signaux SEO classiques (autorité du domaine, qualité du contenu, balisage sémantique) pour sélectionner les sources à citer. Une stratégie GEO efficace renforce votre SEO existant tout en ouvrant un nouveau canal de visibilité.",
  },
  {
    title: "Comment mesurez-vous les résultats d'une stratégie GEO ?",
    content:
      "La mesure reste indicative, car les moteurs IA ne fournissent pas de statistiques officielles. Nous combinons des relevés périodiques sur un panel de requêtes, l'analyse des accès des robots IA dans vos logs serveur et le trafic référent depuis les moteurs conversationnels, puis nous comparons l'évolution sur les mêmes requêtes.",
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
  { name: "GEO - Optimisation IA", path: "/geo-optimisation-ia" },
]);

const service = serviceJsonLd({
  name: "GEO - Generative Engine Optimization",
  description:
    "Optimisation de votre visibilité dans les moteurs IA : contenu clair et extractible, données structurées valides, fichier llms.txt facultatif, pour ChatGPT, Perplexity et les AI Overviews de Google.",
  path: "/geo-optimisation-ia",
});

const webPage = webPageJsonLd({
  name: "GEO : optimisez votre visibilité dans les moteurs IA",
  description:
    "Generative Engine Optimization (GEO) : rendez votre contenu citable par ChatGPT, Perplexity et les AI Overviews de Google. Passages clairs et données structurées valides.",
  path: "/geo-optimisation-ia",
  datePublished: "2026-03-12",
  dateModified: "2026-11-09",
});

const geoRelatedLinks: RelatedLink[] = [
  {
    title: "Expertise IA",
    description:
      "Notre offre globale d'accompagnement sur l'intelligence artificielle",
    href: "/expertise-ia",
  },
  {
    title: "API sur mesure Symfony",
    description:
      "Exposer vos données métier via des API structurées pour les moteurs IA",
    href: "/api-sur-mesure-symfony",
  },
  {
    title: "GEO : rendre Symfony visible dans les moteurs IA",
    description:
      "Guide technique pour indexer votre application Symfony par les LLM",
    href: "/article/geo-rendre-votre-application-symfony-visible-dans-les-moteurs-ia",
  },
  {
    title: "llms.txt : un fichier d'orientation pour les IA",
    description:
      "Ce que fait le fichier llms.txt, et ce qu'il ne fait pas",
    href: "/article/llms-txt-le-nouveau-levier-seo-a-lere-de-lintelligence-artificielle",
  },
  {
    title: "RAG avec Symfony et Doctrine",
    description:
      "Indexer votre base métier pour alimenter un assistant IA",
    href: "/article/rag-symfony-ai-doctrine-indexer-base-metier",
  },
  {
    title: "Generative Engine Optimization",
    description: "Le concept GEO expliqué par Search Engine Land",
    href: "https://searchengineland.com/generative-engine-optimization-geo-393880",
    external: true,
  },
];

export default function GeoOptimisationIa() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraphJsonLd(breadcrumb, service, faqJsonLd, webPage)) }} />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <Breadcrumb items={[{ label: "GEO optimisation IA" }]} />
            <LastUpdated path="/geo-optimisation-ia" />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Référencement IA
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  GEO : optimisez votre visibilité dans les moteurs IA
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  ChatGPT, Perplexity, Gemini, Google AI Overviews : vos clients
                  posent des questions aux moteurs IA et obtiennent des réponses
                  sans jamais visiter votre site. Si votre contenu n&apos;est pas
                  optimisé pour ces nouveaux moteurs, vous risquez de ne pas y être cité.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Le <strong>GEO (Generative Engine Optimization)</strong> est la
                  discipline qui rend votre site citable par les intelligences
                  artificielles. Chez Efficience IT, nous améliorons la clarté et la
                  structure de vos pages pour augmenter leurs chances d&apos;être
                  reprises par les moteurs IA, sans promesse de résultat.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">
                    Parlons de votre visibilité IA
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
                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
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
            <SectionTitle>Qu&apos;est-ce que le GEO ?</SectionTitle>
            <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg text-gray">
              <p>
                Le <strong>Generative Engine Optimization (GEO)</strong> est
                l&apos;ensemble des techniques qui permettent à un site web d&apos;être
                cité, recommandé et référencé par les moteurs de recherche basés
                sur l&apos;intelligence artificielle.
              </p>
              <p>
                Contrairement au SEO classique qui vise à positionner vos pages
                dans une liste de résultats, le GEO vise à faire apparaître votre
                contenu directement dans les réponses générées par les IA. Quand
                un utilisateur demande à ChatGPT ou Perplexity une recommandation,
                c&apos;est votre expertise qui doit être citée.
              </p>
              <p>
                Le GEO s&apos;appuie sur trois piliers : un{" "}
                <strong>contenu utile</strong> rédigé en passages autonomes, des{" "}
                <strong>données structurées valides</strong> et des entités
                clairement identifiées, et, de façon facultative, un{" "}
                <strong>fichier llms.txt</strong> lu par certains outils IA.
                Ce sont les mêmes fondamentaux que ceux décrits dans la{" "}
                <a
                  href="https://developers.google.com/search/docs/appearance/ai-features"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  documentation de Google sur les fonctionnalités IA
                </a>
                .
                Cette approche fait partie de notre{" "}
                <Link
                  href="/expertise-ia"
                  className="text-primary hover:underline"
                >
                  expertise IA
                </Link>
                , qui couvre aussi bien l&apos;intégration de LLM dans vos
                applications que leur optimisation pour le référencement.
              </p>
              <p>
                Nous avons détaillé les enjeux du{" "}
                <Link
                  href="/article/geo-rendre-votre-application-symfony-visible-dans-les-moteurs-ia"
                  className="text-primary hover:underline"
                >
                  GEO appliqué aux applications web
                </Link>{" "}
                dans un article dédié.
              </p>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>SEO et GEO : ce qui change</SectionTitle>
            <div className="mx-auto mt-8 max-w-4xl overflow-x-auto">
              <table className="w-full min-w-[32rem] border-collapse text-left">
                <caption className="mb-3 text-left text-sm text-gray">
                  Comparaison des deux approches, d&apos;après la{" "}
                  <a
                    href="https://developers.google.com/search/docs/appearance/ai-features"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    documentation de Google
                  </a>
                  .
                </caption>
                <thead>
                  <tr className="border-b border-border text-sm text-gray">
                    <th scope="col" className="py-2 pr-4 font-semibold">Critère</th>
                    <th scope="col" className="py-2 pr-4 font-semibold">SEO</th>
                    <th scope="col" className="py-2 font-semibold">GEO</th>
                  </tr>
                </thead>
                <tbody>
                  {seoGeoRows.map((row) => (
                    <tr key={row.criterion} className="border-b border-border">
                      <th scope="row" className="py-3 pr-4 font-semibold text-dark">{row.criterion}</th>
                      <td className="py-3 pr-4 text-gray">{row.seo}</td>
                      <td className="py-3 text-gray">{row.geo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Nos techniques d&apos;optimisation GEO</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Six leviers concrets que nous activons pour rendre votre site
              visible dans les réponses des moteurs IA.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {techniques.map((technique) => (
                <Card key={technique.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {technique.title}
                  </h3>
                  <p className="mt-2 text-gray">{technique.description}</p>
                </Card>
              ))}
            </div>
            <p className="mt-10 text-center text-lg text-gray">
              Le fichier{" "}
              <Link
                href="/article/llms-txt-le-nouveau-levier-seo-a-lere-de-lintelligence-artificielle"
                className="text-primary hover:underline"
              >
                llms.txt est un fichier d&apos;orientation facultatif
              </Link>
              , sans effet sur Google. Nous pouvons vous accompagner dans sa mise
              en place si cela a du sens pour votre site.
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Ce que nous livrons</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Une prestation structurée, de l&apos;audit initial au suivi des
              résultats, pour une visibilité mesurable dans les moteurs IA.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {livrables.map((livrable, index) => (
                <div key={livrable.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      {livrable.title}
                    </h3>
                    <p className="mt-1 text-gray">{livrable.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-lg text-gray">
              L&apos;optimisation GEO s&apos;intègre naturellement avec les bonnes
              pratiques de{" "}
              <Link
                href="/article/ameliorer-lexperience-utilisateur-grace-au-manifeste-des-applications-web"
                className="text-primary hover:underline"
              >
                manifeste des applications web
              </Link>{" "}
              pour une expérience utilisateur cohérente sur tous les canaux.
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Votre site est-il visible dans les moteurs IA ?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Échangeons sur votre visibilité dans ChatGPT, Perplexity et les AI
              Overviews. Nous identifions les opportunités que vous manquez
              aujourd&apos;hui.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
            >
              Contactez-nous
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
        <section className="bg-light-gray py-16">
          <Container>
            <SectionTitle>Pour aller plus loin</SectionTitle>
            <ul className="mx-auto mt-8 max-w-3xl space-y-3 text-lg">
              <li>
                <Link
                  href="/article/llms-txt-le-nouveau-levier-seo-a-lere-de-lintelligence-artificielle"
                  className="text-primary hover:underline"
                >
                  llms.txt : un fichier d&apos;orientation pour les IA, pas un levier SEO
                </Link>{" "}
                , comprendre ce que fait le fichier llms.txt et ce qu&apos;il ne fait pas
              </li>
              <li>
                <Link
                  href="/article/geo-rendre-votre-application-symfony-visible-dans-les-moteurs-ia"
                  className="text-primary hover:underline"
                >
                  GEO : rendre votre application visible dans les moteurs IA
                </Link>{" "}
                , les enjeux du référencement IA pour les applications web
              </li>
              <li>
                <Link
                  href="/article/ameliorer-lexperience-utilisateur-grace-au-manifeste-des-applications-web"
                  className="text-primary hover:underline"
                >
                  Améliorer l&apos;expérience utilisateur grâce au manifeste des applications web
                </Link>{" "}
                , un complément naturel à l&apos;optimisation GEO
              </li>
              <li>
                <a
                  href="https://developers.google.com/search/docs/appearance/ai-features"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google : fonctionnalités IA dans la recherche
                </a>{" "}
                , ce que Google documente pour les AI Overviews et AI Mode
              </li>
              <li>
                <a
                  href="https://schema.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Schema.org
                </a>{" "}
                , la référence des données structurées pour le web sémantique
              </li>
              <li>
                <a
                  href="https://llmstxt.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  llmstxt.org
                </a>{" "}
                , la spécification officielle du fichier llms.txt
              </li>
            </ul>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <RelatedLinks links={geoRelatedLinks} />
        </FadeIn>

        <FadeIn>
        <CallToAction />
        <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}
