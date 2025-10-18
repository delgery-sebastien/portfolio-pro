import Link from 'next/link'
import Section from '@/components/Section'
import { Card } from '@/components/Card'
export default function Cases(){
  const cases = [
    { slug: 'omnes-education', title: 'OMNES Éducation', excerpt: 'Harmonisation nationale - Excel VBA + SQL Server + Power BI.' },
    { slug: 'pilotee', title: 'Pilotee™', excerpt: 'Portail ASP.NET + Excel VBA - DLL .NET, sécurité & performance.' }
  ]
  return (
    <Section className="pt-12">
      <h1 className="text-3xl font-semibold">Cas clients</h1>
      <p className="text-slate-300 mt-2">Sélection de réalisations (données anonymisées, visuels illustratifs).</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {cases.map(c => (
          <Card key={c.slug}>
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-slate-300 mt-1">{c.excerpt}</p>
            <Link href={`/cases/${c.slug}`} className="btn btn-ghost mt-3">Voir</Link>
          </Card>
        ))}
      </div>
    </Section>
  )
}
