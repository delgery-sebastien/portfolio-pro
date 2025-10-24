// lib/site.ts
export function getSiteUrl() {
  // Ordre de priorité :
  // 1) NEXT_PUBLIC_SITE_URL (si tu l'as mis dans Vercel Settings)
  // 2) VERCEL_URL (domain preview *.vercel.app) -> on préfixe https://
  // 3) fallback local
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  const vercel = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;
  return fromEnv || vercel || "http://localhost:3000";
}
