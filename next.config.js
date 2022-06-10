/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
 

module.exports = { 
  images: {
  domains: ['images.ctfassets.net'],
  deviceSizes: [320, 420, 768, 1024, 1200],
  
},
  nextConfig,
  
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },
}