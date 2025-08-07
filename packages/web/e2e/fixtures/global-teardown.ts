import { type FullConfig } from '@playwright/test'
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function globalTeardown(_config: FullConfig) {
  console.info('🧹 Cleaning up E2E test environment...')

  try {
    // Check if Docker is available and if test environment was set up
    if (process.env.CI) {
      console.info(
        '🔧 Running in CI - no database cleanup needed (using MSW mocking)'
      )
    } else {
      try {
        execSync('docker ps', { stdio: 'pipe' })

        // Check if docker-compose.test.yml exists before trying to stop
        const dockerComposeTestPath = path.join(
          __dirname,
          '../../docker-compose.test.yml'
        )

        if (fs.existsSync(dockerComposeTestPath)) {
          console.info('🛑 Stopping test database...')
          const scriptsDir = path.join(__dirname, '../../scripts')
          execSync(`${scriptsDir}/e2e-test-db.sh stop`, {
            stdio: 'inherit',
            cwd: path.join(__dirname, '../..'),
            timeout: 10000, // 10 second timeout to prevent hanging
          })
        } else {
          console.info(
            '⚠️  docker-compose.test.yml not found, skipping database cleanup'
          )
        }
      } catch (dockerError) {
        console.info(
          '⚠️  Docker not available or cleanup failed, skipping database cleanup'
        )
        // Docker cleanup error logged
      }
    }

    console.info('✅ Test environment cleaned up!')
  } catch (error) {
    console.error('❌ Failed to clean up test environment:', error)
    // Don't throw here - we still want the tests to complete
    console.info('⚠️  Continuing despite cleanup failure...')
  }
}

export default globalTeardown
