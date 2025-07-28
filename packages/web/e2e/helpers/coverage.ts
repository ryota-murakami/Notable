import { type Page } from '@playwright/test'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export async function collectIstanbulCoverage(page: Page, testName?: string) {
  // Collect coverage from window.__coverage__
  const coverage = await page.evaluate(() => {
    return (window as any).__coverage__
  })

  if (!coverage) {
    console.log('No Istanbul coverage found on window.__coverage__')
    return
  }

  // Create .nyc_output directory
  const outputDir = path.join(__dirname, '../../.nyc_output')
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Save coverage data
  const filename = testName 
    ? `coverage-${testName}-${Date.now()}.json`
    : `coverage-${Date.now()}.json`
  const filepath = path.join(outputDir, filename)
  
  fs.writeFileSync(filepath, JSON.stringify(coverage, null, 2))
  console.log(`Coverage saved to: ${filepath}`)
  
  return coverage
}