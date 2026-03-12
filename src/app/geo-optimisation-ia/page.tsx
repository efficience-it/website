import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CallToAction from "@/components/sections/CallToAction";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "GEO : optimisez votre visibilite dans les moteurs IA",
  description:
    "Votre marque est invisible ou mal representee dans ChatGPT, Perplexity et Google AI Overviews ? Efficience IT audite vos citations IA et optimise votre presence dans les moteurs generatifs.",
  path: "/geo-optimisation-ia",
});

const problems = [
  {
    before: "Un utilisateur demande a ChatGPT de recommander une agence Symfony a Lille",
    problem: "ChatGPT cite trois concurrents mais ne mentionne jamais votre entreprise",
    after: "Votre agence apparait dans la reponse avec un lien vers votre site et une description fidele de vos services",
  },
  {
    before: "Un CTO demande a Perplexity les differences entre Sylius et Prestashop",
    problem: "Perplexity synthetise des sources concurrentes et omet votre article de reference sur le sujet",
    after: "Votre article est cite comme source, avec un extrait de votre expertise technique",
  },
  {
    before: "Un prospect cherche dans Google AI Overviews comment migrer une application PHP legacy",
    problem: "L'AI Overview genere une reponse generique sans mentionner votre service de modernisation",
    after: "Votre page de service apparait dans l'AI Overview comme ressource recommandee",
  },
];

const approche = [
  {
    num: "1",
    title: "Audit de citations IA",
    description:
      "Nous interrogeons ChatGPT, Perplexity, Gemini et Google AI Overviews sur les requetes cles de votre secteur. Vous recevez un rapport qui montre ou vous etes cite, ou vous etes absent, et ou vos concurrents apparaissent a votre place.",
  },
  {
    num: "2",
    title: "Implementation technique",
    description:
      "Donnees structurees (FAQPage, HowTo, TechArticle, SpeakableSpecification), creation du fichier llms.txt, balisage semantique. Les fondations techniques qui permettent aux LLM de comprendre et citer correctement vos pages.",
  },
  {
    num: "3",
    title: "Optimisation du contenu",
    description:
      "Restructuration de vos pages cles pour les rendre extractibles par les IA : reponses directes aux questions, paragraphes autonomes, definitions claires. Sans sacrifier le SEO classique ni la lisibilite humaine.",
  },
  {
    num: "4",
    title: "Suivi des resultats",
    description:
      "Mesure de l'evolution de vos citations dans les moteurs IA. Vous voyez concretement sur quelles requetes vous gagnez en visibilite et quelles nouvelles opportunites se presentent.",
  },
];

const useCases = [
  {
    title: "Pages de service",
    description:
      "Vos pages de service sont souvent les premieres victimes de l'IA generative. Un moteur IA synthetise vos concurrents et vous ignore. Nous structurons vos pages pour qu'elles soient selectionnees comme source fiable : donnees structurees Service, contenu oriente probleme/solution, autorite thematique renforcee.",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
  },
  {
    title: "Documentation technique",
    description:
      "Vos articles de blog et guides techniques ont le potentiel d'etre cites comme references par les LLM. Encore faut-il que le contenu soit structure pour l'extraction : balisage TechArticle, passages speakable, reponses directes aux questions que les utilisateurs posent aux IA.",
    icon: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
  },
  {
    title: "Visibilite locale",
    description:
      "Quand un utilisateur demande a un moteur IA de recommander un prestataire dans votre zone, vous devez apparaitre. Nous optimisons votre schema LocalBusiness, vos pages de contact et vos signaux geographiques pour que les IA vous associent a votre marche local.",
    icon: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
  },
];

