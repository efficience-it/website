import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import RotatingKeywords from "@/components/ui/RotatingKeywords";
import SourceCodeIllustration from "@/components/illustrations/SourceCodeIllustration";

const keywords = [
  "Migration",
  "Performance",
  "Maintenance",
  "Architecture",
  "API",
  "Sécurité",
];

export default function Hero() {
  return (
    <section className="bg-linear-to-br from-light-gray via-white to-primary/5 py-20 md:py-32 dark:to-primary/10">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-bold text-dark md:text-5xl lg:text-6xl">
              Agence PHP et Symfony, experte en développement web
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray md:text-xl">
              Votre application Symfony mérite mieux. On la stabilise, la migre et la rend maintenable.
            </p>
            <p className="mt-3 max-w-2xl text-base text-gray">
              Depuis plus de 10 ans, nous accompagnons les PME, ETI et startups dans le développement, la modernisation et la maintenance de leurs applications PHP. Une équipe dédiée, un interlocuteur technique unique, des livraisons régulières.
            </p>
            <div className="mt-4 flex items-center gap-2 text-lg font-medium text-dark">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              <RotatingKeywords keywords={keywords} />
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/audit-symfony-gratuit" size="lg">
                Demander mon audit gratuit
              </Button>
              <Button href="/notre-expertise" variant="outline" size="lg">
                Nos services
              </Button>
            </div>
          </div>
          <div className="hidden justify-center md:flex">
            <SourceCodeIllustration
              className="h-96 w-full"
              aria-label="Illustration d'écran de code source représentant le développement web sur mesure"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
