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
import FadeIn from "@/components/ui/FadeIn";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title:
    "Developpement e-commerce Sylius : votre boutique Symfony sur mesure",
  description:
    "Efficience IT developpe votre boutique e-commerce avec Sylius, la plateforme open source basee sur Symfony. Solution sur mesure, performante et evolutive.",
  path: "/ecommerce-sylius",
});

const useCases = [
  {
    title: "Boutique e-commerce sur mesure",
    description:
      "Creez une boutique en ligne parfaitement adaptee a vos processus metiers, votre catalogue et vos contraintes specifiques grace a la flexibilite de Sylius.",
  },
  {
    title: "Marketplace multi-vendeurs",
    description:
      "Lancez une marketplace avec gestion multi-vendeurs, commissions et tableaux de bord dedies, en tirant parti de l'architecture modulaire de Sylius.",
  },
  {
    title: "Commerce B2B",
    description:
      "Gerez des catalogues personnalises, des grilles tarifaires par client et des workflows de commande complexes adaptes au B2B.",
  },
  {
    title: "Migration depuis Prestashop ou Magento",
    description:
      "Migrez votre boutique existante vers Sylius pour beneficier d'une base de code moderne, maintenable et basee sur Symfony.",
  },
  {
    title: "Headless commerce",
    description:
      "Utilisez Sylius comme backend e-commerce couple a un front React, Vue ou Next.js pour des experiences utilisateur sur mesure et performantes.",
  },
];

const advantages = [
  {
    title: "100 % open source",
    description:
      "Pas de licence proprietaire ni de vendor lock-in. Vous restez maitre de votre code et de votre plateforme.",
  },
  {
    title: "Ecosysteme Symfony",
    description:
      "Sylius repose sur Symfony : beneficiez de toute la puissance du framework, de ses bundles et de sa communaute.",
  },
  {
    title: "Testable nativement",
    description:
      "Sylius est livre avec une couverture de tests exemplaire. Vos evolutions sont securisees par des tests automatises.",
  },
  {
    title: "Scalable et performant",
    description:
      "L'architecture de Sylius permet de gerer des catalogues volumineux et un trafic eleve sans compromettre les performances.",
  },
];

const faqItems = [
  {
    title: "Quelle est la difference entre Sylius et Prestashop ?",
    content:
      "Sylius est base sur Symfony et offre une architecture moderne, testable et extensible. Prestashop est un CMS e-commerce plus rigide, avec un code legacy qui rend les evolutions complexes. Sylius convient mieux aux projets sur mesure et aux equipes techniques.",
  },
  {
    title: "Sylius convient-il pour un petit catalogue ?",
    content:
      "Oui. Avec Monofony, il est possible d'utiliser les composants Sylius sans la couche e-commerce complete, ce qui permet de demarrer leger et d'evoluer progressivement.",
  },
  {
    title: "Peut-on integrer Sylius avec un ERP ou un CRM existant ?",
    content:
      "Absolument. Grace a API Platform integre dans Sylius et l'ecosysteme Symfony, les integrations avec des ERP, CRM ou outils tiers se font via des API REST ou des connecteurs dedies.",
  },
  {
    title: "Combien coute un projet e-commerce Sylius ?",
    content:
      "Le cout depend de la complexite du projet : catalogue, integrations, design sur mesure. Nous proposons un audit gratuit de 30 minutes pour evaluer vos besoins et vous fournir une estimation realiste.",
  },
  {
    title: "Sylius supporte-t-il le multi-langue et le multi-devise ?",
    content:
      "Oui, nativement. Sylius gere le multi-langue, le multi-devise et le multi-canal sans plugins supplementaires, ce qui en fait une solution ideale pour le commerce international.",
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
  { name: "E-commerce Sylius", path: "/ecommerce-sylius" },
]);

const service = serviceJsonLd({
  name: "Developpement e-commerce Sylius",
  description:
    "Developpement de boutiques e-commerce sur mesure avec Sylius, la plateforme open source basee sur Symfony.",
  path: "/ecommerce-sylius",
});

const webPage = webPageJsonLd({
  name: "Developpement e-commerce Sylius : votre boutique Symfony sur mesure",
  description:
    "Efficience IT developpe votre boutique e-commerce avec Sylius, la plateforme open source basee sur Symfony.",
  path: "/ecommerce-sylius",
  datePublished: "2026-03-13",
  dateModified: "2026-03-13",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "Sylius : la solution e-commerce du framework Symfony",
    description: "Decouvrez pourquoi Sylius est le choix naturel pour le e-commerce Symfony",
    href: "/article/sylius-la-solution-e-commerce-du-framework-symfony",
  },
  {
    title: "Monofony : le guide ultime pour les debutants",
    description: "Utilisez les composants Sylius sans la couche e-commerce complete",
    href: "/article/monofony-le-guide-ultime-pour-les-debutants",
  },
  {
    title: "E-commerce : notre expertise sectorielle",
    description: "Notre accompagnement pour les acteurs du e-commerce",
    href: "/secteur/e-commerce",
  },
  {
    title: "Sylius, documentation officielle",
    description: "La reference technique de la plateforme e-commerce Symfony",
    href: "https://sylius.com/",
    external: true,
  },
];

