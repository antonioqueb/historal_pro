// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['lh3.googleusercontent.com'],
    },
    output: 'standalone',  // Asegúrate de agregar esta línea
  };
  
  export default nextConfig;
  