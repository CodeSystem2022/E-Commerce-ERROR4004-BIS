/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  modularizeImports: {    
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },

}

module.exports = nextConfig
