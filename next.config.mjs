/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Configuração para Docker (standalone output)
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
}

export default nextConfig
