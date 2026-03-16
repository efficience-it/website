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

export const metadata = pageMetadata({
  title: "GEO : optimisez votre visibilité dans les moteurs IA",
  description:
    "Generative Engine Optimization (GEO) : rendez votre site visible dans ChatGPT, Perplexity et les AI Overviews de Google. Données structurées, llms.txt, optimisation du contenu pour les moteurs IA.",
  path: "/geo-optimisation-ia",
});

const techniques = [
  {
    title: "Données structurées avancées",
    description:
      "Nous implémentons les schemas FAQPage, HowTo, TechArticle et SpeakableSpecification pour que les moteurs IA comprennent précisément le contenu de vos pages et le citent dans leurs réponses.",
  },
  {
    title: "Fichier llms.txt",
    description:
      "Nous créons et maintenons un fichier llms.txt à la racine de votre site. Ce fichier standardisé indique aux LLM quelles pages indexer, comment les interpréter et quelles informations privilégier.",
  },
  {
    title: "Optimisation pour les AI Overviews",
    description:
      "Nous structurons vos contenus pour apparaître dans les réponses générées par Google SGE et les AI Overviews : réponses directes, listes, tableaux et définitions claires.",
  },
  {
    title: "Contenu cité par les LLM",
    description:
      "Nous reformulons et enrichissons vos pages pour maximiser les chances d'être cités par ChatGPT, Perplexity, Gemini et les autres moteurs conversationnels. Chaque paragraphe est conçu pour être extractible.",
  },
  {
    title: "Audit de visibilité IA",
    description:
      "Nous analysons votre présence actuelle dans les réponses des principaux moteurs IA et identifions les opportunités manquées : requêtes où vos concurrents apparaissent et pas vous.",
  },
  {
    title: "Suivi et mesure",
    description:
      "Nous mettons en place un suivi des citations de votre marque et de vos pages dans les réponses IA pour mesurer l'impact réel de l'optimisation GEO sur votre visibilité.",
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
      "Mise en place des données structurées (FAQPage, HowTo, TechArticle, SpeakableSpecification), création du fichier llms.txt et optimisation du balisage sémantique.",
  },
  {
    title: "Optimisation du contenu",
    description:
      "Reformulation et structuration de vos pages clés pour maximiser les citations par les moteurs IA, sans sacrifier le référencement classique.",
  },
  {
    title: "Tableau de bord de suivi",
    description:
      "Un outil de mesure pour suivre l'évolution de vos citations IA dans le temps et identifier les nouvelles opportunités.",
  },
];

const faqItems = [
  {
    title: "Quelle est la différence entre le SEO classique et le GEO ?",
    content:
      "Le SEO classique optimise votre site pour apparaître dans les résultats de recherche traditionnels de Google. Le GEO (Generative Engine Optimization) optimise votre contenu pour être cité dans les réponses générées par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. Les deux approches sont complémentaires : un bon GEO s'appuie sur les fondamentaux du SEO.",
  },
  {
    title: "Qu'est-ce qu'un fichier llms.txt et à quoi sert-il ?",
    content:
      "Le fichier llms.txt est un standard émergent qui permet d'indiquer aux LLM (Large Language Models) comment interpréter votre site. Placé à la racine de votre domaine, il fonctionne comme un robots.txt mais pour les moteurs IA : il liste les pages à privilégier, les informations clés à retenir et le contexte de votre activité.",
  },
  {
    title: "Quels types de données structurées utilisez-vous pour le GEO ?",
    content:
      "Nous implémentons principalement les schemas FAQPage (pour les questions-réponses), HowTo (pour les guides étape par étape), TechArticle (pour les contenus techniques) et SpeakableSpecification (pour indiquer les passages les plus pertinents à lire ou citer). Ces schemas aident les moteurs IA à extraire et citer correctement vos contenus.",
  },
  {
    title: "Est-ce que le GEO remplace le SEO traditionnel ?",
    content:
      "Non. Le GEO est un complément du SEO, pas un remplacement. Les moteurs IA s'appuient largement sur les signaux SEO classiques (autorité du domaine, qualité du contenu, balisage sémantique) pour sélectionner les sources à citer. Une stratégie GEO efficace renforce votre SEO existant tout en ouvrant un nouveau canal de visibilité.",
  },
  {
    title: "Comment mesurez-vous les résultats d'une stratégie GEO ?",
    content:
      "Nous suivons plusieurs indicateurs : le nombre de citations de votre marque et de vos pages dans les réponses des moteurs IA, les requêtes sur lesquelles vous apparaissez, le trafic référent depuis les moteurs conversationnels et l'évolution de votre visibilité par rapport à vos concurrents sur les mêmes requêtes.",
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
    "Optimisation de votre visibilité dans les moteurs IA : données structurées, fichier llms.txt, optimisation du contenu pour ChatGPT, Perplexity et les AI Overviews de Google.",
  path: "/geo-optimisation-ia",
});

const webPage = webPageJsonLd({
  name: "GEO : optimisez votre visibilité dans les moteurs IA",
  description:
    "Generative Engine Optimization (GEO) : rendez votre site visible dans ChatGPT, Perplexity et les AI Overviews de Google. Données structurées, llms.txt, optimisation du contenu pour les moteurs IA.",
  path: "/geo-optimisation-ia",
  datePublished: "2026-03-12",
  dateModified: "2026-03-12",
});

export default function GeoOptimisationIa() {
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
            <Breadcrumb items={[{ label: "GEO optimisation IA" }]} />
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
                  optimisé pour ces nouveaux moteurs, vous êtes invisible.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Le <strong>GEO (Generative Engine Optimization)</strong> est la
                  discipline qui rend votre site citable par les intelligences
                  artificielles. Chez Efficience IT, nous appliquons des techniques
                  concrètes pour que vos pages soient sélectionnées, citées et
                  recommandées par les LLM.
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
                Le GEO s&apos;appuie sur trois piliers : les{" "}
                <strong>données structurées</strong> (schemas FAQPage, HowTo,
                TechArticle, SpeakableSpecification), le{" "}
                <strong>fichier llms.txt</strong> qui guide les LLM dans
                l&apos;interprétation de votre site, et l&apos;
                <strong>optimisation du contenu</strong> pour qu&apos;il soit
                facilement extractible et citable par les modèles de langage.
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
                llms.txt est un levier SEO majeur à l&apos;ère de l&apos;IA
              </Link>
              . Nous vous accompagnons dans sa mise en place et son maintien.
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
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
                  llms.txt : le nouveau levier SEO à l&apos;ère de l&apos;IA
                </Link>{" "}
                , comprendre et implémenter le fichier llms.txt
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
        <CallToAction />
        <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}
