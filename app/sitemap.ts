import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pathway.cl";
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/terminos`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacidad`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
