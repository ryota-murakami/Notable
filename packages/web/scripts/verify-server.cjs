#!/usr/bin/env node

/**
 * Server readiness verification script for E2E tests
 * Ensures the Next.js server is fully started before running tests
 */

const http = require('http')

const SERVER_URL = process.env.BASE_URL || 'http://localhost:4378'
const MAX_ATTEMPTS = 30
const RETRY_INTERVAL = 2000 // 2 seconds

function checkServer(attempt = 1) {
  return new Promise((resolve, reject) => {
    const url = new URL(SERVER_URL)

    const req = http.request(
      {
        hostname: url.hostname,
        port: url.port || 80,
        path: '/',
        method: 'GET',
        timeout: 5000,
      },
      (res) => {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          console.log(`✅ Server is ready at ${SERVER_URL}`)
          resolve(true)
        } else {
          console.log(
            `⚠️  Server responded with status ${res.statusCode}, retrying... (${attempt}/${MAX_ATTEMPTS})`
          )
          scheduleRetry(attempt, resolve, reject)
        }
      }
    )

    req.on('error', (error) => {
      console.log(
        `⚠️  Server check failed: ${error.message}, retrying... (${attempt}/${MAX_ATTEMPTS})`
      )
      scheduleRetry(attempt, resolve, reject)
    })

    req.on('timeout', () => {
      console.log(
        `⚠️  Server check timed out, retrying... (${attempt}/${MAX_ATTEMPTS})`
      )
      req.destroy()
      scheduleRetry(attempt, resolve, reject)
    })

    req.end()
  })
}

function scheduleRetry(attempt, resolve, reject) {
  if (attempt >= MAX_ATTEMPTS) {
    console.error(`❌ Server failed to start after ${MAX_ATTEMPTS} attempts`)
    reject(
      new Error(
        `Server at ${SERVER_URL} is not ready after ${MAX_ATTEMPTS} attempts`
      )
    )
    return
  }

  setTimeout(() => {
    checkServer(attempt + 1)
      .then(resolve)
      .catch(reject)
  }, RETRY_INTERVAL)
}

// Run the check
console.log(`🔍 Checking server readiness at ${SERVER_URL}...`)
checkServer()
  .then(() => {
    console.log('🎉 Server verification complete!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('💥 Server verification failed:', error.message)
    process.exit(1)
  })
