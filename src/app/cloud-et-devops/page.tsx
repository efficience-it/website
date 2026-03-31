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
import GrowthIllustration from "@/components/illustrations/GrowthIllustration";

export const metadata = pageMetadata({
  title: "Cloud & DevOps : infrastructure et automatisation",
  description:
    "Expertise Cloud et DevOps : Efficience IT accompagne la mise en place d'infrastructures, d'automatisation et de pratiques DevOps adaptées aux projets web.",
  path: "/cloud-et-devops",
});

const platforms = [
  { name: "AWS", logo: "/images/expertise/cloud/aws.webp" },
  { name: "Azure", logo: "/images/expertise/cloud/azure.webp" },
  { name: "Google Cloud", logo: "/images/expertise/cloud/google-cloud.webp" },
  { name: "OVH", logo: "/images/expertise/cloud/ovhcloud.webp" },
  { name: "HDS", logo: "/images/expertise/cloud/hds.webp" },
];

const migrationSteps = [
  {
    step: "1",
    title: "Évaluation de l'infrastructure",
    description:
      "Analyse complète de vos applications, API, données et fichiers pour définir une stratégie de migration personnalisée.",
  },
  {
    step: "2",
    title: "Planification détaillée",
    description:
      "Élaboration d'une roadmap claire et structurée, avec l'appui de nos chefs de projet et DevOps.",
  },
  {
    step: "3",
    title: "Exécution de la migration",
    description:
      "Procédure de migration garantissant l'intégrité et la sécurité des données.",
  },
  {
    step: "4",
    title: "Validation et optimisation",
    description:
      "Tests approfondis pour optimiser vos performances et garantir un environnement Cloud performant.",
  },
  {
    step: "5",
    title: "Support continu",
    description:
      "Une surveillance proactive et des ajustements pour garantir le succès de votre transition vers le Cloud.",
  },
];

const faqItems = [
  {
    title: "Quels fournisseurs cloud supportez-vous ?",
    content:
      "Nous travaillons avec AWS, Azure, Google Cloud, OVH et des hébergeurs certifiés HDS pour les données de santé. Le choix dépend de vos contraintes techniques, réglementaires et budgétaires.",
  },
  {
    title: "Quelle est la différence entre hébergement cloud et hébergement classique ?",
    content:
      "L'hébergement cloud offre une scalabilité automatique, une haute disponibilité et un paiement à l'usage. Contrairement à un serveur dédié, les ressources s'ajustent en temps réel selon le trafic de votre application.",
  },
  {
    title: "Comment se passe une migration vers le cloud ?",
    content:
      "Nous procédons en 5 étapes : audit de l'infrastructure existante, planification détaillée, migration progressive, validation et tests, puis supervision continue. L'objectif est zéro interruption de service.",
  },
  {
    title: "Qu'est-ce que le CI/CD et pourquoi en ai-je besoin ?",
    content:
      "Le CI/CD (intégration et déploiement continus) automatise les tests et la mise en production de votre code. Résultat : moins de bugs, des livraisons plus fréquentes et une équipe de développement plus productive.",
  },
  {
    title: "Proposez-vous du monitoring et de la supervision ?",
    content:
      "Oui. Nous mettons en place des outils de monitoring (alertes, dashboards, logs centralisés) pour détecter et résoudre les incidents avant qu'ils n'impactent vos utilisateurs.",
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
  { name: "Cloud & DevOps", path: "/cloud-et-devops" },
]);

const service = serviceJsonLd({
  name: "Cloud & DevOps",
  description:
    "Hébergement cloud, automatisation DevOps, migration d'infrastructure et CI/CD pour les projets web professionnels.",
  path: "/cloud-et-devops",
});

const webPage = webPageJsonLd({
  name: "Cloud & DevOps : infrastructure et automatisation",
  description:
    "Expertise Cloud et DevOps : Efficience IT accompagne la mise en place d'infrastructures, d'automatisation et de pratiques DevOps adaptées aux projets web.",
  path: "/cloud-et-devops",
  datePublished: "2025-09-01",
  dateModified: "2026-03-10",
});

