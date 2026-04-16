import Link from "next/link";
import Container from "@/components/ui/Container";

export default function GonePage() {
  return (
    <main className="py-24">
      <Container className="text-center">
        <h1 className="font-display text-4xl font-bold text-dark">
          410 - Page supprimée
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-gray">
          Cette page a été définitivement retirée. Le contenu n&apos;est plus
          disponible.
        </p>
        <Link
          href="/blog"
          className="mt-8 inline-block font-semibold text-primary hover:underline"
        >
          Retour au blog →
        </Link>
        <section className="mx-auto mt-12 max-w-3xl rounded-lg border border-border bg-light-gray p-8 text-left">
          <h2 className="font-display text-2xl font-bold text-dark">
            Découvrez plutôt
          </h2>
          <ul className="mt-6 space-y-4">
            <li>
              <Link
                href="/blog"
                className="font-semibold text-primary hover:underline"
              >
                Parcourir tous nos articles
              </Link>
            </li>
            <li>
              <Link
                href="/article/7-bonnes-raisons-de-rejoindre-efficience-it"
                className="font-semibold text-primary hover:underline"
              >
                7 bonnes raisons de rejoindre Efficience IT
              </Link>
            </li>
            <li>
              <Link
                href="/article/les-6-etapes-pour-monter-en-competences-sur-symfony"
                className="font-semibold text-primary hover:underline"
              >
                Les 6 étapes pour monter en compétences sur Symfony
              </Link>
            </li>
          </ul>
        </section>
      </Container>
    </main>
  );
}
