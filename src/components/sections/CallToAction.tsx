import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CallToAction() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <Container className="text-center">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Vous avez un projet en tête ?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
          Vous souhaitez réaliser un intranet, progiciel, une application
          entreprise ou un site internet complexe ? Efficience IT saura vous
          accompagner au mieux sur vos projets !
        </p>
        <Button
          href="/contact"
          variant="outline"
          size="lg"
          className="mt-8 border-white text-white hover:bg-white hover:text-primary"
        >
          Contactez-nous
        </Button>
      </Container>
    </section>
  );
}