const faqItems = [
  {
    title: "Quelle est la difference entre le SEO classique et le GEO ?",
    content:
      "Le SEO classique optimise votre site pour apparaitre dans les resultats de recherche traditionnels de Google. Le GEO (Generative Engine Optimization) optimise votre contenu pour etre cite dans les reponses generees par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. Les deux approches sont complementaires : un bon GEO s'appuie sur les fondamentaux du SEO.",
  },
  {
    title: "Comment savoir si mon site est cite par les moteurs IA ?",
    content:
      "C'est justement l'objet de notre audit de citations IA. Nous interrogeons les principaux moteurs (ChatGPT, Perplexity, Gemini, Google AI Overviews) sur les requetes cles de votre secteur et vous livrons un rapport detaille : ou vous etes cite, ou vous etes absent, et ce que font vos concurrents sur ces memes requetes.",
  },
  {
    title: "Est-ce que le GEO remplace le SEO traditionnel ?",
    content:
      "Non. Le GEO est un complement du SEO, pas un remplacement. Les moteurs IA s'appuient largement sur les signaux SEO classiques (autorite du domaine, qualite du contenu, balisage semantique) pour selectionner les sources a citer. Une strategie GEO efficace renforce votre SEO existant tout en ouvrant un nouveau canal de visibilite.",
  },
  {
    title: "Quels types de donnees structurees utilisez-vous ?",
    content:
      "Nous implementons les schemas FAQPage (questions-reponses), HowTo (guides etape par etape), TechArticle (contenus techniques), SpeakableSpecification (passages a citer en priorite) et Service (description de vos prestations). Ces schemas aident les moteurs IA a extraire et citer correctement vos contenus.",
  },
  {
    title: "Combien de temps faut-il pour voir des resultats ?",
    content:
      "Les premieres ameliorations techniques (donnees structurees, llms.txt) prennent effet des que les crawlers IA repassent sur votre site, generalement en quelques semaines. L'amelioration des citations est progressive et depend du volume de contenu optimise et de l'autorite de votre domaine. Nous mesurons les resultats en continu pour ajuster la strategie.",
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
    "Audit de citations IA et optimisation de votre visibilite dans les moteurs generatifs : ChatGPT, Perplexity, Gemini et Google AI Overviews.",
  path: "/geo-optimisation-ia",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "GEO et Symfony : visibilite dans les moteurs IA",
    description:
      "Les enjeux du referencement IA pour les applications web",
    href: "/article/geo-rendre-votre-application-symfony-visible-dans-les-moteurs-ia",
  },
  {
    title: "llms.txt : le nouveau levier SEO",
    description:
      "Comprendre et implementer le fichier llms.txt",
    href: "/article/llms-txt-le-nouveau-levier-seo-a-lere-de-lintelligence-artificielle",
  },
  {
    title: "Audit de code PHP",
    description:
      "Notre methode d'audit technique, applicable a l'audit GEO",
    href: "/audit-code-php",
  },
  {
    title: "Schema.org",
    description: "La reference des donnees structurees pour le web semantique",
    href: "https://schema.org",
    external: true,
  },
  {
    title: "llmstxt.org",
    description: "La specification officielle du fichier llms.txt",
    href: "https://llmstxt.org",
    external: true,
  },
];

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
                  Vos prospects posent des questions a ChatGPT, Perplexity et
                  Google AI Overviews. Les reponses citent vos concurrents,
                  deforment votre offre, ou ignorent completement votre
                  existence. Pendant ce temps, vous perdez des leads qualifies
                  sans meme le savoir.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT audite vos citations dans les moteurs IA et
                  optimise votre presence pour que votre expertise soit{" "}
                  <strong>correctement representee, citee et recommandee</strong>{" "}
                  par les intelligences artificielles.
                </p>
                <div className="mt-8">
                  <Button href="/contact">
                    Demander un audit de citations IA
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

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Le probleme : vos concurrents sont cites, pas vous</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Voici ce qui se passe aujourd&apos;hui quand vos prospects
              utilisent les moteurs IA, et ce que nous changeons.
            </p>
            <div className="mt-10 space-y-8">
              {problems.map((item) => (
                <div
                  key={item.before}
                  className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-border"
                >
                  <div className="grid md:grid-cols-3">
                    <div className="border-b border-border bg-white p-6 md:border-b-0 md:border-r">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray">
                        La situation
                      </p>
                      <p className="mt-2 text-sm text-dark">{item.before}</p>
                    </div>
                    <div className="border-b border-border bg-red-50 p-6 md:border-b-0 md:border-r">
                      <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
                        Avant
                      </p>
                      <p className="mt-2 text-sm text-dark">{item.problem}</p>
                    </div>
                    <div className="bg-green-50 p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                        Apres
                      </p>
                      <p className="mt-2 text-sm text-dark">{item.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Trois cas d&apos;usage concrets</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Le GEO ne se limite pas au blog. Voici les trois types de pages
              ou l&apos;optimisation a le plus d&apos;impact.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {useCases.map((useCase) => (
                <Card key={useCase.title}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={useCase.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-dark">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-gray">{useCase.description}</p>
                </Card>
              ))}
            </div>
            <p className="mt-10 text-center text-lg text-gray">
              Nous avons detaille les enjeux du{" "}
              <Link
                href="/article/geo-rendre-votre-application-symfony-visible-dans-les-moteurs-ia"
                className="text-primary hover:underline"
              >
                GEO applique aux applications Symfony
              </Link>{" "}
              et le role du{" "}
              <Link
                href="/article/llms-txt-le-nouveau-levier-seo-a-lere-de-lintelligence-artificielle"
                className="text-primary hover:underline"
              >
                fichier llms.txt
              </Link>{" "}
              dans deux articles dedies.
            </p>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Notre approche en 4 etapes</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              De l&apos;audit initial au suivi des resultats, une demarche
              structuree pour une visibilite mesurable.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {approche.map((etape) => (
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
          </Container>
        </section>

        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Decouvrez ou vous etes invisible dans les moteurs IA
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Notre audit de citations IA revele les requetes ou vos
              concurrents apparaissent a votre place. Vous repartez avec un
              diagnostic clair et un plan d&apos;action priorise.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
            >
              Demander mon audit de citations IA
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

        <RelatedLinks links={relatedLinks} />

        <CallToAction />
      </main>
    </>
  );
}
