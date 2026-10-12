import GoogleAnalytics from "@/components/ui/GoogleAnalytics";
import { montserrat, exo } from "@/lib/fonts";
import { globalGraphJsonLd } from "@/lib/structured-data";
import { BASE_URL } from "@/lib/metadata";
import "../../app/globals.css";

interface RootDocumentProps {
  readonly lang: string;
  readonly skipLabel: string;
  readonly header?: React.ReactNode;
  readonly footer?: React.ReactNode;
  readonly children: React.ReactNode;
}

const themeInitScript = `(function(){try{var storedTheme=localStorage.getItem("theme");var prefersDark=window.matchMedia("(prefers-color-scheme: dark)").matches;var theme=storedTheme==="dark"||storedTheme==="light"?storedTheme:(prefersDark?"dark":"light");var root=document.documentElement;root.classList.remove("light","dark");root.classList.add(theme);root.style.colorScheme=theme;}catch(e){}})();`;

export default function RootDocument({
  lang,
  skipLabel,
  header,
  footer,
  children,
}: RootDocumentProps) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="ai-metadata" href="/llms.txt" />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="Efficience IT Blog"
          href={`${BASE_URL}/feed.xml`}
        />
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
          {skipLabel}
        </a>
        {header}
        <div id="main-content">
          {children}
        </div>
        {footer}
      </body>
    </html>
  );
}
