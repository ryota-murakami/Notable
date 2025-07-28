import { defineConfig } from '@playwright/test'
import baseConfig from './playwright.config'

export default defineConfig({
  ...baseConfig,
  
  // Update test directory for coverage tests
  testDir: './e2e-coverage',
  
  // Run tests with coverage mode enabled
  webServer: {
    ...baseConfig.webServer,
    command: 'COVERAGE=1 npm run dev:coverage',
    env: {
      ...(baseConfig.webServer && !Array.isArray(baseConfig.webServer) ? baseConfig.webServer.env : {}),
      COVERAGE: '1',
      NODE_ENV: 'test',
    },
  },
  
  // Use list reporter for CI
  reporter: [['list'], ['html', { open: 'never' }]],
})