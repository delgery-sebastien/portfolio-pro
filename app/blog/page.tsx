import Section from '@/components/Section'
import { Card } from '@/components/Card'
export default function Blog(){
  return (
    <Section className="pt-12">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <p className="text-slate-300 mt-2">Notes techniques, retours d’expérience et pédagogie Microsoft/BI.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <Card><h3 className="font-semibold">Interop Excel ↔ .NET : bonnes pratiques</h3><p className="text-slate-300 mt-1">Gestion COM, erreurs, packaging sécurisé.</p></Card>
      </div>
    </Section>
  )
}
