/**
 * Environment utilities for client and server
 *
 * These utilities provide safe ways to check environment state
 * without accessing server-side environment variables on the client
 */

/**
 * Check if the code is running in a browser environment
 */
export const isBrowser = typeof window !== 'undefined'

/**
 * Check if the app is running in development mode
 * Uses window.location for client-side checks to avoid accessing process.env
 */
export const isDevelopment = (): boolean => {
  if (!isBrowser) {
    // Server-side: safe to use process.env
    return process.env.NODE_ENV === 'development'
  }

  // Client-side: check the URL instead of process.env
  return (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.includes('localhost')
  )
}

/**
 * Check if the app is running in production mode
 */
export const isProduction = (): boolean => {
  return !isDevelopment()
}

/**
 * Check if running in test environment
 * For client-side, checks for test auth bypass cookie
 * For server-side, checks NODE_ENV or API mocking env var
 */
export const isTest = (): boolean => {
  if (!isBrowser) {
    // Server-side: safe to use process.env
    return (
      process.env.NODE_ENV === 'test' ||
      process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'
    )
  }

  // Client-side: primarily check for test auth bypass cookie
  // This is more reliable than env vars in production builds
  try {
    const hasTestCookie = document.cookie.includes('dev-auth-bypass=true')

    // If we have the test cookie, we're in test mode
    if (hasTestCookie) {
      return true
    }

    // Fallback to checking window object (for dev environments)
    const hasApiMocking =
      typeof window !== 'undefined' &&
      (window as any).__NEXT_PUBLIC_API_MOCKING === 'enabled'

    return hasApiMocking
  } catch (error) {
    // During SSR/hydration, be conservative
    return false
  }
}

/**
 * Get the current environment name
 */
export const getEnvironment = (): 'development' | 'production' | 'test' => {
  if (isTest()) return 'test'
  if (isDevelopment()) return 'development'
  return 'production'
}
