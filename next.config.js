/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// next.config.js
module.exports = {
    output: {
      // This is the directory where 'next export' will write the static HTML files
      // Make sure this directory doesn't conflict with your version control or other files
      path: 'out',
    },
  }
  