import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CallToAction from "@/components/sections/CallToAction";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import FadeIn from "@/components/ui/FadeIn";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title:
    "Agence e-commerce Symfony et Sylius : développement sur mesure",
  description:
    "Efficience IT développe des plateformes e-commerce performantes avec Symfony et Sylius : catalogue produit, API headless, intégration PIM/ERP et scalabilité.",
  path: "/secteur/e-commerce",
});

const expertises = [
  {
    title: "Sylius sur mesure",
    description:
      "Sylius est la plateforme e-commerce open source bâtie sur Symfony. Nous l'adaptons à vos besoins métier : catalogue complexe, promotions, multi-devises, gestion de stock avancée. Un socle robuste que l'on personnalise sans le dénaturer.",
    icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
  },
  {
    title: "API headless commerce",
    description:
      "Découplage front/back avec API Platform pour alimenter un front React, Next.js ou une application mobile. Vous gardez toute la puissance de Symfony côté métier, avec la liberté de choisir votre stack front.",
    icon: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
  },
  {
    title: "Intégration PIM/ERP",
    description:
      "Connexion de votre plateforme e-commerce à votre PIM (Akeneo, Pimcore), votre ERP (SAP, Sage, Cegid) et vos outils logistiques. Des flux bidirectionnels fiables grâce à Symfony Messenger et des connecteurs sur mesure.",
    icon: "M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
  },
  {
    title: "Performance et scalabilité",
    description:
      "Cache HTTP, CDN, optimisation des requêtes Doctrine, files d'attente asynchrones pour les imports catalogue. Votre plateforme encaisse les pics de trafic sans broncher, même pendant les soldes.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
  },
];

const references = [
  { name: "Decathlon", image: "/images/clients/decathlon.webp" },
  { name: "Carter Cash", image: "/images/clients/carter-cash.webp" },
  { name: "Mecatechnic", image: "/images/clients/macatechnic.webp" },
];

const faqItems = [
  {
    title: "Pourquoi choisir Sylius plutôt que Prestashop ou Magento ?",
    content:
      "Sylius est construit sur Symfony, ce qui permet une personnalisation illimitée sans les contraintes d'un CMS e-commerce classique. Contrairement à Prestashop ou Magento, chaque composant est remplaçable et testable. C'est le choix idéal pour les projets e-commerce avec des règles métier complexes.",
  },
  {
    title: "Pouvez-vous reprendre un projet e-commerce existant ?",
    content:
      "Oui. Nous réalisons un audit technique pour évaluer l'état du code, de l'architecture et des performances. Que ce soit un Sylius, un Symfony custom ou même une migration depuis Prestashop, nous définissons un plan d'action pour reprendre le projet en main.",
  },
  {
    title: "Comment gérez-vous les pics de charge (soldes, Black Friday) ?",
    content:
      "Nous concevons l'architecture pour supporter les montées en charge : cache multi-niveaux (Varnish, Redis), traitements asynchrones avec Messenger, auto-scaling de l'infrastructure. Les imports catalogue et les envois d'emails sont déchargés en file d'attente pour ne pas impacter les performances du site.",
  },
  {
    title: "Proposez-vous du headless commerce ?",
    content:
      "Oui, c'est même une de nos spécialités. API Platform permet d'exposer l'ensemble du catalogue, du panier et du checkout en API REST ou GraphQL. Votre front peut être un Next.js, un Nuxt.js ou une application mobile, tout en bénéficiant de la robustesse de Symfony côté back.",
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
  { name: "E-commerce", path: "/secteur/e-commerce" },
]);

const service = serviceJsonLd({
  name: "Développement e-commerce Symfony et Sylius",
  description:
    "Conception et développement de plateformes e-commerce sur mesure avec Symfony et Sylius : catalogue produit, API headless, intégration PIM/ERP et scalabilité.",
  path: "/secteur/e-commerce",
});

