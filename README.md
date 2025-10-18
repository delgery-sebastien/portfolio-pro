# Vitrine Pro — Next.js + Tailwind + MDX

## Installation
```bash
npm i
npm run dev
```

## n8n
Créer un webhook, puis `.env.local` :
```
N8N_WEBHOOK_URL=https://ton-n8n.tld/webhook/abc
```

## Déploiement
- Vercel (recommandé)
- IIS statique : `next build && next export` → servir `out/`
- Node derrière IIS : `next start`
