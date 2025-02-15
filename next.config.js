/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true, // Ensure this is enabled if using App Router (Next.js 13+)
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/login',
          permanent: true, // Use "false" if temporary
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  