import { MetadataRoute } from 'next'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: ${SITE} + '/', priority: 1.0 },
    { url: ${SITE} + '/services', priority: 0.8 },
    { url: ${SITE} + '/cases', priority: 0.8 },
    { url: ${SITE} + '/blog', priority: 0.6 },
    { url: ${SITE} + '/contact', priority: 0.7 }
  ]
}
