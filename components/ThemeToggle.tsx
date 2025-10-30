'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    const prefers =
      typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = saved ? saved === 'dark' : prefers
    document.documentElement.classList.toggle('dark', isDark)
    setDark(isDark)
  }, [])

  if (!mounted) return null

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      aria-label="Basculer le thème"
      className="relative h-8 w-14 rounded-full border border-slate-300/60 dark:border-slate-700/60
                 bg-white/70 dark:bg-slate-900/70 backdrop-blur transition-colors"
    >
      {/* rail */}
      <span className="absolute inset-0 rounded-full" />
      {/* thumb */}
      <span
        className={`absolute top-1 h-6 w-6 rounded-full border
                    border-slate-300/70 dark:border-slate-700/70
                    bg-white dark:bg-slate-800 shadow
                    transition-all ${dark ? 'left-7' : 'left-1'}`}
      />
      {/* icônes */}
      <span className="pointer-events-none absolute left-2 top-2 h-4 w-4 text-amber-400 dark:opacity-0">
        {/* soleil */}
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
        </svg>
      </span>
      <span className="pointer-events-none absolute right-2 top-2 h-4 w-4 text-sky-400 opacity-0 dark:opacity-100">
        {/* lune */}
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      </span>
    </button>
  )
}
