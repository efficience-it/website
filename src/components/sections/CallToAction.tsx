"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { trackEvent } from "@/lib/tracking";

export default function CallToAction() {
  return (
    <section data-cta-section className="bg-primary py-16 md:py-24">
      <Container className="text-center">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Vous avez un projet en tête ?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          Vous souhaitez réaliser un intranet, un progiciel, une application
          d&apos;entreprise ou un site internet complexe ? Efficience IT saura vous
          accompagner au mieux sur vos projets !
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href="/audit-symfony-gratuit"
            variant="white"
            size="lg"
            onClick={() => trackEvent("cta_click", { cta_location: "footer_cta", cta_text: "Audit gratuit 30 min" })}
          >
            Audit gratuit 30 min
          </Button>
          <Button
            href="/contact"
            variant="outline-white"
            size="lg"
            onClick={() => trackEvent("cta_click", { cta_location: "footer_cta", cta_text: "Contactez-nous" })}
          >
            Contactez-nous
          </Button>
        </div>
      </Container>
    </section>
  );
}
