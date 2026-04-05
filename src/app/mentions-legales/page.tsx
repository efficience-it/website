import Breadcrumb from "@/components/ui/Breadcrumb";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";

export const metadata = pageMetadata({
  title: "Mentions légales",
  description:
    "Mentions légales du site Efficience IT : informations légales, éditeur, hébergement et responsabilités.",
  path: "/mentions-legales",
});

export default function MentionsLegales() {
  return (
    <main className="py-16">
      <Container className="mx-auto max-w-3xl">
        <Breadcrumb items={[{ label: "Mentions légales" }]} />
        <h1 className="font-display text-3xl font-bold text-dark md:text-4xl">
          Mentions légales
        </h1>

        <div className="mt-8 space-y-8 text-gray">
          <section>
            <h2 className="font-display text-xl font-bold text-dark">
              Éditeur du site
            </h2>
            <p className="mt-2">
              Le présent site web, accessible à l&apos;adresse
              https://www.itefficience.com, est édité par la société Efficience
              IT SAS, inscrite au registre du commerce et des sociétés de Lille
              sous le SIRET 839 527 900, ayant pour numéro de TVA
              intra-communautaire FR 52 839527900, dont le siège social est
              situé au 7 Rue du petit Mesnil, 59390 Sailly-Lez-Lannoy.
            </p>
            <p className="mt-2">
              Adresse de l&apos;établissement : 677 Avenue de la République,
              59800 Lille, France. Adresse de courrier électronique :
              contact@itefficience.com.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-dark">
              Responsabilité
            </h2>
            <p className="mt-2">
              La société Efficience IT s&apos;engage à tout mettre en œuvre pour
              assurer aux utilisateurs une accessibilité du site à tout moment.
              Toutefois, elle ne pourra être tenue responsable en cas
              d&apos;indisponibilité du site, pour quelque cause que ce soit.
            </p>
            <p className="mt-2">
              La société Efficience IT met tout en œuvre pour offrir aux
              utilisateurs des informations et des outils disponibles et
              vérifiés, mais ne saurait être tenue responsable des erreurs,
              d&apos;une absence de disponibilité des informations et/ou de la
              présence de virus ou autres infections logiques sur son site.
            </p>
            <p className="mt-2">
              L&apos;utilisateur reconnaît utiliser les informations et outils
              disponibles sur le site sous sa responsabilité exclusive.
              L&apos;utilisateur du site reconnaît avoir pris connaissance des
              présentes mentions légales et s&apos;engage à les respecter.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-dark">
              Protection des données à caractère personnel
            </h2>
            <p className="mt-2">
              La société Efficience IT est le responsable du traitement des
              données personnelles collectées et traitées à l&apos;occasion de
              l&apos;utilisation du site https://www.itefficience.com.
            </p>
            <p className="mt-2">
              L&apos;utilisateur est notamment informé que les informations
              qu&apos;il communique par les formulaires présents sur le site sont
              nécessaires pour répondre à sa demande et sont destinées aux
              services en charge de répondre à sa demande à des fins de suivi de
              cette demande.
            </p>
            <p className="mt-2">
              Conformément à la loi Informatique et libertés du 6 janvier 1978
              modifiée et au règlement général sur la protection des données,
              l&apos;utilisateur dispose d&apos;un droit d&apos;accès, de
              limitation, de portabilité, d&apos;effacement, de modification, de
              rectification et d&apos;opposition des informations le concernant.
              L&apos;utilisateur peut exercer ces droits auprès du Délégué à la
              protection des données à l&apos;adresse suivante :
              contact@itefficience.com.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-dark">
              Liens hypertextes
            </h2>
            <p className="mt-2">
              Les utilisateurs du site ne peuvent établir de lien profond en
              direction de ce site sans l&apos;autorisation préalable et écrite
              de la société Efficience IT.
            </p>
            <p className="mt-2">
              Pour toute information et demande de reproduction d&apos;un
              contenu paru sur le site https://www.itefficience.com (textes,
              graphiques, illustrations) quel que soit le support, comme pour
              toute autorisation de mise en place d&apos;un hyperlien,
              l&apos;utilisateur est invité à adresser sa demande par e-mail à
              contact@itefficience.com.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-dark">
              Crédits
            </h2>
            <p className="mt-2">
              Les photos et illustrations présentes sur ce site proviennent de
              sources différentes.
            </p>
            <p className="mt-2">
              Les illustrations proviennent majoritairement de Freepik. Les
              photos ont été prises en 2018 et représentent des membres de notre
              équipe à ce moment-là.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-dark">
              Droit applicable
            </h2>
            <p className="mt-2">
              L&apos;application et les activités de Efficience IT sont régies
              par le droit français. En cas de litige résultant de votre
              utilisation du site web, seuls les Tribunaux français sont
              compétents.
            </p>
            <p className="mt-2">
              La société Efficience IT se réserve le droit de modifier le
              contenu des présentes mentions légales sans préavis et à tout
              moment qui lui semble opportun. Les utilisateurs du site sont donc
              invités à consulter régulièrement les mentions légales.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
