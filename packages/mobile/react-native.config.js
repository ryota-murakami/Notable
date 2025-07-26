/* eslint-env node */

module.exports = {
  project: {
    ios: {
      automaticPodsInstallation: true,
    },
    android: {
      // Android specific configuration
    },
  },
  dependencies: {
    // Explicitly disable autolinking for packages that cause issues
    // Example: 'react-native-vector-icons': { platforms: { ios: null } }
  },
  commands: [
    {
      name: 'mobile-dev',
      description: 'Open Notable mobile development menu',
      func: () => {
        require('./scripts/mobile-dev.js');
      },
    },
  ],
  assets: ['./assets/fonts/'],
};