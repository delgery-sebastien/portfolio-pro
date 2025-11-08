import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/Section'
import { Card } from '@/components/Card'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Cas clients',
  description:
    "Sélection de réalisations: structuration, automatisation, reporting BI — données anonymisées et visuels illustratifs.",
  alternates: { canonical: '/cases' },
}

export default function Cases() {
  const intro = 'Sélection de réalisations avec visuels illustratifs (données anonymisées).'
  const cases = [
    {
      slug: 'omnes-education',
      title: 'OMNES – De la maquette Excel à la vision groupe',
      excerpt:
        'Structuration pédagogique, consolidation budgétaire et reporting BI : une chaîne de pilotage intégrée pour un groupe multi-écoles en mutation.',
      img: '/cases/omnes-education/omnes_logo.png',
    },
    {
      slug: 'caceis',
      title: 'Caceis - Commando/DevOps Dérivés listés',
      excerpt:
        'Suite d’outils Excel/VBA : rapprochements, grilles tarifaires, extracteurs + datamart Oracle. Standardisation, traçabilité et gain de temps.',
      img: '/cases/caceis/caceis_logo.png',
    },
  ]
  return (
    <Section className="pt-12">
      <h1 className="text-3xl font-semibold">Cas clients</h1>
      <p className="text-base-normal mt-2">{intro}</p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {cases.map((c) => (
          <Card key={c.slug}>
            <div className="flex gap-4">
              <div className="relative w-28 h-28 shrink-0 overflow-hidden rounded-xl border border-card">
                <Image src={c.img} alt={c.title} fill sizes="112px" className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-base-normal mt-1 text-justify">{c.excerpt}</p>
                <div className="flex mt-4">
                  <Link href={`/cases/${c.slug}`} className="btn btn-ghost ml-auto">
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
