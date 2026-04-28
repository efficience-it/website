import type { Metadata } from "next";
import { montserrat, exo } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/ui/GoogleAnalytics";
import CookieConsent from "@/components/ui/CookieConsent";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.itefficience.com"),
  title: {
    default:
      "Efficience IT – Agence Symfony experte en développement web",
    template: "%s | Efficience IT",
  },
  description:
    "Agence spécialisée Symfony et PHP, Efficience IT conçoit et développe des applications web sur mesure, robustes et adaptées aux enjeux métiers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR">
      <head>
        <link rel="ai-metadata" href="/llms.txt" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body
        className={`${montserrat.variable} ${exo.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <GoogleAnalytics />
        <a href="#main-content" className="skip-to-content">
          Aller au contenu
        </a>
        <Header />
        <div id="main-content">
          {children}
        </div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
