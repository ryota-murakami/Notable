// Test script to check template API endpoints
const fs = require('fs')

async function testTemplateAPIs() {
  const baseUrl = 'http://localhost:4378'

  const endpoints = ['/api/templates/categories', '/api/templates']

  console.log('🔍 Testing template API endpoints...\n')

  for (const endpoint of endpoints) {
    try {
      console.log(`Testing: ${endpoint}`)

      const response = await fetch(`${baseUrl}${endpoint}`, {
        headers: {
          Cookie: 'dev-auth-bypass=true',
        },
      })

      console.log(`Status: ${response.status}`)

      if (!response.ok) {
        const errorText = await response.text()
        console.log(`Error response:`, errorText)
      } else {
        const data = await response.json()
        console.log(`Success:`, JSON.stringify(data, null, 2))
      }
    } catch (error) {
      console.log(`❌ Request failed:`, error.message)
    }

    console.log('---\n')
  }
}

testTemplateAPIs().catch(console.error)
