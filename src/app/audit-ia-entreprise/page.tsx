import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CallToAction from "@/components/sections/CallToAction";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import FadeIn from "@/components/ui/FadeIn";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";
import StrategyIllustration from "@/components/illustrations/StrategyIllustration";

export const metadata = pageMetadata({
  title:
    "Audit IA en entreprise : diagnostic, accompagnement et formation",
  description:
    "Efficience IT audite vos processus pour identifier les cas d'usage IA pertinents, vous accompagne dans la mise en place des outils et forme vos équipes à l'intelligence artificielle.",
  path: "/audit-ia-entreprise",
});

const diagnosticAxes = [
  {
    title: "Cartographie des processus",
    description:
      "Nous analysons vos workflows métier pour identifier les tâches répétitives, chronophages ou à faible valeur ajoutée que l'IA peut automatiser ou accélérer.",
  },
  {
    title: "Évaluation de la maturité data",
    description:
      "Vos données sont-elles structurées, accessibles et exploitables par un modèle d'IA ? Nous évaluons la qualité et la disponibilité de vos données internes.",
  },
  {
    title: "Analyse des outils existants",
    description:
      "Inventaire de votre stack logicielle pour identifier les points d'intégration possibles avec des solutions d'intelligence artificielle.",
  },
  {
    title: "Benchmark des solutions IA",
    description:
      "Comparaison des outils et modèles adaptés à votre contexte : assistants conversationnels, automatisation documentaire, analyse prédictive, génération de contenu.",
  },
  {
    title: "Évaluation des risques",
    description:
      "Identification des enjeux de confidentialité, de conformité RGPD et de gouvernance liés à l'utilisation de l'IA sur vos données métier.",
  },
  {
    title: "Priorisation des cas d'usage",
    description:
      "Classement des opportunités par impact métier et complexité de mise en place pour construire une feuille de route réaliste.",
  },
];

const etapes = [
  {
    num: "1",
    title: "Diagnostic",
    description:
      "Entretiens avec vos équipes métier et techniques pour comprendre vos processus, vos irritants et vos objectifs. Nous identifions les cas d'usage IA les plus pertinents.",
  },
  {
    num: "2",
    title: "Recommandations",
    description:
      "Rapport d'audit avec une feuille de route priorisée : quels cas d'usage déployer en premier, quels outils utiliser, quelles données préparer.",
  },
  {
    num: "3",
    title: "Mise en place",
    description:
      "Accompagnement dans l'installation et la configuration des outils IA retenus. Intégration dans vos workflows existants sans rupture d'activité.",
  },
  {
    num: "4",
    title: "Formation et autonomie",
    description:
      "Formation de vos équipes à l'utilisation des outils déployés. Sessions pratiques, bonnes pratiques et suivi post-déploiement pour garantir l'adoption.",
  },
];

const pourquoi = [
  {
    title: "Approche métier, pas gadget",
    description:
      "Nous partons de vos problèmes concrets, pas de la technologie. Chaque recommandation est liée à un gain mesurable pour votre activité.",
  },
  {
    title: "Expertise technique et IA",
    description:
      "Notre double compétence en développement logiciel et en intelligence artificielle nous permet de concevoir des intégrations robustes et maintenables.",
  },
  {
    title: "Formation sur mesure",
    description:
      "Nous ne livrons pas un outil sans mode d'emploi. La formation de vos équipes fait partie intégrante de notre accompagnement pour garantir l'adoption durable.",
  },
];

const faqItems = [
  {
    title: "À qui s'adresse l'audit IA ?",
    content:
      "L'audit s'adresse aux dirigeants, DSI et responsables métier qui souhaitent comprendre comment l'IA peut améliorer leurs processus. Aucune compétence technique préalable n'est requise de votre part.",
  },
  {
    title: "Combien de temps dure un audit IA ?",
    content:
      "Le diagnostic initial prend entre 1 et 2 semaines selon la taille de votre organisation. Vous recevez ensuite un rapport avec les recommandations et la feuille de route. L'accompagnement et la formation s'étalent sur plusieurs semaines selon le périmètre retenu.",
  },
  {
    title: "Quels types d'outils IA pouvez-vous déployer ?",
    content:
      "Assistants conversationnels internes, automatisation de la rédaction et du traitement documentaire, analyse de données métier, aide à la décision, génération de contenu, assistants de développement. Le choix dépend de vos cas d'usage identifiés lors de l'audit.",
  },
  {
    title: "Nos données restent-elles confidentielles ?",
    content:
      "Oui. Nous privilégions les solutions qui garantissent la confidentialité de vos données : modèles hébergés en Europe, instances privées, traitement local quand c'est possible. La conformité RGPD est intégrée dès la phase de diagnostic.",
  },
  {
    title: "Faut-il des compétences techniques en interne pour utiliser l'IA ?",
    content:
      "Non. Notre accompagnement inclut la formation de vos équipes non techniques. L'objectif est que vos collaborateurs soient autonomes dans l'utilisation quotidienne des outils déployés, sans dépendre d'un profil technique.",
  },
  {
    title: "En quoi cet audit diffère-t-il de votre expertise IA Symfony ?",
    content:
      "Notre page expertise IA s'adresse aux équipes de développement qui intègrent de l'IA dans des applications Symfony. L'audit IA en entreprise s'adresse aux décideurs et couvre l'ensemble des processus métier, pas uniquement le développement logiciel.",
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
  { name: "Audit IA en entreprise", path: "/audit-ia-entreprise" },
]);

