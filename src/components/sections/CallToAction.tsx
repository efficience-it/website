"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
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
          <Link
            href="/audit-symfony-gratuit"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-primary transition-all duration-200 hover:bg-gray-100"
            onClick={() => trackEvent("cta_click", { cta_location: "footer_cta", cta_text: "Audit gratuit 30 min" })}
          >
            Audit gratuit 30 min
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/50 px-8 py-3 text-base font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10"
            onClick={() => trackEvent("cta_click", { cta_location: "footer_cta", cta_text: "Contactez-nous" })}
          >
            Contactez-nous
          </Link>
        </div>
      </Container>
    </section>
  );
}
