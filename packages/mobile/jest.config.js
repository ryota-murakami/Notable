module.exports = {
  // Don't use any preset to avoid React Native setup issues
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest.setup.base.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: [
    '**/__tests__/**/*.(spec|test).(ts|tsx|js|jsx)',
    '**/?(*.)+(spec|test).(ts|tsx|js|jsx)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['babel-preset-expo'] }],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-native-community|@react-native/js-polyfills|expo|@expo|@unimodules|react-native-.*|@react-native-.*|expo-.*|@expo/.*|react-navigation|@react-navigation|@react-navigation/.*|react-native-paper|react-native-vector-icons|react-native-markdown-display|@supabase|@supabase/.*|fuse\\.js|@testing-library|@testing-library/.*|react-native-gesture-handler|react-native-reanimated|react-native-screens|react-native-safe-area-context|react-native-web)/)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@/types$': '<rootDir>/types',
    '^~/(.*)$': '<rootDir>/$1',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.expo/',
    '/dist/',
    '/coverage/',
    '/e2e/',
  ],
  collectCoverageFrom: [
    '**/*.(ts|tsx|js|jsx)',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.expo/**',
    '!**/coverage/**',
    '!**/dist/**',
    '!**/*.config.(ts|tsx|js|jsx)',
    '!**/*.stories.(ts|tsx|js|jsx)',
    '!**/app.json',
    '!**/babel.config.js',
  ],

  // Test environment for React Native
  testEnvironment: 'node',

  // Verbose output for better debugging
  verbose: false,
}
