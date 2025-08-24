/**
 * @type {import('next').NextConfig}
 */
const { IgnorePlugin } = require('webpack');

const nextConfig = {
  // output: "export",
  distDir: "dist",
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // Ignore 'canvas' everywhere (server & client)
    config.plugins = config.plugins || [];
    config.plugins.push(
      new IgnorePlugin({ resourceRegExp: /^canvas$/ })
    );

    // And also make resolution explicitly fail-closed on client,
    // so any accidental import doesn't try to polyfill it.
    if (!isServer) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        canvas: false,
      };
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        canvas: false,
        fs: false,
        path: false,
        crypto: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
