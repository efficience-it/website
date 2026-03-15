import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CallToAction from "@/components/sections/CallToAction";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import Accordion from "@/components/ui/Accordion";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import TestimonialCard from "@/components/cards/TestimonialCard";
import FadeIn from "@/components/ui/FadeIn";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { clients } from "@/../data/clients";
import { testimonials } from "@/../data/testimonials";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Expertise IA : integrez l'intelligence artificielle dans vos projets Symfony",
  description:
    "Efficience IT vous accompagne dans l'integration de l'IA dans vos projets Symfony : LLM, RAG, assistants IA, GEO et modernisation d'applications legacy grace a l'intelligence artificielle.",
  path: "/expertise-ia",
});

const useCases = [
  {
    title: "Integration de LLM dans Symfony",
    description:
      "Connectez vos applications Symfony a des modeles de langage (GPT, Claude, Mistral) via des APIs ou des bundles dedies pour enrichir vos fonctionnalites metier.",
  },
  {
    title: "RAG sur vos donnees Doctrine",
    description:
      "Indexez vos entites Doctrine dans une base vectorielle et interrogez vos donnees metier en langage naturel grace au Retrieval-Augmented Generation.",
  },
  {
    title: "Developpement assiste par IA",
    description:
      "Accelerez vos cycles de developpement Symfony en integrant des assistants IA dans le workflow de vos equipes : generation de code, revue automatisee, refactoring guide.",
  },
  {
    title: "GEO et visibilite IA",
    description:
      "Rendez vos applications Symfony visibles dans ChatGPT, Perplexity et les AI Overviews de Google grace au Generative Engine Optimization.",
  },
  {
    title: "Modernisation legacy avec l'IA",
    description:
      "Utilisez l'intelligence artificielle pour accelerer la modernisation de vos applications PHP legacy : analyse de code, migration assistee, documentation automatique.",
  },
];

const advantages = [
  {
    title: "Double expertise Symfony + IA",
    description:
      "Nous maitrisons a la fois le framework Symfony et les technologies d'intelligence artificielle. Cette combinaison rare garantit des integrations propres, performantes et maintenables.",
  },
  {
    title: "Retours d'experience concrets",
    description:
      "Nous avons deja integre des LLM, mis en place du RAG et deploye des strategies GEO sur des projets Symfony en production. Nos recommandations s'appuient sur du vecu, pas de la theorie.",
  },
  {
    title: "Approche pragmatique",
    description:
      "Pas de buzz ni de promesses irrealistes. Nous identifions les cas d'usage ou l'IA apporte une vraie valeur ajoutee et nous vous aidons a les mettre en oeuvre de maniere progressive.",
  },
  {
    title: "Veille technologique permanente",
    description:
      "L'ecosysteme IA evolue vite. Nous testons en continu les nouveaux modeles, outils et frameworks pour vous recommander les solutions les plus adaptees a votre contexte.",
  },
];

const faqItems = [
  {
    title: "Faut-il refondre son application Symfony pour integrer de l'IA ?",
    content:
      "Non. L'integration d'un LLM ou d'un systeme RAG se fait via des APIs externes ou des bundles Symfony dedies. Votre application existante reste intacte, on ajoute une couche d'intelligence par-dessus. La complexite depend du cas d'usage, mais on commence toujours par un MVP minimal.",
  },
  {
    title: "Quels modeles d'IA recommandez-vous pour un projet Symfony ?",
    content:
      "Ca depend du cas d'usage. Pour du traitement de texte ou de la generation, Claude et GPT sont les plus polyvalents. Pour du RAG sur des donnees techniques, Mistral offre un bon rapport cout/performance. Pour de l'embarque ou du temps reel, des modeles plus legers comme Gemma peuvent convenir. Nous vous aidons a choisir.",
  },
  {
    title: "Qu'est-ce que le RAG et comment ca fonctionne avec Doctrine ?",
    content:
      "Le RAG (Retrieval-Augmented Generation) consiste a indexer vos donnees metier dans une base vectorielle, puis a les injecter dans le contexte d'un LLM pour generer des reponses precises. Avec Doctrine, on peut indexer vos entites automatiquement et interroger vos donnees en langage naturel.",
  },
  {
    title: "Comment l'IA peut-elle accelerer le developpement Symfony ?",
    content:
      "Les assistants IA comme Claude Code, GitHub Copilot ou Cursor permettent de generer du code, d'automatiser les revues, de refactorer du legacy et de rediger des tests. Bien configures, ils reduisent significativement les temps de developpement sans sacrifier la qualite.",
  },
  {
    title: "Quelle est la difference entre le SEO classique et le GEO ?",
    content:
      "Le SEO optimise votre site pour les resultats de recherche traditionnels. Le GEO (Generative Engine Optimization) optimise votre contenu pour etre cite dans les reponses generees par les moteurs IA comme ChatGPT ou Perplexity. Les deux approches sont complementaires et nous les combinons pour maximiser votre visibilite.",
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
  { name: "Expertise IA", path: "/expertise-ia" },
]);

