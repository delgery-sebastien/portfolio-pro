import '../styles/globals.css'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'DELGERY Sébastien — Portfolio',
  description: 'Consultant PPM & BI — Développeur VBA & .NET senior.',
  openGraph: { title: 'DELGERY Sébastien — Portfolio', description: 'Consultant PPM & BI — Développeur VBA & .NET senior.', url: 'https://example.com', siteName: 'Overview Software', images: ['/og-image.png'], locale: 'fr_FR', type: 'website' },
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
