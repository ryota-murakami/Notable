/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Test script to check template API endpoints
const fs = require('fs')

async function testTemplateAPIs() {
  const baseUrl = 'http://localhost:4378'

  const endpoints = ['/api/templates/categories', '/api/templates']

  console.info('🔍 Testing template API endpoints...\n')

  for (const endpoint of endpoints) {
    try {
      console.info(`Testing: ${endpoint}`)

      const response = await fetch(`${baseUrl}${endpoint}`, {
        headers: {
          Cookie: 'dev-auth-bypass=true',
        },
      })

      console.info(`Status: ${response.status}`)

      if (!response.ok) {
        const errorText = await response.text()
        console.info(`Error response:`, errorText)
      } else {
        const data = await response.json()
        console.info(`Success:`, JSON.stringify(data, null, 2))
      }
    } catch (error) {
      console.info(`❌ Request failed:`, error.message)
    }

    console.info('---\n')
  }
}

testTemplateAPIs().catch(console.error)
