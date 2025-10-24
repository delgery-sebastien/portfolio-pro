export async function POST(req: Request){
  const body = await req.json(); // { quote, author, role, consent:boolean }
  // anonymisation minimaliste côté serveur (filet de sécurité)
  const anon = (s:string) => s.replace(/\b([A-ZÀ-ÖØ-Þ][a-zà-öø-ÿ]+)\s+([A-ZÀ-ÖØ-Þ])[A-Za-zÀ-ÖØ-öø-ÿ-]*/,'$1 $2.')
  const payload = { ...body, author: anon(body.author||''), at: new Date().toISOString() }
  const url = process.env.N8N_TESTIMONIAL_WEBHOOK
  if (url) await fetch(url,{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
  return new Response(JSON.stringify({ ok:true }), { status: 200 })
}
