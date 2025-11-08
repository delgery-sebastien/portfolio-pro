import { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE = getSiteUrl() // toujours une URL absolue
  const now = new Date().toISOString()

  return [
    { url: `${SITE}/`, lastModified: now },
    { url: `${SITE}/services`, lastModified: now },
    { url: `${SITE}/cases`, lastModified: now },
    { url: `${SITE}/cases/omnes-education`, lastModified: now },
    { url: `${SITE}/cases/caceis`, lastModified: now },
    { url: `${SITE}/blog`, lastModified: now },
    { url: `${SITE}/contact`, lastModified: now },
    { url: `${SITE}/downloads`, lastModified: now },
    { url: `${SITE}/privacy`, lastModified: now },
    { url: `${SITE}/legal`, lastModified: now },
    { url: `${SITE}/search`, lastModified: now },
  ]
}
