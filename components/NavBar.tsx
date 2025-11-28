'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import ThemeToggle from '@/components/ThemeToggle'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/cases', label: 'Cas clients' },
  { href: '/downloads', label: 'Téléchargements' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function NavBar() {
  const p = usePathname()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="sticky top-0 z-40 nav-bar">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="nav-link-active">PORTFOLIO - </span>{' '}
          <span className="nav-link">DELGERY Sébastien</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-1">
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

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border panel-button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" className="text-slate-300">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile drawer (portal to escape header stacking context) */}
      {mounted &&
        createPortal(
          <div
            id="mobile-menu"
            className={`lg:hidden fixed inset-0 z-[200] ${open ? '' : 'pointer-events-none'}`}
          >
            <div
              className={`absolute inset-0 bg-black/50 transition-opacity ${
                open ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => setOpen(false)}
            />
            <div
              className={`absolute right-0 top-0 h-full w-80 max-w-[85%] panel-menu border-l border-card shadow-2xl transition-transform duration-200 ease-out ${
                open ? 'translate-x-0' : 'translate-x-full'
              }`}
              role="dialog"
              aria-modal="true"
            >
              <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                <span className="font-semibold text-slate-300">Menu</span>
                <button
                  type="button"
                  aria-label="Fermer le menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border panel-button"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path
                      d="M6 6l12 12M18 6l-12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <nav className="p-2 flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm ${
                      p === l.href ? 'nav-link-active' : 'nav-link'
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="px-2 pt-2">
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          </div>,
          document.body
        )}
    </header>
  )
}
