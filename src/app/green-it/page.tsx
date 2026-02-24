import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { greenMetrics, greenPrinciple, greenPractices } from "@/../data/greenIt";

export const metadata = pageMetadata({
  title: "Green IT",
  description:
    "Engagement RSE d'Efficience IT : 1 jour = 1 arbre planté, zéro papier, énergie renouvelable et développement responsable.",
  path: "/green-it",
});

export default function GreenIt() {
  return (
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
                Green IT
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-gray">
                Efficience IT s&apos;engage dans une démarche responsable visant à
                minimiser l&apos;impact environnemental de nos activités et celles
                de nos clients.
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
          <p className="mt-8 text-center font-display text-lg font-bold text-dark">
            {greenPrinciple}
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="text-center">
          <SectionTitle>Nos objectifs</SectionTitle>
          <Image
            src="/images/green-it/objectifs.webp"
            alt="Objectifs Green IT Efficience IT"
            width={800}
            height={400}
            className="mx-auto rounded-lg"
          />
        </Container>
      </section>

      <section className="bg-light-gray py-16">
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
    </main>
  );
}
