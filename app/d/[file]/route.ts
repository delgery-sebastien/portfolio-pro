export async function GET(request: Request, { params }: { params: { file: string } }) {
  const file = params.file;
  const url = process.env.N8N_DL_WEBHOOK;
  if (url) {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        file,
        at: new Date().toISOString(),
        ua: request.headers.get('user-agent') || '',
        ref: request.headers.get('referer') || ''
      })
    });
  }
  const target = new URL(`/downloads/${file}`, request.url);
  return Response.redirect(target, 302);
}
