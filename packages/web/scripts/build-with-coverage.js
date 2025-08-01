#!/usr/bin/env node
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

const { execSync } = require('child_process')
const path = require('path')

console.info('Building with coverage instrumentation...')

// Set environment variables for coverage
process.env.NODE_ENV = 'test'
process.env.COVERAGE = '1'

try {
  // Build with Next.js
  execSync('next build', {
    stdio: 'inherit',
    env: {
      ...process.env,
      BABEL_ENV: 'test',
      NODE_ENV: 'test',
      COVERAGE: '1',
    },
  })

  console.info('Build completed with coverage instrumentation')
} catch (error) {
  console.error('Build failed:', error.message)
  process.exit(1)
}