export default function EcommerceSylius() {
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
                <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
                  Developpement e-commerce Sylius : votre boutique Symfony sur
                  mesure
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  <strong>Sylius</strong> est la plateforme e-commerce open
                  source construite sur <strong>Symfony</strong>. Elle offre une
                  flexibilite totale pour creer des boutiques en ligne adaptees
                  a vos processus metiers, sans les contraintes des CMS
                  traditionnels.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Chez Efficience IT, nous concevons des{" "}
                  <Link
                    href="/developpement-web-sur-mesure"
                    className="text-primary hover:underline"
                  >
                    solutions e-commerce sur mesure
                  </Link>{" "}
                  avec Sylius pour des projets B2C, B2B et marketplace. Notre
                  expertise Symfony garantit un code maintenable, teste et
                  evolutif.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Discuter de votre projet</Button>
                  <Button href="/audit-symfony-gratuit" variant="outline">
                    Audit Symfony gratuit
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex h-64 w-full max-w-md items-center justify-center rounded-2xl bg-primary/10 text-6xl">
                  🛒
                </div>
              </div>
            </div>
          </Container>
        </section>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>
                Des solutions e-commerce Sylius pour chaque besoin
              </SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Que vous lanciez votre premiere boutique ou que vous migriez
                depuis une plateforme existante, Sylius s&apos;adapte a votre
                contexte. Decouvrez nos cas d&apos;usage les plus frequents.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {useCases.map((uc) => (
                  <Card key={uc.title}>
                    <h3 className="font-display text-lg font-bold text-dark">
                      {uc.title}
                    </h3>
                    <p className="mt-2 text-gray">{uc.description}</p>
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
                    Pourquoi choisir Sylius pour votre e-commerce ?
                  </h2>
                  <p className="mt-4 text-lg text-gray">
                    Contrairement aux solutions monolithiques comme Prestashop ou
                    Magento, Sylius adopte une architecture moderne et modulaire.
                    Chaque composant (catalogue, panier, promotions, paiements)
                    est independant et personnalisable. Cette approche permet de
                    construire exactement ce dont vous avez besoin, sans code
                    superflu. Decouvrez en detail{" "}
                    <Link
                      href="/article/sylius-la-solution-e-commerce-du-framework-symfony"
                      className="text-primary hover:underline"
                    >
                      pourquoi Sylius est la solution e-commerce de reference
                      pour Symfony
                    </Link>
                    .
                  </p>
                  <p className="mt-4 text-lg text-gray">
                    En tant que{" "}
                    <Link
                      href="/secteur/e-commerce"
                      className="text-primary hover:underline"
                    >
                      specialistes du secteur e-commerce
                    </Link>
                    , nous accompagnons nos clients sur tout le cycle de vie de
                    leur plateforme : conception, developpement, tests,
                    deploiement et maintenance.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                    L&apos;architecture Sylius : Symfony au service du commerce
                  </h2>
                  <p className="mt-4 text-lg text-gray">
                    Sylius repose sur les composants Symfony : Doctrine pour la
                    persistance, Twig pour le rendu, API Platform pour les API
                    REST. Cette base solide permet aux developpeurs Symfony de se
                    sentir immediatement productifs. Les bundles Symfony
                    s&apos;integrent nativement, et les bonnes pratiques du
                    framework (injection de dependances, event system, services)
                    sont respectees.
                  </p>
                  <p className="mt-4 text-lg text-gray">
                    Pour les projets qui n&apos;ont pas besoin de toute la
                    couche e-commerce, il existe{" "}
                    <Link
                      href="/article/monofony-le-guide-ultime-pour-les-debutants"
                      className="text-primary hover:underline"
                    >
                      Monofony, le starter kit Sylius pour les applications
                      metier
                    </Link>
                    . Cette approche vous permet de beneficier des composants
                    Sylius (grille, ressources, gestion des utilisateurs) sans
                    la partie boutique.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                    De la boutique au deploiement : un accompagnement complet
                  </h2>
                  <p className="mt-4 text-lg text-gray">
                    Notre equipe prend en charge l&apos;ensemble du projet :
                    cadrage fonctionnel, developpement des fonctionnalites sur
                    mesure, integration avec vos outils (ERP, CRM, logistique),
                    mise en place des tests automatises et deploiement en
                    production. Nous concevons des{" "}
                    <Link
                      href="/developpement-web-sur-mesure"
                      className="text-primary hover:underline"
                    >
                      applications web sur mesure
                    </Link>{" "}
                    qui repondent precisement a vos enjeux business.
                  </p>
                </div>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>
                Les avantages de Sylius pour votre projet
              </SectionTitle>
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
          <RelatedLinks links={relatedLinks} />
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
              <h2 className="font-display text-3xl font-bold">
                Pret a lancer votre projet e-commerce Sylius ?
              </h2>
              <p className="mt-4 text-lg text-white/90">
                Reservez un appel de 30 minutes avec notre equipe pour evaluer
                vos besoins et definir la meilleure approche.
              </p>
              <Link
                href="/audit-symfony-gratuit"
                className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
              >
                Demander mon audit gratuit
              </Link>
            </div>
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
