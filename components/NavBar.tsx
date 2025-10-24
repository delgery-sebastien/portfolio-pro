'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const links = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/cases', label: 'Cas clients' },
  { href: '/downloads', label: 'Téléchargements' },
  //{ href: '/search', label: 'Recherche' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  //{ href: '/about', label: 'A propos' },
]
export default function NavBar(){
  const p = usePathname()
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/60 backdrop-blur bg-slate-950/70">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold tracking-tight"><span className="text-emerald-400">Overview</span> Software</Link>
        <nav className="flex gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={`px-3 py-2 rounded-lg text-sm hover:text-emerald-300 ${p===l.href?'text-emerald-400':'text-slate-300'}`}>{l.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
