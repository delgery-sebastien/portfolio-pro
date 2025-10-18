import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx,mdx}','./components/**/*.{ts,tsx}','./content/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: { 800:'#0f2747', 700:'#1a365d', DEFAULT:'#1a365d' },
        accent: { green:'#2ecc71', bronze:'#c58a5a' }
      },
      borderRadius:{ '2xl':'1.25rem' },
      boxShadow:{ soft:'0 12px 30px -12px rgba(0,0,0,0.35)' }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
export default config