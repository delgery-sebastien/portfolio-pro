import Link from 'next/link'
import Section from '@/components/Section'
import { Card } from '@/components/Card'
import Image from 'next/image'

export default function Cases(){
  const intro = "Sélection de réalisations avec visuels illustratifs (données anonymisées)."
  const cases = [
    { 	slug: 'omnes-education', title: 'OMNES Éducation', 
		excerpt: 'Harmonisation nationale - Excel VBA + SQL Server + Power BI.',
		img: '/cases/omnes-education/Image1.png' },
    { 	slug: 'caceis', 
		title: 'Caceis', 
		excerpt: 'Commando VBA',
		img: '/cases/omnes-education/Image1.png'},
    { 	slug: 'pilotee', 
		title: 'Pilotee™', 
		excerpt: 'Portail ASP.NET + Excel VBA - DLL .NET, sécurité & performance.',
		img: '/cases/omnes-education/Image1.png'}
  ]
  return (
    <Section className="pt-12">
      <h1 className="text-3xl font-semibold">Cas clients</h1>
      <p className="text-slate-300 mt-2">{intro}</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {cases.map(c => (
          <Card key={c.slug}>
            <div className="flex gap-4">
              <div className="relative w-28 h-28 shrink-0 overflow-hidden rounded-xl border border-slate-800">
                <Image src={c.img} alt={c.title} fill sizes="112px" className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-slate-300 mt-1">{c.excerpt}</p>
                <Link href={`/cases/${c.slug}`} className="btn btn-ghost mt-3">Voir</Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
