/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    /* config options here */
    basePath: '/Knowlihub', // Replace with your GitHub repository name
    assetPrefix: '/Knowlihub/', // Replace with your GitHub repository name
  
    // Other configurations...
  
    // For GitHub Pages, you might want to set trailingSlash to true
    trailingSlash: true,
    images: {
        
        unoptimized: false,
    },
  
  }
   
module.exports = nextConfig