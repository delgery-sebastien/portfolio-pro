import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/Section'
import { Card } from '@/components/Card'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(new Date(iso))

export const metadata: Metadata = {
  title: 'Blog',
  description: "Notes techniques VBA/.NET, data & BI — retours d'expérience et pédagogie.",
  alternates: { canonical: '/blog' },
}

type PostCard = { slug: string; title: string; excerpt?: string; date?: string; img: string }

function readPostMetaFromMdx(filePath: string): { title?: string; description?: string; date?: string } {
  try {
    const raw = fs.readFileSync(filePath, 'utf8')
    const m = raw.match(/export\s+const\s+meta\s*=\s*{([\s\S]*?)}\s*/)
    if (!m) return {}
    const objLiteral = `{${m[1]}}`
    // Evaluate a plain object literal; MDX meta here is simple (strings), trailing commas ok
    // eslint-disable-next-line no-new-func
    const data = Function(`"use strict"; return (${objLiteral});`)()
    return {
      title: data?.title,
      description: data?.description,
      date: data?.date,
    }
  } catch {
    return {}
  }
}

async function getPosts(): Promise<PostCard[]> {
  const blogDir = path.join(process.cwd(), 'app', 'blog')
  const entries = fs.readdirSync(blogDir, { withFileTypes: true })
  const items: PostCard[] = []
  for (const dirent of entries) {
    if (!dirent.isDirectory()) continue
    const slug = dirent.name
    const mdxPath = path.join(blogDir, slug, 'page.mdx')
    if (!fs.existsSync(mdxPath)) continue
    const meta = readPostMetaFromMdx(mdxPath)
    // resolve image with fallback if missing
    const imgRel = path.join('blog', slug, 'card.webp')
    const imgPublicPath = path.join(process.cwd(), 'public', imgRel)
    const imgUrl = fs.existsSync(imgPublicPath) ? `/${imgRel.replace(/\\/g, '/')}` : '/og-image.webp'
    items.push({
      slug: `/blog/${slug}`,
      title: meta.title ?? slug,
      excerpt: meta.description ?? undefined,
      date: meta.date ?? undefined,
      img: imgUrl,
    })
  }
  // tri par date desc si disponible
  items.sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))
  return items
}

export default async function Blog() {
  const posts = await getPosts()
  return (
    <Section className="pt-12">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <p className="text-base-normal mt-2">
        Notes techniques, retours d’expérience et pédagogie Microsoft/BI.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {posts.map((p) => (
          <Card key={p.slug}>
            <div className="flex gap-4">
              <div className="relative w-28 h-28 shrink-0 overflow-hidden rounded-xl border border-card">
                <Image src={p.img} alt={p.title} fill sizes="112px" className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-base-normal mt-1">{p.excerpt}</p>
                <div className="flex items-center mt-4">
                  {(p as any).date ? (
                    <time dateTime={(p as any).date} className="text-sm text-base-light">
                      {formatDate((p as any).date)}
                    </time>
                  ) : null}
                  <Link href={p.slug} className="btn btn-ghost ml-auto">
                    Lire la suite
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

