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
    return config
  }
}

module.exports = nextConfig
