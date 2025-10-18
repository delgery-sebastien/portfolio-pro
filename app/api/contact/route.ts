export async function POST(request: Request){
  try{
    const body = await request.json()
    const url = process.env.N8N_WEBHOOK_URL
    if(!url){
      return new Response(JSON.stringify({ ok:true, note: 'Set N8N_WEBHOOK_URL to forward to n8n.' }), { status: 200 })
    }
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)})
    return new Response(await res.text(), { status: res.status })
  }catch(e:any){
    return new Response(JSON.stringify({ ok:false, error: e?.message || 'error'}), { status: 500 })
  }
}
