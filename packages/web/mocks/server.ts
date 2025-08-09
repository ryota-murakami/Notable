import { setupServer } from 'msw/node'
import { handlers } from './handlers'

/**
 * Enhanced MSW server setup for Node.js environment
 * Used for server-side rendering and testing
 * 
 * Features:
 * - Proper server lifecycle management
 * - Environment-aware configuration
 * - Enhanced error handling and logging
 * - Performance monitoring
 */

let server: ReturnType<typeof setupServer> | null = null

/**
 * Initialize MSW server for SSR and testing
 */
export const initMSWServer = async () => {
  if (server) {
    console.warn('⚠️ MSW server already initialized')
    return server
  }

  try {
    server = setupServer(...handlers)
    
    await server.listen({
      onUnhandledRequest(request, print) {
        // Only log warnings for actual API routes
        if (request.url.includes('/api/') || request.url.includes('/auth/')) {
          console.warn(`🚨 Unhandled MSW server request: ${request.method} ${request.url}`)
          print.warning()
        }
        // Pass through all other requests
      }
    })

    console.info('✅ MSW server initialized successfully')
    console.info(`📊 Server loaded ${handlers.length} request handlers`)

    return server
  } catch (error) {
    console.error('❌ Failed to initialize MSW server:', error)
    throw error
  }
}

/**
 * Stop MSW server
 */
export const stopMSWServer = async () => {
  if (server) {
    await server.close()
    server = null
    console.info('🛑 MSW server stopped')
  }
}

/**
 * Reset MSW server handlers
 */
export const resetMSWServer = () => {
  if (server) {
    server.resetHandlers()
    console.info('🔄 MSW server handlers reset')
  }
}

/**
 * Add runtime handlers to MSW server
 */
export const addMSWHandlers = (...newHandlers: Parameters<typeof setupServer>) => {
  if (server) {
    server.use(...newHandlers)
    console.info(`➕ Added ${newHandlers.length} runtime handlers to MSW server`)
  }
}

/**
 * Get current server instance
 */
export const getMSWServer = () => server

// Auto-initialize in test environment
if (process.env.NODE_ENV === 'test') {
  // Initialize server for testing
  initMSWServer().catch(console.error)
}

export { server }