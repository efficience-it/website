import { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <blockquote className="text-gray italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="mt-4 border-t border-border pt-4">
        <p className="font-semibold text-dark">{testimonial.name}</p>
        <p className="text-sm text-gray">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </div>
  );
}