const webPage = webPageJsonLd({
  name: "Agence e-commerce Symfony et Sylius : développement sur mesure",
  description:
    "Efficience IT développe des plateformes e-commerce performantes avec Symfony et Sylius : catalogue produit, API headless, intégration PIM/ERP et scalabilité.",
  path: "/secteur/e-commerce",
  datePublished: "2026-03-12",
  dateModified: "2026-03-12",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "Sylius : la solution e-commerce Symfony",
    description:
      "Découvrez pourquoi Sylius est le choix idéal pour un e-commerce sur mesure",
    href: "/article/sylius-la-solution-e-commerce-du-framework-symfony",
  },
  {
    title: "Monofony : le guide pour les débutants",
    description:
      "Démarrer un projet Symfony avec le socle e-commerce Sylius",
    href: "/article/monofony-le-guide-ultime-pour-les-debutants",
  },
  {
    title: "API REST : les bonnes pratiques",
    description:
      "Concevoir des API robustes pour votre plateforme headless",
    href: "/article/api-rest-les-bonnes-pratiques",
  },
  {
    title: "Développement e-commerce Sylius",
    description:
      "Notre offre dédiée au développement de boutiques Sylius sur mesure",
    href: "/ecommerce-sylius",
  },
  {
    title: "Sylius, site officiel",
    description: "Plateforme e-commerce open source basée sur Symfony",
    href: "https://sylius.com/",
    external: true,
  },
  {
    title: "API Platform",
    description: "Framework pour créer des API modernes en PHP",
    href: "https://api-platform.com/",
    external: true,
  },
];

export default function SecteurEcommerce() {
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
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Secteur e-commerce
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Agence e-commerce Symfony et Sylius : développement sur mesure
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre catalogue compte des milliers de références, vos règles
                  de promotions sont complexes, et votre SI doit communiquer avec
                  votre PIM, votre ERP et votre logistique. Les solutions
                  e-commerce standards ne suffisent plus.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT conçoit des{" "}
                  <strong>plateformes e-commerce sur mesure</strong> avec{" "}
                  <Link
                    href="/ecommerce-sylius"
                    className="text-primary hover:underline"
                  >
                    Sylius
                  </Link>{" "}
                  et Symfony. Un socle open source solide, personnalisé pour
                  répondre à vos enjeux métier spécifiques.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/audit-symfony-gratuit">
                    Demander un audit gratuit
                  </Button>
                  <Button href="/contact" variant="outline">
                    Contactez-nous
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
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
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
            <SectionTitle>Notre expertise e-commerce</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Du catalogue produit au checkout, en passant par les intégrations
              tierces, nous maîtrisons toute la chaîne de valeur e-commerce.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {expertises.map((item) => (
                <Card key={item.title}>
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
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray">{item.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Pourquoi Symfony pour le e-commerce</SectionTitle>
            <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg text-gray">
              <p>
                Les CMS e-commerce génériques (Prestashop, Magento, Shopify)
                fonctionnent bien pour des boutiques standards. Mais quand vos
                règles métier sortent du cadre, vous passez plus de temps à
                contourner le framework qu&apos;à développer votre produit.
              </p>
              <p>
                Avec Sylius et Symfony, chaque composant est découplé et
                remplaçable. Notre{" "}
                <Link
                  href="/api-sur-mesure-symfony"
                  className="text-primary hover:underline"
                >
                  expertise API sur mesure
                </Link>{" "}
                permet de découpler le front du back pour des architectures
                headless performantes. Vous avez un
                système de promotions complexe ? On le code sur mesure. Un
                catalogue avec des variantes en cascade ? On modélise le domaine
                exactement comme votre métier le requiert.
              </p>
              <p>
                Notre équipe est{" "}
                <Link
                  href="/agence-symfony-lille"
                  className="text-primary hover:underline"
                >
                  spécialisée Symfony
                </Link>{" "}
                et certifiée. Nous maîtrisons les composants Symfony en
                profondeur : Messenger pour les traitements asynchrones,
                Workflow pour les machines à états, Security pour la gestion
                des droits. Et grâce à notre offre d&apos;
                <Link
                  href="/hebergement-symfony"
                  className="text-primary hover:underline"
                >
                  hébergement Symfony
                </Link>
                , votre plateforme tient la charge même pendant les pics de
                trafic.
              </p>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Ils nous font confiance</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Des acteurs majeurs du commerce nous confient leurs projets
              e-commerce.
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-8">
              {references.map((client) => (
                <div
                  key={client.name}
                  className="overflow-hidden rounded-lg shadow-sm"
                >
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={600}
                    height={400}
                    className="aspect-[3/2] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Votre projet e-commerce mérite une expertise Symfony
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Discutons de votre projet lors d&apos;un audit gratuit de 30
              minutes. Nous analysons votre besoin et vous proposons une
              architecture adaptée.
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
        <RelatedLinks links={relatedLinks} />
        </FadeIn>

        <FadeIn>
        <CallToAction />
        <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}
