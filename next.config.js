/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = { 
  images: {
  domains: [
    'res.cloudinary.com'
  ],
  deviceSizes: [320, 420, 768, 1024, 1200],
  loader: "default",
},
  nextConfig
}