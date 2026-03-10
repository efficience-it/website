"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectPage({ to }: { to: string }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <p className="text-gray">
        Redirection en cours…{" "}
        <a href={to} className="text-primary underline">
          Cliquez ici
        </a>
      </p>
    </main>
  );
}
