// app/robots.ts
import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  const SITE = getSiteUrl()
  return {
    rules: [
      {
        userAgent: '*',
        // Bloquer l'indexation des images, garder les pages crawlables
        allow: '/',
        disallow: ['/*.png$', '/*.jpg$', '/*.jpeg$', '/*.webp$', '/*.avif$', '/*.svg$'],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
  }
}

