// app/robots.ts
import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const SITE = getSiteUrl(); // toujours une URL absolue
  return {
    rules: [
      { userAgent: '*', 
        // Bloquer l’indexation des images, garder les pages indexables
		disallow: ['/*.png$', '/*.jpg$', '/*.webp$', '/*.avif$'] }
    ],
    sitemap: `${SITE}/sitemap.xml`,
  }
}