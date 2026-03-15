import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function AuditCallToAction() {
  return (
    <section data-cta-section className="bg-primary py-16 md:py-24">
      <Container className="text-center">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Votre application Symfony a besoin d&apos;un check-up ?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          Profitez d&apos;un audit technique gratuit de 30 minutes :
          architecture, dette technique, performance et stratégie de migration.
          Sans engagement.
        </p>
        <Button
          href="/audit-symfony-gratuit"
          variant="outline-white"
          size="lg"
          className="mt-8"
        >
          Demander mon audit gratuit
        </Button>
      </Container>
    </section>
  );
}
