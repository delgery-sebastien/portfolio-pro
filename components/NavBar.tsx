'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/ThemeToggle'
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
export default function NavBar() {
  const p = usePathname()
  return (
    <header className="sticky top-0 z-40 nav-bar">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="nav-link-active">PORTFOLIO - </span>{' '}
          <span className="nav-link">DELGERY Sébastien</span>
        </Link>
        <nav className="flex gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-2 rounded-lg text-sm ${
                p === l.href ? 'nav-link-active' : 'nav-link'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
