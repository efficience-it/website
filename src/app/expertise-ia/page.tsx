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
import ResearchIllustration from "@/components/illustrations/ResearchIllustration";

export const metadata = pageMetadata({
  title: "Expertise IA : intégrez l'intelligence artificielle dans vos projets Symfony",
  description:
    "Efficience IT vous accompagne dans l'intégration de l'IA dans vos projets Symfony : LLM, RAG, assistants IA, GEO et modernisation d'applications legacy.",
  path: "/expertise-ia",
});

const useCases = [
  {
    title: "Intégration de LLM dans Symfony",
    description:
      "Connectez vos applications Symfony à des modèles de langage (GPT, Claude, Mistral) via des APIs ou des bundles dédiés pour enrichir vos fonctionnalités métier.",
  },
  {
    title: "RAG sur vos données Doctrine",
    description:
      "Indexez vos entités Doctrine dans une base vectorielle et interrogez vos données métier en langage naturel grâce au Retrieval-Augmented Generation.",
  },
  {
    title: "Développement assisté par IA",
    description:
      "Accélérez vos cycles de développement Symfony en intégrant des assistants IA dans le workflow de vos équipes : génération de code, revue automatisée, refactoring guidé.",
  },
  {
    title: "GEO et visibilité IA",
    description:
      "Rendez vos applications Symfony visibles dans ChatGPT, Perplexity et les AI Overviews de Google grâce au Generative Engine Optimization.",
  },
  {
    title: "Modernisation legacy avec l'IA",
    description:
      "Utilisez l'intelligence artificielle pour accélérer la modernisation de vos applications PHP legacy : analyse de code, migration assistée, documentation automatique.",
  },
];

const advantages = [
  {
    title: "Double expertise Symfony + IA",
    description:
      "Nous maîtrisons à la fois le framework Symfony et les technologies d'intelligence artificielle. Cette combinaison rare garantit des intégrations propres, performantes et maintenables.",
  },
  {
    title: "Retours d'expérience concrets",
    description:
      "Nous avons déjà intégré des LLM, mis en place du RAG et déployé des stratégies GEO sur des projets Symfony en production. Nos recommandations s'appuient sur du vécu, pas de la théorie.",
  },
  {
    title: "Approche pragmatique",
    description:
      "Pas de buzz ni de promesses irréalistes. Nous identifions les cas d'usage où l'IA apporte une vraie valeur ajoutée et nous vous aidons à les mettre en œuvre de manière progressive.",
  },
  {
    title: "Veille technologique permanente",
    description:
      "L'écosystème IA évolue vite. Nous testons en continu les nouveaux modèles, outils et frameworks pour vous recommander les solutions les plus adaptées à votre contexte.",
  },
];

const faqItems = [
  {
    title: "Faut-il refondre son application Symfony pour intégrer de l'IA ?",
    content:
      "Non. L'intégration d'un LLM ou d'un système RAG se fait via des APIs externes ou des bundles Symfony dédiés. Votre application existante reste intacte, on ajoute une couche d'intelligence par-dessus. La complexité dépend du cas d'usage, mais on commence toujours par un MVP minimal.",
  },
  {
    title: "Quels modèles d'IA recommandez-vous pour un projet Symfony ?",
    content:
      "Ça dépend du cas d'usage. Pour du traitement de texte ou de la génération, Claude et GPT sont les plus polyvalents. Pour du RAG sur des données techniques, Mistral offre un bon rapport coût/performance. Pour de l'embarqué ou du temps réel, des modèles plus légers comme Gemma peuvent convenir. Nous vous aidons à choisir.",
  },
  {
    title: "Qu'est-ce que le RAG et comment ça fonctionne avec Doctrine ?",
    content:
      "Le RAG (Retrieval-Augmented Generation) consiste à indexer vos données métier dans une base vectorielle, puis à les injecter dans le contexte d'un LLM pour générer des réponses précises. Avec Doctrine, on peut indexer vos entités automatiquement et interroger vos données en langage naturel.",
  },
  {
    title: "Comment l'IA peut-elle accélérer le développement Symfony ?",
    content:
      "Les assistants IA comme Claude Code, GitHub Copilot ou Cursor permettent de générer du code, d'automatiser les revues, de refactorer du legacy et de rédiger des tests. Bien configurés, ils réduisent significativement les temps de développement sans sacrifier la qualité.",
  },
  {
    title: "Quelle est la différence entre le SEO classique et le GEO ?",
    content:
      "Le SEO optimise votre site pour les résultats de recherche traditionnels. Le GEO (Generative Engine Optimization) optimise votre contenu pour être cité dans les réponses générées par les moteurs IA comme ChatGPT ou Perplexity. Les deux approches sont complémentaires et nous les combinons pour maximiser votre visibilité.",
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
    "Intégration de l'IA dans vos projets Symfony : LLM, RAG, assistants IA, GEO et modernisation d'applications legacy grâce à l'intelligence artificielle.",
  path: "/expertise-ia",
});

