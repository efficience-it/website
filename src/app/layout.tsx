import type { Metadata } from "next";
import { montserrat, exo } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/ui/GoogleAnalytics";
import CookieConsent from "@/components/ui/CookieConsent";
import { localBusinessJsonLd } from "@/lib/structured-data";
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Efficience IT",
  url: "https://www.itefficience.com",
  logo: "https://www.itefficience.com/images/logo/logo-bleu.webp",
  description:
    "Agence spécialisée Symfony et PHP, Efficience IT conçoit et développe des applications web sur mesure.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "677 Avenue de la République",
    addressLocality: "Lille",
    postalCode: "59800",
    addressCountry: "FR",
  },
  email: "contact@itefficience.com",
  foundingDate: "2018",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 15,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@itefficience.com",
    contactType: "customer service",
    availableLanguage: ["French", "English"],
  },
  knowsAbout: [
    "Symfony",
    "PHP",
    "Architecture hexagonale",
    "Domain-Driven Design",
    "API Platform",
    "DevOps",
    "Docker",
    "Node.js",
  ],
  sameAs: [
    "https://github.com/efficience-it",
    "https://www.linkedin.com/company/efficience-it",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Efficience IT",
  url: "https://www.itefficience.com",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
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
