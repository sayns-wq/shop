/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    domains: ["cdn.sportmaster.ru"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
