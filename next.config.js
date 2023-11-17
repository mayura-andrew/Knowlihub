/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    basePath: '/Knowlihub', // Replace with your GitHub repository name
    assetPrefix: '/Knowlihub/', // Replace with your GitHub repository name
  
    // Other configurations...
  
    // For GitHub Pages, you might want to set trailingSlash to true
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
  
  }
   
module.exports = nextConfig