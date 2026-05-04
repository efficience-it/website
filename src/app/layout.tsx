import type { Metadata, Viewport } from "next";
import { montserrat, exo } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/ui/GoogleAnalytics";
import CookieConsent from "@/components/ui/CookieConsent";
import { globalGraphJsonLd } from "@/lib/structured-data";
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

export const viewport: Viewport = {
  themeColor: "#0066cc",
};

const themeInitScript = `(function(){try{var storedTheme=localStorage.getItem("theme");var prefersDark=window.matchMedia("(prefers-color-scheme: dark)").matches;var theme=storedTheme==="dark"||storedTheme==="light"?storedTheme:(prefersDark?"dark":"light");var root=document.documentElement;root.classList.remove("light","dark");root.classList.add(theme);root.style.colorScheme=theme;}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR" suppressHydrationWarning>
      <head>
        <link rel="ai-metadata" href="/llms.txt" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${montserrat.variable} ${exo.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalGraphJsonLd),
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
