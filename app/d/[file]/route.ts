export async function GET(request: Request, { params }: { params: { file: string } }) {
  const file = decodeURIComponent(params.file || '')

  // Sécurité : si on t'appelle déjà via /downloads, on ne refait pas la boucle
  if (request.url.includes('/downloads/')) {
    return new Response('Bad redirect loop', { status: 400 })
  }

  try {
    const n8n = process.env.N8N_DL_WEBSITE_HOOK
    if (n8n && file) {
      const headers = request.headers
      const payload = {
        file,
        ts: new Date().toISOString(),
        ip: headers.get('x-forwarded-for')?.split(',')[0] || null,
        ua: headers.get('user-agent') || null,
        ref: headers.get('referer') || null,
      }
      // On trace mais on ne bloque pas
      fetch(n8n, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch((err) => console.error('DL tracking error', err))
    }
  } catch (e) {
    console.error('Erreur tracking :', e)
  }

  // redirige vers le fichier final

  const url = new URL(request.url)
  // on ajoute __dl=1 pour empêcher la redirection inverse
  const target = new URL(`/downloads/${encodeURIComponent(file)}?__dl=1`, url.origin)
  return Response.redirect(target, 302)
}
