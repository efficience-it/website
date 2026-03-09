import Image from "next/image";
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
import CallToAction from "@/components/sections/CallToAction";

export const metadata = pageMetadata({
  title: "Expertise Symfony de référence",
  description:
    "Expertise Symfony de référence : Efficience IT conçoit, développe et maintient des applications web professionnelles, robustes et orientées production.",
  path: "/notre-expertise",
});

export default function NotreExpertise() {
  return (
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                Collaborez avec des experts engagés
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold text-dark md:text-5xl">
                Nos expertises
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-gray">
                Des passionnés à vos côtés, exigeants, curieux et toujours à
                jour. Nous vous accompagnons avec rigueur, en restant à
                l&apos;écoute des évolutions technologiques pour vous proposer
                les solutions les plus adaptées.
              </p>
              <p className="mt-6 text-lg font-semibold text-dark">
                Un projet à construire ensemble ?
              </p>
              <Button href="/contact" className="mt-4">
                Contactez-nous
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/expertise/tech/techs-symfony.png"
                alt="Technologies Symfony"
                width={500}
                height={350}
                className="rounded-lg"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle>Technologies maîtrisées</SectionTitle>
          <div className="grid grid-cols-4 gap-6 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-2">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
                <span className="text-xs font-medium text-dark">{tech.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <SectionTitle>Nos services</SectionTitle>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title}>
                <h3 className="font-display text-xl font-bold text-dark">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray"
                    >
                      <span className="shrink-0 text-primary">&#9679;</span>
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

      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle subtitle="Ce framework est notre cœur de métier. Choisir Symfony, c'est faire le pari de la performance, de la flexibilité et de la pérennité pour vos outils digitaux. Voici pourquoi nous le préconisons :">
            Pourquoi Symfony ?
          </SectionTitle>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-6 [&>*]:lg:col-span-2 lg:[&>*:nth-child(4)]:col-start-2 lg:[&>*:nth-child(5)]:col-start-4">
            {symfonyAdvantages.map((adv) => (
              <Card key={adv.title}>
                <h3 className="font-display text-lg font-bold text-dark">
                  {adv.title}
                </h3>
                <p
                  className="mt-2 text-gray"
                  dangerouslySetInnerHTML={{ __html: adv.description }}
                />
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-light-gray py-16 md:py-24">
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
                  <p
                    className="mt-1 text-sm text-gray"
                    dangerouslySetInnerHTML={{ __html: step.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CallToAction />
    </main>
  );
}
