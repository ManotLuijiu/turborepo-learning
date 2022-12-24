// const withTM = require('next-transpile-modules')(['ui']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
};

module.exports = nextConfig;
