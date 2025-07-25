#!/usr/bin/env node

const { spawn } = require('child_process')
const path = require('path')

// Colors for output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
}

function log(color, message) {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

async function waitForPort(port, timeout = 30000) {
  const startTime = Date.now()
  
  while (Date.now() - startTime < timeout) {
    try {
      const response = await fetch(`http://localhost:${port}`)
      if (response.ok) {
        return true
      }
    } catch (error) {
      // Server not ready yet
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
  
  return false
}

async function runTests() {
  log('blue', '🚀 Starting Next.js dev server...')
  
  // Start Next.js dev server
  const webDevServer = spawn('pnpm', ['--filter', '@notable/web', 'dev'], {
    stdio: 'pipe',
    cwd: path.join(__dirname, '../../../')
  })
  
  let serverReady = false
  
  webDevServer.stdout.on('data', (data) => {
    const output = data.toString()
    if (output.includes('Ready in') || output.includes('Local:')) {
      serverReady = true
    }
    // Only show important messages
    if (output.includes('Ready') || output.includes('Error') || output.includes('Warning')) {
      console.log(`Web Server: ${output.trim()}`)
    }
  })
  
  webDevServer.stderr.on('data', (data) => {
    console.error(`Web Server Error: ${data}`)
  })
  
  // Wait for the dev server to be ready
  log('yellow', '⏳ Waiting for dev server to be ready...')
  
  const isReady = await waitForPort(4378, 60000)
  
  if (!isReady) {
    log('red', '❌ Dev server failed to start within 60 seconds')
    webDevServer.kill()
    process.exit(1)
  }
  
  log('green', '✅ Dev server is ready!')
  
  // Build Electron app
  log('blue', '🔨 Building Electron app...')
  const electronBuild = spawn('pnpm', ['--filter', '@notable/electron', 'typecheck'], {
    stdio: 'inherit',
    cwd: path.join(__dirname, '../../../')
  })
  
  await new Promise((resolve, reject) => {
    electronBuild.on('close', (code) => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error(`Electron build failed with code ${code}`))
      }
    })
  })
  
  log('green', '✅ Electron app built successfully!')
  
  // Run e2e tests
  log('blue', '🧪 Running e2e tests...')
  const e2eTests = spawn('pnpm', ['--filter', '@notable/electron', 'e2e'], {
    stdio: 'inherit',
    cwd: path.join(__dirname, '../../../'),
    env: {
      ...process.env,
      ELECTRON_START_URL: 'http://localhost:4378'
    }
  })
  
  let testExitCode = 0
  
  await new Promise((resolve) => {
    e2eTests.on('close', (code) => {
      testExitCode = code
      resolve()
    })
  })
  
  // Cleanup
  log('yellow', '🧹 Cleaning up...')
  webDevServer.kill()
  
  if (testExitCode === 0) {
    log('green', '✅ All tests passed!')
  } else {
    log('red', '❌ Some tests failed!')
  }
  
  process.exit(testExitCode)
}

// Handle process termination
process.on('SIGINT', () => {
  log('yellow', '\n🛑 Received SIGINT, shutting down...')
  process.exit(0)
})

process.on('SIGTERM', () => {
  log('yellow', '\n🛑 Received SIGTERM, shutting down...')
  process.exit(0)
})

// Run the tests
runTests().catch((error) => {
  log('red', `❌ Error: ${error.message}`)
  process.exit(1)
})