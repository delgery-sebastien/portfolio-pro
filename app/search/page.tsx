'use client'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Index, Document as FlexDoc } from 'flexsearch'
import { POSTS } from '@/data/posts'

type Doc = { id: number; slug: string; title: string; description?: string }

export default function SearchPage() {
  const [q, setQ] = useState('')
  const docs: Doc[] = useMemo(() => POSTS.map((p, i) => ({ id: i, ...p })), [])

  const { index, byId } = useMemo(() => {
    const idx = new Index({ tokenize: 'forward', preset: 'match' }) as unknown as FlexDoc
    const map = new Map<number, Doc>()
    docs.forEach((d) => {
      ;(idx as any).add(d.id, `${d.title} ${d.description || ''}`)
      map.set(d.id, d)
    })
    return { index: idx, byId: map }
  }, [docs])

  const results: Doc[] = useMemo(() => {
    if (!q.trim()) return []
    const ids = (index.search as any)(q, { limit: 20 }) as number[] | { result: number[] }[]
    const flat = Array.isArray(ids) ? ids : (ids as any[]).flatMap((r) => r.result)
    return [...new Set(flat)].map((id) => byId.get(id)!).filter(Boolean)
  }, [q, index, byId])

  return (
    <section className="container pt-10">
      <h1 className="text-3xl font-semibold">Recherche</h1>
      <div className="card p-4 mt-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher un article (ex: VBA, dictionnaire, Excel)"
          className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-700"
        />
      </div>

      <div className="mt-6 space-y-3">
        {results.map((r) => (
          <Link key={r.slug} href={r.slug} className="block card p-4 hover:border-slate-600">
            <h3 className="font-semibold">{r.title}</h3>
            {r.description && <p className="text-base-normal mt-1">{r.description}</p>}
          </Link>
        ))}
        {!q && <p className="text-base-muted">Astuce : tape “VBA”, “DLL”, “Power BI”…</p>}
        {q && results.length === 0 && <p className="text-base-muted">Aucun résultat.</p>}
      </div>
    </section>
  )
}
