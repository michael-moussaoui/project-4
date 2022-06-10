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
    // Fixes npm packages `that depend on `fs` module
    if (!isServer){
      config.node ={
        fs:'empty'
      }
    }
    // Important: return the modified config
    return config
  }
}