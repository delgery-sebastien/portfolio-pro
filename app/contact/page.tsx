import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Decrivez brievement votre besoin - reponse sous 24h ouvrees.',
  alternates: { canonical: '/contact' },
}

export default function Contact() {
  return (
    <section className="container pt-12 max-w-2xl">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="text-base-normal mt-2">Decrivez brievement votre besoin, reponse sous 24h ouvrees.</p>
      <ContactForm />
      <p className="text-xs text-base-light mt-2">Formulaire protege - anti-spam honeypot et controle serveur.</p>
    </section>
  )
}

