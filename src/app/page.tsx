import Link from "next/link";
import Hero from "@/components/sections/Hero";
import ExpertiseCards from "@/components/sections/ExpertiseCards";
import AboutPreview from "@/components/sections/AboutPreview";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ClientLogos from "@/components/sections/ClientLogos";
import CallToAction from "@/components/sections/CallToAction";
import BlogPreview from "@/components/sections/BlogPreview";
import Testimonials from "@/components/sections/Testimonials";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

import { pageMetadata } from "@/lib/metadata";
import { webPageJsonLd, reviewsJsonLd, pageGraphJsonLd } from "@/lib/structured-data";
import { testimonials } from "@/../data/testimonials";
import type { Metadata } from "next";

const reviews = reviewsJsonLd(testimonials);

const keyFigures = [
  { value: 10, suffix: "+", label: "Années d'expérience" },
  { value: 150, suffix: "+", label: "Projets livrés" },
  { value: 40, suffix: "+", label: "Clients accompagnés" },
  { value: 500, suffix: "+", label: "Contributions open source" },
];

export const metadata: Metadata = pageMetadata({
  title: "Agence PHP et Symfony, experte en développement web",
  description:
    "Agence spécialisée Symfony et PHP, Efficience IT conçoit et développe des applications web robustes, pensées pour vos enjeux métiers.",
  path: "/",
});

const webPage = webPageJsonLd({
  name: "Agence PHP et Symfony, experte en développement web",
  description:
    "Agence spécialisée Symfony et PHP, Efficience IT conçoit et développe des applications web robustes, pensées pour vos enjeux métiers.",
  path: "/",
  datePublished: "2025-09-01",
  dateModified: "2026-03-11",
});

export default function Home() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraphJsonLd(webPage, reviews)) }} />
    <main>
      <Hero />
      <FadeIn>
        <ClientLogos />
      </FadeIn>
      <FadeIn>
        <ExpertiseCards />
      </FadeIn>
      <FadeIn>
        <AboutPreview />
      </FadeIn>
      <FadeIn>
        <ProcessSteps />
      </FadeIn>
      <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Pourquoi Symfony pour vos projets métier</SectionTitle>
            <div className="mx-auto max-w-3xl space-y-4 text-lg text-gray">
              <p>
                Symfony est le framework PHP de référence pour les applications métier complexes. Sa stabilité, son cycle de releases LTS et son écosystème mature en font le choix naturel des entreprises qui ont besoin d&apos;applications fiables et durables.
              </p>
              <p>
                Contrairement aux solutions généralistes, Symfony offre une{" "}
                <Link href="/architecture-hexagonale-symfony" className="text-primary hover:underline">
                  architecture modulaire
                </Link>
                {" "}qui permet de séparer proprement le code métier de l&apos;infrastructure. Doctrine pour la persistance,{" "}
                <Link href="/article/symfony-messenger-colonne-vertebrale-archi-hexagonale" className="text-primary hover:underline">
                  Messenger pour les traitements asynchrones
                </Link>
                , Security pour l&apos;authentification : chaque composant est conçu pour fonctionner indépendamment et évoluer sans casser l&apos;existant.
              </p>
              <p>
                Notre expertise couvre l&apos;ensemble du cycle de vie de vos applications Symfony : de la{" "}
                <Link href="/api-sur-mesure-symfony" className="text-primary hover:underline">
                  conception d&apos;API sur mesure avec API Platform
                </Link>
                {" "}à la{" "}
                <Link href="/maintenance-applicative-symfony" className="text-primary hover:underline">
                  maintenance applicative
                </Link>
                , en passant par la{" "}
                <Link href="/migration-symfony" className="text-primary hover:underline">
                  migration vers les dernières versions LTS
                </Link>
                . Nous accompagnons aussi vos équipes avec des{" "}
                <Link href="/formation-symfony-entreprise" className="text-primary hover:underline">
                  formations Symfony en entreprise
                </Link>
                .
              </p>
              <p>
                Vous avez un projet existant qui nécessite une reprise en main ? Notre service de{" "}
                <Link href="/reprise-projet-symfony" className="text-primary hover:underline">
                  reprise de projets Symfony
                </Link>
                {" "}est conçu pour remettre sur pied les applications abandonnées ou mal maintenues, avec un{" "}
                <Link href="/audit-symfony-gratuit" className="text-primary hover:underline">
                  audit gratuit de 30 minutes
                </Link>
                {" "}comme point de départ.
              </p>
            </div>
          </Container>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="py-16">
          <Container>
            <SectionTitle>Quelques chiffres</SectionTitle>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {keyFigures.map((figure) => (
                <div key={figure.label} className="text-center">
                  <p className="font-display text-4xl font-bold text-primary">
                    <AnimatedCounter value={figure.value} suffix={figure.suffix} />
                  </p>
                  <p className="mt-2 text-gray">{figure.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </FadeIn>
      <FadeIn>
        <BlogPreview />
      </FadeIn>
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn>
        <CallToAction />
      </FadeIn>
    </main>
    </>
  );
}
