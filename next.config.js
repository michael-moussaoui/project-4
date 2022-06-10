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
  
  webpack: (config, { isServer }) => {
    // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs
    if (!isServer){
      config.resolve.fallback ={
        fs:false
      }
    }
    // Important: return the modified config
    return config
  }
}