// app/robots.ts
import type { MetadataRoute } from "next"

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', 
        // Bloquer l’indexation des images, garder les pages indexables
		disallow: ['/*.png$', '/*.jpg$', '/*.webp$', '/*.avif$'] }
    ],
    sitemap: `${SITE}/sitemap.xml`,
  }
}