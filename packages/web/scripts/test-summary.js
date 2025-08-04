#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

// Find all test files
const testDir = path.join(__dirname, '../e2e')
const testFiles = fs
  .readdirSync(testDir)
  .filter((file) => file.endsWith('.spec.ts'))
  .map((file) => path.join('packages/web/e2e', file))

console.log(`Found ${testFiles.length} test files`)
console.log('Running tests to get pass/fail summary...\n')

let totalPassed = 0
let totalFailed = 0
let totalSkipped = 0

// Run each test file separately to avoid timeouts
for (const testFile of testFiles) {
  const fileName = path.basename(testFile)
  process.stdout.write(`Testing ${fileName}... `)

  try {
    const output = execSync(
      `pnpm playwright test ${testFile} --reporter=json`,
      {
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe'],
      }
    )

    const results = JSON.parse(output)
    const suiteResults = results.suites[0]

    let passed = 0
    let failed = 0
    let skipped = 0

    function countTests(suite) {
      for (const spec of suite.specs || []) {
        for (const test of spec.tests || []) {
          if (test.status === 'passed') passed++
          else if (test.status === 'failed') failed++
          else if (test.status === 'skipped') skipped++
        }
      }
      for (const subSuite of suite.suites || []) {
        countTests(subSuite)
      }
    }

    countTests(suiteResults)

    totalPassed += passed
    totalFailed += failed
    totalSkipped += skipped

    console.log(`✓ ${passed} passed, ✗ ${failed} failed, - ${skipped} skipped`)
  } catch (error) {
    // Even if tests fail, we can parse the output
    try {
      const output = error.stdout?.toString() || ''
      if (output) {
        const results = JSON.parse(output)
        const suiteResults = results.suites[0]

        let passed = 0
        let failed = 0
        let skipped = 0

        function countTests(suite) {
          for (const spec of suite.specs || []) {
            for (const test of spec.tests || []) {
              if (test.status === 'passed') passed++
              else if (test.status === 'failed') failed++
              else if (test.status === 'skipped') skipped++
            }
          }
          for (const subSuite of suite.suites || []) {
            countTests(subSuite)
          }
        }

        if (suiteResults) {
          countTests(suiteResults)
          totalPassed += passed
          totalFailed += failed
          totalSkipped += skipped
          console.log(
            `✓ ${passed} passed, ✗ ${failed} failed, - ${skipped} skipped`
          )
        } else {
          console.log('✗ Failed to parse results')
        }
      } else {
        console.log('✗ Failed to run')
      }
    } catch (parseError) {
      console.log('✗ Failed to parse results')
    }
  }
}

console.log(`\n${'='.repeat(60)}`)
console.log('SUMMARY:')
console.log(`Total tests: ${totalPassed + totalFailed + totalSkipped}`)
console.log(`✓ Passed: ${totalPassed}`)
console.log(`✗ Failed: ${totalFailed}`)
console.log(`- Skipped: ${totalSkipped}`)
console.log(
  `Coverage: ${((totalPassed / (totalPassed + totalFailed + totalSkipped)) * 100).toFixed(1)}%`
)
console.log('='.repeat(60))
