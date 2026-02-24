import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { clients } from "@/../data/clients";

export default function ClientLogos() {
  return (
    <section className="bg-light-gray py-16 md:py-24">
      <Container>
        <SectionTitle subtitle="Ils nous font confiance">
          Nos clients
        </SectionTitle>
        <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center">
              <Image
                src={client.logo}
                alt={client.name}
                width={200}
                height={120}
                className="h-24 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
