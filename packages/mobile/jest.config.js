// Modules that need to be transformed by Jest (not ignored)
const nodeModulesToTransform = [
  'react-native',
  'react-native-.*',
  '@react-native',
  '@react-native/.*',
  '@react-native-.*',
  '@react-native-community',
  '@react-native-community/.*',
  'expo',
  'expo-.*',
  '@expo',
  '@expo/.*',
  'react-navigation',
  '@react-navigation',
  '@react-navigation/.*',
  '@unimodules',
  'unimodules',
  'react-native-paper',
  'react-native-vector-icons',
  'react-native-markdown-display',
  '@supabase',
  '@supabase/.*',
  'fuse.js',
  '@testing-library',
  '@testing-library/.*',
  'react-native-gesture-handler',
  'react-native-reanimated',
  'react-native-screens',
  'react-native-safe-area-context',
  'react-native-web',
]

module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: [
    '**/__tests__/**/*.(ts|tsx|js|jsx)',
    '**/?(*.)+(spec|test).(ts|tsx|js|jsx)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transformIgnorePatterns: [
    `node_modules/(?!(${nodeModulesToTransform.join('|')})/?)`,
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
