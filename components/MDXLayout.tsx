import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default function MDXLayout({ children, source }: any) {
  const { data } = matter(source)
  return (
    <article className="container pt-10 prose prose-invert">
      <header className="mb-8 border-b border-slate-700 pb-4">
        <h1>{data.title}</h1>
        <p className="text-sm text-base-muted">
          {data.date} · {data.author}
        </p>
        <p className="text-base-normal">{data.description}</p>
      </header>
      {children}
    </article>
  )
}
