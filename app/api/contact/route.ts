// app/api/contact/route.ts
import { NextResponse } from 'next/server'

// === OPTION A : envoi via email SMTP ou service externe ===
// import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, company, message } = data

    // validation basique des champs requis
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Champs manquants' }, { status: 400 })
    }

    // === exemple basique : affichage côté serveur (logs Vercel, local, etc.)
    //console.log('📩 Nouveau message reçu :', { name, email, company, message })

    // === OPTION A — envoi email (décommenter quand config prête)
    /*
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      subject: `Nouveau message de ${name}`,
      text: `
Nom : ${name}
Email : ${email}
Société : ${company || '—'}
Message :
${message}
`,
    })
    */

    // === OPTION B — webhook n8n / Discord / autre ===

    const url = process.env.N8N_WEBHOOK_URL
    if (!url) {
      console.error('❌ N8N_WEBHOOK_URL non configurée')
      return NextResponse.json({ ok: false, error: 'Webhook n8n indisponible' }, { status: 502 })
    }

    // timeout via AbortController
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 7000)
    let res
    try {
      res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, message }),
        signal: controller.signal,
      })
    } catch (err: any) {
      // fetch failed (network error, timeout, DNS, etc.)
      console.error('❌ fetch vers n8n failed', err)
      return NextResponse.json({ ok: false, error: 'Webhook n8n indisponible' }, { status: 502 })
    } finally {
      clearTimeout(timeout)
    }

    if (!res.ok) {
      const bodyText = await res.text().catch(() => '')
      console.error('❌ Erreur webhook n8n :', res.status, bodyText)
      return NextResponse.json({ ok: false, error: 'Webhook n8n indisponible' }, { status: 502 })
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false, error: 'Erreur serveur' }, { status: 500 })
  }
}
