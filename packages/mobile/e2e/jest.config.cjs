/** @type {import('jest').Config} */
module.exports = {
  rootDir: '..',
  testMatch: ['<rootDir>/e2e/**/*.test.js'],
  testTimeout: 120000,
  maxWorkers: 1,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  reporters: ['default', 'detox/runners/jest/reporter'],
  testEnvironment: 'detox/runners/jest/testEnvironment',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/e2e/jest.setup.js'],
  // Enable ES module support for import syntax
  extensionsToTreatAsEsm: ['.js'],
  transform: {
    '^.+\\.js$': ['babel-jest', { presets: ['babel-preset-expo'] }],
  },
}
