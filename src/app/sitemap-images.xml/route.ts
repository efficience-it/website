import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog";
import { BASE_URL } from "@/lib/metadata";

export const dynamic = "force-static";

type SitemapImage = {
  loc: string;
  title: string;
  caption?: string;
  geoLocation?: string;
};

type SitemapImageUrl = {
  loc: string;
  images: SitemapImage[];
};

const STATIC_IMAGE_URLS: SitemapImageUrl[] = [
  {
    loc: BASE_URL,
    images: [
      {
        loc: `${BASE_URL}/images/illustrations/source-code.svg`,
        title: "Agence PHP et Symfony, experte en développement web",
        caption: "Illustration de code source de la page d'accueil",
        geoLocation: "Lille, France",
      },
    ],
  },
  {
    loc: `${BASE_URL}/developpement-web-sur-mesure`,
    images: [
      {
        loc: `${BASE_URL}/images/illustrations/developpement-backend.svg`,
        title: "Développement web sur mesure",
        caption: "Illustration d'architecture back-end Symfony avec API et services",
        geoLocation: "Lille, France",
      },
    ],
  },
  {
    loc: `${BASE_URL}/cloud-et-devops`,
    images: [
      {
        loc: `${BASE_URL}/images/illustrations/online-report.svg`,
        title: "Cloud et DevOps",
        caption: "Illustration de supervision et d'infrastructure cloud",
        geoLocation: "Lille, France",
      },
    ],
  },
  {
    loc: `${BASE_URL}/accompagnement-et-conseil`,
    images: [
      {
        loc: `${BASE_URL}/images/illustrations/digital-presentation.svg`,
        title: "Accompagnement et conseil",
        caption: "Illustration de présentation digitale et accompagnement technique",
        geoLocation: "Lille, France",
      },
    ],
  },
  {
    loc: `${BASE_URL}/processus-collaboration`,
    images: [
      {
        loc: `${BASE_URL}/images/illustrations/team-work.svg`,
        title: "Processus de collaboration",
        caption: "Illustration de collaboration d'équipe sur des projets Symfony",
        geoLocation: "Lille, France",
      },
    ],
  },
  {
    loc: `${BASE_URL}/green-it`,
    images: [
      {
        loc: `${BASE_URL}/images/illustrations/greenit.svg`,
        title: "Green IT",
        caption: "Illustration d'éco-conception et de sobriété numérique",
        geoLocation: "Lille, France",
      },
    ],
  },
];

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function absoluteImageUrl(path: string): string {
  return path.startsWith("http") ? path : `${BASE_URL}${path}`;
}

function toXml(urls: SitemapImageUrl[]): string {
  const body = urls
    .filter((url) => url.images.length > 0)
    .map((url) => {
      const imagesXml = url.images
        .map((image) => {
          const caption = image.caption
            ? `      <image:caption>${escapeXml(image.caption)}</image:caption>\n`
            : "";
          const geoLocation = image.geoLocation
            ? `      <image:geo_location>${escapeXml(image.geoLocation)}</image:geo_location>\n`
            : "";

          return [
            "    <image:image>",
            `      <image:loc>${escapeXml(image.loc)}</image:loc>`,
            `      <image:title>${escapeXml(image.title)}</image:title>`,
            caption.trimEnd(),
            geoLocation.trimEnd(),
            "    </image:image>",
          ]
            .filter(Boolean)
            .join("\n");
        })
        .join("\n");

      return `  <url>\n    <loc>${escapeXml(url.loc)}</loc>\n${imagesXml}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${body}\n</urlset>`;
}

export function GET() {
  const posts = getAllPosts();

  const blogImageUrls: SitemapImageUrl[] = posts.map((post) => ({
    loc: `${BASE_URL}/article/${post.slug}`,
    images: post.image
      ? [
          {
            loc: absoluteImageUrl(post.image),
            title: post.title,
            caption: post.imageCaption ?? post.excerpt,
            geoLocation: post.imageGeoLocation,
          },
        ]
      : [],
  }));

  const xml = toXml([...STATIC_IMAGE_URLS, ...blogImageUrls]);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
