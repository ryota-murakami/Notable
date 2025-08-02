import { FullConfig } from '@playwright/test'
import { execSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function globalTeardown(config: FullConfig) {
  console.log('🧹 Cleaning up E2E test environment...')

  const scriptsDir = path.join(__dirname, '../../scripts')

  try {
    // Stop the test database
    console.log('🛑 Stopping test database...')
    execSync(`${scriptsDir}/e2e-test-db.sh stop`, {
      stdio: 'inherit',
      cwd: path.join(__dirname, '../..'),
    })

    console.log('✅ Test environment cleaned up!')
  } catch (error) {
    console.error('❌ Failed to clean up test environment:', error)
    // Don't throw here - we still want the tests to complete
  }
}

export default globalTeardown
