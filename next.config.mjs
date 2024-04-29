/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    esmExternals: "loose", // <-- add this
    serverComponentsExternalPackages: ["mongoose"], // <-- and this
  },
  webpack: (config, options) => { 
    config.experiments = {
      topLevelAwait: true,
      layers: true
    };
    return config;
  },
};

export default nextConfig;
