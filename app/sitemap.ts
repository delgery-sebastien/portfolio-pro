import { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site'
import fs from 'fs'
import path from 'path'

function readMdxMeta(filePath: string): { date?: string } {
  try {
    const raw = fs.readFileSync(filePath, 'utf8')
    const m = raw.match(/export\s+const\s+meta\s*=\s*{([\s\S]*?)}\s*/)
    if (!m) return {}
    const objLiteral = `{${m[1]}}`
    // eslint-disable-next-line no-new-func
    const data = Function(`"use strict"; return (${objLiteral});`)()
    return { date: data?.date }
  } catch {
    return {}
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE = getSiteUrl() // toujours une URL absolue
  const now = new Date().toISOString()

  const base: MetadataRoute.Sitemap = [
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

  // Ajoute dynamiquement les billets du blog
  const blogDir = path.join(process.cwd(), 'app', 'blog')
  if (fs.existsSync(blogDir)) {
    const entries = fs.readdirSync(blogDir, { withFileTypes: true })
    for (const dirent of entries) {
      if (!dirent.isDirectory()) continue
      const slug = dirent.name
      const mdxPath = path.join(blogDir, slug, 'page.mdx')
      if (!fs.existsSync(mdxPath)) continue
      const meta = readMdxMeta(mdxPath)
      base.push({ url: `${SITE}/blog/${slug}`, lastModified: meta.date ?? now })
    }
  }

  return base
}
