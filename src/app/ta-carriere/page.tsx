import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/votre-carriere',
  },
}

export default function VotreCarrierePage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/votre-carriere" />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace('/votre-carriere')`,
        }}
      />
      <p>Redirection… <a href="/votre-carriere">Cliquez ici</a></p>
    </>
  )
}