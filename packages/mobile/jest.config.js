/** @type {import('jest').Config} */
module.exports = {
  preset: '../configs/jest-config/react-native.js',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.expo/',
    '/dist/',
    '/coverage/',
    '/e2e/', // E2E tests are run with Detox, not Jest
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-native-community|expo|@expo|@expo-google-fonts|react-navigation|@react-navigation|@unimodules|unimodules|sentry-expo|native-base|react-native-svg|react-native-paper|react-native-vector-icons|react-native-markdown-display|@supabase|fuse.js|@testing-library|jest-|react-native-gesture-handler|react-native-reanimated|react-native-screens|react-native-safe-area-context|react-native-web)/)',
  ],
}