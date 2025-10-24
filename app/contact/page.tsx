'use client'
import { useState } from 'react'
export default function Contact(){
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState(false)
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data)})
    setOk(res.ok)
    setLoading(false)
    if(res.ok) e.currentTarget.reset()
  }
  return (
    <section className="container pt-12 max-w-2xl">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="text-slate-300 mt-2">Décrivez brièvement votre besoin, réponse sous 24h ouvrées.</p>
      <form onSubmit={onSubmit} className="card p-6 mt-6 space-y-4">
        <input name="name" required placeholder="Nom" className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-700"/>
        <input name="email" type="email" required placeholder="Email" className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-700"/>
        <input name="company" placeholder="Société (facultatif)" className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-700"/>
        <textarea name="message" required placeholder="Votre message" rows={6} className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-700"></textarea>
        <div className="flex justify-end">
        <button disabled={loading} className="btn btn-primary">
          {loading ? 'Envoi...' : 'Envoyer'}
        </button>
      </div>
        {ok && <p className="text-emerald-400">Message envoyé. Merci !</p>}
      </form>
      <p className="text-xs text-slate-500 mt-2">Formulaire protégé — anti-spam honeypot et contrôle serveur.</p>
    </section>
  )
}


		