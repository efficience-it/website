import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RootDocument from "@/components/layout/RootDocument";
import CookieConsent from "@/components/ui/CookieConsent";
import NotFound, { metadata as notFoundMetadata } from "./(fr)/not-found";
import { metadata as layoutMetadata, viewport } from "./(fr)/layout";

export { viewport };

export const metadata: Metadata = {
  metadataBase: layoutMetadata.metadataBase,
  description: layoutMetadata.description,
  ...notFoundMetadata,
};

export default function GlobalNotFound() {
  return (
    <RootDocument
      lang="fr-FR"
      skipLabel="Aller au contenu"
      header={<Header />}
      footer={
        <>
          <Footer />
          <CookieConsent />
        </>
      }
    >
      <NotFound />
    </RootDocument>
  );
}
