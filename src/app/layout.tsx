import type { Metadata } from "next";
import { montserrat, exo } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/ui/GoogleAnalytics";
import CookieConsent from "@/components/ui/CookieConsent";
import { BASE_URL } from "@/lib/metadata";
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

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#organization`,
  name: "Efficience IT",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo/logo-bleu.webp`,
  image: `${BASE_URL}/images/logo/logo-bleu.webp`,
  description:
    "Agence spécialisée Symfony et PHP, Efficience IT conçoit et développe des applications web sur mesure.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "677 Avenue de la République",
    addressLocality: "Lille",
    postalCode: "59800",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.6292,
    longitude: 3.0573,
  },
  email: "contact@itefficience.com",
  foundingDate: "2018",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 15,
  },
  priceRange: "$$",
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
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "Country", name: "Belgique" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Luxembourg" },
    { "@type": "Country", name: "Spain" },
    { "@type": "Country", name: "Germany" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "32",
    reviewCount: "32",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
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
  url: BASE_URL,
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
            __html: JSON.stringify(professionalServiceJsonLd),
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
