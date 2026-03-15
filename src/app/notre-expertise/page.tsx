import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { services, symfonyAdvantages, methodology } from "@/../data/expertise";
import CallToAction from "@/components/sections/CallToAction";
import FadeIn from "@/components/ui/FadeIn";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/structured-data";
import TechnologiesGrid from "@/components/sections/TechnologiesGrid";

export const metadata = pageMetadata({
  title: "Expertise Symfony de référence",
  description:
    "Expertise Symfony de référence : Efficience IT conçoit, développe et maintient des applications web professionnelles, robustes et orientées production.",
  path: "/notre-expertise",
});

const breadcrumb = breadcrumbJsonLd([{ name: "Nos expertises", path: "/notre-expertise" }]);

const webPage = webPageJsonLd({
  name: "Expertise Symfony de référence",
  description:
    "Expertise Symfony de référence : Efficience IT conçoit, développe et maintient des applications web professionnelles, robustes et orientées production.",
  path: "/notre-expertise",
  datePublished: "2025-09-01",
  dateModified: "2026-01-15",
});

const expertiseRelatedLinks: RelatedLink[] = [
  {
    title: "Les contributions open source",
    description: "Notre engagement dans la communauté",
    href: "/article/les-contributions-open-source-un-enjeu-de-taille-pour-les-developpeurs-et-les-projets",
  },
  {
    title: "Symfony, site officiel",
    description: "Le framework PHP pour les applications web",
    href: "https://symfony.com/",
    external: true,
  },
  {
    title: "API Platform",
    description: "Créer des API modernes en PHP",
    href: "https://api-platform.com/",
    external: true,
  },
  {
    title: "Doctrine",
    description: "ORM et abstraction de base de données pour PHP",
    href: "https://www.doctrine-project.org/",
    external: true,
  },
];

