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
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "GEO : optimisez votre visibilite dans les moteurs IA",
  description:
    "Generative Engine Optimization (GEO) : rendez votre site visible dans ChatGPT, Perplexity et les AI Overviews de Google. Donnees structurees, llms.txt, optimisation du contenu pour les moteurs IA.",
  path: "/geo-optimisation-ia",
});

const techniques = [
  {
    title: "Donnees structurees avancees",
    description:
      "Nous implementons les schemas FAQPage, HowTo, TechArticle et SpeakableSpecification pour que les moteurs IA comprennent precisement le contenu de vos pages et le citent dans leurs reponses.",
  },
  {
    title: "Fichier llms.txt",
    description:
      "Nous creons et maintenons un fichier llms.txt a la racine de votre site. Ce fichier standardise indique aux LLM quelles pages indexer, comment les interpreter et quelles informations privilegier.",
  },
  {
    title: "Optimisation pour les AI Overviews",
    description:
      "Nous structurons vos contenus pour apparaitre dans les reponses generees par Google SGE et les AI Overviews : reponses directes, listes, tableaux et definitions claires.",
  },
  {
    title: "Contenu cite par les LLM",
    description:
      "Nous reformulons et enrichissons vos pages pour maximiser les chances d'etre cites par ChatGPT, Perplexity, Gemini et les autres moteurs conversationnels. Chaque paragraphe est concu pour etre extractible.",
  },
  {
    title: "Audit de visibilite IA",
    description:
      "Nous analysons votre presence actuelle dans les reponses des principaux moteurs IA et identifions les opportunites manquees : requetes ou vos concurrents apparaissent et pas vous.",
  },
  {
    title: "Suivi et mesure",
    description:
      "Nous mettons en place un suivi des citations de votre marque et de vos pages dans les reponses IA pour mesurer l'impact reel de l'optimisation GEO sur votre visibilite.",
  },
];

const livrables = [
  {
    title: "Audit de visibilite IA",
    description:
      "Un rapport complet de votre presence dans les reponses de ChatGPT, Perplexity, Gemini et Google AI Overviews, avec les requetes cles de votre secteur.",
  },
  {
    title: "Implementation technique",
    description:
      "Mise en place des donnees structurees (FAQPage, HowTo, TechArticle, SpeakableSpecification), creation du fichier llms.txt et optimisation du balisage semantique.",
  },
  {
    title: "Optimisation du contenu",
    description:
      "Reformulation et structuration de vos pages cles pour maximiser les citations par les moteurs IA, sans sacrifier le referencement classique.",
  },
  {
    title: "Tableau de bord de suivi",
    description:
      "Un outil de mesure pour suivre l'evolution de vos citations IA dans le temps et identifier les nouvelles opportunites.",
  },
];

const faqItems = [
  {
    title: "Quelle est la difference entre le SEO classique et le GEO ?",
    content:
      "Le SEO classique optimise votre site pour apparaitre dans les resultats de recherche traditionnels de Google. Le GEO (Generative Engine Optimization) optimise votre contenu pour etre cite dans les reponses generees par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. Les deux approches sont complementaires : un bon GEO s'appuie sur les fondamentaux du SEO.",
  },
  {
    title: "Qu'est-ce qu'un fichier llms.txt et a quoi sert-il ?",
    content:
      "Le fichier llms.txt est un standard emergent qui permet d'indiquer aux LLM (Large Language Models) comment interpreter votre site. Place a la racine de votre domaine, il fonctionne comme un robots.txt mais pour les moteurs IA : il liste les pages a privilegier, les informations cles a retenir et le contexte de votre activite.",
  },
  {
    title: "Quels types de donnees structurees utilisez-vous pour le GEO ?",
    content:
      "Nous implementons principalement les schemas FAQPage (pour les questions-reponses), HowTo (pour les guides etape par etape), TechArticle (pour les contenus techniques) et SpeakableSpecification (pour indiquer les passages les plus pertinents a lire ou citer). Ces schemas aident les moteurs IA a extraire et citer correctement vos contenus.",
  },
  {
    title: "Est-ce que le GEO remplace le SEO traditionnel ?",
    content:
      "Non. Le GEO est un complement du SEO, pas un remplacement. Les moteurs IA s'appuient largement sur les signaux SEO classiques (autorite du domaine, qualite du contenu, balisage semantique) pour selectionner les sources a citer. Une strategie GEO efficace renforce votre SEO existant tout en ouvrant un nouveau canal de visibilite.",
  },
  {
    title: "Comment mesurez-vous les resultats d'une strategie GEO ?",
    content:
      "Nous suivons plusieurs indicateurs : le nombre de citations de votre marque et de vos pages dans les reponses des moteurs IA, les requetes sur lesquelles vous apparaissez, le trafic referent depuis les moteurs conversationnels et l'evolution de votre visibilite par rapport a vos concurrents sur les memes requetes.",
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
    "Optimisation de votre visibilite dans les moteurs IA : donnees structurees, fichier llms.txt, optimisation du contenu pour ChatGPT, Perplexity et les AI Overviews de Google.",
  path: "/geo-optimisation-ia",
});

