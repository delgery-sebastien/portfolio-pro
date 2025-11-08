import '../styles/globals.css'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'
import { getSiteUrl } from '@/lib/site'

const SITE = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'DELGERY Sébastien — Consultant PPM & BI, VBA & .NET',
    template: '%s — DELGERY Sébastien',
  },
  description:
    'Portfolio personnel — Automatisation Microsoft, interop .NET / Excel, data & BI. Études de cas, services, téléchargements et contact.',
  openGraph: {
    title: 'DELGERY Sébastien — Consultant PPM & BI, VBA & .NET',
    description:
      'Portfolio personnel — Automatisation Microsoft, interop .NET / Excel, data & BI.',
    url: SITE,
    siteName: 'Portfolio — DELGERY Sébastien',
    images: ['/og-image.webp'],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/' },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  try {
    var s = localStorage.getItem('theme');
    var m = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var d = s ? (s === 'dark') : m;
    if (d) document.documentElement.classList.add('dark');
  } catch(e){}
})();`,
          }}
        />
        {/* JSON-LD: WebSite + Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Portfolio — DELGERY Sébastien",
                "url": SITE,
                "inLanguage": "fr-FR"
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "DELGERY Sébastien",
                "url": SITE,
                "jobTitle": "Consultant PPM & BI, VBA & .NET",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Overview Software"
                }
              }
            ])
          }}
        />
      </head>
      <body>
        <NavBar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
