const baseConfig = require('./react-native')

/** @type {import('jest').Config} */
module.exports = {
  ...baseConfig,
  
  // CI-specific settings
  maxWorkers: 2, // Limit workers in CI for better stability
  bail: 1, // Stop after first failure in CI to save resources
  verbose: true, // More detailed output for CI logs
  collectCoverage: true, // Always collect coverage in CI
  
  // CI-specific reporters
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './test-results/jest',
        outputName: 'mobile-results.xml',
        suiteName: 'Mobile Package Tests',
        classNameTemplate: '{classname}',
        titleTemplate: '{title}',
        ancestorSeparator: ' › ',
        usePathForSuiteName: true,
      },
    ],
  ],
  
  // Coverage settings for CI
  coverageDirectory: './coverage',
  coverageReporters: ['text', 'lcov', 'html', 'cobertura'],
  
  // More strict coverage thresholds for CI
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 65,
      functions: 75,
      lines: 75,
    },
  },
  
  // Timeout settings for CI
  testTimeout: 30000, // 30 seconds timeout for CI
  
  // Less caching in CI for more reliable results
  cache: false,
  
  // Force exit to prevent hanging in CI
  forceExit: true,
  
  // Detect open handles that might prevent Jest from exiting
  detectOpenHandles: true,
}