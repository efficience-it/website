import type { Metadata } from "next";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  absoluteTitle?: boolean;
  image?: string;
  publishedTime?: string;
  authors?: string[];
}

export const BASE_URL = "https://www.itefficience.com";
export const SITE_NAME = "Efficience IT";
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/logo/logo-og.webp`;

/**
 * Règle éditoriale des titles :
 * - template global par défaut : "%s | Efficience IT"
 * - n'utiliser absoluteTitle que pour les exceptions explicitement justifiées
 * - exceptions autorisées :
 *   - la homepage
 *   - les pages dont le H1 contient déjà la marque et où le doublon serait redondant
 *
 * Mini-lexique de réécriture progressive
 * Objectif : réduire les répétitions sans perdre le sens métier.
 *
 * - sur mesure :
 *   personnalisé, adapté, spécifique, dédié, conçu pour, pensé pour,
 *   spécialisé, taillé pour, ajusté à
 *
 * - robuste :
 *   fiable, solide, éprouvé, durable, résistant, stable, tenu dans la durée
 *
 * - performant :
 *   rapide, efficace, optimisé, réactif, fluide
 *
 * Conseils d'usage :
 * - varier les reformulations selon le contexte plutôt que répéter le même synonyme
 * - privilégier le mot le plus précis pour la phrase
 * - éviter les formulations systématiques si elles alourdissent la lecture
 */
export function pageMetadata({
  title,
  description,
  path = "",
  absoluteTitle = false,
  image,
  publishedTime,
  authors,
}: PageMetadataOptions): Metadata {
  const url = `${BASE_URL}${path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630 }],
      ...(publishedTime && { publishedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: url,
    },
  };
}
