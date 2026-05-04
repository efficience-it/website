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
import Breadcrumb from "@/components/ui/Breadcrumb";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd, pageGraphJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title:
    "Développement e-commerce Sylius : votre boutique Symfony sur mesure",
  description:
    "Efficience IT développe votre boutique e-commerce avec Sylius, la plateforme open source Symfony. Solution adaptée, performante et évolutive.",
  path: "/ecommerce-sylius",
});

const useCases = [
  {
    title: "Boutique e-commerce personnalisée",
    description:
      "Créez une boutique en ligne parfaitement adaptée à vos processus métiers, votre catalogue et vos contraintes spécifiques grâce à la flexibilité de Sylius.",
  },
  {
    title: "Marketplace multi-vendeurs",
    description:
      "Lancez une marketplace avec gestion multi-vendeurs, commissions et tableaux de bord dédiés, en tirant parti de l'architecture modulaire de Sylius.",
  },
  {
    title: "Commerce B2B",
    description:
      "Gérez des catalogues personnalisés, des grilles tarifaires par client et des workflows de commande complexes adaptés au B2B.",
  },
  {
    title: "Migration depuis Prestashop ou Magento",
    description:
      "Migrez votre boutique existante vers Sylius pour bénéficier d'une base de code moderne, maintenable et basée sur Symfony.",
  },
  {
    title: "Headless commerce",
    description:
      "Utilisez Sylius comme backend e-commerce couplé à un front React, Vue ou Next.js pour des expériences utilisateur personnalisées et performantes.",
  },
];

const advantages = [
  {
    title: "100 % open source",
    description:
      "Pas de licence propriétaire ni de vendor lock-in. Vous restez maître de votre code et de votre plateforme.",
  },
  {
    title: "Écosystème Symfony",
    description:
      "Sylius repose sur Symfony : bénéficiez de toute la puissance du framework, de ses bundles et de sa communauté.",
  },
  {
    title: "Testable nativement",
    description:
      "Sylius est livré avec une couverture de tests exemplaire. Vos évolutions sont sécurisées par des tests automatisés.",
  },
  {
    title: "Scalable et performant",
    description:
      "L'architecture de Sylius permet de gérer des catalogues volumineux et un trafic élevé sans compromettre les performances.",
  },
];

const faqItems = [
  {
    title: "Quelle est la différence entre Sylius et Prestashop ?",
    content:
      "Sylius est basé sur Symfony et offre une architecture moderne, testable et extensible. Prestashop est un CMS e-commerce plus rigide, avec un code legacy qui rend les évolutions complexes. Sylius convient mieux aux projets sur mesure et aux équipes techniques.",
  },
  {
    title: "Sylius convient-il pour un petit catalogue ?",
    content:
      "Oui. Avec Monofony, il est possible d'utiliser les composants Sylius sans la couche e-commerce complète, ce qui permet de démarrer léger et d'évoluer progressivement.",
  },
  {
    title: "Peut-on intégrer Sylius avec un ERP ou un CRM existant ?",
    content:
      "Absolument. Grâce à API Platform intégré dans Sylius et l'écosystème Symfony, les intégrations avec des ERP, CRM ou outils tiers se font via des API REST ou des connecteurs dédiés.",
  },
  {
    title: "Combien coûte un projet e-commerce Sylius ?",
    content:
      "Le coût dépend de la complexité du projet : catalogue, intégrations, design sur mesure. Nous proposons un audit gratuit de 30 minutes pour évaluer vos besoins et vous fournir une estimation réaliste.",
  },
  {
    title: "Sylius supporte-t-il le multi-langue et le multi-devise ?",
    content:
      "Oui, nativement. Sylius gère le multi-langue, le multi-devise et le multi-canal sans plugins supplémentaires, ce qui en fait une solution idéale pour le commerce international.",
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
  name: "Développement e-commerce Sylius",
  description:
    "Développement de boutiques e-commerce avec Sylius, la plateforme open source basée sur Symfony.",
  path: "/ecommerce-sylius",
  mainTech: ["sylius","symfony","php"],
});

