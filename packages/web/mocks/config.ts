/**
 * MSW Configuration
 * Centralized configuration for Mock Service Worker setup
 * Following Next.js 15 and React 19 best practices
 */

export interface MSWConfig {
  enabled: boolean
  environment: 'development' | 'test' | 'production'
  serviceWorker: {
    url: string
    scope: string
    updateViaCache: 'imports' | 'all' | 'none'
  }
  logging: {
    quiet: boolean
    logLevel: 'verbose' | 'normal' | 'quiet'
    logUnhandledRequests: boolean
  }
  handlers: {
    auth: boolean
    api: boolean
    external: boolean
    realtime: boolean
  }
}

/**
 * Get MSW configuration based on environment
 */
export const getMSWConfig = (): MSWConfig => {
  const isEnabled = 
    process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' ||
    process.env.NODE_ENV === 'test'

  const environment = (process.env.NODE_ENV as MSWConfig['environment']) || 'development'

  return {
    enabled: isEnabled,
    environment,
    serviceWorker: {
      url: '/mockServiceWorker.js',
      scope: '/',
      updateViaCache: 'none', // Always check for updates in development
    },
    logging: {
      quiet: environment === 'test' || environment === 'production',
      logLevel: environment === 'development' ? 'verbose' : 'quiet',
      logUnhandledRequests: environment === 'development',
    },
    handlers: {
      auth: true,           // Authentication endpoints
      api: true,            // Internal API endpoints  
      external: true,       // External services (OAuth, email, etc.)
      realtime: true,       // WebSocket and real-time features
    },
  }
}

/**
 * Environment-specific configurations
 */
export const MSW_ENVIRONMENTS = {
  development: {
    showUI: true,
    logRequests: true,
    strictMode: false,
    gracefulFallback: true,
  },
  test: {
    showUI: false,
    logRequests: false,
    strictMode: true,
    gracefulFallback: false,
  },
  production: {
    showUI: false,
    logRequests: false,
    strictMode: true,
    gracefulFallback: true,
  },
} as const

/**
 * Service Worker registration options
 */
export const getServiceWorkerOptions = () => {
  const config = getMSWConfig()
  
  return {
    scope: config.serviceWorker.scope,
    updateViaCache: config.serviceWorker.updateViaCache,
    // Enable service worker updates in development
    ...(config.environment === 'development' && {
      type: 'module' as const,
    }),
  }
}

/**
 * Request handler configuration
 */
export const HANDLER_CONFIG = {
  // Timeout configurations
  timeouts: {
    default: 100,     // Default response delay (ms)
    slow: 1000,       // Slow network simulation
    timeout: 5000,    // Request timeout simulation
  },
  
  // Response configurations  
  responses: {
    successRate: 0.95,  // 95% success rate for realistic testing
    errorRate: 0.05,    // 5% error rate for edge case testing
  },
  
  // Data configurations
  data: {
    pagination: {
      defaultLimit: 10,
      maxLimit: 100,
    },
    users: {
      testEmail: 'test@example.com',
      testPassword: 'password123',
    },
  },
} as const

/**
 * Check if MSW should be initialized
 */
export const shouldInitializeMSW = (): boolean => {
  const config = getMSWConfig()
  return config.enabled && typeof window !== 'undefined'
}

/**
 * Check if MSW server should be initialized (Node.js)
 */
export const shouldInitializeMSWServer = (): boolean => {
  const config = getMSWConfig()
  return config.enabled && typeof window === 'undefined'
}

/**
 * Feature flags for MSW handlers
 */
export const MSW_FEATURES = {
  // Authentication features
  AUTH_MOCKING: true,
  OAUTH_SIMULATION: true,
  JWT_HANDLING: true,
  
  // API features
  REST_API_MOCKING: true,
  GRAPHQL_MOCKING: false, // Disabled for Notable (using REST)
  WEBSOCKET_MOCKING: true,
  
  // External service features
  EMAIL_SERVICE_MOCKING: true,
  PAYMENT_SERVICE_MOCKING: false, // Enable when Stripe integration is added
  ANALYTICS_MOCKING: false,
  
  // Development features
  REQUEST_LOGGING: process.env.NODE_ENV === 'development',
  ERROR_SIMULATION: process.env.NODE_ENV === 'development',
  NETWORK_DELAY_SIMULATION: process.env.NODE_ENV === 'development',
} as const

/**
 * Default mock data settings
 */
export const MOCK_DATA_CONFIG = {
  users: {
    count: 5,
    testUser: {
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User',
    },
  },
  notes: {
    count: 10,
    withContent: true,
    withTags: true,
  },
  folders: {
    count: 5,
    nested: true,
    maxDepth: 3,
  },
  tags: {
    count: 15,
    withColors: true,
  },
} as const

export default getMSWConfig