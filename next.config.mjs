import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: { remarkPlugins: [remarkGfm] },
})
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  // on n'échoue pas le build sur le lint
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: { ignoreBuildErrors: true },
  experimental: {},
  async redirects() {
    return [
      {
        source: '/downloads/:file',
        missing: [{ type: 'query', key: '__dl' }],
        destination: '/d/:file',
        permanent: false,
      },
      {
        source: '/blog/tableaux-collections-dictionnaires-v2',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
export default withMDX(nextConfig)
