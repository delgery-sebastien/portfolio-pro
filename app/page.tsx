import Link from 'next/link'
import CTA from '@/components/CTA'
import { Card } from '@/components/Card'
import TestimonialCard from '@/components/TestimonialCard'

export default function Page() {
  return (
    <div>
      <section className="container pt-16 md:pt-24">
        <div className="grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              DELGERY Sébastien - Consultant <span className="keyword">PPM & BI</span>, Développeur{' '}
              <span className="keyword">VBA & .NET</span> senior
            </h1>
            <p className="mt-3 kicker max-w-2xl">
              J’aide les directions IT & métiers à fiabiliser leurs outils de pilotage et
              automatiser leurs processus. 24 ans d’expérience pour transformer vos macros et
              reports en outils robustes, documentés et sécurisés.
            </p>

            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="btn btn-primary">
                Parler de votre projet
              </Link>
              <Link href="/cases" className="btn btn-ghost">
                Voir des cas clients
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="card border-card p-6">
              <h3 className="font-semibold">Spécialités</h3>
              <ul className="text-base-normal mt-2 list-disc list-inside space-y-1">
                <li>Excel VBA avancé, .NET, interop Office</li>
                <li>SQL Server, Access, Oracle (PL/SQL)</li>
                <li>Jaspersoft, Power BI, reporting automatisé</li>
                <li>APIs & intégrations (n8n, IA)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card>
            <h4 className="font-semibold">Pilotage et aide à la décision</h4>
            <p className="text-base-normal mt-1">
              KPIs utiles, visualisations claires, documentation et transfert. Pilotage projet,
              budget, capacity management, risques.
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold">Automatisation VBA</h4>
            <p className="text-base-normal mt-1">
              Automatisation Microsoft Excel et addin, macros robustes, interop .NET, traitement et
              visualisatrion de données (SQL, csv, etc.).
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold">Industrialisation</h4>
            <p className="text-base-normal mt-1">
              Qualité code, normes et méthodes, ordonnancement, tests, versioning, packaging et
              sécurité.
            </p>
          </Card>
        </div>
        {/*
		<h2>Témoignages</h2>
		<div className="grid md:grid-cols-2 gap-6">
		  <TestimonialCard
			quote="Livrables propres et documentés, déploiement sans friction."
			author="Claire D."
			role="Contrôle de gestion"
		  />
		  <TestimonialCard
			quote="Interop .NET/Excel robuste, gains de temps immédiats."
			author="Marc L."
			role="IT interne"
		  />
		</div>
		<p className="text-xs text-base-light mt-2">
		  Témoignages anonymisés (format “Prénom N.”) publiés avec consentement.
		</p>
		*/}
      </section>
      <CTA />
    </div>
  )
}
