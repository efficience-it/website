import type { Metadata } from "next";
import { montserrat, exo } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Efficience IT — Développement web sur mesure",
    template: "%s | Efficience IT",
  },
  description:
    "Efficience IT, société de conseil et développement web sur mesure : Symfony, cloud, DevOps, accompagnement digital.",
};

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
        {children}
      </body>
    </html>
  );
}
