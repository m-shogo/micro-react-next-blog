/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //domains: ['images.microcms-assets.io'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
  env: {
    SERVICE_DOMAIN: process.env.SERVICE_DOMAIN, // 環境変数の値を参照
    API_KEY: process.env.API_KEY, // 環境変数の値を参照
  },
};

export default nextConfig;
