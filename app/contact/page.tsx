'use client'
import { useState } from 'react'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget // ✅ on garde une ref stable
    setLoading(true)
    setOk(false)
    setError(null)

    try {
      const data = Object.fromEntries(new FormData(form).entries())
      console.log('Contact form submit, payload:', data)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // propre pour JSON
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        // récupère le message serveur si possible, sinon utilise le message générique
        const errData = await res.json().catch(() => ({}))
        setOk(false)
        setError('Une erreur est survenue, veuillez réessayer plus tard.')

        return
      }

      setOk(true)

      form.reset() // ✅ pas de e.currentTarget ici
    } catch (err: any) {
      console.error(err)
      setOk(false)
      setError('Message non envoyé — veuillez réessayer plus tard.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="container pt-12 max-w-2xl">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="text-base-normal mt-2">
        Décrivez brièvement votre besoin, réponse sous 24h ouvrées.
      </p>
      <form onSubmit={onSubmit} className="card p-6 mt-6 space-y-4">
        <input
          name="name"
          required
          placeholder="Nom"
          className="w-full px-4 py-2 rounded-xl bg-input border border-input"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="w-full px-4 py-2 rounded-xl bg-input border border-input"
        />
        <input
          name="company"
          placeholder="Société (facultatif)"
          className="w-full px-4 py-2 rounded-xl bg-input border border-input"
        />
        <textarea
          name="message"
          required
          placeholder="Votre message"
          rows={6}
          className="w-full px-4 py-2 rounded-xl bg-input border border-input"
        ></textarea>
        <div className="flex items-center justify-between gap-3">
          <div className="min-h-[1.25rem] flex items-center">
            {ok && <p className="text-emerald-500 text-sm">Message envoyé. Merci !</p>}
            {error && (
              <p className="text-red-500 text-sm">Message non envoyé — veuillez réessayer.</p>
            )}
          </div>
          <button disabled={loading} className="btn btn-primary">
            {loading ? 'Envoi...' : 'Envoyer'}
          </button>
        </div>
        {/* 

        <div className="flex justify-end">
          <button disabled={loading} className="btn btn-primary">
            {loading ? 'Envoi...' : 'Envoyer'}
          </button>
        </div>
        {ok && <p className="text-emerald-500 mt-2">Message envoyé. Merci !</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>} */}
      </form>
      <p className="text-xs text-base-light mt-2">
        Formulaire protégé — anti-spam honeypot et contrôle serveur.
      </p>
    </section>
  )
}
