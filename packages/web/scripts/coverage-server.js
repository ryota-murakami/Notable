#!/usr/bin/env node
import { spawn } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Clear previous coverage data
const coverageDir = path.join(__dirname, '..', '.nyc_output')
if (fs.existsSync(coverageDir)) {
  fs.rmSync(coverageDir, { recursive: true })
}

// Set environment variables for coverage
process.env.COVERAGE = '1'
process.env.NODE_ENV = 'test'
process.env.NYC_CWD = path.join(__dirname, '..')

// Start the Next.js dev server with coverage
const nextProcess = spawn('npm', ['run', 'dev'], {
  env: process.env,
  stdio: 'inherit',
  cwd: path.join(__dirname, '..'),
})

// Handle process termination
process.on('SIGINT', () => {
  console.log('\nStopping coverage server...')
  nextProcess.kill('SIGINT')
  process.exit(0)
})

process.on('SIGTERM', () => {
  nextProcess.kill('SIGTERM')
  process.exit(0)
})

nextProcess.on('error', (error) => {
  console.error('Failed to start coverage server:', error)
  process.exit(1)
})

nextProcess.on('exit', (code) => {
  if (code !== null && code !== 0) {
    console.error(`Coverage server exited with code ${code}`)
    process.exit(code)
  }
})