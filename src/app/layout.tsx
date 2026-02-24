import type { Metadata } from "next";
import Script from "next/script";
import { montserrat, exo } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
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
  telephone: "+33979320508",
  email: "contact@itefficience.com",
  sameAs: [
    "https://github.com/efficience-it",
    "https://www.linkedin.com/company/efficience-it",
  ],
};

const GA_MEASUREMENT_ID = "G-CZN94LWSH2";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${exo.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
