import Link from 'next/link'
import Section from '@/components/Section'
import { Card } from '@/components/Card'
import Image from 'next/image'

export default function Blog() {
  const posts = [
    {
      slug: '/blog/tableaux-collections-dictionnaires',
      title: 'Tableaux, Collections et Dictionnaires VBA',
      excerpt: 'Choisir la bonne structure en VBA : performance, souplesse, mapping…',
      img: '/blog/cover-vba.webp',
    },
  ]
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
                <div className="flex mt-4">
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
