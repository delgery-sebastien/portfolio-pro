import Section from '@/components/Section'
import { Card } from '@/components/Card'
import Link from 'next/link'

export default function Services(){
  const items = [
    {
      title: 'Audit & cadrage',
      desc: 'Cartographie des outils existants, dette technique, plan d’actions priorisé (quick wins vs. fondations).',
      points: [
        'Ateliers besoin / contraintes',
        'Cartographie des flux & risques',
        'Backlog actionnable 2–6 semaines'
      ],
    },
    {
      title: 'Excel/VBA avancé',
      desc: 'Refactoring, fiabilisation et industrialisation : interfaces, modules, erreurs, logs, déploiements.',
      points: [
        'Patterns propres & modules réutilisables',
        'Journalisation, gestion d’erreurs robuste',
        'Docs utilisateur & techniques'
      ],
    },
    {
      title: 'Interop .NET / DLL',
      desc: 'Assemblies VB.NET, packaging, signatures/obfuscation, échanges COM/Interop Office sécurisés.',
      points: [
        'Assemblies/dll et dépendances',
        'Obfuscation & protection IP',
        'Intégration Office (Excel/Access)'
      ],
    },
    {
      title: 'Data & BI (Aide à la décision)',
      desc: 'Modélisation SQL Server / Oracle, pipelines d’alimentation, Power BI, reporting automatisé.',
      points: [
        'Modèles relationnels sobres',
        'ETL/chargements fiables',
        'Tableaux de bord utiles'
      ],
    },
    {
      title: 'APIs & intégrations',
      desc: 'Intégrations internes/externes, n8n, webhooks. Supervision & observabilité pragmatique.',
      points: [
        'Connecteurs métiers',
        'Workflows n8n',
        'Suivi & alertes'
      ],
    },
    {
      title: 'Transfert & TMA',
      desc: 'Guides, formation courte, prise en main équipes, maintenance corrective/évolutive.',
      points: [
        'Guides & checklists',
        'Coaching courte durée',
        'TMA sereine'
      ],
    },
  ]

  return (
    <Section className="pt-12">
      <h1 className="text-3xl font-semibold">Services & modes d’intervention</h1>
      <p className="text-slate-300 mt-2">
        Intervention pragmatique : résultats rapides, dette technique maîtrisée, et transmission.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {items.map((it)=> (
          <Card key={it.title}>
            <h3 className="font-semibold">{it.title}</h3>
            <p className="text-slate-300 mt-1">{it.desc}</p>
            <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
              {it.points.map(p => <li key={p}>{p}</li>)}
            </ul>
          </Card>
        ))}
      </div>

      <div className="card p-6 mt-8 flex items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold">Parler de votre projet</h3>
          <p className="text-slate-300">15 minutes pour valider le périmètre et proposer un plan simple.</p>
        </div>
        <Link href="/contact" className="btn btn-primary">Me contacter</Link>
      </div>
    </Section>
  )
}
