import Hero from "@/components/sections/Hero";
import ExpertiseCards from "@/components/sections/ExpertiseCards";
import AboutPreview from "@/components/sections/AboutPreview";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ClientLogos from "@/components/sections/ClientLogos";
import CallToAction from "@/components/sections/CallToAction";
import AuditCallToAction from "@/components/sections/AuditCallToAction";
import BlogPreview from "@/components/sections/BlogPreview";
import Testimonials from "@/components/sections/Testimonials";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { pageMetadata } from "@/lib/metadata";
import { webPageJsonLd } from "@/lib/structured-data";
import type { Metadata } from "next";

const keyFigures = [
  { value: "10+", label: "Années d'expérience" },
  { value: "150+", label: "Projets livrés" },
  { value: "40+", label: "Clients accompagnés" },
  { value: "500+", label: "Contributions open source" },
];

export const metadata: Metadata = pageMetadata({
  title: "Agence Symfony à Lille, experte en développement web",
  description:
    "Agence spécialisée Symfony et PHP, Efficience IT conçoit et développe des applications web sur mesure, robustes et adaptées aux enjeux métiers.",
  path: "/",
});

const webPage = webPageJsonLd({
  name: "Agence Symfony à Lille, experte en développement web",
  description:
    "Agence spécialisée Symfony et PHP, Efficience IT conçoit et développe des applications web sur mesure, robustes et adaptées aux enjeux métiers.",
  path: "/",
  datePublished: "2025-09-01",
  dateModified: "2026-03-11",
});

export default function Home() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
    />
    <main>
      <Hero />
      <ExpertiseCards />
      <AboutPreview />
      <ProcessSteps />
      <ClientLogos />
      <section className="py-16">
        <Container>
          <SectionTitle>Quelques chiffres</SectionTitle>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {keyFigures.map((figure) => (
              <div key={figure.label} className="text-center">
                <p className="font-display text-4xl font-bold text-primary">{figure.value}</p>
                <p className="mt-2 text-gray">{figure.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CallToAction />
      <BlogPreview />
      <Testimonials />
      <AuditCallToAction />
    </main>
    </>
  );
}
