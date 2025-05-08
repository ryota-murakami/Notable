import type { MetadataRoute } from "next"

// This makes the route compatible with static export
export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://notable.app/sitemap.xml",
  }
}
