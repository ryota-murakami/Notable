import type { PlaywrightTestConfig } from '@playwright/test'
import baseConfig from './playwright.config'

const config: PlaywrightTestConfig = {
  ...baseConfig,
  
  // Update webServer to use coverage mode
  webServer: {
    ...baseConfig.webServer,
    command: process.env.CI 
      ? 'COVERAGE=1 npm run build && COVERAGE=1 npm run start' 
      : 'COVERAGE=1 NODE_ENV=test npm run dev:coverage',
    env: {
      ...(baseConfig.webServer && !Array.isArray(baseConfig.webServer) ? baseConfig.webServer.env : {}),
      COVERAGE: '1',
      NODE_ENV: 'test',
      NYC_CWD: process.cwd(),
    },
  },
}

export default config