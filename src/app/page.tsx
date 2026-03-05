import Hero from "@/components/sections/Hero";
import ExpertiseCards from "@/components/sections/ExpertiseCards";
import AboutPreview from "@/components/sections/AboutPreview";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ClientLogos from "@/components/sections/ClientLogos";
import CallToAction from "@/components/sections/CallToAction";
import BlogPreview from "@/components/sections/BlogPreview";
import Testimonials from "@/components/sections/Testimonials";

import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Efficience IT — Conseil & Solutions Informatiques",
  description: "Votre partenaire IT pour optimiser vos systèmes...",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <main>
      <Hero />
      <ExpertiseCards />
      <AboutPreview />
      <ProcessSteps />
      <ClientLogos />
      <CallToAction />
      <BlogPreview />
      <Testimonials />
    </main>
  );
}
