import { chromium } from '@playwright/test'
import fs from 'fs'
import path from 'path'

async function globalSetup() {
  // Clear coverage output directory
  const coverageDir = path.join(__dirname, '..', '.nyc_output')
  if (fs.existsSync(coverageDir)) {
    fs.rmSync(coverageDir, { recursive: true })
  }
  fs.mkdirSync(coverageDir, { recursive: true })

  console.log('Global setup: Coverage directory prepared')
}

export default globalSetup