const service = serviceJsonLd({
  name: "Expertise IA - Intelligence artificielle et Symfony",
  description:
    "Integration de l'IA dans vos projets Symfony : LLM, RAG, assistants IA, GEO et modernisation d'applications legacy grace a l'intelligence artificielle.",
  path: "/expertise-ia",
});

const webPage = webPageJsonLd({
  name: "Expertise IA : integrez l'intelligence artificielle dans vos projets Symfony",
  description:
    "Efficience IT vous accompagne dans l'integration de l'IA dans vos projets Symfony : LLM, RAG, assistants IA, GEO et modernisation d'applications legacy.",
  path: "/expertise-ia",
  datePublished: "2026-03-13",
  dateModified: "2026-03-13",
});

const expertiseIaRelatedLinks: RelatedLink[] = [
  { title: "RAG Symfony : indexer sa base metier avec l'IA", description: "Construire un pipeline RAG sur vos entites Doctrine", href: "/article/rag-symfony-ai-doctrine-indexer-base-metier" },
  { title: "Quel assistant IA choisir pour coder ?", description: "Comparatif des assistants IA pour le developpement", href: "/article/quel-assistant-ia-choisir-pour-coder" },
  { title: "GEO : rendre votre application visible dans les moteurs IA", description: "Les enjeux du referencement IA pour Symfony", href: "/article/geo-rendre-votre-application-symfony-visible-dans-les-moteurs-ia" },
  { title: "Symfony AI documentation", description: "La documentation officielle de Symfony sur l'IA", href: "https://symfony.com/doc/current/ai.html", external: true },
  { title: "Anthropic API documentation", description: "La documentation officielle de l'API Claude", href: "https://docs.anthropic.com/", external: true },
];

