import Link from 'next/link'
export default function CTA(){
  return (
    <div className="container mt-16">
      <div className="card p-8 text-center">
        <h3 className="text-xl font-semibold">Un projet à lancer ?</h3>
        <p className="text-slate-300 mt-2">Parlons de votre besoin (15 min) — audit gratuit et plan d’action.</p>
        <Link href="/contact" className="btn btn-primary mt-4">Me contacter</Link>
      </div>
    </div>
  )
}
