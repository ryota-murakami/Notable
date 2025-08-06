// Auto-setup development mode when API mocking is enabled
export function setupDevMode() {
  if (typeof window === 'undefined') return

  // Check if API mocking is enabled
  const isMockingEnabled = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'

  if (isMockingEnabled) {
    // Set the dev auth bypass cookie
    if (!document.cookie.includes('dev-auth-bypass=true')) {
      document.cookie = 'dev-auth-bypass=true; path=/; max-age=86400'
      console.info('✅ Dev auth bypass enabled')
    }

    // Log mock mode status
    console.info('🛠️ Mock API mode is active')
    console.info('🏷️ Tag system using in-memory data store')
  }
}

// Check if dev mode is active
export function isDevModeActive(): boolean {
  if (typeof window === 'undefined') return false

  return (
    process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' &&
    document.cookie.includes('dev-auth-bypass=true')
  )
}

// Toggle dev mode
export function toggleDevMode(): boolean {
  if (typeof window === 'undefined') return false

  const isCurrentlyActive = document.cookie.includes('dev-auth-bypass=true')

  if (isCurrentlyActive) {
    // Disable dev mode
    document.cookie =
      'dev-auth-bypass=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'
    console.info('❌ Dev auth bypass disabled')
    return false
  } else {
    // Enable dev mode
    document.cookie = 'dev-auth-bypass=true; path=/; max-age=86400'
    console.info('✅ Dev auth bypass enabled')
    return true
  }
}
