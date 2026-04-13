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
  title: "Développement web sur mesure | Expertise Symfony – Efficience IT",
  description:
    "Efficience IT accompagne vos projets de développement web, notamment basés sur Symfony, de la conception à la mise en œuvre.",
  path: "/developpement-web-sur-mesure",
  absoluteTitle: true,
});

const advantages = [
  {
    title: "Approche personnalisée",
    description:
      "Nous analysons vos besoins spécifiques pour proposer des solutions adaptées à vos objectifs.",
  },
  {
    title: "Expertise reconnue",
    description:
      "Une maîtrise des technologies avancées (Symfony, Sylius, etc.) pour garantir des résultats performants.",
  },
  {
    title: "Accompagnement global",
    description:
      "De la conception à la maintenance, nous sommes à vos côtés pour assurer la réussite de vos projets.",
  },
  {
    title: "Engagement qualité",
    description:
      "Sécurité, évolutivité et performances sont au cœur de nos réalisations.",
  },
];

const faqItems = [
  {
    title: "Quelles technologies utilisez-vous pour le développement web ?",
    content:
      "Symfony est notre framework principal. Nous travaillons aussi avec Sylius pour le e-commerce, API Platform pour les API, et des outils comme Docker, Redis et ElasticSearch selon les besoins du projet.",
  },
  {
    title: "Combien coûte le développement d'une application web sur mesure ?",
    content:
      "Le budget dépend de la complexité du projet. Un site vitrine Symfony démarre autour de 10 000 euros, une application métier complète entre 30 000 et 100 000 euros. Nous proposons un audit gratuit de 30 minutes pour estimer votre projet.",
  },
  {
    title: "Quelle est la durée moyenne d'un projet de développement ?",
    content:
      "Un MVP fonctionnel peut être livré en 2 à 3 mois. Un projet complet avec intégrations CRM/ERP prend généralement 4 à 8 mois. Nous travaillons en sprints agiles avec des livraisons régulières.",
  },
  {
    title: "Assurez-vous la maintenance après la mise en production ?",
    content:
      "Oui, nous proposons des contrats de maintenance incluant les mises à jour de sécurité, le monitoring, la correction de bugs et les évolutions fonctionnelles.",
  },
  {
    title: "Pouvez-vous reprendre un projet existant développé par une autre agence ?",
    content:
      "Oui. Nous réalisons un audit technique du code existant pour évaluer la dette technique, puis nous proposons une stratégie de reprise adaptée : refactoring progressif, migration ou réécriture selon les cas.",
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
  { name: "Développement web sur mesure", path: "/developpement-web-sur-mesure" },
]);

const service = serviceJsonLd({
  name: "Développement web sur mesure",
  description:
    "Conception et développement d'applications web avec Symfony, Sylius et les technologies PHP modernes.",
  path: "/developpement-web-sur-mesure",
});

const webPage = webPageJsonLd({
  name: "Développement web sur mesure | Expertise Symfony",
  description: "Efficience IT accompagne des projets applicatifs, notamment basés sur Symfony, de la conception à la mise en œuvre.",
  path: "/developpement-web-sur-mesure",
  datePublished: "2025-09-01",
  dateModified: "2026-03-10",
});

const devWebRelatedLinks: RelatedLink[] = [
  { title: "Nos secteurs d'intervention", description: "E-commerce, finance, industrie et SaaS", href: "/secteur" },
  { title: "Sylius : la solution e-commerce Symfony", description: "Notre expertise e-commerce open source", href: "/article/sylius-la-solution-e-commerce-du-framework-symfony" },
  { title: "Symfony, site officiel", description: "Le framework PHP pour les applications web", href: "https://symfony.com/", external: true },
  { title: "Sylius, site officiel", description: "La plateforme e-commerce basée sur Symfony", href: "https://sylius.com/", external: true },
  { title: "API Platform", description: "Créer des API modernes en PHP", href: "https://api-platform.com/", external: true },
  { title: "Pourquoi choisir Efficience IT", description: "Agence vs freelance, ESN ou agence générique : notre comparatif", href: "/pourquoi-efficience-it" },
];

