import { FullConfig } from '@playwright/test'
import { execSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function globalSetup(config: FullConfig) {
  console.log('🚀 Starting E2E test environment...')

  // Start test database
  const scriptsDir = path.join(__dirname, '../../scripts')

  try {
    // Check if test database is already running
    try {
      execSync(`${scriptsDir}/e2e-test-db.sh status`, {
        stdio: 'pipe',
        cwd: path.join(__dirname, '../..'),
      })
      console.log('🗄️  Test database is already running')
    } catch {
      // Start the test database if not running
      console.log('🗄️  Starting test database...')
      execSync(`${scriptsDir}/e2e-test-db.sh start`, {
        stdio: 'inherit',
        cwd: path.join(__dirname, '../..'),
      })
    }

    // Set test database URL as environment variable
    process.env.DATABASE_URL =
      'postgresql://postgres:testpassword@localhost:5433/notable_test'
    process.env.TEST_DATABASE_URL =
      'postgresql://postgres:testpassword@localhost:5433/notable_test'

    // Enable MSW for tests
    process.env.NEXT_PUBLIC_API_MOCKING = 'enabled'

    console.log('✅ Test environment ready!')
  } catch (error) {
    console.error('❌ Failed to start test environment:', error)
    throw error
  }
}

export default globalSetup
