import { type Page } from '@playwright/test'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export async function collectCoverage(page: Page, testName: string) {
  // Collect JS coverage using V8 coverage API
  const coverage = await page.coverage.stopJSCoverage()
  
  // Create coverage output directory
  const coverageDir = path.join(__dirname, '..', '.nyc_output')
  if (!fs.existsSync(coverageDir)) {
    fs.mkdirSync(coverageDir, { recursive: true })
  }
  
  // Save coverage data
  const coverageFile = path.join(coverageDir, `coverage-${testName}-${Date.now()}.json`)
  fs.writeFileSync(coverageFile, JSON.stringify(coverage, null, 2))
  
  console.log(`Coverage saved to: ${coverageFile}`)
}

export async function startCoverage(page: Page) {
  // Start JS coverage collection
  await page.coverage.startJSCoverage({
    resetOnNavigation: false,
  })
}