import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  technologies,
  services,
  symfonyAdvantages,
  methodology,
} from "@/../data/expertise";

export const metadata = pageMetadata({
  title: "Nos expertises",
  description:
    "Développement web sur mesure, Cloud & DevOps, accompagnement et conseil. Découvrez les expertises d'Efficience IT.",
  path: "/notre-expertise",
});

export default function NotreExpertise() {
  return (
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
            Collaborez avec des experts engagés
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-dark md:text-5xl">
            Nos expertises
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray">
            Des passionnés à vos côtés, exigeants, curieux et toujours à jour.
            Nous vous accompagnons avec rigueur, en restant à l&apos;écoute des
            évolutions technologiques pour vous proposer les solutions les plus
            adaptées.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionTitle>Technologies maîtrisées</SectionTitle>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-light-gray px-4 py-2 text-sm font-medium text-dark"
              >
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-light-gray py-16">
        <Container>
          <SectionTitle>Nos services</SectionTitle>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title}>
                <h3 className="font-display text-xl font-bold text-dark">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray">
                      <span className="mt-1 text-primary">&#9679;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  href={service.slug}
                  variant="ghost"
                  size="sm"
                  className="mt-4"
                >
                  En savoir plus &rarr;
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionTitle subtitle="Ce framework est notre cœur de métier">
            Pourquoi Symfony ?
          </SectionTitle>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {symfonyAdvantages.map((adv) => (
              <div key={adv.title} className="rounded-lg border border-border p-6">
                <h3 className="font-display font-bold text-dark">
                  {adv.title}
                </h3>
                <p className="mt-2 text-sm text-gray">{adv.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-light-gray py-16">
        <Container>
          <SectionTitle>Comment nous travaillons</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {methodology.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display font-bold text-dark">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