const webPage = webPageJsonLd({
  name: "Développement e-commerce Sylius : votre boutique Symfony sur mesure",
  description:
    "Efficience IT développe votre boutique e-commerce avec Sylius, la plateforme open source basée sur Symfony.",
  path: "/ecommerce-sylius",
  datePublished: "2026-03-13",
  dateModified: "2026-03-13",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "Sylius : la solution e-commerce du framework Symfony",
    description: "Découvrez pourquoi Sylius est le choix naturel pour le e-commerce Symfony",
    href: "/article/sylius-la-solution-e-commerce-du-framework-symfony",
  },
  {
    title: "Monofony : le guide ultime pour les débutants",
    description: "Utilisez les composants Sylius sans la couche e-commerce complète",
    href: "/article/monofony-le-guide-ultime-pour-les-debutants",
  },
  {
    title: "E-commerce : notre expertise sectorielle",
    description: "Notre accompagnement pour les acteurs du e-commerce",
    href: "/secteur/e-commerce",
  },
  {
    title: "Sylius, documentation officielle",
    description: "La référence technique de la plateforme e-commerce Symfony",
    href: "https://sylius.com/",
    external: true,
  },
];

export default function EcommerceSylius() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraphJsonLd(breadcrumb, service, faqJsonLd, webPage)) }} />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <Breadcrumb items={[{ label: "E-commerce Sylius" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
                  Développement e-commerce Sylius : votre boutique Symfony sur
                  mesure
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  <strong>Sylius</strong> est la plateforme e-commerce open
                  source construite sur <strong>Symfony</strong>. Elle offre une
                  flexibilité totale pour créer des boutiques en ligne adaptées
                  à vos processus métiers, sans les contraintes des CMS
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
                  expertise Symfony garantit un code maintenable, testé et
                  évolutif.
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
                Que vous lanciez votre première boutique ou que vous migriez
                depuis une plateforme existante, Sylius s&apos;adapte à votre
                contexte. Découvrez nos cas d&apos;usage les plus fréquents.
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
                    est indépendant et personnalisable. Cette approche permet de
                    construire exactement ce dont vous avez besoin, sans code
                    superflu. Découvrez en détail{" "}
                    <Link
                      href="/article/sylius-la-solution-e-commerce-du-framework-symfony"
                      className="text-primary hover:underline"
                    >
                      pourquoi Sylius est la solution e-commerce de référence
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
                      spécialistes du secteur e-commerce
                    </Link>
                    , nous accompagnons nos clients sur tout le cycle de vie de
                    leur plateforme : conception, développement, tests,
                    déploiement et maintenance.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                    L&apos;architecture Sylius : Symfony au service du commerce
                  </h2>
                  <p className="mt-4 text-lg text-gray">
                    Sylius repose sur les composants Symfony : Doctrine pour la
                    persistance, Twig pour le rendu,{" "}
                    <Link
                      href="/api-sur-mesure-symfony"
                      className="text-primary hover:underline"
                    >
                      API Platform pour les API REST
                    </Link>
                    . Cette base solide permet aux développeurs Symfony de se
                    sentir immédiatement productifs. Les bundles Symfony
                    s&apos;intègrent nativement, et les bonnes pratiques du
                    framework (injection de dépendances, event system, services)
                    sont respectées.
                  </p>
                  <p className="mt-4 text-lg text-gray">
                    Pour les projets qui n&apos;ont pas besoin de toute la
                    couche e-commerce, il existe{" "}
                    <Link
                      href="/article/monofony-le-guide-ultime-pour-les-debutants"
                      className="text-primary hover:underline"
                    >
                      Monofony, le starter kit Sylius pour les applications
                      métier
                    </Link>
                    . Cette approche vous permet de bénéficier des composants
                    Sylius (grille, ressources, gestion des utilisateurs) sans
                    la partie boutique.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                    De la boutique au déploiement : un accompagnement complet
                  </h2>
                  <p className="mt-4 text-lg text-gray">
                    Notre équipe prend en charge l&apos;ensemble du projet :
                    cadrage fonctionnel, développement des fonctionnalités
                    dédiées, intégration avec vos outils (ERP, CRM, logistique),
                    mise en place des tests automatisés et{" "}
                    <Link
                      href="/hebergement-symfony"
                      className="text-primary hover:underline"
                    >
                      déploiement en production
                    </Link>
                    . Nous concevons des{" "}
                    <Link
                      href="/developpement-web-sur-mesure"
                      className="text-primary hover:underline"
                    >
                      applications web sur mesure
                    </Link>{" "}
                    qui répondent précisément à vos enjeux business.
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
              <h2 className="font-display text-3xl font-bold">
                Prêt à lancer votre projet e-commerce Sylius ?
              </h2>
              <p className="mt-4 text-lg text-white/90">
                Réservez un appel de 30 minutes avec notre équipe pour évaluer
                vos besoins et définir la meilleure approche.
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
