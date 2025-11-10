'use client'
import { useState } from 'react'
import type React from 'react'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setLoading(true)
    setOk(false)
    setError(null)

    try {
      const data = Object.fromEntries(new FormData(form).entries())
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        setOk(false)
        setError('Une erreur est survenue, veuillez réessayer plus tard.')
        return
      }

      setOk(true)
      form.reset()
    } catch (err: any) {
      console.error(err)
      setOk(false)
      setError('Message non envoyé — veuillez réessayer plus tard.')
    } finally {
      setLoading(false)
    }
  }

  return (
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
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <button disabled={loading} className="btn btn-primary">
          {loading ? 'Envoi...' : 'Envoyer'}
        </button>
      </div>
    </form>
  )
}
