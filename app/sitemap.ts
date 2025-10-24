import { MetadataRoute } from 'next'
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE = getSiteUrl(); // toujours une URL absolue
  return [
    { url: '${SITE}/', priority: 1.0 },
    { url: '${SITE}/services', priority: 0.8 },
    { url: '${SITE}/cases', priority: 0.8 },
    { url: '${SITE}/blog', priority: 0.6 },
    { url: '${SITE}/contact', priority: 0.7 }
  ]
}