export default function DeveloppementWeb() {
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
          <Breadcrumb items={[{ label: "Développement web sur mesure" }]} />
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
                Développement web sur mesure
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-gray">
                Efficience IT vous accompagne dans votre{" "}
                <strong>développement web</strong>, en créant des{" "}
                <strong>sites internet personnalisés</strong> et des solutions
                parfaitement adaptées à vos besoins uniques. Spécialisés dans la{" "}
                <strong>conception de sites web selon votre besoin</strong>,
                nous développons des sites e-commerce performants, notamment
                avec des plateformes comme Sylius, ainsi que des{" "}
                <strong>applications web</strong> intégrant vos outils
                essentiels tels que <strong>Progiciels</strong>,{" "}
                <strong>CRM</strong>, <strong>ERP</strong> et{" "}
                <strong>CMS</strong>.
              </p>
              <p className="mt-4 max-w-3xl text-lg text-gray">
                Que vous ayez besoin de <strong>développement front-end</strong>{" "}
                avec les évolutions de{" "}
                <Link href="/article/twig-4-ce-que-lon-pourrait-attendre" className="text-primary hover:underline">
                  Twig 4
                </Link>{" "}
                ou <strong>back-end</strong> adapté à vos besoins, notre expertise en{" "}
                <strong>technologies web avancées</strong> vous assure des
                résultats à la hauteur de vos ambitions.
              </p>
              <p className="mt-6 text-lg font-semibold text-dark">
                Vous avez un projet en tête ?
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
                src="/images/illustrations/developpement-backend.svg"
                alt="Développement back-end"
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

      <FadeIn>
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle>
            Solutions IT adaptées aux PME et grandes entreprises
          </SectionTitle>
          <div className="mx-auto mt-4 max-w-3xl space-y-4 text-center text-lg text-gray">
            <h3 className="font-display text-2xl font-bold text-dark">
              Vos défis, nos solutions personnalisées
            </h3>
            <p>
              Le monde numérique est en perpétuelle mutation, poussant les
              entreprises à s&apos;adapter sans cesse pour ne pas être
              distancées. Qu&apos;il s&apos;agisse d&apos;optimiser vos
              processus métiers, de répondre aux attentes croissantes de vos
              clients, ou encore de renforcer la sécurité de vos systèmes, la
              transformation digitale est aujourd&apos;hui un levier
              incontournable de croissance.
            </p>
            <p>
              Chez Efficience IT, nous comprenons que chaque entreprise a des
              besoins uniques. C&apos;est pourquoi nous concevons des solutions
              IT pensées pour vos objectifs stratégiques, pour vous
              permettre d&apos;atteindre vos ambitions tout en vous démarquant
              dans votre secteur.
            </p>
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <SectionTitle>Nos expertises IT à votre service</SectionTitle>
          <div className="mt-10 space-y-16">
            {/* Applications web */}
            <div>
              <h3 className="font-display text-2xl font-bold text-dark">
                Développement web personnalisé : créez une plateforme à la hauteur
                de vos ambitions
              </h3>
              <div className="mt-4 grid gap-8 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text-sm font-semibold uppercase text-primary">
                    Vos besoins
                  </p>
                  <p className="mt-2 text-gray">
                    Vous cherchez à développer un site web ou une application
                    qui reflète votre identité et s&apos;intègre parfaitement à
                    vos outils existants (CRM, ERP, CMS, etc.)
                  </p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-sm font-semibold uppercase text-primary">
                    Notre solution
                  </p>
                  <p className="mt-2 text-gray">
                    Nous concevons des plateformes personnalisées et évolutives,
                    qu&apos;il s&apos;agisse de sites vitrines, e-commerce
                    (Sylius, Symfony) ou d&apos;applications complexes,
                    garantissant une expérience utilisateur fluide et une
                    sécurité optimale. Notre maîtrise des{" "}
                    <Link href="/article/les-bundles-les-plus-utilises-dans-les-projets-symfony" className="text-primary hover:underline">
                      bundles Symfony incontournables
                    </Link>{" "}
                    nous permet d&apos;accélérer le développement sans compromettre la qualité.
                  </p>
                </div>
              </div>
            </div>

            {/* E-commerce */}
            <div>
              <h3 className="font-display text-2xl font-bold text-dark">
                Création de sites e-commerce : transformez vos visiteurs en
                clients fidèles
              </h3>
              <div className="mt-4 grid gap-8 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text-sm font-semibold uppercase text-primary">
                    Vos défis
                  </p>
                  <p className="mt-2 text-gray">
                    Améliorer vos conversions, offrir une expérience client
                    irréprochable et gérer efficacement vos stocks, même lors de
                    pics de trafic.
                  </p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-sm font-semibold uppercase text-primary">
                    Nos engagements
                  </p>
                  <p className="mt-2 text-gray">
                    Nous créons des sites e-commerce taillés pour vos objectifs, avec un design
                    responsive et des fonctionnalités avancées. Intégration des
                    paiements sécurisés, gestion simplifiée et accompagnement
                    stratégique garantissant un site performant et aligné sur
                    vos objectifs commerciaux.
                  </p>
                </div>
              </div>
            </div>

            {/* Marketplace */}
            <div>
              <h3 className="font-display text-2xl font-bold text-dark">
                Développement de marketplace : multipliez vos opportunités
              </h3>
              <div className="mt-4 grid gap-8 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text-sm font-semibold uppercase text-primary">
                    Vos enjeux
                  </p>
                  <p className="mt-2 text-gray">
                    Proposer une plateforme unique qui fédère les vendeurs tout
                    en offrant une expérience d&apos;achat intuitive.
                  </p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-sm font-semibold uppercase text-primary">
                    Notre expertise
                  </p>
                  <p className="mt-2 text-gray">
                    De la conception technique à la gestion multivendeurs, nous
                    développons des marketplaces robustes et évolutives,
                    adaptées à votre secteur et à votre stratégie de croissance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle>
            Automatisez et optimisez vos processus métiers
          </SectionTitle>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                CRM dédié : réinventez votre gestion client
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase text-primary">
                Vos besoins
              </p>
              <p className="mt-2 text-gray">
                Centraliser vos données clients, automatiser les tâches
                répétitives et améliorer la relation client.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase text-primary">
                Notre solution
              </p>
              <p className="mt-2 text-gray">
                Un CRM personnalisé, intégré à vos outils (site e-commerce, ERP,
                marketing automation), pour un suivi efficace et une meilleure
                productivité.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                ERP personnalisé : pilotez votre entreprise avec précision
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase text-primary">
                Vos défis
              </p>
              <p className="mt-2 text-gray">
                Gérer vos processus internes (stocks, RH, ventes) de manière
                fluide et sécurisée, tout en anticipant vos besoins futurs.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase text-primary">
                Nos atouts
              </p>
              <p className="mt-2 text-gray">
                Nous développons des ERP modulables et entièrement
                personnalisés, qui centralisent vos données et automatisent vos
                workflows pour des performances optimisées.
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
            Des solutions techniques innovantes et performantes
          </SectionTitle>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Développement d&apos;API REST et SOAP
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase text-primary">
                Pourquoi c&apos;est crucial
              </p>
              <p className="mt-2 text-gray">
                Garantir la communication entre systèmes pour une gestion en
                temps réel et une interopérabilité renforcée.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase text-primary">
                Nos compétences
              </p>
              <p className="mt-2 text-gray">
                Création d&apos;API dédiées, adaptées à vos exigences
                techniques et métiers pour fluidifier vos échanges de données.
                Nous respectons les{" "}
                <Link href="/article/api-rest-les-bonnes-pratiques" className="text-primary hover:underline">
                  bonnes pratiques API REST
                </Link>{" "}
                pour garantir des interfaces performantes et maintenables.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Migration technique et modernisation
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase text-primary">
                Vos enjeux
              </p>
              <p className="mt-2 text-gray">
                Maintenir vos systèmes à jour face aux évolutions technologiques
                et éviter les risques liés à une infrastructure obsolète.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase text-primary">
                Notre accompagnement
              </p>
              <p className="mt-2 text-gray">
                Audit, planification et migration vers des solutions modernes
                (Symfony, Cloud, etc.), avec une attention particulière à la
                sécurité et aux performances. Le passage à{" "}
                <Link href="/article/doctrine-orm-3-0-une-nouvelle-version-majeure-pour-les-bases-de-donnees" className="text-primary hover:underline">
                  Doctrine ORM 3.0
                </Link>{" "}
                et l&apos;adoption de{" "}
                <Link href="/article/concretement-cest-quoi-frankenphp" className="text-primary hover:underline">
                  FrankenPHP
                </Link>{" "}
                font partie des évolutions que nous accompagnons. Commencez par un{" "}
                <Link href="/audit-symfony-gratuit" className="text-primary hover:underline">
                  audit Symfony gratuit
                </Link>{" "}
                pour identifier vos priorités.
              </p>
            </Card>
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex justify-center">
              <Image
                src="/images/team/team-photo.webp"
                alt="L'équipe Efficience IT"
                width={500}
                height={350}
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                SYMFONY
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold text-dark md:text-4xl">
                Une équipe passionnée
              </h2>
              <p className="mt-4 text-lg text-gray">
                Chez Efficience IT, nous ne livrons pas simplement du code :
                nous construisons des solutions utiles, avec vous et pour vous.
                Notre cœur de métier repose sur{" "}
                <Link href="/article/pourquoi-choisir-symfony-pour-vos-projets" className="text-primary hover:underline">
                  Symfony, le framework PHP de référence
                </Link>{" "}
                pour les applications robustes et évolutives.
              </p>
              <p className="mt-4 text-lg text-gray">
                Notre objectif est simple : vous faire gagner du temps,
                maîtriser vos coûts et obtenir un outil fiable, pensé pour
                durer.
              </p>
              <p className="mt-4 text-lg text-gray">
                Écoute, clarté, engagement : vous pouvez compter sur un
                partenaire technique qui comprend vos enjeux et s&apos;investit
                à vos côtés.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/notre-expertise" variant="outline">
                  Expertise
                </Button>
                <Button href="/contact">Contact</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <SectionTitle>Pourquoi choisir Efficience IT ?</SectionTitle>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((adv) => (
              <Card key={adv.title}>
                <h3 className="font-display text-lg font-bold text-dark">
                  {adv.title}
                </h3>
                <p className="mt-2 text-gray">{adv.description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <h2 className="font-display text-2xl font-bold text-dark">
              Passez à l&apos;action dès maintenant !
            </h2>
            <p className="mt-4 text-lg text-gray max-w-4xl mx-auto">
              Vous souhaitez moderniser votre infrastructure, développer un site
              web adapté à vos besoins ou optimiser vos processus métiers avec des outils
              performants ?{" "}
              <Link
                href="/contact"
                className="font-semibold text-primary hover:underline"
              >
                Contactez-nous dès aujourd&apos;hui
              </Link>{" "}
              pour discuter de vos projets et recevoir une solution
              personnalisée.
            </p>
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle>
            Pourquoi choisir notre agence pour votre marketplace ?
          </SectionTitle>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <span className="mt-1 text-primary">&#10003;</span>
              <div>
                <h3 className="font-display font-bold text-dark">
                  Expertise technique
                </h3>
                <p className="mt-1 text-gray">
                  Nos développeurs maîtrisent les technologies les plus avancées
                  (PHP, Symfony, Node.js, etc.) pour créer des plateformes
                  robustes et évolutives.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-primary">&#10003;</span>
              <div>
                <h3 className="font-display font-bold text-dark">
                  Design centré sur l&apos;utilisateur
                </h3>
                <p className="mt-1 text-gray">
                  Offrez une expérience fluide et intuitive.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-primary">&#10003;</span>
              <div>
                <h3 className="font-display font-bold text-dark">
                  Solutions personnalisées
                </h3>
                <p className="mt-1 text-gray">
                  Que vous ayez besoin d&apos;une marketplace multivendeurs,
                  d&apos;un système de paiement intégré ou d&apos;une gestion
                  logistique, nous adaptons nos solutions à vos besoins
                  spécifiques.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-primary">&#10003;</span>
              <div>
                <h3 className="font-display font-bold text-dark">
                  Support et maintenance
                </h3>
                <p className="mt-1 text-gray">
                  Nous vous accompagnons à chaque étape, même après le
                  lancement, pour garantir la pérennité de votre projet.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <RelatedLinks links={devWebRelatedLinks} />
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
            <TestimonialCard testimonial={testimonials[3]} />
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
          <h2 className="font-display text-3xl font-bold">Une question sans réponse ?</h2>
          <p className="mt-4 text-lg text-white/90">Réservez un appel de 30 minutes avec notre équipe pour discuter de votre projet.</p>
          <Link href="/audit-symfony-gratuit" className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100">Demander mon audit gratuit</Link>
        </div>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <SectionTitle>Nos autres expertises</SectionTitle>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
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