const service = serviceJsonLd({
  name: "Audit IA en entreprise",
  description:
    "Diagnostic de vos processus métier, identification des cas d'usage IA pertinents, accompagnement à la mise en place et formation de vos équipes à l'intelligence artificielle.",
  path: "/audit-ia-entreprise",
});

const webPage = webPageJsonLd({
  name: "Audit IA en entreprise : diagnostic, accompagnement et formation",
  description:
    "Efficience IT audite vos processus pour identifier les cas d'usage IA pertinents, vous accompagne dans la mise en place des outils et forme vos équipes à l'intelligence artificielle.",
  path: "/audit-ia-entreprise",
  datePublished: "2026-04-09",
  dateModified: "2026-04-09",
});

const auditIaRelatedLinks: RelatedLink[] = [
  {
    title: "Expertise IA et Symfony",
    description:
      "Intégration technique de l'IA dans vos projets Symfony",
    href: "/expertise-ia",
  },
  {
    title: "Forces et faiblesses des IA génératives",
    description:
      "Comparatif des principales IA génératives du marché",
    href: "/article/forces-et-faiblesses-des-ia-generatives-les-plus-utilisees",
  },
  {
    title: "Quel assistant IA choisir pour coder ?",
    description: "Comparatif des assistants IA pour le développement",
    href: "/article/quel-assistant-ia-choisir-pour-coder",
  },
  {
    title: "RAG Symfony : indexer sa base métier avec l'IA",
    description:
      "Construire un pipeline RAG sur vos entités Doctrine",
    href: "/article/rag-symfony-ai-doctrine-indexer-base-metier",
  },
  {
    title: "Accompagnement et conseil",
    description: "Coaching technique et accompagnement de vos équipes",
    href: "/accompagnement-et-conseil",
  },
  {
    title: "Formation Symfony entreprise",
    description:
      "Montée en compétences de vos équipes sur Symfony",
    href: "/formation-symfony-entreprise",
  },
];

