/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
 
const cloudinaryBaseUrl = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`
module.exports = { 
  images: {
  domains: ['res.cloudinary.com'],
  deviceSizes: [320, 420, 768, 1024, 1200],
  loader: "cloudinary",
  path:cloudinaryBaseUrl
},
  nextConfig,
  
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },
}