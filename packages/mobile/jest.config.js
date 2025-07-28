/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.expo/',
    '/dist/',
    '/coverage/',
    '/e2e/', // E2E tests are run with Detox, not Jest
  ],
  // Create a simple test that validates the mobile package structure
  testMatch: ['**/__tests__/**/basic-structure.test.js'],
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(expo)/)',
  ],
}