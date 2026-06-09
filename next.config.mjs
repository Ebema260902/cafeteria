/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Desactiva el caché de webpack en desarrollo para evitar
      // el error "Array buffer allocation failed" en Windows
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
