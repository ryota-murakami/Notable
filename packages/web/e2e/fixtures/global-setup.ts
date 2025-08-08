import { type FullConfig } from '@playwright/test'
import { execSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function globalSetup(_config: FullConfig) {
  console.info('🚀 Starting E2E test environment...')

  try {
    // In CI or when Docker is not available, use MSW mocking
    // The e2e-test-db.sh script is not available, so we'll rely on mocking
    if (process.env.CI) {
      console.info('🔧 Running in CI - using MSW mocking for all operations')
      process.env.DATABASE_URL = 'mock://localhost/notable_test'
      process.env.TEST_DATABASE_URL = 'mock://localhost/notable_test'
    } else {
      // Check if Docker is available locally
      let dockerAvailable = false
      try {
        execSync('docker ps', { stdio: 'pipe' })
        dockerAvailable = true
      } catch {
        console.info('⚠️  Docker not available, running with MSW mocking only')
      }

      if (dockerAvailable) {
        // For local development, you can set up a test database if needed
        // For now, we'll use mocking to ensure tests work
        console.info('🔧 Using MSW mocking for consistent test behavior')
        process.env.DATABASE_URL = 'mock://localhost/notable_test'
        process.env.TEST_DATABASE_URL = 'mock://localhost/notable_test'
      } else {
        // Use mock database URL when Docker is not available
        process.env.DATABASE_URL = 'mock://localhost/notable_test'
        process.env.TEST_DATABASE_URL = 'mock://localhost/notable_test'
        console.info('🔧 Using MSW mocking for database operations')
      }
    }

    // Enable MSW for tests
    process.env.NEXT_PUBLIC_API_MOCKING = 'enabled'
    process.env.API_MOCKING = 'enabled' // Server-side variable

    console.info('✅ Test environment ready!')
  } catch (error) {
    console.error('❌ Failed to start test environment:', error)
    throw error
  }
}

export default globalSetup
