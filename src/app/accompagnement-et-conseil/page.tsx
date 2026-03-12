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
import { clients } from "@/../data/clients";
import { testimonials } from "@/../data/testimonials";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Conseil, formation et coaching Symfony",
  description:
    "Efficience IT accompagne les équipes sur l'organisation, le conseil, le coaching et la formation autour de Symfony et des projets web professionnels.",
  path: "/accompagnement-et-conseil",
});

const challenges = [
  {
    title: "Optimisation des processus internes",
    description:
      "Vous souhaitez fluidifier votre gestion et améliorer l'efficacité de vos équipes ?",
  },
  {
    title: "Sécurisation des données et conformité",
    description:
      "Avec la montée des cybermenaces et des réglementations strictes (RGPD, normes ISO), assurer la sécurité de vos systèmes est une priorité.",
  },
  {
    title: "Transition numérique et agilité",
    description:
      "Adopter les bonnes technologies pour digitaliser vos activités sans perturber votre organisation actuelle.",
  },
  {
    title: "Performance des applications et infrastructures",
    description:
      "Garantir la fiabilité et la rapidité de vos outils pour une expérience utilisateur rapide.",
  },
  {
    title: "Formation et montée en compétences",
    description:
      "Vos équipes doivent maîtriser les technologies et méthodologies actuelles pour rester compétitives.",
  },
];

const advantages = [
  {
    title: "Approche orientée business",
    description:
      "Nous comprenons vos enjeux et adaptons nos solutions à vos besoins stratégiques.",
  },
  {
    title: "Expertise technique de pointe",
    description: "Spécialistes Symfony, JS API et cloud computing.",
  },
  {
    title: "Engagement sur la qualité et la sécurité",
    description:
      "Conformité aux meilleures pratiques et aux réglementations en vigueur.",
  },
  {
    title: "Accompagnement humain et personnalisé",
    description:
      "De l'audit à la mise en œuvre, un interlocuteur dédié vous guide à chaque étape.",
  },
];

const faqItems = [
  {
    title: "En quoi consiste un audit technique Symfony ?",
    content:
      "Nous analysons votre code, votre architecture, vos performances et votre sécurité. Vous recevez un rapport avec des recommandations priorisées et un plan d'action concret. Le premier audit de 30 minutes est gratuit.",
  },
  {
    title: "Proposez-vous des formations Symfony pour les équipes ?",
    content:
      "Oui. Nos formations couvrent les fondamentaux jusqu'au niveau avancé : architecture hexagonale, Messenger, API Platform, tests automatisés. Elles sont adaptées au niveau et aux projets concrets de vos équipes.",
  },
  {
    title: "Quelle méthodologie agile utilisez-vous ?",
    content:
      "Nous travaillons principalement en Scrum avec des sprints de 2 semaines. La méthode est adaptée selon le contexte : Kanban pour la maintenance, Scrum pour les projets neufs. L'essentiel est la livraison régulière de valeur.",
  },
  {
    title: "Pouvez-vous intervenir ponctuellement sur un projet en difficulté ?",
    content:
      "Oui. Nous proposons des missions de coaching technique pour débloquer un projet : revue de code, refactoring ciblé, mise en place de tests, ou accompagnement sur une migration complexe.",
  },
  {
    title: "Comment se déroule un accompagnement en transformation digitale ?",
    content:
      "Nous commençons par un audit de vos outils et processus existants. Puis nous définissons ensemble une roadmap réaliste, avec des jalons mesurables. L'accompagnement inclut le pilotage, la formation et le suivi post-déploiement.",
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
  { name: "Accompagnement et Conseil", path: "/accompagnement-et-conseil" },
]);

const service = serviceJsonLd({
  name: "Accompagnement et Conseil Symfony",
  description:
    "Conseil, coaching, formation et audit technique pour les équipes de développement Symfony et les projets web professionnels.",
  path: "/accompagnement-et-conseil",
});

const webPage = webPageJsonLd({
  name: "Conseil, formation et coaching Symfony",
  description:
    "Efficience IT accompagne les équipes sur l'organisation, le conseil, le coaching et la formation autour de Symfony et des projets web professionnels.",
  path: "/accompagnement-et-conseil",
  datePublished: "2025-09-01",
  dateModified: "2026-03-10",
});

const accompagnementRelatedLinks: RelatedLink[] = [
  { title: "Comment se passe un audit chez Efficience IT", description: "Notre m\u00e9thodologie d'audit d\u00e9taill\u00e9e", href: "/article/comment-se-passe-un-audit-chez-efficience-it-quel-contenu-comment-procede-t-on-quels-sont-les-criteres-quel-procede" },
  { title: "Symfony, documentation officielle", description: "R\u00e9f\u00e9rence technique du framework", href: "https://symfony.com/doc/current/index.html", external: true },
  { title: "Scrum Guide", description: "Le guide officiel de la m\u00e9thodologie Scrum", href: "https://scrumguides.org/", external: true },
  { title: "Manifeste Agile", description: "Les principes fondateurs de l'agilit\u00e9", href: "https://agilemanifesto.org/", external: true },
];