export default function NotreExpertise() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
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
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                Collaborez avec des experts engagés
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold text-dark md:text-5xl">
                Expertise Symfony de référence
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-gray">
                Des passionnés à vos côtés, exigeants, curieux et toujours à
                jour. Nous vous accompagnons avec rigueur, en restant à
                l&apos;écoute des évolutions technologiques pour vous proposer
                les solutions les plus adaptées. Nous avons prouvé cette
                exigence en livrant le{" "}
                <Link href="/article/doctavis-et-efficience-it-une-course-contre-la-montre-pour-sortir-un-mvp" className="text-primary hover:underline">
                  MVP Doctavis en un temps record
                </Link>
                .
              </p>
              <p className="mt-6 text-lg font-semibold text-dark">
                Un projet à construire ensemble ?
              </p>
              <Button href="/contact" className="mt-4">
                Contactez-nous
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/expertise/tech/techs-symfony.webp"
                alt="Technologies Symfony"
                width={500}
                height={350}
                className="w-full rounded-lg"
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
          <SectionTitle>Technologies maîtrisées</SectionTitle>
          <TechnologiesGrid />
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <SectionTitle>Nos services</SectionTitle>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title}>
                <h3 className="font-display text-xl font-bold text-dark">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray"
                    >
                      <span className="shrink-0 text-primary">&#9679;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  href={service.slug}
                  variant="ghost"
                  size="sm"
                  className="mt-4"
                >
                  Découvrir {service.title} &rarr;
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle>Toutes nos expertises</SectionTitle>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
            Chaque service répond à un besoin précis. Des{" "}
            <Link href="/article/quels-sont-les-avantages-dun-progiciel-pour-votre-entreprise" className="text-primary hover:underline">
              progiciels sur mesure
            </Link>{" "}
            aux{" "}
            <Link href="/article/sylius-la-solution-e-commerce-du-framework-symfony" className="text-primary hover:underline">
              plateformes e-commerce Sylius
            </Link>
            , explorez nos pages dédiées pour comprendre comment nous
            intervenons sur votre problématique.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">Maintenance et évolution</h3>
              <ul className="mt-3 space-y-2 text-gray">
                <li><Link href="/migration-symfony" className="text-primary hover:underline">Migration Symfony</Link> : montée de version par paliers</li>
                <li><Link href="/modernisation-application-php" className="text-primary hover:underline">Modernisation d&apos;application PHP</Link> : du legacy vers Symfony</li>
                <li><Link href="/reprise-projet-symfony" className="text-primary hover:underline">Reprise de projet Symfony</Link> : nous prenons le relais</li>
                <li><Link href="/maintenance-applicative-symfony" className="text-primary hover:underline">Maintenance applicative Symfony</Link> : TMA corrective, évolutive, préventive</li>
              </ul>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">Qualité et architecture</h3>
              <ul className="mt-3 space-y-2 text-gray">
                <li><Link href="/audit-code-php" className="text-primary hover:underline">Audit de code PHP</Link> : diagnostic complet sous 48h</li>
                <li><Link href="/audit-symfony-gratuit" className="text-primary hover:underline">Audit Symfony gratuit</Link> : 30 min pour évaluer votre application</li>
                <li><Link href="/tests-automatises-php" className="text-primary hover:underline">Tests automatisés PHP</Link> : sécurisez chaque livraison</li>
                <li><Link href="/architecture-hexagonale-symfony" className="text-primary hover:underline">Architecture hexagonale Symfony</Link> : DDD appliqué</li>
              </ul>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">Développement et API</h3>
              <ul className="mt-3 space-y-2 text-gray">
                <li><Link href="/developpement-web-sur-mesure" className="text-primary hover:underline">Développement web sur mesure</Link></li>
                <li><Link href="/api-sur-mesure-symfony" className="text-primary hover:underline">API sur mesure Symfony</Link></li>
                <li><Link href="/cloud-et-devops" className="text-primary hover:underline">Cloud et DevOps</Link></li>
                <li><Link href="/formation-symfony-entreprise" className="text-primary hover:underline">Formation Symfony entreprise</Link></li>
              </ul>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">Intelligence artificielle</h3>
              <ul className="mt-3 space-y-2 text-gray">
                <li><Link href="/expertise-ia" className="text-primary hover:underline">Expertise IA</Link> : LLM, RAG et assistants IA</li>
                <li><Link href="/geo-optimisation-ia" className="text-primary hover:underline">GEO et optimisation IA</Link> : visibilité dans les moteurs IA</li>
              </ul>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">Secteurs d&apos;activité</h3>
              <ul className="mt-3 space-y-2 text-gray">
                <li><Link href="/secteur/e-commerce" className="text-primary hover:underline">E-commerce</Link></li>
                <li><Link href="/secteur/industrie" className="text-primary hover:underline">Industrie</Link></li>
                <li><Link href="/secteur/saas" className="text-primary hover:underline">SaaS</Link></li>
                <li><Link href="/secteur/finance" className="text-primary hover:underline">Finance</Link></li>
              </ul>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">Proximité</h3>
              <ul className="mt-3 space-y-2 text-gray">
                <li><Link href="/agence-symfony-lille" className="text-primary hover:underline">Agence Symfony à Lille</Link> : notre ancrage régional</li>
                <li><Link href="/accompagnement-et-conseil" className="text-primary hover:underline">Accompagnement et conseil</Link></li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <SectionTitle subtitle="Ce framework est notre cœur de métier. Choisir Symfony, c'est faire le pari de la performance, de la flexibilité et de la pérennité pour vos outils digitaux. Voici pourquoi nous le préconisons :">
            Pourquoi Symfony ?
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
            Nous avons détaillé{" "}
            <Link href="/article/pourquoi-choisir-symfony-pour-vos-projets" className="text-primary hover:underline">
              les raisons de choisir Symfony pour vos projets
            </Link>{" "}
            dans un article de fond qui revient sur les atouts concrets du framework.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {symfonyAdvantages.map((adv) => (
              <Card key={adv.title}>
                <h3 className="font-display text-lg font-bold text-dark">
                  {adv.title}
                </h3>
                <p
                  className="mt-2 text-gray"
                  dangerouslySetInnerHTML={{ __html: adv.description }}
                />
              </Card>
            ))}
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle>Comment nous travaillons</SectionTitle>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
            Notre équipe valorise ses compétences à travers{" "}
            <Link href="/article/les-certifications-symfony-twig-symfony-sylius" className="text-primary hover:underline">
              les certifications Symfony, Twig et Sylius
            </Link>
            , gages de rigueur et d&apos;expertise reconnue.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {methodology.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display font-bold text-dark">
                    {step.title}
                  </h3>
                  <p
                    className="mt-1 text-sm text-gray"
                    dangerouslySetInnerHTML={{ __html: step.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <RelatedLinks links={expertiseRelatedLinks} />
      </FadeIn>

      <FadeIn>
      <CallToAction />
      </FadeIn>
    </main>
    </>
  );
}