const webPage = webPageJsonLd({
  name: "GEO : optimisez votre visibilite dans les moteurs IA",
  description:
    "Generative Engine Optimization (GEO) : rendez votre site visible dans ChatGPT, Perplexity et les AI Overviews de Google. Donnees structurees, llms.txt, optimisation du contenu pour les moteurs IA.",
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
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Referencement IA
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  GEO : optimisez votre visibilite dans les moteurs IA
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  ChatGPT, Perplexity, Gemini, Google AI Overviews : vos clients
                  posent des questions aux moteurs IA et obtiennent des reponses
                  sans jamais visiter votre site. Si votre contenu n&apos;est pas
                  optimise pour ces nouveaux moteurs, vous etes invisible.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Le <strong>GEO (Generative Engine Optimization)</strong> est la
                  discipline qui rend votre site citable par les intelligences
                  artificielles. Chez Efficience IT, nous appliquons des techniques
                  concretes pour que vos pages soient selectionnees, citees et
                  recommandees par les LLM.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">
                    Parlons de votre visibilite IA
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
                l&apos;ensemble des techniques qui permettent a un site web d&apos;etre
                cite, recommande et reference par les moteurs de recherche bases
                sur l&apos;intelligence artificielle.
              </p>
              <p>
                Contrairement au SEO classique qui vise a positionner vos pages
                dans une liste de resultats, le GEO vise a faire apparaitre votre
                contenu directement dans les reponses generees par les IA. Quand
                un utilisateur demande a ChatGPT ou Perplexity une recommandation,
                c&apos;est votre expertise qui doit etre citee.
              </p>
              <p>
                Le GEO s&apos;appuie sur trois piliers : les{" "}
                <strong>donnees structurees</strong> (schemas FAQPage, HowTo,
                TechArticle, SpeakableSpecification), le{" "}
                <strong>fichier llms.txt</strong> qui guide les LLM dans
                l&apos;interpretation de votre site, et l&apos;
                <strong>optimisation du contenu</strong> pour qu&apos;il soit
                facilement extractible et citable par les modeles de langage.
                Cette approche fait partie de notre{" "}
                <Link
                  href="/expertise-ia"
                  className="text-primary hover:underline"
                >
                  expertise IA
                </Link>
                , qui couvre aussi bien l&apos;integration de LLM dans vos
                applications que leur optimisation pour le referencement.
              </p>
              <p>
                Nous avons detaille les enjeux du{" "}
                <Link
                  href="/article/geo-rendre-votre-application-symfony-visible-dans-les-moteurs-ia"
                  className="text-primary hover:underline"
                >
                  GEO applique aux applications web
                </Link>{" "}
                dans un article dedie.
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
              visible dans les reponses des moteurs IA.
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
                llms.txt est un levier SEO majeur a l&apos;ere de l&apos;IA
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
              Une prestation structuree, de l&apos;audit initial au suivi des
              resultats, pour une visibilite mesurable dans les moteurs IA.
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
              L&apos;optimisation GEO s&apos;integre naturellement avec les bonnes
              pratiques de{" "}
              <Link
                href="/article/ameliorer-lexperience-utilisateur-grace-au-manifeste-des-applications-web"
                className="text-primary hover:underline"
              >
                manifeste des applications web
              </Link>{" "}
              pour une experience utilisateur coherente sur tous les canaux.
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
              Echangeons sur votre visibilite dans ChatGPT, Perplexity et les AI
              Overviews. Nous identifions les opportunites que vous manquez
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
            <SectionTitle>Questions frequentes</SectionTitle>
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
                  llms.txt : le nouveau levier SEO a l&apos;ere de l&apos;IA
                </Link>{" "}
                , comprendre et implementer le fichier llms.txt
              </li>
              <li>
                <Link
                  href="/article/geo-rendre-votre-application-symfony-visible-dans-les-moteurs-ia"
                  className="text-primary hover:underline"
                >
                  GEO : rendre votre application visible dans les moteurs IA
                </Link>{" "}
                , les enjeux du referencement IA pour les applications web
              </li>
              <li>
                <Link
                  href="/article/ameliorer-lexperience-utilisateur-grace-au-manifeste-des-applications-web"
                  className="text-primary hover:underline"
                >
                  Ameliorer l&apos;experience utilisateur grace au manifeste des applications web
                </Link>{" "}
                , un complement naturel a l&apos;optimisation GEO
              </li>
              <li>
                <Link
                  href="/expertise-ia"
                  className="text-primary hover:underline"
                >
                  Notre expertise IA
                </Link>{" "}
                , integration de LLM, RAG et agents IA dans vos applications
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
                , la reference des donnees structurees pour le web semantique
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
                , la specification officielle du fichier llms.txt
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
