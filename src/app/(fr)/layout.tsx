import type { Metadata, Viewport } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RootDocument from "@/components/layout/RootDocument";
import CookieConsent from "@/components/ui/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.itefficience.com"),
  title: {
    default:
      "Efficience IT – Agence Symfony experte en développement web",
    template: "%s",
  },
  description:
    "Agence spécialisée Symfony et PHP, Efficience IT conçoit et développe des applications web sur mesure, robustes et adaptées aux enjeux métiers.",
};

export const viewport: Viewport = {
  themeColor: "#0066cc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      {children}
    </RootDocument>
  );
}
