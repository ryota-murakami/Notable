const MCR = require('monocart-coverage-reports')
const path = require('path')
const fs = require('fs')

async function generateCoverage() {
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
    sourceFilter: (sourcePath) => {
      // Only include source files from our app
      if (sourcePath.includes('node_modules')) return false
      if (sourcePath.includes('.next')) return false
      if (!sourcePath.includes('/packages/web/')) return false

      // Include TypeScript/JavaScript files
      return /\.(ts|tsx|js|jsx)$/.test(sourcePath)
    },
  })

  // Process files in chunks to avoid memory issues
  const chunkSize = 10
  for (let i = 0; i < files.length; i += chunkSize) {
    const chunk = files.slice(i, i + chunkSize)
    console.log(`Processing files ${i + 1} to ${i + chunk.length}...`)

    for (const file of chunk) {
      const filepath = path.join(tempDir, file)
      try {
        const coverageData = JSON.parse(fs.readFileSync(filepath, 'utf-8'))
        await mcr.add(coverageData)
      } catch (err) {
        console.error(`Error processing ${file}:`, err.message)
      }
    }
  }

  // Generate the report
  console.log('Generating report...')
  await mcr.generate()

  // Clean up temp files
  for (const file of files) {
    fs.unlinkSync(path.join(tempDir, file))
  }

  console.log('Coverage report generated in ./coverage')
}

if (require.main === module) {
  generateCoverage().catch(console.error)
}

module.exports = generateCoverage
