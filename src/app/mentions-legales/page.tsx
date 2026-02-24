import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";

export const metadata = pageMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site Efficience IT.",
  path: "/mentions-legales",
});

export default function MentionsLegales() {
  return (
    <main className="py-16">
      <Container className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-dark md:text-4xl">
          Mentions légales
        </h1>

        <div className="mt-8 space-y-8 text-gray">
          <section>
            <h2 className="font-display text-xl font-bold text-dark">
              Éditeur du site
            </h2>
            <p className="mt-2">
              Le site https://www.itefficience.com est édité par la société
              Efficience IT SAS, enregistrée au RCS de Lille sous le SIRET 839
              527 900, TVA FR 52 839527900.
            </p>
            <p className="mt-2">
              Siège social : 7 Rue du petit Mesnil, 59390
              Sailly-Lez-Lannoy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-dark">
              Responsabilité
            </h2>
            <p className="mt-2">
              L&apos;entreprise s&apos;efforce d&apos;assurer la disponibilité
              continue du site, mais ne pourra être tenue responsable en cas
              d&apos;indisponibilité du site, pour quelque cause que ce soit.
              Elle met en œuvre des moyens pour proposer des contenus vérifiés
              sans garantir l&apos;absence totale d&apos;erreurs ou de
              défaillances techniques.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-dark">
              Données personnelles
            </h2>
            <p className="mt-2">
              Efficience IT agit comme responsable de traitement. Les données
              collectées via formulaires servent à répondre aux demandes
              utilisateurs. Conformément à la loi Informatique et libertés et au
              RGPD, les utilisateurs disposent de droits d&apos;accès, de
              rectification, d&apos;effacement et d&apos;opposition auprès du
              DPO (contact@itefficience.com).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-dark">
              Liens hypertextes
            </h2>
            <p className="mt-2">
              Les liens profonds vers le site nécessitent une autorisation
              écrite préalable. Toute reproduction de contenu ou mise en place de
              lien doit être demandée par courrier électronique.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-dark">
              Droit applicable
            </h2>
            <p className="mt-2">
              L&apos;application et les activités de Efficience IT sont régies
              par le droit français. Seuls les tribunaux français sont compétents
              en cas de litige.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