export default function ExpertiseIa() {
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
          <Breadcrumb items={[{ label: "Nos expertises", href: "/notre-expertise" }, { label: "Expertise IA" }]} />
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Intelligence artificielle
              </p>
              <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                Expertise IA : integrez l&apos;intelligence artificielle dans vos projets Symfony
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-gray">
                L&apos;intelligence artificielle transforme la maniere de concevoir, developper et
                deployer des applications web. Chez Efficience IT, nous combinons notre{" "}
                <strong>expertise Symfony</strong> avec les dernieres avancees en{" "}
                <strong>IA generative</strong> pour integrer des fonctionnalites intelligentes
                dans vos projets, sans repartir de zero.
              </p>
              <p className="mt-4 max-w-3xl text-lg text-gray">
                De l&apos;integration de <strong>LLM</strong> au{" "}
                <strong>RAG sur vos donnees Doctrine</strong>, en passant par le{" "}
                <strong>developpement assiste par IA</strong> et l&apos;optimisation de votre{" "}
                <Link href="/geo-optimisation-ia" className="text-primary hover:underline">
                  visibilite dans les moteurs IA (GEO)
                </Link>, nous vous accompagnons a chaque etape.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">
                  Parlons de votre projet IA
                </Button>
                <Button href="/audit-symfony-gratuit" variant="outline">
                  Audit Symfony gratuit
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
          <SectionTitle>Cas d&apos;usage : l&apos;IA au service de vos projets Symfony</SectionTitle>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
            Cinq domaines concrets ou l&apos;intelligence artificielle apporte une valeur
            mesurable a vos applications Symfony.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((c) => (
              <Card key={c.title}>
                <h3 className="font-display text-lg font-bold text-dark">
                  {c.title}
                </h3>
                <p className="mt-2 text-gray">{c.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <div className="space-y-16">
            <div>
              <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                Integrer l&apos;IA dans une application Symfony
              </h2>
              <p className="mt-4 text-lg text-gray">
                Symfony s&apos;interface naturellement avec les APIs des principaux fournisseurs
                d&apos;IA (OpenAI, Anthropic, Mistral). Nous concevons des architectures propres
                qui isolent la couche IA du reste de votre application, en respectant les principes
                de l&apos;
                <Link href="/article/symfony-ai-projet-legacy-retour-experience" className="text-primary hover:underline">
                  integration IA dans un projet Symfony existant
                </Link>.
              </p>
              <p className="mt-4 text-lg text-gray">
                Le cas d&apos;usage le plus demande est le{" "}
                <Link href="/article/rag-symfony-ai-doctrine-indexer-base-metier" className="text-primary hover:underline">
                  RAG (Retrieval-Augmented Generation) sur des donnees Doctrine
                </Link>.
                Le principe : indexer vos entites metier dans une base vectorielle (pgvector,
                Qdrant, Pinecone), puis utiliser un LLM pour interroger ces donnees en langage
                naturel. Vos utilisateurs posent des questions, l&apos;IA repond en s&apos;appuyant
                sur vos propres donnees.
              </p>
              <p className="mt-4 text-lg text-gray">
                Nous mettons en place le pipeline complet : extraction des donnees Doctrine,
                generation des embeddings, stockage vectoriel, orchestration des requetes et
                generation des reponses. Le tout integre dans votre application Symfony existante,
                sans rupture architecturale.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                Accelerer le developpement avec les assistants IA
              </h2>
              <p className="mt-4 text-lg text-gray">
                Les assistants IA transforment le quotidien des developpeurs Symfony. Nous aidons
                vos equipes a{" "}
                <Link href="/article/quel-assistant-ia-choisir-pour-coder" className="text-primary hover:underline">
                  choisir et configurer les bons assistants IA
                </Link>{" "}
                pour leur contexte : generation de code, revue automatisee, refactoring guide,
                redaction de tests.
              </p>
              <p className="mt-4 text-lg text-gray">
                <Link href="/article/claude-assistant-architecture-symfony-legacy" className="text-primary hover:underline">
                  Claude comme assistant d&apos;architecture
                </Link>{" "}
                est particulierement efficace sur les projets Symfony legacy : il comprend le
                contexte metier, suggere des refactorings coherents et aide a documenter le code
                existant. Combine avec des outils comme Cursor ou GitHub Copilot, il accelere
                significativement les cycles de developpement.
              </p>
              <p className="mt-4 text-lg text-gray">
                Notre retour d&apos;experience montre qu&apos;une equipe bien outillee en assistants
                IA gagne entre 20 et 40 % de productivite sur les taches repetitives, tout en
                ameliorant la qualite du code produit. Nous partageons nos apprentissages dans notre
                article sur les{" "}
                <Link href="/article/forces-et-faiblesses-des-ia-generatives-les-plus-utilisees" className="text-primary hover:underline">
                  forces et faiblesses des IA generatives
                </Link>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                Optimiser votre visibilite dans les moteurs IA (GEO)
              </h2>
              <p className="mt-4 text-lg text-gray">
                Le <strong>GEO (Generative Engine Optimization)</strong> est le nouveau levier de
                visibilite pour les applications web. Vos clients posent des questions a ChatGPT,
                Perplexity ou Google AI Overviews : si votre contenu n&apos;est pas optimise, vous
                etes invisible dans ces reponses.
              </p>
              <p className="mt-4 text-lg text-gray">
                Nous avons detaille les enjeux du{" "}
                <Link href="/article/geo-rendre-votre-application-symfony-visible-dans-les-moteurs-ia" className="text-primary hover:underline">
                  GEO applique aux applications Symfony
                </Link>{" "}
                et nous proposons une{" "}
                <Link href="/geo-optimisation-ia" className="text-primary hover:underline">
                  offre dediee d&apos;optimisation GEO
                </Link>{" "}
                incluant les donnees structurees, le fichier{" "}
                <Link href="/article/llms-txt-le-nouveau-levier-seo-a-lere-de-lintelligence-artificielle" className="text-primary hover:underline">
                  llms.txt
                </Link>{" "}
                et l&apos;optimisation du contenu pour les moteurs IA.
              </p>
              <p className="mt-4 text-lg text-gray">
                Le GEO est complementaire du SEO classique. Il s&apos;appuie sur les memes
                fondamentaux (qualite du contenu, balisage semantique, autorite du domaine) tout
                en ajoutant une couche d&apos;optimisation specifique pour les modeles de langage.
              </p>
            </div>
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle>Pourquoi choisir Efficience IT pour l&apos;IA ?</SectionTitle>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {advantages.map((a) => (
              <Card key={a.title}>
                <h3 className="font-display text-lg font-bold text-dark">
                  {a.title}
                </h3>
                <p className="mt-2 text-gray">{a.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <RelatedLinks links={expertiseIaRelatedLinks} />
      </FadeIn>

      <FadeIn>
      <section className="py-16">
        <Container>
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500">Ils nous font confiance</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client) => (
              <Image
                key={client.name}
                src={client.logo}
                alt={client.name}
                width={200}
                height={120}
                className="h-16 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <TestimonialCard testimonial={testimonials[0]} />
          </div>
        </Container>
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
      <section className="bg-primary py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-3xl font-bold">Pret a integrer l&apos;IA dans vos projets ?</h2>
          <p className="mt-4 text-lg text-white/90">Echangeons sur vos cas d&apos;usage et identifions ensemble les opportunites IA les plus pertinentes pour votre contexte.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100">Contactez-nous</Link>
        </div>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <SectionTitle>Nos autres expertises</SectionTitle>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Link href="/developpement-web-sur-mesure" className="group">
              <Card>
                <h3 className="font-display text-lg font-bold text-dark group-hover:text-primary">
                  Developpement web sur mesure
                </h3>
                <p className="mt-2 text-gray">
                  Applications Symfony, sites e-commerce Sylius et integrations
                  CRM/ERP adaptees a vos processus metiers.
                </p>
              </Card>
            </Link>
            <Link href="/cloud-et-devops" className="group">
              <Card>
                <h3 className="font-display text-lg font-bold text-dark group-hover:text-primary">
                  Cloud & DevOps
                </h3>
                <p className="mt-2 text-gray">
                  Hebergement cloud, automatisation CI/CD et migration
                  d&apos;infrastructure pour des deploiements fiables et
                  performants.
                </p>
              </Card>
            </Link>
            <Link href="/accompagnement-et-conseil" className="group">
              <Card>
                <h3 className="font-display text-lg font-bold text-dark group-hover:text-primary">
                  Accompagnement et Conseil
                </h3>
                <p className="mt-2 text-gray">
                  Coaching technique, formation Symfony et audit de code pour
                  accompagner vos equipes dans leur montee en competences.
                </p>
              </Card>
            </Link>
            <Link href="/geo-optimisation-ia" className="group">
              <Card>
                <h3 className="font-display text-lg font-bold text-dark group-hover:text-primary">
                  GEO - Optimisation IA
                </h3>
                <p className="mt-2 text-gray">
                  Rendez votre site visible dans ChatGPT, Perplexity et les AI
                  Overviews de Google grace au Generative Engine Optimization.
                </p>
              </Card>
            </Link>
          </div>
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