const cloudRelatedLinks: RelatedLink[] = [
  { title: "D\u00e9ployer avec GitLab CI, S3 et CloudFront", description: "Automatisation du d\u00e9ploiement", href: "/article/deployer-nuxtjs-avec-gitlab-ci-s3-et-cloudfront" },
  { title: "Docker, documentation officielle", description: "Conteneurisation des applications", href: "https://docs.docker.com/", external: true },
  { title: "GitLab CI/CD, documentation", description: "Pipelines d'int\u00e9gration continue", href: "https://docs.gitlab.com/ee/ci/", external: true },
  { title: "Kubernetes, documentation officielle", description: "Orchestration de conteneurs", href: "https://kubernetes.io/docs/", external: true },
];

export default function CloudEtDevops() {
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
      {/* Hero */}
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <Breadcrumb items={[{ label: "Cloud & DevOps" }]} />
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
                Cloud & DevOps : infrastructure et automatisation
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-gray">
                Chez Efficience IT, nous accompagnons les PME et grandes
                entreprises dans la modernisation et l&apos;optimisation de
                leurs infrastructures IT.
              </p>
              <p className="mt-4 max-w-3xl text-lg text-gray">
                Nos solutions flexibles et innovantes répondent aux défis
                majeurs de scalabilité, de sécurité et de performance, tout en
                vous aidant à maximiser vos ressources et à réduire vos coûts.
              </p>
              <p className="mt-6 text-lg font-semibold text-dark">
                Un projet à déployer ?
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Button href="/audit-symfony-gratuit">
                  Audit Symfony gratuit
                </Button>
                <Button href="/contact" variant="outline">
                  Contactez-nous
                </Button>
              </div>
            </div>
              <GrowthIllustration className="h-96 w-full text-primary" />
          </div>
        </Container>
      </section>

      <FadeIn>
      <section className="py-16 md:py-24">
        <Container> 
          <SectionTitle>
            Hébergement Cloud : une infrastructure à la hauteur de vos ambitions
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
            Adoptez une solution d&apos;hébergement Cloud et évolutive,
            parfaitement adaptée à vos besoins.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Flexibilité et scalabilité à la demande
              </h3>
              <p className="mt-2 text-gray">
                Une infrastructure Cloud qui s&apos;ajuste en temps réel selon
                la croissance de votre entreprise ou les pics de trafic, pour
                garantir une performance constante.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Performance optimale et sécurité renforcée
              </h3>
              <p className="mt-2 text-gray">
                Profitez de serveurs puissants offrant des temps de chargement
                rapides et une expérience utilisateur fluide. Vos données sont
                protégées grâce au chiffrement, à des pare-feu avancés et à des
                sauvegardes automatiques.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Simplicité de gestion et accessibilité
              </h3>
              <p className="mt-2 text-gray">
                Surveillez vos ressources, ajustez vos configurations et accédez
                à votre environnement Cloud de n&apos;importe où grâce à une
                interface intuitive, idéale pour le travail collaboratif et à
                distance.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Support technique et intégration facile
              </h3>
              <p className="mt-2 text-gray">
                Une équipe d&apos;experts disponible pour résoudre vos problèmes
                techniques rapidement, vous permettant de rester concentré sur
                votre activité principale.
              </p>
            </Card>
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <SectionTitle>
            Automatisation DevOps : boostez votre agilité et productivité
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
            Optimisez vos processus de développement et réduisez vos délais de
            mise en production grâce à nos pratiques d&apos;automatisation
            DevOps.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Accélération des cycles de développement
              </h3>
              <p className="mt-2 text-gray">
                Grâce aux outils <strong>CI/CD</strong> (GitLab, Bitbucket, CircleCI, etc.), vos
                projets passent de l&apos;idée à la production plus rapidement,
                améliorant ainsi votre réactivité face aux besoins du marché.{" "}
                <Link href="/article/comment-executer-des-tests-postman-avec-newman-dans-gitlab-ci" className="text-primary hover:underline">
                  L&apos;intégration des tests API dans GitLab CI
                </Link>{" "}
                est un exemple concret de cette automatisation.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Test et qualité applicative
              </h3>
              <p className="mt-2 text-gray">
                Garantissez un code fiable et performant avec des tests
                unitaires, fonctionnels et de sécurité réguliers pour des
                déploiements sans risques.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Optimisation des ressources
              </h3>
              <p className="mt-2 text-gray">
                Libérez vos équipes des tâches répétitives pour leur permettre
                de se concentrer sur des missions à forte valeur ajoutée.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Visibilité et traçabilité
              </h3>
              <p className="mt-2 text-gray">
                Suivez vos projets en temps réel grâce à des outils de
                monitoring et de reporting performants, garantissant une
                transparence totale.
              </p>
            </Card>
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle>
            Migration d&apos;infrastructure : une transition Cloud maîtrisée
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
            Facilitez votre passage vers le Cloud avec l&apos;accompagnement de
            nos experts. Nous vous aidons à choisir le fournisseur le mieux
            adapté (AWS, Azure, Google Cloud, OVH, etc.) et à planifier une
            migration fluide et sécurisée. Notre approche intègre la{" "}
            <Link href="/article/pourquoi-docker-est-indispensable-en-production-aujourdhui" className="text-primary hover:underline">
              conteneurisation avec Docker
            </Link>{" "}
            pour garantir la portabilité et la cohérence de vos environnements tout au long de la transition.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {migrationSteps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {s.step}
                </div>
                <h3 className="mt-4 font-display text-sm font-bold text-dark">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs text-gray">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <SectionTitle>Plateformes supportées</SectionTitle>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex w-36 flex-col items-center gap-3 rounded-lg bg-white p-5 shadow-md transition-shadow duration-200 hover:shadow-lg"
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain"
                />
                <span className="font-display text-sm font-bold text-dark">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle>Pourquoi choisir Efficience IT ?</SectionTitle>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Expertise reconnue
              </h3>
              <p className="mt-2 text-gray">
                Une expertise éprouvée en solutions IT sur mesure pour répondre
                aux enjeux spécifiques de votre secteur.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Approche client
              </h3>
              <p className="mt-2 text-gray">
                Une démarche centrée sur vos besoins pour des solutions
                parfaitement adaptées à votre contexte et à vos objectifs.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Technologies modernes
              </h3>
              <p className="mt-2 text-gray">
                Des technologies performantes et éprouvées pour booster votre
                compétitivité et accompagner votre croissance durablement.
              </p>
            </Card>
          </div>
          <div className="mt-10 text-center">
            <p className="mx-auto max-w-3xl text-lg text-gray">
              Vous souhaitez moderniser votre infrastructure ou déployer une
              solution Cloud adaptée à vos besoins ?
            </p>
            <Button href="/contact" className="mt-6">
              Contactez-nous dès aujourd&apos;hui
            </Button>
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <RelatedLinks links={cloudRelatedLinks} className="bg-light-gray" />
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
      <section className="bg-primary py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-3xl font-bold">Une question sans réponse ?</h2>
          <p className="mt-4 text-lg text-white/90">Réservez un appel de 30 minutes avec notre équipe pour discuter de votre projet.</p>
          <Link href="/audit-symfony-gratuit" className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100">Demander mon audit gratuit</Link>
        </div>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="py-16 md:py-24">
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
            <Link href="/accompagnement-et-conseil" className="group">
              <Card>
                <h3 className="font-display text-lg font-bold text-dark group-hover:text-primary">
                  Accompagnement et Conseil
                </h3>
                <p className="mt-2 text-gray">
                  Audit technique, formation Symfony et coaching agile pour
                  structurer vos projets et monter en compétences.
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
