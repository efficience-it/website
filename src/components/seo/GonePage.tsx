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
      </Container>
    </main>
  );
}
