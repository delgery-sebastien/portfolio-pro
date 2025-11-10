import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Décrivez brièvement votre besoin — réponse sous 24h ouvrées.',
  alternates: { canonical: '/contact' },
}

export default function Contact() {
  return (
    <section className="container pt-12 max-w-2xl">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="text-base-normal mt-2">Décrivez brièvement votre besoin, réponse sous 24h ouvrées.</p>
      <ContactForm />
      <p className="text-xs text-base-light mt-2">Formulaire protégé — anti-spam honeypot et contrôle serveur.</p>
    </section>
  )
}
