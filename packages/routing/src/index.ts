/**
 * Main routing package exports
 * Provides a unified routing API for all platforms
 */

// Core types and interfaces
export type {
  Route,
  RouteDefinition,
  RouteLocation,
  NavigationStore,
  PlatformAdapter,
  NavigationState,
} from './types'

// Route definitions
export { ROUTES, getRouteById, getAllRoutes } from './routes'

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
