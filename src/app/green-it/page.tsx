import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import {
  greenMetrics,
  greenPrinciple,
  greenObjectives,
  greenPractices,
} from "@/../data/greenIt";

export const metadata = pageMetadata({
  title: "Green IT | Démarche numérique responsable – Efficience IT",
  description:
    "Efficience IT s'engage dans une démarche Green IT pour réduire l'impact environnemental du numérique, à travers des pratiques techniques et responsables.",
  path: "/green-it",
  absoluteTitle: true,
});

export default function GreenIt() {
  return (
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wide text-primary">
                Notre engagement RSE
              </p>
              <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
                Green IT
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-gray">
                Efficience IT s&apos;engage dans une démarche responsable visant
                à minimiser l&apos;impact environnemental de nos activités et
                celles de nos clients. Nous adoptons des pratiques propres et
                optimisons nos applications pour minimiser les ressources
                nécessaires.
              </p>
              <p className="mt-4 font-display text-lg font-bold text-dark">
                {greenPrinciple}
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/illustrations/greenit.svg"
                alt="Green IT"
                width={400}
                height={300}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionTitle>
            D&apos;excellents travaux produisent d&apos;excellents résultats
          </SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {greenMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg bg-white p-6 text-center shadow-md"
              >
                <span className="text-4xl">{metric.icon}</span>
                <p className="mt-3 font-display text-2xl font-bold text-primary">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-gray">{metric.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-light-gray py-16">
        <Container>
          <SectionTitle>Nos objectifs</SectionTitle>
          <ul className="mx-auto max-w-2xl space-y-4">
            {greenObjectives.map((objective) => (
              <li
                key={objective}
                className="flex items-start gap-3 text-gray"
              >
                <span className="mt-1 text-primary">&#10003;</span>
                {objective}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center">
            <Image
              src="/images/green-it/objectifs.webp"
              alt="Objectifs Green IT Efficience IT"
              width={800}
              height={400}
              className="rounded-lg"
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionTitle>Nos pratiques durables</SectionTitle>
          <ul className="mx-auto max-w-2xl space-y-4">
            {greenPractices.map((practice) => (
              <li key={practice} className="flex items-start gap-3 text-gray">
                <span className="mt-1 text-primary">&#10003;</span>
                {practice}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-light-gray py-16">
        <Container className="text-center">
          <SectionTitle>Découvrez nos articles Green IT</SectionTitle>
          <p className="mx-auto max-w-2xl text-gray">
            Retrouvez nos articles sur le numérique responsable, la
            décarbonation et l&apos;éco-conception sur notre blog.
          </p>
          <Button href="/blog/green-it" variant="outline" className="mt-6">
            Voir les articles Green IT
          </Button>
        </Container>
      </section>

      <section className="py-16">
        <Container className="text-center">
          <SectionTitle>Envie d&apos;en savoir plus ?</SectionTitle>
          <p className="mx-auto max-w-2xl text-gray">
            Contactez-nous pour en savoir plus sur notre démarche Green IT et
            comment nous pouvons vous accompagner dans vos projets numériques
            responsables.
          </p>
          <Button href="/contact" variant="primary" className="mt-6">
            Contactez-nous !
          </Button>
        </Container>
      </section>
    </main>
  );
}