export default function AuditIaEntreprise() {
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
                { label: "Audit IA en entreprise" },
              ]}
            />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Intelligence artificielle
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Audit IA en entreprise : diagnostic, accompagnement
                  et formation
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  L&apos;intelligence artificielle offre des gains concrets
                  de productivité, mais encore faut-il savoir{" "}
                  <strong>par où commencer</strong>. Quels processus
                  automatiser ? Quels outils adopter ? Comment embarquer
                  vos équipes ?
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT réalise un{" "}
                  <strong>audit complet de vos processus métier</strong>,
                  identifie les cas d&apos;usage IA les plus pertinents,
                  vous accompagne dans la{" "}
                  <strong>mise en place des outils</strong> et{" "}
                  <strong>forme vos équipes</strong> pour garantir une
                  adoption durable.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Demander un audit IA</Button>
                  <Button href="/expertise-ia" variant="outline">
                    Notre expertise IA
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <StrategyIllustration className="h-96 w-full text-primary" />
              </div>
            </div>
          </Container>
        </section>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>
                Ce que nous analysons lors de l&apos;audit
              </SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Six axes d&apos;analyse pour dresser un état des lieux
                complet de votre maturité IA et identifier les
                opportunités concrètes.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {diagnosticAxes.map((axe) => (
                  <Card key={axe.title}>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 text-primary">
                        &#10003;
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-dark">
                          {axe.title}
                        </h3>
                        <p className="mt-2 text-gray">
                          {axe.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>
                Notre méthodologie en 4 étapes
              </SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                De l&apos;analyse de vos besoins à l&apos;autonomie de
                vos équipes, un parcours structuré pour une adoption
                réussie de l&apos;IA.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {etapes.map((etape) => (
                  <Card key={etape.title}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                      {etape.num}
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-dark">
                      {etape.title}
                    </h3>
                    <p className="mt-2 text-gray">
                      {etape.description}
                    </p>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <div className="space-y-16">
                <div>
                  <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                    Identifier les bons cas d&apos;usage IA pour votre
                    entreprise
                  </h2>
                  <p className="mt-4 text-lg text-gray">
                    Toutes les entreprises ne tirent pas le même profit
                    de l&apos;IA. Un assistant conversationnel interne
                    peut transformer le quotidien d&apos;un service client,
                    tandis qu&apos;une automatisation documentaire fera
                    gagner des heures à un service juridique ou RH. Le
                    point de départ est toujours le même : comprendre vos{" "}
                    <strong>processus métier</strong> et les irritants de
                    vos équipes.
                  </p>
                  <p className="mt-4 text-lg text-gray">
                    Notre audit s&apos;appuie sur des entretiens avec vos
                    collaborateurs et une analyse de vos outils existants.
                    Nous comparons les{" "}
                    <Link
                      href="/article/forces-et-faiblesses-des-ia-generatives-les-plus-utilisees"
                      className="text-primary hover:underline"
                    >
                      forces et faiblesses des IA génératives
                    </Link>{" "}
                    du marché pour recommander les solutions adaptées à
                    votre contexte, sans effet de mode.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                    Accompagner la mise en place, pas juste livrer un
                    rapport
                  </h2>
                  <p className="mt-4 text-lg text-gray">
                    Un audit qui reste dans un tiroir ne sert à rien.
                    Nous vous accompagnons dans le déploiement concret des
                    outils recommandés : configuration, intégration dans
                    vos workflows, connexion à vos données. Si votre
                    projet nécessite une{" "}
                    <Link
                      href="/expertise-ia"
                      className="text-primary hover:underline"
                    >
                      intégration technique dans une application Symfony
                    </Link>
                    , notre équipe de développement prend le relais.
                  </p>
                  <p className="mt-4 text-lg text-gray">
                    Pour les équipes de développement, nous pouvons aller
                    plus loin avec l&apos;intégration d&apos;
                    <Link
                      href="/article/quel-assistant-ia-choisir-pour-coder"
                      className="text-primary hover:underline"
                    >
                      assistants IA dans le workflow de développement
                    </Link>{" "}
                    ou la mise en place de{" "}
                    <Link
                      href="/article/rag-symfony-ai-doctrine-indexer-base-metier"
                      className="text-primary hover:underline"
                    >
                      RAG sur vos données métier
                    </Link>
                    .
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                    Former vos équipes pour une adoption durable
                  </h2>
                  <p className="mt-4 text-lg text-gray">
                    La technologie ne vaut rien sans les personnes qui
                    l&apos;utilisent. Nous formons vos collaborateurs aux
                    outils déployés avec des{" "}
                    <strong>sessions pratiques</strong> adaptées à leur
                    niveau : rédaction de prompts, utilisation des
                    assistants IA, bonnes pratiques de confidentialité.
                  </p>
                  <p className="mt-4 text-lg text-gray">
                    Notre expérience en{" "}
                    <Link
                      href="/formation-symfony-entreprise"
                      className="text-primary hover:underline"
                    >
                      formation professionnelle
                    </Link>{" "}
                    nous a appris qu&apos;une formation réussie passe par
                    la pratique, pas par la théorie. Chaque session est
                    construite autour de cas concrets issus de votre
                    activité.
                  </p>
                  <p className="mt-4 text-lg text-gray">
                    Nous assurons un suivi post-formation pour répondre
                    aux questions, ajuster les usages et mesurer
                    l&apos;adoption réelle par vos équipes. L&apos;objectif :
                    que vos collaborateurs soient{" "}
                    <strong>autonomes</strong> dans leur utilisation
                    quotidienne de l&apos;IA.
                  </p>
                </div>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>
                Pourquoi choisir Efficience IT
              </SectionTitle>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {pourquoi.map((item) => (
                  <Card key={item.title}>
                    <h3 className="font-display text-lg font-bold text-dark">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
              <div className="mt-10 space-y-4 text-center text-lg text-gray">
                <p>
                  Nous combinons notre{" "}
                  <Link
                    href="/accompagnement-et-conseil"
                    className="text-primary hover:underline"
                  >
                    expertise en accompagnement et conseil
                  </Link>{" "}
                  avec une connaissance approfondie des outils
                  d&apos;intelligence artificielle. Cette double
                  compétence nous permet de recommander des solutions
                  qui s&apos;intègrent réellement dans votre quotidien.
                </p>
                <p>
                  Pour les entreprises qui développent leurs propres
                  applications, nous intervenons aussi sur
                  l&apos;
                  <Link
                    href="/article/symfony-ai-projet-legacy-retour-experience"
                    className="text-primary hover:underline"
                  >
                    intégration de l&apos;IA dans les projets Symfony
                    existants
                  </Link>
                  , de la phase de conseil jusqu&apos;à la mise en
                  production.
                </p>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-primary py-16 text-center text-white">
            <div className="mx-auto max-w-3xl px-4">
              <h2 className="font-display text-3xl font-bold">
                Prêt à explorer le potentiel de l&apos;IA pour votre
                entreprise ?
              </h2>
              <p className="mt-4 text-lg text-white/90">
                Échangeons sur vos enjeux métier et identifions ensemble
                les cas d&apos;usage IA les plus pertinents pour votre
                organisation.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
              >
                Demander un audit IA
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
          <RelatedLinks
            links={auditIaRelatedLinks}
            className="bg-light-gray"
          />
        </FadeIn>

        <FadeIn>
          <CallToAction />
          <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}
