/**
 * Main routing package exports
 * Provides a unified routing API for all platforms
 */

// Core types and interfaces
export type {
  RouteDefinition,
  RouteLocation,
  NavigationStore,
  PlatformAdapter,
  NavigationState,
  RouteEntry,
} from './types'

// Route definitions
export { ROUTES, getRouteById } from './routes'

// Platform adapters
export { webAdapter } from './adapters/web'
export { WebAdapter } from './adapters/web'

// Simple store for SSR-safe state management
export {
  useSimpleNavigation,
  useSimpleCurrentRoute, 
  useSimpleNavigationState,
  initializeSimpleStore,
  getSimpleStore,
} from './simple-store'
