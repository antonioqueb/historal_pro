import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  output: 'standalone',
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve('./');
    return config;
  },
};

export default nextConfig;