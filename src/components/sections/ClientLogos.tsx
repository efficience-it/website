"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { clients } from "@/../data/clients";

const duplicated = [...clients, ...clients];

export default function ClientLogos() {
  return (
    <section className="bg-light-gray py-16 md:py-24">
      <Container>
        <SectionTitle subtitle="Ils nous font confiance">
          Nos clients
        </SectionTitle>
      </Container>
      <div className="group relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-light-gray to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-light-gray to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-16 py-8 group-hover:[animation-play-state:paused]">
          {duplicated.map((client, i) => (
            <div key={`${client.name}-${i}`} className="flex shrink-0 items-center justify-center">
              <Image
                src={client.logo}
                alt={client.name}
                width={200}
                height={120}
                className="h-20 w-auto object-contain opacity-70 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
      <Container>
        <div className="mt-10 text-center">
          <Button href="/nos-references" variant="primary" size="lg">
            Nos projets
          </Button>
        </div>
      </Container>
    </section>
  );
}
