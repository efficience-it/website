import Container from "@/components/ui/Container";
import TrackedCtaButton from "./TrackedCtaButton";

type CallToActionButton = {
  href: string;
  label: string;
  variant: "white" | "outline-white";
};

interface CallToActionProps {
  title?: string;
  description?: string;
  buttons?: CallToActionButton[];
}

const defaultButtons: CallToActionButton[] = [
  {
    href: "/audit-symfony-gratuit",
    label: "Audit gratuit 30 min",
    variant: "white",
  },
  {
    href: "/contact",
    label: "Contactez-nous",
    variant: "outline-white",
  },
];

export default function CallToAction({
  title = "Vous avez un projet en tête ?",
  description = "Vous souhaitez réaliser un intranet, un progiciel, une application d&apos;entreprise ou un site internet complexe ? Efficience IT saura vous accompagner au mieux sur vos projets !",
  buttons = defaultButtons,
}: Readonly<CallToActionProps>) {
  return (
    <section data-cta-section className="bg-primary py-16 md:py-24">
      <Container className="text-center">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {buttons.map((button) => (
            <TrackedCtaButton
              key={button.href + button.label}
              href={button.href}
              variant={button.variant}
              size="lg"
              location="footer_cta"
              text={button.label}
            >
              {button.label}
            </TrackedCtaButton>
          ))}
        </div>
      </Container>
    </section>
  );
}
