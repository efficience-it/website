import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import Breadcrumb from "@/components/ui/Breadcrumb";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import CallToAction from "@/components/sections/CallToAction";
import Nis2Assessment from "@/components/sections/Nis2Assessment";
import { breadcrumbJsonLd, webPageJsonLd, pageGraphJsonLd } from "@/lib/structured-data";
import { BASE_URL } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Évaluation NIS2 Symfony - outil gratuit",
  description:
    "Évaluez la conformité technique de votre application Symfony aux exigences NIS2 en 5 minutes.",
  path: "/outil-evaluation-nis2-symfony",
});

const axes = [
  {
    title: "Socle technique et durcissement",
    description:
      "Versions de PHP et Symfony supportées, mode debug désactivé en production, headers de sécurité HTTP.",
  },
  {
    title: "Authentification et contrôle d'accès",
    description:
      "MFA sur les comptes à privilèges, authentification forte, principe de moindre privilège.",
  },
  {
    title: "Secrets et données sensibles",
    description:
      "Gestion des secrets hors du code, chiffrement des données, anonymisation des environnements de test.",
  },
  {
    title: "Journalisation et détection",
    description:
      "Journaux de sécurité structurés et capacité à qualifier un incident dans les délais NIS2.",
  },
  {
    title: "Dépendances et continuité",
    description:
      "Scan automatisé des dépendances, pipeline CI/CD outillé et plan de réponse à incident documenté.",
  },
];

const relatedLinks: RelatedLink[] = [
  {
    title: "Sécurité applicative Symfony",
    description: "Audit, hardening et conformité de vos applications",
    href: "/securite-application-symfony",
  },
  {
    title: "Conformité NIS2 : guide technique",
    description: "Préparer votre application Symfony aux exigences NIS2",
    href: "/article/conformite-nis2-application-symfony",
  },
  {
    title: "Audit de code PHP",
    description: "Diagnostic complet de votre code PHP sous 48h",
    href: "/audit-code-php",
  },
  {
    title: "Audit Symfony gratuit",
    description: "30 minutes pour évaluer l'état de votre application",
    href: "/audit-symfony-gratuit",
  },
];

const breadcrumb = breadcrumbJsonLd([
  { name: "Sécurité applicative Symfony", path: "/securite-application-symfony" },
  { name: "Évaluation NIS2 Symfony", path: "/outil-evaluation-nis2-symfony" },
]);

const webPage = webPageJsonLd({
  name: "Évaluation NIS2 Symfony - outil gratuit",
  description:
    "Évaluez la conformité technique de votre application Symfony aux exigences NIS2 en 5 minutes.",
  path: "/outil-evaluation-nis2-symfony",
});

const webApplication = {
  "@type": "WebApplication",
  "@id": `${BASE_URL}/outil-evaluation-nis2-symfony#app`,
  name: "Évaluation NIS2 Symfony",
  description:
    "Outil d'auto-évaluation technique de la conformité NIS2 pour une application Symfony. 15 questions, score sur 100 et rapport téléchargeable, calcul 100% côté navigateur.",
  url: `${BASE_URL}/outil-evaluation-nis2-symfony`,
  applicationCategory: "SecurityApplication",
  operatingSystem: "Web",
  inLanguage: "fr-FR",
  isAccessibleForFree: true,
  provider: { "@id": `${BASE_URL}/#organization` },
};

export default function OutilEvaluationNis2Symfony() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            pageGraphJsonLd(breadcrumb, webPage, webApplication),
          ),
        }}
      />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <Breadcrumb items={[{ label: "Évaluation NIS2 Symfony" }]} />
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Outil gratuit
              </p>
              <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                Évaluation NIS2 pour votre application Symfony
              </h1>
              <p className="mt-6 text-lg text-gray">
                En 15 questions et environ 5 minutes, situez la maturité de votre
                application Symfony face aux exigences techniques de la directive
                NIS2. Score sur 100, détail par axe et rapport téléchargeable. Le
                calcul est entièrement réalisé dans votre navigateur : aucune
                donnée n&apos;est transmise.
              </p>
            </div>
          </Container>
        </section>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <div className="mx-auto max-w-3xl">
                <Nis2Assessment />
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Les axes évalués</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                L&apos;outil couvre les cinq familles de mesures techniques les
                plus structurantes pour préparer une application Symfony à NIS2.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {axes.map((axis) => (
                  <Card key={axis.title}>
                    <h2 className="font-display text-lg font-bold text-dark">
                      {axis.title}
                    </h2>
                    <p className="mt-2 text-gray">{axis.description}</p>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <div className="mx-auto max-w-3xl space-y-4 text-lg text-gray">
                <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                  Une indication, pas un audit officiel
                </h2>
                <p>
                  Ce questionnaire fournit un état des lieux rapide et
                  pédagogique. Il ne remplace pas un audit réglementaire : la
                  qualification d&apos;un prestataire d&apos;audit relève en
                  France du dispositif PASSI piloté par l&apos;ANSSI. Pour
                  comprendre en détail ce que recouvre la directive, consultez
                  notre guide pour{" "}
                  <Link
                    href="/article/conformite-nis2-application-symfony"
                    className="text-primary hover:underline"
                  >
                    préparer techniquement votre application à NIS2
                  </Link>
                  .
                </p>
                <p>
                  Une fois votre score obtenu, nous pouvons transformer ces
                  signaux en plan d&apos;action concret grâce à notre{" "}
                  <Link
                    href="/securite-application-symfony"
                    className="text-primary hover:underline"
                  >
                    expertise en sécurité applicative Symfony
                  </Link>{" "}
                  et à un{" "}
                  <Link
                    href="/audit-code-php"
                    className="text-primary hover:underline"
                  >
                    audit de code PHP
                  </Link>{" "}
                  approfondi.
                </p>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <RelatedLinks links={relatedLinks} className="bg-light-gray" />
        </FadeIn>

        <FadeIn>
          <CallToAction />
        </FadeIn>
      </main>
    </>
  );
}
