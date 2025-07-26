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

// Platform-specific configuration types
type WebPlatformConfig = {
  platform: 'web'
  router?: {
    push: (url: string) => void
    replace: (url: string) => void
    back: () => void
    forward: () => void
    refresh: () => void
    prefetch: (href: string) => void
  } // Next.js router
}

type MobilePlatformConfig = {
  platform: 'mobile'
  router?: {
    push: (path: string) => void
    replace: (path: string) => void
    back: () => void
    setParams: (params: Record<string, string>) => void
  } // Expo router
}

type DesktopPlatformConfig = {
  platform: 'desktop'
  electronAPI?: {
    onMenuNavigation?: (
      callback: (data: {
        routeId: string
        params?: Record<string, string>
      }) => void,
    ) => void
    onRouteChange?: (callback: (data: { path: string }) => void) => void
    onDeepLink?: (callback: (url: string) => void) => void
    setAlwaysOnTop?: (alwaysOnTop: boolean) => void
    createWindow?: (config: unknown) => Promise<void>
    sendRouteChange?: (data: {
      route: string
      params: Record<string, string>
      query: Record<string, string>
      path: string
    }) => void
  }
  webAdapter?: {
    navigate?: (
      route: unknown,
      params?: Record<string, string>,
      query?: Record<string, string>,
    ) => void
    getCurrentRoute?: () => {
      route: unknown | null
      params: Record<string, string>
      query: Record<string, string>
    }
    pathToRoute?: (path: string) => {
      route: unknown | null
      params: Record<string, string>
      query: Record<string, string>
    } | null
    onRouteChange?: (callback: unknown) => () => void
    router?: { push: (path: string) => void }
  }
}

type PlatformConfig =
  | WebPlatformConfig
  | MobilePlatformConfig
  | DesktopPlatformConfig
import {
  initializeNavigation,
  useCurrentRoute,
  useNavigation,
  useNavigationHistory,
  useNavigationState,
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

// Import for type assertion only - cannot use export above since it conflicts with import
import type { DesktopAdapter as DesktopAdapterType } from './adapters/desktop'

// Utility functions
export const createPlatformAdapter = (platform: Platform) => {
  switch (platform) {
    case 'web': {
      const { webAdapter } = require('./adapters/web')
      return webAdapter
    }
    case 'mobile': {
      const { mobileAdapter } = require('./adapters/mobile')
      return mobileAdapter
    }
    case 'desktop': {
      const { desktopAdapter } = require('./adapters/desktop')
      return desktopAdapter
    }
    default:
      throw new Error(`Unsupported platform: ${platform}`)
  }
}

/**
 * Initialize routing for a specific platform
 * This should be called early in the application lifecycle
 */
export const initializePlatformRouting = (
  platform: Platform,
  config?: Omit<PlatformConfig, 'platform'>,
) => {
  const adapter = createPlatformAdapter(platform)

  // Platform-specific initialization with proper type checking
  switch (platform) {
    case 'web':
      if (config && 'router' in config && config.router) {
        if ('setRouter' in adapter && typeof adapter.setRouter === 'function') {
          adapter.setRouter(config.router)
        }
      }
      break
    case 'mobile':
      if (config && 'router' in config && config.router) {
        if ('setRouter' in adapter && typeof adapter.setRouter === 'function') {
          adapter.setRouter(config.router)
        }
      }
      break
    case 'desktop':
      if (config) {
        if (
          'electronAPI' in config &&
          config.electronAPI &&
          'setElectronAPI' in adapter
        ) {
          const desktopAdapter = adapter as DesktopAdapterType
          if (typeof desktopAdapter.setElectronAPI === 'function') {
            desktopAdapter.setElectronAPI(config.electronAPI)
          }
        }
        if (
          'webAdapter' in config &&
          config.webAdapter &&
          'setWebAdapter' in adapter
        ) {
          const desktopAdapter = adapter as DesktopAdapterType
          if (typeof desktopAdapter.setWebAdapter === 'function') {
            desktopAdapter.setWebAdapter(config.webAdapter)
          }
        }
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
