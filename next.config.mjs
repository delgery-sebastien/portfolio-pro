import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
const withMDX = createMDX({ 
	extension: /\.mdx?$/,
	options: { remarkPlugins: [remarkGfm] }
})
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: { }
}
export default withMDX(nextConfig)
