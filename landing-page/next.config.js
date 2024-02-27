/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    reactStrictMode: true,
    swcMinify: true,
    basePath: '/bundler-test-executor',
    images: {
        unoptimized: true,
    },
};
const withPlugins = require('next-compose-plugins');
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  ...nextConfig,
});

module.exports = async (phase) => withPlugins([withNextra], nextConfig)(phase, { undefined });