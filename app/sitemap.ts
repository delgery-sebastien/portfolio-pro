import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.com'
  return [
    { url: base + '/', priority: 1.0 },
    { url: base + '/services', priority: 0.8 },
    { url: base + '/cases', priority: 0.8 },
    { url: base + '/blog', priority: 0.6 },
    { url: base + '/contact', priority: 0.7 }
  ]
}
