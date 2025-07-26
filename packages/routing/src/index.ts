// Core types
export type {
  RouteDefinition,
  WebRouteConfig,
  MobileRouteConfig,
  DesktopRouteConfig,
  NavigationState,
  NavigationAction,
  NavigationStore,
  PlatformAdapter,
  Platform,
  RouteChangeCallback,
} from './types'

// Internal imports for use within this file
import type { Platform } from './types'
import {
  initializeNavigation,
  useCurrentRoute,
  useNavigationHistory,
  useNavigationState,
  useNavigation,
} from './store'
import { getBreadcrumb } from './routes'

// Route definitions
export {
  ROUTES,
  getRouteById,
  getRoutesByCategory,
  getPublicRoutes,
  getAuthRequiredRoutes,
  getChildRoutes,
  getBreadcrumb,
} from './routes'

// Navigation store
export {
  useNavigationStore,
  initializeNavigation,
  useCurrentRoute,
  useNavigationHistory,
  useNavigationState,
  useNavigation,
} from './store'

// Platform adapters
export { WebAdapter, webAdapter } from './adapters/web'
export { MobileAdapter, mobileAdapter } from './adapters/mobile'
export { DesktopAdapter, desktopAdapter } from './adapters/desktop'

// Utility functions
export const createPlatformAdapter = (platform: Platform) => {
  switch (platform) {
    case 'web':
      const { webAdapter } = require('./adapters/web')
      return webAdapter
    case 'mobile':
      const { mobileAdapter } = require('./adapters/mobile')
      return mobileAdapter
    case 'desktop':
      const { desktopAdapter } = require('./adapters/desktop')
      return desktopAdapter
    default:
      throw new Error(`Unsupported platform: ${platform}`)
  }
}

/**
 * Initialize routing for a specific platform
 * This should be called early in the application lifecycle
 */
export const initializePlatformRouting = (platform: Platform, config?: any) => {
  const adapter = createPlatformAdapter(platform)

  // Platform-specific initialization
  switch (platform) {
    case 'web':
      if (config?.router) {
        adapter.setRouter(config.router)
      }
      break
    case 'mobile':
      if (config?.router) {
        adapter.setRouter(config.router)
      }
      break
    case 'desktop':
      if ((adapter as any).setElectronAPI && config?.electronAPI) {
        ;(adapter as any).setElectronAPI(config.electronAPI)
      }
      if ((adapter as any).setWebAdapter && config?.webAdapter) {
        ;(adapter as any).setWebAdapter(config.webAdapter)
      }
      break
  }

  // Initialize the navigation store with the adapter
  const cleanup = initializeNavigation(adapter)

  return {
    adapter,
    cleanup,
  }
}

/**
 * Hook to get platform-specific navigation utilities
 */
export const usePlatformNavigation = () => {
  const navigation = useNavigation()
  const currentRoute = useCurrentRoute()
  const navigationHistory = useNavigationHistory()
  const navigationState = useNavigationState()

  return {
    ...navigation,
    current: currentRoute,
    history: navigationHistory,
    state: navigationState,
  }
}

/**
 * Generate breadcrumb for current route
 */
export const useRouteBreadcrumb = () => {
  const { route } = useCurrentRoute()

  if (!route) return []

  return getBreadcrumb(route.id)
}

/**
 * Check if route requires authentication
 */
export const useRouteAuth = () => {
  const { route } = useCurrentRoute()

  return {
    requiresAuth: route?.meta?.requiresAuth || false,
    isPublic: route?.meta?.public || false,
  }
}

/**
 * Get route title for current route
 */
export const useRouteTitle = () => {
  const { route, params } = useCurrentRoute()

  if (!route) return 'Notable'

  let title = route.meta?.title || route.name

  // Replace parameters in title
  Object.entries(params).forEach(([key, value]) => {
    title = title.replace(`:${key}`, value)
  })

  return title
}
