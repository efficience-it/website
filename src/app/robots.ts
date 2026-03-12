import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ClaudeBot",
          "PerplexityBot",
          "Googlebot-Extended",
          "meta-externalagent",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.itefficience.com/sitemap.xml",
  };
}
