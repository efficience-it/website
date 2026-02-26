import { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="relative rounded-lg border-l-4 border-l-amber-400 bg-white p-6 shadow-md">
      <span className="absolute -top-3 left-4 text-5xl leading-none text-amber-400">
        &ldquo;
      </span>
      <blockquote className="mt-4 text-gray">
        {testimonial.quote}
      </blockquote>
      <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-white">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-dark">{testimonial.name}</p>
          <p className="text-sm text-gray">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
