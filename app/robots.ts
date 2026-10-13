import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/portal", "/v2"] },
    sitemap: "https://pathway.cl/sitemap.xml",
  };
}