export default function AccompagnementEtConseil() {
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
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
                Conseil, formation et coaching Symfony
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-gray">
                Chez Efficience IT, nous croyons fermement que chaque projet
                mérite un accompagnement sur mesure. Notre{" "}
                <strong>expertise</strong> en <strong>agilité</strong> et en{" "}
                <strong>transformation</strong> numérique nous permet de vous
                proposer des <strong>solutions</strong> adaptées à vos{" "}
                <strong>besoins</strong> spécifiques.
              </p>
              <p className="mt-4 max-w-3xl text-lg text-gray">
                Nous adoptons une <strong>stratégie</strong> centrée sur l&apos;
                <strong>efficacité</strong> et la <strong>performance</strong>,
                tout en intégrant les dernières <strong>technologies</strong> et
                méthodes. Grâce à notre approche collaborative, nous élaborons
                ensemble une <strong>roadmap</strong> claire qui répond à vos
                objectifs, que ce soit à travers du <strong>coaching</strong>,
                des formations ou un soutien direct.
              </p>
              <p className="mt-6 text-lg font-semibold text-dark">
                Envie d&apos;aller plus loin ?
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
            <div className="flex justify-center">
              <Image
                src="/images/illustrations/digital-presentation.svg"
                alt="Accompagnement et conseil"
                width={400}
                height={300}
                className="w-full max-w-md"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Gestion de projet agile */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle>
              Une agence experte en gestion de projet agile
            </SectionTitle>
            <p className="mt-4 text-lg text-gray">
              Cette méthode offre plusieurs avantages clés qui renforcent
              l&apos;efficacité des équipes. Adaptabilité, communication et
              rapidité sont les maîtres mots afin de répondre efficacement aux
              nouvelles exigences du marché et permettre un rythme de livraison
              régulier.
            </p>
          </div>
        </Container>
      </section>

      {/* Vos défis */}
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <SectionTitle>
            Des solutions IT sur mesure pour accompagner votre croissance
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
            Dans un environnement en constante évolution, les entreprises font
            face à de nombreux défis technologiques et organisationnels :
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((c) => (
              <Card key={c.title}>
                <h3 className="font-display text-lg font-bold text-dark">
                  {c.title}
                </h3>
                <p className="mt-2 text-gray">{c.description}</p>
              </Card>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg text-gray">
            Chez Efficience IT, nous aidons les entreprises à surmonter ces
            obstacles grâce à des solutions adaptées et évolutives.
          </p>
        </Container>
      </section>

      {/* Services détaillés */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="space-y-16">
            <div>
              <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                Conseil et accompagnement en transformation digitale
              </h2>
              <p className="mt-4 text-lg text-gray">
                Nous vous aidons à structurer votre transition numérique avec
                une approche sur mesure. Grâce à notre expertise en agilité et
                nouvelles technologies, nous identifions les leviers
                d&apos;optimisation et définissons une roadmap claire. Que ce
                soit pour améliorer votre efficacité interne, fluidifier vos
                process ou innover avec de nouvelles solutions, nous sommes à
                vos côtés à chaque étape.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                Audit IT : une vision claire pour une meilleure performance
              </h2>
              <p className="mt-4 text-lg text-gray">
                Nos audits vous permettent d&apos;identifier les forces et
                faiblesses de votre infrastructure numérique. Découvrez notre{" "}
                <Link href="/audit-symfony-gratuit" className="text-primary hover:underline">
                  audit Symfony gratuit de 30 minutes
                </Link>{" "}
                pour un premier diagnostic sans engagement.
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-gray">
                  <span className="mt-1 text-primary">&#10003;</span>
                  <span>
                    <strong className="text-dark">Audit de sécurité</strong> :
                    Analyse des vulnérabilités, conformité réglementaire et
                    recommandations d&apos;amélioration.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray">
                  <span className="mt-1 text-primary">&#10003;</span>
                  <span>
                    <strong className="text-dark">Audit global</strong> :
                    Évaluation des performances techniques, de
                    l&apos;architecture logicielle et de l&apos;organisation des
                    flux de données.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray">
                  <span className="mt-1 text-primary">&#10003;</span>
                  <span>
                    <strong className="text-dark">Audit projet</strong> :
                    Optimisation de vos méthodes de travail et de votre gestion
                    agile pour améliorer la rentabilité de vos projets.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                Déploiement de solutions sur mesure
              </h2>
              <p className="mt-4 text-lg text-gray">
                Nous concevons et intégrons des outils adaptés à vos besoins, en
                garantissant un équilibre entre innovation, sécurité et
                performance. Nos experts Symfony et stack JavaScript développent
                des solutions robustes, évolutives et alignées avec les
                standards de l&apos;industrie.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                Formation et montée en compétences de vos équipes
              </h2>
              <p className="mt-4 text-lg text-gray">
                Votre entreprise doit évoluer avec les technologies ! Nos
                formations sur Symfony et les méthodes agiles vous permettent de
                renforcer l&apos;expertise de vos collaborateurs, en
                s&apos;adaptant à tous les niveaux. Découvrez par exemple{" "}
                <Link href="/article/les-6-etapes-pour-monter-en-competences-sur-symfony" className="text-primary hover:underline">
                  les 6 étapes pour monter en compétences sur Symfony
                </Link>{" "}
                que nous recommandons à nos clients.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Pourquoi choisir Efficience IT */}
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <SectionTitle>Pourquoi choisir Efficience IT ?</SectionTitle>
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

      <RelatedLinks links={accompagnementRelatedLinks} />

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

      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <TestimonialCard testimonial={testimonials[2]} />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle>Questions fréquentes</SectionTitle>
          <div className="mx-auto max-w-2xl">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>

      <section className="bg-primary py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-3xl font-bold">Une question sans réponse ?</h2>
          <p className="mt-4 text-lg text-white/90">Réservez un appel de 30 minutes avec notre équipe pour discuter de votre projet.</p>
          <Link href="/audit-symfony-gratuit" className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100">Demander mon audit gratuit</Link>
        </div>
      </section>

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
          </div>
        </Container>
      </section>

      <CallToAction />
      <StickyMobileCta />
    </main>
    </>
  );
}
