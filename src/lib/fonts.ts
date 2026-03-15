import { Montserrat, Exo } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-exo",
  display: "swap",
});
