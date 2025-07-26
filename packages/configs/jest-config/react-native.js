// Modules that need to be transformed by Jest (not ignored)
const nodeModulesToTransform = [
  'react-native',
  '@react-native',
  '@react-native-community',
  'expo',
  '@expo',
  '@expo-google-fonts',
  'react-navigation',
  '@react-navigation',
  '@unimodules',
  'unimodules',
  'sentry-expo',
  'native-base',
  'react-native-svg',
  'react-native-paper',
  'react-native-vector-icons',
  'react-native-markdown-display',
  '@supabase',
  'fuse.js',
  '@testing-library',
  'jest-',
  'react-native-gesture-handler',
  'react-native-reanimated',
  'react-native-screens',
  'react-native-safe-area-context',
  'react-native-web'
];

/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: [
    '**/__tests__/**/*.(ts|tsx|js|jsx)',
    '**/?(*.)+(spec|test).(ts|tsx|js|jsx)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transformIgnorePatterns: [
    `node_modules/(?!(${nodeModulesToTransform.join('|')}))`,
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
  
  // Performance optimizations
  maxWorkers: '50%', // Utilize half of available cores
  maxConcurrency: 5,
  
  // Cache settings
  cacheDirectory: '<rootDir>/.jest-cache',
  
  // Coverage thresholds
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 60,
      functions: 70,
      lines: 70,
    },
  },
  
  // Test environment for React Native
  testEnvironment: 'node',
  
  // Verbose output for better debugging
  verbose: false,
}
