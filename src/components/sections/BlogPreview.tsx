import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function BlogPreview() {
  return (
    <section className="bg-light-gray py-16 md:py-24">
      <Container>
        <SectionTitle subtitle="Nos derniers articles">Blog</SectionTitle>
        <p className="text-center text-gray">
          Les articles seront disponibles prochainement.
        </p>
        <div className="mt-8 text-center">
          <Button href="/blog" variant="outline">
            Voir tous les articles
          </Button>
        </div>
      </Container>
    </section>
  );
}
