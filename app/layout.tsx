import '../styles/globals.css'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const metadata: Metadata = {
  title: 'Sébastien Delgery — Consultant PPM & BI · VBA & .NET',
  description: 'Portfolio personnel — Automatisation Microsoft, interop .NET / Excel, data & BI. Études de cas, services, téléchargements et contact.',
  openGraph: { 
	title: 'DELGERY Sébastien - Consultant PPM & BI · VBA & .NET',
	description: 'Portfolio personnel — Automatisation Microsoft, interop .NET / Excel, data & BI.',
	url: '${SITE}', 
	siteName: 'Overview Software', 
	images: ['/og-image.png'], 
	locale: 'fr_FR', 
	type: 'website' },
  twitter: { card: 'summary_large_image' }
}
export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="fr">
      <body>
        <NavBar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
