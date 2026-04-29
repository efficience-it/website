import type { Metadata } from 'next'
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "On recrute | Efficience IT – Opportunités de carrière - Redirection",
  description:
    "Découvrez les opportunités de carrière chez Efficience IT : développement, business et communication au sein d'une agence web spécialisée Symfony.",
  path: "/votre-carriere",
});

export default function VotreCarrierePage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/votre-carriere" />
      <h1>Redirection Votre Carrière</h1>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace('/votre-carriere')`,
        }}
      />
      <p>Redirection… <a href="/votre-carriere">Cliquez ici</a></p>
    </>
  )
}