export default function Footer(){
  return (
    <footer className="mt-20 border-t border-slate-800/60 py-8 text-sm text-slate-400">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Overview Software — Sébastien Delgery</p>
        <div className="flex gap-4">
          <a href="/legal" className="hover:text-emerald-300">Mentions légales</a>
          <a href="/privacy" className="hover:text-emerald-300">Confidentialité</a>
          <a href="/sitemap.xml" className="hover:text-emerald-300">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}
