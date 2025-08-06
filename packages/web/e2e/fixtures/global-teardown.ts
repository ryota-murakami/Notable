import { type FullConfig } from '@playwright/test'
import { execSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function globalTeardown(_config: FullConfig) {
  console.info('🧹 Cleaning up E2E test environment...')

  const scriptsDir = path.join(__dirname, '../../scripts')

  try {
    // Check if Docker is available before trying to stop the database
    try {
      execSync('docker ps', { stdio: 'pipe' })
      // Stop the test database only if Docker is available
      console.info('🛑 Stopping test database...')
      execSync(`${scriptsDir}/e2e-test-db.sh stop`, {
        stdio: 'inherit',
        cwd: path.join(__dirname, '../..'),
      })
    } catch {
      console.info('⚠️  Docker not available, skipping database cleanup')
    }

    console.info('✅ Test environment cleaned up!')
  } catch (error) {
    console.error('❌ Failed to clean up test environment:', error)
    // Don't throw here - we still want the tests to complete
  }
}

export default globalTeardown
