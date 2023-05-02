module.exports = {
  images: {
    loader: 'custom',
    domains: ['i.imgur.com']
  },
  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ }
    return config
  }
}