const webPage = webPageJsonLd({
  name: "Expertise IA : intégrez l'intelligence artificielle dans vos projets Symfony",
  description:
    "Efficience IT vous accompagne dans l'intégration de l'IA dans vos projets Symfony : LLM, RAG, assistants IA, GEO et modernisation d'applications legacy.",
  path: "/expertise-ia",
  datePublished: "2026-03-13",
  dateModified: "2026-03-13",
});

const expertiseIaRelatedLinks: RelatedLink[] = [
  { title: "Audit IA en entreprise", description: "Diagnostic, accompagnement et formation IA pour vos équipes", href: "/audit-ia-entreprise" },
  { title: "RAG Symfony : indexer sa base métier avec l'IA", description: "Construire un pipeline RAG sur vos entités Doctrine", href: "/article/rag-symfony-ai-doctrine-indexer-base-metier" },
  { title: "Quel assistant IA choisir pour coder ?", description: "Comparatif des assistants IA pour le développement", href: "/article/quel-assistant-ia-choisir-pour-coder" },
  { title: "GEO : rendre votre application visible dans les moteurs IA", description: "Les enjeux du référencement IA pour Symfony", href: "/article/geo-rendre-votre-application-symfony-visible-dans-les-moteurs-ia" },
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
                Expertise IA : intégrez l&apos;intelligence artificielle dans vos projets Symfony
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-gray">
                L&apos;intelligence artificielle transforme la manière de concevoir, développer et
                déployer des applications web. Chez Efficience IT, nous combinons notre{" "}
                <strong>expertise Symfony</strong> avec les dernières avancées en{" "}
                <strong>IA générative</strong> pour intégrer des fonctionnalités intelligentes
                dans vos projets, sans repartir de zéro. Vous ne savez pas par où commencer ?
                Notre{" "}
                <Link href="/audit-ia-entreprise" className="text-primary hover:underline">
                  audit IA en entreprise
                </Link>{" "}
                identifie les cas d&apos;usage les plus pertinents pour votre contexte.
              </p>
              <p className="mt-4 max-w-3xl text-lg text-gray">
                De l&apos;intégration de <strong>LLM</strong> au{" "}
                <strong>RAG sur vos données Doctrine</strong>, en passant par le{" "}
                <strong>développement assisté par IA</strong> et l&apos;optimisation de votre{" "}
                <Link href="/geo-optimisation-ia" className="text-primary hover:underline">
                  visibilité dans les moteurs IA (GEO)
                </Link>, nous vous accompagnons à chaque étape.
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
              <ResearchIllustration className="h-96 w-full text-primary" />
            </div>
          </div>
        </Container>
      </section>

      <FadeIn>
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle>Cas d&apos;usage : l&apos;IA au service de vos projets Symfony</SectionTitle>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
            Cinq domaines concrets où l&apos;intelligence artificielle apporte une valeur
            mesurable à vos applications Symfony.
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
                Intégrer l&apos;IA dans une application Symfony
              </h2>
              <p className="mt-4 text-lg text-gray">
                Symfony s&apos;interface naturellement avec les APIs des principaux fournisseurs
                d&apos;IA (OpenAI, Anthropic, Mistral). Nous concevons des architectures propres
                qui isolent la couche IA du reste de votre application, en respectant les principes
                de l&apos;
                <Link href="/article/symfony-ai-projet-legacy-retour-experience" className="text-primary hover:underline">
                  intégration IA dans un projet Symfony existant
                </Link>.
              </p>
              <p className="mt-4 text-lg text-gray">
                Le cas d&apos;usage le plus demandé est le{" "}
                <Link href="/article/rag-symfony-ai-doctrine-indexer-base-metier" className="text-primary hover:underline">
                  RAG (Retrieval-Augmented Generation) sur des données Doctrine
                </Link>.
                Le principe : indexer vos entités métier dans une base vectorielle (pgvector,
                Qdrant, Pinecone), puis utiliser un LLM pour interroger ces données en langage
                naturel. Vos utilisateurs posent des questions, l&apos;IA répond en s&apos;appuyant
                sur vos propres données.
              </p>
              <p className="mt-4 text-lg text-gray">
                Nous mettons en place le pipeline complet : extraction des données Doctrine,
                génération des embeddings, stockage vectoriel, orchestration des requêtes et
                génération des réponses. Le tout intégré dans votre application Symfony existante,
                sans rupture architecturale.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                Accélérer le développement avec les assistants IA
              </h2>
              <p className="mt-4 text-lg text-gray">
                Les assistants IA transforment le quotidien des développeurs Symfony. Nous aidons
                vos équipes à{" "}
                <Link href="/article/quel-assistant-ia-choisir-pour-coder" className="text-primary hover:underline">
                  choisir et configurer les bons assistants IA
                </Link>{" "}
                pour leur contexte : génération de code, revue automatisée, refactoring guidé,
                rédaction de tests.
              </p>
              <p className="mt-4 text-lg text-gray">
                <Link href="/article/claude-assistant-architecture-symfony-legacy" className="text-primary hover:underline">
                  Claude comme assistant d&apos;architecture
                </Link>{" "}
                est particulièrement efficace sur les projets Symfony legacy : il comprend le
                contexte métier, suggère des refactorings cohérents et aide à documenter le code
                existant. Combiné avec des outils comme Cursor ou GitHub Copilot, il accélère
                significativement les cycles de développement.
              </p>
              <p className="mt-4 text-lg text-gray">
                Notre retour d&apos;expérience montre qu&apos;une équipe bien outillée en assistants
                IA gagne entre 20 et 40 % de productivité sur les tâches répétitives, tout en
                améliorant la qualité du code produit. Nous partageons nos apprentissages dans notre
                article sur les{" "}
                <Link href="/article/forces-et-faiblesses-des-ia-generatives-les-plus-utilisees" className="text-primary hover:underline">
                  forces et faiblesses des IA génératives
                </Link>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                Optimiser votre visibilité dans les moteurs IA (GEO)
              </h2>
              <p className="mt-4 text-lg text-gray">
                Le <strong>GEO (Generative Engine Optimization)</strong> est le nouveau levier de
                visibilité pour les applications web. Vos clients posent des questions à ChatGPT,
                Perplexity ou Google AI Overviews : si votre contenu n&apos;est pas optimisé, vous
                êtes invisible dans ces réponses.
              </p>
              <p className="mt-4 text-lg text-gray">
                Nous avons détaillé les enjeux du{" "}
                <Link href="/article/geo-rendre-votre-application-symfony-visible-dans-les-moteurs-ia" className="text-primary hover:underline">
                  GEO appliqué aux applications Symfony
                </Link>{" "}
                et nous proposons une{" "}
                <Link href="/geo-optimisation-ia" className="text-primary hover:underline">
                  offre dédiée d&apos;optimisation GEO
                </Link>{" "}
                incluant les données structurées, le fichier{" "}
                <Link href="/article/llms-txt-le-nouveau-levier-seo-a-lere-de-lintelligence-artificielle" className="text-primary hover:underline">
                  llms.txt
                </Link>{" "}
                et l&apos;optimisation du contenu pour les moteurs IA.
              </p>
              <p className="mt-4 text-lg text-gray">
                Le GEO est complémentaire du SEO classique. Il s&apos;appuie sur les mêmes
                fondamentaux (qualité du contenu, balisage sémantique, autorité du domaine) tout
                en ajoutant une couche d&apos;optimisation spécifique pour les modèles de langage.
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
          <SectionTitle>Questions fréquentes</SectionTitle>
          <div className="mx-auto max-w-2xl">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="bg-primary py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-3xl font-bold">Prêt à intégrer l&apos;IA dans vos projets ?</h2>
          <p className="mt-4 text-lg text-white/90">Échangeons sur vos cas d&apos;usage et identifions ensemble les opportunités IA les plus pertinentes pour votre contexte.</p>
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
                  Développement web sur mesure
                </h3>
                <p className="mt-2 text-gray">
                  Applications Symfony, sites e-commerce Sylius et intégrations
                  CRM/ERP adaptées à vos processus métiers.
                </p>
              </Card>
            </Link>
            <Link href="/cloud-et-devops" className="group">
              <Card>
                <h3 className="font-display text-lg font-bold text-dark group-hover:text-primary">
                  Cloud & DevOps
                </h3>
                <p className="mt-2 text-gray">
                  Hébergement cloud, automatisation CI/CD et migration
                  d&apos;infrastructure pour des déploiements fiables et
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
                  accompagner vos équipes dans leur montée en compétences.
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
                  Overviews de Google grâce au Generative Engine Optimization.
                </p>
              </Card>
            </Link>
            <Link href="/audit-ia-entreprise" className="group">
              <Card>
                <h3 className="font-display text-lg font-bold text-dark group-hover:text-primary">
                  Audit IA en entreprise
                </h3>
                <p className="mt-2 text-gray">
                  Diagnostic de vos processus, accompagnement à la mise en place
                  et formation de vos équipes à l&apos;intelligence artificielle.
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
