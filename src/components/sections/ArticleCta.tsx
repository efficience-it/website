import Button from "@/components/ui/Button";

interface ArticleCtaProps {
  category?: string;
  slug?: string;
}

const SYMFONY_CATEGORIES = ["Outils", "Formation", "Projet"];

const MIGRATION_SLUGS = [
  "guide-de-migration-dans-un-projet-symfony",
  "migration-symfony-architecture-hexagonale-retour-mission",
  "la-dette-technique-faut-il-vraiment-en-avoir-peur",
  "claude-assistant-architecture-symfony-legacy",
  "symfony-ai-projet-legacy-retour-experience",
  "rector-et-ses-pouvoirs-maitrisez-levolution-de-votre-code-symfony",
];

const REPRISE_SLUGS = [
  "claude-assistant-architecture-symfony-legacy",
  "symfony-ai-projet-legacy-retour-experience",
];

export default function ArticleCta({ category, slug }: ArticleCtaProps) {
  const isSymfony = category && SYMFONY_CATEGORIES.includes(category);
  const isMigration = slug && MIGRATION_SLUGS.includes(slug);
  const isReprise = slug && REPRISE_SLUGS.includes(slug);

  if (isMigration) {
    return (
      <div className="mt-12 rounded-lg bg-primary/5 p-8 text-center">
        <p className="font-display text-xl font-bold text-dark">
          Vous faites face a un projet legacy ou une migration PHP ?
        </p>
        <p className="mx-auto mt-2 max-w-lg text-gray">
          {isReprise
            ? "Notre offre de reprise de projet Symfony vous permet de reprendre le controle rapidement, avec un audit honnete et une stabilisation progressive."
            : "Notre offre de modernisation d'application PHP accompagne la migration de votre base de code vers Symfony, etape par etape et sans interruption de service."}
        </p>
        <Button
          href={isReprise ? "/reprise-projet-symfony" : "/modernisation-application-php"}
          className="mt-4"
        >
          {isReprise ? "Decouvrir notre offre de reprise" : "Decouvrir notre offre de modernisation"}
        </Button>
      </div>
    );
  }

  if (isSymfony) {
    return (
      <div className="mt-12 rounded-lg bg-primary/5 p-8 text-center">
        <p className="font-display text-xl font-bold text-dark">
          Votre application Symfony mérite un regard expert
        </p>
        <p className="mx-auto mt-2 max-w-lg text-gray">
          Profitez d&apos;un audit technique gratuit de 30 minutes :
          architecture, dette technique, performance et stratégie de migration.
        </p>
        <Button href="/audit-symfony-gratuit" className="mt-4">
          Demander mon audit gratuit
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-12 rounded-lg bg-primary/5 p-8 text-center">
      <p className="font-display text-xl font-bold text-dark">
        Un projet, une question ?
      </p>
      <p className="mx-auto mt-2 max-w-lg text-gray">
        Échangeons sur vos besoins. Notre équipe vous répond sous 48h.
      </p>
      <Button href="/contact" className="mt-4">
        Contactez-nous
      </Button>
    </div>
  );
}
