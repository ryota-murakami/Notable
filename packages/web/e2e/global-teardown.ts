import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

async function globalTeardown() {
  // Check if coverage data exists
  const coverageDir = path.join(__dirname, '..', '.nyc_output')
  if (fs.existsSync(coverageDir)) {
    const files = fs.readdirSync(coverageDir)
    if (files.length > 0) {
      console.log('Global teardown: Generating coverage report...')
      try {
        execSync('npm run e2e:coverage:report', { 
          stdio: 'inherit',
          cwd: path.join(__dirname, '..')
        })
      } catch (error) {
        console.error('Failed to generate coverage report:', error)
      }
    }
  }
}

export default globalTeardown