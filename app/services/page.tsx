import Section from '@/components/Section'
import { Card } from '@/components/Card'
export default function Services(){
  const items = [
    { title: 'Audit & cadrage', desc: 'Cartographie, dette technique, plan d’actions priorisé.' },
    { title: 'Dév. Excel/VBA avancé', desc: 'Macros robustes, refactoring, interfaces, sécurité.' },
    { title: 'Interop .NET / DLL', desc: 'Assemblies VB.NET, packaging, obfuscation.' },
    { title: 'Data & BI', desc: 'SQL Server/Oracle, Power BI, automatisation.' },
    { title: 'Intégrations & APIs', desc: 'n8n, webhooks, services internes/externes.' },
    { title: 'Transfert & doc', desc: 'Guides, templates, formation & TMA.' }
  ]
  return (
    <Section className="pt-12">
      <h1 className="text-3xl font-semibold">Services</h1>
      <p className="text-slate-300 mt-2">Prestations orientées résultats, avec engagement sur qualité & maintenabilité.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {items.map((it)=> (
          <Card key={it.title}><h3 className="font-semibold">{it.title}</h3><p className="text-slate-300 mt-1">{it.desc}</p></Card>
        ))}
      </div>
    </Section>
  )
}
