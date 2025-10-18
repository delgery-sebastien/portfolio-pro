import Link from 'next/link'
import CTA from '@/components/CTA'
import { Card } from '@/components/Card'

export default function Page(){
  return (
    <div>
      <section className="container pt-16 md:pt-24">
        <div className="grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Consultant PPM & BI • Développeur <span className="text-emerald-400">VBA & .NET</span> senior
            </h1>
            <p className="mt-4 text-slate-300 max-w-2xl">
              24 ans d’expérience en automatisation Microsoft, reporting et intégrations. Outils fiables, performants et documentés, alignés sur vos usages métiers.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="btn btn-primary">Parler de votre projet</Link>
              <Link href="/cases" className="btn btn-ghost">Voir des cas clients</Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="card p-6">
              <h3 className="font-semibold">Spécialités</h3>
              <ul className="mt-2 text-slate-300 list-disc list-inside space-y-1">
                <li>Excel / VBA avancé, DLL .NET, interop Office</li>
                <li>SQL Server, Access, Oracle (PL/SQL)</li>
                <li>Power BI, reporting automatisé</li>
                <li>APIs & intégrations (n8n, IA)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card><h4 className="font-semibold">Industrialisation</h4><p className="text-slate-300 mt-1">Qualité code, tests, versioning, packaging et sécurité.</p></Card>
          <Card><h4 className="font-semibold">Automatisation</h4><p className="text-slate-300 mt-1">Workflows Excel/SQL, macros robustes, interop .NET.</p></Card>
          <Card><h4 className="font-semibold">Pilotage</h4><p className="text-slate-300 mt-1">KPI utiles, visualisation claire, documentation et transfert.</p></Card>
        </div>
      </section>
      <CTA />
    </div>
  )
}
