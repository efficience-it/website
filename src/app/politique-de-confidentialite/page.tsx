import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";

export const metadata = pageMetadata({
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles du site Efficience IT.",
  path: "/politique-de-confidentialite",
});

export default function PolitiqueDeConfidentialite() {
  return (
    <main className="py-16">
      <Container className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-dark md:text-4xl">
          Politique de confidentialité
        </h1>

        <div className="mt-8 space-y-8 text-gray">
          <section>
            <h2 className="font-display text-xl font-bold text-dark">
              Responsable du traitement
            </h2>
            <p className="mt-2">
              Le responsable du traitement des données collectées sur le site
              https://www.itefficience.com est la société Efficience IT SAS,
              dont le siège social est situé au 7 Rue du petit Mesnil, 59390
              Sailly-Lez-Lannoy (SIRET 839 527 900).
            </p>
            <p className="mt-2">
              Contact : contact@itefficience.com
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-dark">
              Données collectées
            </h2>
            <p className="mt-2">
              Les données personnelles collectées sur ce site sont les
              suivantes :
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>
                <strong>Formulaire de contact :</strong> nom, adresse e-mail,
                numéro de téléphone (facultatif), message.
              </li>
              <li>
                <strong>Navigation :</strong> données techniques (adresse IP,
                navigateur, pages consultées) via les journaux serveur.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-dark">
              Finalités du traitement
            </h2>
            <p className="mt-2">
              Les données collectées sont utilisées pour :
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Répondre aux demandes envoyées via le formulaire de contact.</li>
              <li>Assurer le bon fonctionnement et la sécurité du site.</li>
              <li>Produire des statistiques anonymes de fréquentation.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-dark">
              Base légale
            </h2>
            <p className="mt-2">
              Le traitement des données repose sur l&apos;intérêt légitime
              d&apos;Efficience IT (répondre aux demandes, sécuriser le site) et
              sur le consentement de l&apos;utilisateur lorsqu&apos;il soumet le
              formulaire de contact.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-dark">
              Durée de conservation
            </h2>
            <p className="mt-2">
              Les données issues du formulaire de contact sont conservées pendant
              une durée maximale de 3 ans à compter du dernier échange. Les
              journaux serveur sont conservés pendant 12 mois.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-dark">
              Cookies
            </h2>
            <p className="mt-2">
              Ce site utilise uniquement des cookies techniques nécessaires à son
              bon fonctionnement. Aucun cookie publicitaire ou de traçage
              n&apos;est déposé sans consentement préalable.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-dark">
              Partage des données
            </h2>
            <p className="mt-2">
              Les données personnelles ne sont ni vendues, ni cédées à des
              tiers. Elles peuvent être transmises à des sous-traitants
              techniques (hébergeur) dans le cadre strict de l&apos;exécution
              des services, dans le respect du RGPD.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-dark">
              Vos droits
            </h2>
            <p className="mt-2">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés, vous disposez des
              droits suivants :
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Droit d&apos;accès à vos données personnelles.</li>
              <li>Droit de rectification des données inexactes.</li>
              <li>Droit à l&apos;effacement de vos données.</li>
              <li>Droit à la limitation du traitement.</li>
              <li>Droit à la portabilité de vos données.</li>
              <li>Droit d&apos;opposition au traitement.</li>
            </ul>
            <p className="mt-2">
              Pour exercer ces droits, contactez-nous à l&apos;adresse
              suivante : contact@itefficience.com. Vous disposez également du
              droit d&apos;introduire une réclamation auprès de la CNIL
              (www.cnil.fr).
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
