import { test as base, expect } from '@playwright/test'
import * as path from 'path'
import * as fs from 'fs'
import MCR from 'monocart-coverage-reports'

// Extend basic test by providing coverage collection
export const test = base.extend({
  page: async ({ page }, use) => {
    // Only collect coverage when COVERAGE env var is set
    if (process.env.COVERAGE !== '1') {
      await use(page)
      return
    }

    // Start coverage collection before navigation
    await Promise.all([
      page.coverage.startJSCoverage({
        resetOnNavigation: false,
      }),
      page.coverage.startCSSCoverage({
        resetOnNavigation: false,
      }),
    ])

    // Use the page in the test
    await use(page)

    // Stop coverage collection
    const [jsCoverage, cssCoverage] = await Promise.all([
      page.coverage.stopJSCoverage(),
      page.coverage.stopCSSCoverage(),
    ])

    // Save coverage data to temp files for later aggregation
    const coverageData = [...jsCoverage, ...cssCoverage]

    const tempDir = path.join(process.cwd(), '.nyc_output', 'v8-coverage')

    // Ensure directory exists
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true })
    }

    // Save optimized coverage data with unique filename
    const timestamp = Date.now()
    const random = Math.random().toString(36).substring(7)
    const filename = `coverage-${timestamp}-${random}.json`
    const filepath = path.join(tempDir, filename)

    fs.writeFileSync(filepath, JSON.stringify(coverageData, null, 2))
  },
})

// Re-export expect for convenience
export { expect }

// Global teardown to generate final report
async function globalTeardownImpl() {
  if (process.env.COVERAGE !== '1') {
    return
  }

  const tempDir = path.join(process.cwd(), '.nyc_output', 'v8-coverage')

  if (!fs.existsSync(tempDir)) {
    console.log('No coverage data found')
    return
  }

  // Read all coverage files
  const files = fs.readdirSync(tempDir).filter((f) => f.startsWith('coverage-'))

  if (files.length === 0) {
    console.log('No coverage files found')
    return
  }

  console.log(`Processing ${files.length} coverage files...`)

  // Initialize monocart coverage reporter
  const mcr = MCR({
    name: 'E2E Coverage Report',
    outputDir: './coverage',
    reports: ['v8', 'html', 'lcov', ['console-details', { maxCols: 120 }]],
    sourceFilter: (sourcePath: string) => {
      // Only include source files from our app
      if (sourcePath.includes('node_modules')) return false
      if (sourcePath.includes('.next')) return false
      if (!sourcePath.includes('/packages/web/')) return false

      // Include TypeScript/JavaScript files
      return /\.(ts|tsx|js|jsx)$/.test(sourcePath)
    },
  })

  // Add all coverage data
  for (const file of files) {
    const filepath = path.join(tempDir, file)
    const coverageData = JSON.parse(fs.readFileSync(filepath, 'utf-8'))
    await mcr.add(coverageData)
  }

  // Generate the report
  await mcr.generate()

  // Clean up temp files
  for (const file of files) {
    fs.unlinkSync(path.join(tempDir, file))
  }

  console.log('Coverage report generated in ./coverage')
}

// Export globalTeardown as default for Playwright
export default globalTeardownImpl
