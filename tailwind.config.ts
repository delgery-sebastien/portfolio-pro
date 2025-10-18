import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx,mdx}','./components/**/*.{ts,tsx}','./content/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors: { brand: { DEFAULT:'#0f172a', accent:'#00e7aa' } }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
export default config
