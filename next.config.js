// next.config.js
const withTM = require('next-transpile-modules')(['lucide-react']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withTM(nextConfig);
