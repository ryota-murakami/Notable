const { getDefaultConfig } = require('expo/metro-config')

module.exports = (async () => {
  const config = getDefaultConfig(__dirname)

  // Optimize asset resolution
  config.resolver.assetExts = [...config.resolver.assetExts, 'db', 'sqlite']

  // Optimize transformer for better performance
  config.transformer.minifierConfig = {
    compress: {
      drop_console: false, // Set to true for production builds
      drop_debugger: true,
    },
  }

  // Enable better error messages
  config.resolver.platforms = ['ios', 'android', 'native', 'web']

  return config
})()
