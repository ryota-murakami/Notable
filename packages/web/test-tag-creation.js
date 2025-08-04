/**
 * Simple test script to verify tag creation API
 * Run with: node test-tag-creation.js
 */

const testTagCreation = async () => {
  const baseUrl = 'http://localhost:3000'

  try {
    console.log('🧪 Testing tag creation API...')

    // Test tag creation
    const createResponse = await fetch(`${baseUrl}/api/tags`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: 'dev-auth-bypass=true',
      },
      body: JSON.stringify({
        name: 'test-tag-' + Date.now(),
        color: '#ff6b6b',
      }),
    })

    const createResult = await createResponse.json()
    console.log('Create Response:', createResult)

    if (createResponse.ok) {
      console.log('✅ Tag creation successful')

      // Test fetching tags
      const fetchResponse = await fetch(`${baseUrl}/api/tags`, {
        headers: {
          Cookie: 'dev-auth-bypass=true',
        },
      })

      const fetchResult = await fetchResponse.json()
      console.log('Fetch Response:', fetchResult)

      if (fetchResponse.ok) {
        console.log('✅ Tag fetching successful')
        console.log(`📊 Total tags: ${fetchResult.data?.length || 0}`)
      } else {
        console.log('❌ Tag fetching failed')
      }
    } else {
      console.log('❌ Tag creation failed')
    }
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  }
}

// Only run if called directly
if (require.main === module) {
  testTagCreation()
}

module.exports = { testTagCreation }
