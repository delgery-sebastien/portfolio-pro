// app/services/page.tsx
import Section from '@/components/Section'
import { Card } from '@/components/Card'
import Link from 'next/link'
import { Database, BarChart3, Zap, ClipboardCheck, ListChecks, Wrench } from 'lucide-react'

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-card">
      {children}
    </span>
  )
}

export default function Services() {
  const items = [
    {
      title: 'Automatisation VBA (Excel/Access)',
      icon: <Zap size={16} className="text-base-normal" />,
      desc: 'Expertise VBA pour automatiser les tâches répétitives, fiabiliser les processus et intégrer des contrôles robustes.',
      bullets: [
        'Interfaces ergonomiques et assistance de saisie',
        'Traitements automatisés et journalisés',
        'Intégration .NET / ODBC / API / Python',
      ],
    },
    {
      title: 'BI, Aide à la décision & pilotage',
      icon: <BarChart3 size={16} className="text-base-normal" />,
      desc: 'Mise en place de restitutions interactives et de tableaux de bord orientés projet, décision et performance.',
      bullets: [
        'Power BI, Jaspersoft, Excel avancé',
        'Visualisation KPI et suivi d’indicateurs clés',
        'Industrialisation et automatisation des actualisations',
      ],
    },
    {
      title: 'Normes & méthodes',
      icon: <ClipboardCheck size={16} className="text-base-normal" />,
      desc: 'Formalisation des bonnes pratiques de développement et accompagnement des équipes dans la montée en maturité.',
      bullets: [
        'Modèles de documents et plan qualité (PAQ / PQS)',
        'Revue de code, refactoring, packaging',
        'Audit, coaching et formation utilisateurs',
      ],
    },
    {
      title: 'Audit & cadrage',
      icon: <ListChecks size={16} className="text-base-normal" />,
      desc: 'Cartographie des outils existants, dette technique, plan d’actions priorisé (quick wins vs. fondations).',
      bullets: [
        'Ateliers besoin / contraintes',
        'Spécifications techniques et fonctionnelles',
        'Proposition de services et backlogs adaptés',
      ],
    },
    {
      title: 'Excel/VBA avancé & refactoring',
      icon: <Wrench size={16} className="text-base-normal" />,
      desc: 'Optimisation d’outils existants : fiabilisation, robustesse, documentation et industrialisation des déploiements.',
      bullets: [
        'Patterns propres & modules réutilisables',
        'Journalisation, gestion d’erreurs robuste',
        'Docs utilisateur & techniques',
      ],
    },
    {
      title: 'Data, intégration & reprise de données',
      icon: <Database size={16} className="text-base-normal" />,
      desc: 'Modélisation SQL Server / Oracle, pipelines d’alimentation, optimisation de code.',
      bullets: [
        'Modèles relationnels SID/SIO',
        'ETL/ELT : automatisation et contrôle qualité des flux',
        'Nettoyage et alignement de données multi-sources',
      ],
    },
  ]

  return (
    <Section className="pt-12">
      <h1 className="text-3xl font-semibold">Services</h1>
      <p className="text-base-normal mt-2">
        Interventions pragmatiques : automatisation, contrôle et pilotage. Objectif : résultats
        mesurables, dette technique maîtrisée.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {items.map((it) => (
          <Card key={it.title}>
            <div className="flex items-start gap-3">
              <IconCircle>{it.icon}</IconCircle>
              <div className="flex-1">
                <h3 className="font-semibold">{it.title}</h3>
                <p className="text-base-normal mt-1">{it.desc}</p>
                <ul className="text-base-normal mt-3 list-disc list-inside space-y-1">
                  {it.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="card p-6 mt-8 flex items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold">Parler de votre besoin</h3>
          <p className="text-base-normal">15 minutes pour cadrer et proposer un plan simple.</p>
        </div>
        <Link href="/contact" className="btn btn-primary">
          Me contacter
        </Link>
      </div>
    </Section>
  )
}
