import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
const withMDX = createMDX({ 
	extension: /\.mdx?$/,
	options: { remarkPlugins: [remarkGfm] }
})
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  // on n'échoue pas le build sur le lint
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: { ignoreBuildErrors: true },
  experimental: { }
}
export default withMDX(nextConfig)
