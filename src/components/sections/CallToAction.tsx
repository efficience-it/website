import Container from "@/components/ui/Container";
import TrackedCtaButton from "./TrackedCtaButton";

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
          <TrackedCtaButton
            href="/audit-symfony-gratuit"
            variant="white"
            size="lg"
            location="footer_cta"
            text="Audit gratuit 30 min"
          >
            Audit gratuit 30 min
          </TrackedCtaButton>
          <TrackedCtaButton
            href="/contact"
            variant="outline-white"
            size="lg"
            location="footer_cta"
            text="Contactez-nous"
          >
            Contactez-nous
          </TrackedCtaButton>
        </div>
      </Container>
    </section>
  );
}
