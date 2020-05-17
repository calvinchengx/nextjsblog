const withPlugins = require('next-compose-plugins')
const withOffline = require('next-offline')

const withOfflineConfig = {
  workboxOpts: {
    swDest: 'service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200
          }
        }
      }
    ]
  },
  experimental: {
    async rewrites() {
      return [
        {
          source: '/service-worker.js',
          destination: '/_next/static/service-worker.js'
        }
      ]
    }
  }
}

// next
const debug = process.env.NODE_ENV !== 'production'
const nextConfig = {
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  },
  assetPrefix: !debug ? '' : '',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    config.node = {
      fs: 'empty'
    }
    return config
  }
}

module.exports = withPlugins([[withOffline, withOfflineConfig]], nextConfig)
