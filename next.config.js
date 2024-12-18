/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '3000',
          pathname: '/images/**',
        },
      ],
    },
    // env: {
    //   API_URL: process.env.NEXT_PUBLIC_API_URL,
    // },
};

module.exports = nextConfig