import Button from "@/components/ui/Button";

interface ArticleCtaProps {
  category?: string;
}

const SYMFONY_CATEGORIES = ["Outils", "Formation", "Projet"];

export default function ArticleCta({ category }: ArticleCtaProps) {
  const isSymfony = category && SYMFONY_CATEGORIES.includes(category);

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
