import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonials } from "@/../data/testimonials";
import { reviewsJsonLd } from "@/lib/structured-data";

const reviews = reviewsJsonLd(testimonials);

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviews) }}
      />
      <Container>
        <SectionTitle subtitle="Ce que nos clients disent de nous">
          Témoignages
        </SectionTitle>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
