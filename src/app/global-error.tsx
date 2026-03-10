"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="fr-FR">
      <body className="font-sans">
        <main className="flex min-h-screen items-center justify-center px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#153B6B]">
              Oups, quelque chose a mal tourné
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Une erreur inattendue s&apos;est produite.
              <br />
              Pas de panique, notre équipe est sur le coup !
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={reset}
                className="rounded-md border-2 border-[#153B6B] px-6 py-3 font-semibold text-[#153B6B] transition-colors hover:bg-[#153B6B] hover:text-white"
              >
                Réessayer
              </button>
              <a
                href="/"
                className="rounded-md bg-[#153B6B] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0f2d52]"
              >
                Accueil
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
