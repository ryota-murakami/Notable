import type {
  PlatformAdapter,
  RouteChangeCallback,
  RouteDefinition,
} from '../types'
import { ROUTES } from '../routes'

// Type definition for Expo Router
interface ExpoRouter {
  push: (path: string) => void
  replace: (path: string) => void
  back: () => void
  setParams: (params: Record<string, string>) => void
}

/**
 * Mobile Platform Adapter for Expo Router
 * Handles routing integration with React Native navigation
 */
export class MobileAdapter implements PlatformAdapter {
  platform = 'mobile' as const
  private routeChangeCallbacks: Set<RouteChangeCallback> = new Set()
  private router: ExpoRouter | null = null
  private pathname: string = '/'
  private params: Record<string, string> = {}

  constructor() {
    // Mobile adapter requires router to be set externally
  }

  /**
   * Set the Expo Router instance
   * This should be called from a React Native component with useRouter()
   */
  setRouter(router: ExpoRouter) {
    this.router = router
  }

  /**
   * Set current navigation state
   * This should be called from Expo Router hooks
   */
  setCurrentLocation(pathname: string, params = {}) {
    const oldPathname = this.pathname
    const oldParams = JSON.stringify(this.params)

    this.pathname = pathname
    this.params = { ...params }

    // Trigger callbacks if location changed
    if (oldPathname !== pathname || oldParams !== JSON.stringify(params)) {
      this.notifyRouteChange()
    }
  }

  navigate(route: RouteDefinition, params = {}, query = {}) {
    if (!this.router) {
      console.warn('Mobile router not initialized. Call setRouter() first.')
      return
    }

    const path = this.routeToPath(route, params, query)

    // Use Expo Router navigation
    if (route.meta?.platforms?.mobile?.animation === 'modal') {
      this.router.push(path)
    } else {
      this.router.push(path)
    }
  }

  getCurrentRoute() {
    const result = this.pathToRoute(this.pathname)
    return result || { route: null, params: {}, query: {} }
  }

  onRouteChange(callback: RouteChangeCallback) {
    this.routeChangeCallbacks.add(callback)
    return () => {
      this.routeChangeCallbacks.delete(callback)
    }
  }

  routeToPath(route: RouteDefinition, params = {}, query = {}) {
    let path = this.convertWebPathToMobilePath(route.path)

    // Replace path parameters (e.g., /note/[id] -> /note/123)
    Object.entries(params).forEach(([key, value]) => {
      path = path.replace(`[${key}]`, encodeURIComponent(String(value)))
      path = path.replace(`:${key}`, encodeURIComponent(String(value)))
    })

    // For Expo Router, query params are handled differently
    // They're typically passed as route params or handled by the router
    if (Object.keys(query).length > 0) {
      const queryParams = new URLSearchParams()
      Object.entries(query).forEach(([k, v]) => {
        queryParams.set(k, String(v))
      })
      const queryString = queryParams.toString()
      if (queryString) {
        path = `${path}?${queryString}`
      }
    }

    return path
  }

  pathToRoute(path: string) {
    // Handle Expo Router path format
    const [pathname, search] = path.split('?')
    if (!pathname) return null
    const searchParams = new URLSearchParams(search || '')

    // Find matching route by converting mobile path back to web format
    for (const route of Object.values(ROUTES)) {
      const mobilePath = this.convertWebPathToMobilePath(route.path)
      if (!mobilePath) continue
      const match = this.matchMobilePath(pathname, mobilePath)
      if (match) {
        const query: Record<string, string> = {}
        searchParams.forEach((value, key) => {
          query[key] = value
        })

        return {
          route,
          params: { ...match.params, ...this.params },
          query,
        }
      }
    }

    return null
  }

  /**
   * Convert web route path to Expo Router format
   * /note/:id -> /note/[id]
   * /auth -> /(auth)
   */
  private convertWebPathToMobilePath(webPath: string): string {
    // Convert dynamic segments
    const mobilePath = webPath.replace(/:([^/]+)/g, '[$1]')

    // Handle special mobile route patterns
    if (mobilePath === '/auth') {
      return '/(auth)'
    }
    if (mobilePath === '/') {
      return '/(tabs)'
    }
    if (mobilePath.startsWith('/note')) {
      return mobilePath // Keep note routes as-is
    }
    if (mobilePath === '/search') {
      return '/(tabs)/search'
    }
    if (mobilePath === '/settings') {
      return '/(tabs)/settings'
    }

    return mobilePath
  }

  /**
   * Convert mobile path back to web format for matching
   */
  private convertMobilePathToWebPath(mobilePath: string): string {
    // Convert dynamic segments back
    const webPath = mobilePath.replace(/\[([^\]]+)\]/g, ':$1')

    // Handle special mobile route patterns
    if (webPath === '/(auth)') {
      return '/auth'
    }
    if (webPath === '/(tabs)' || webPath === '/(tabs)/') {
      return '/'
    }
    if (webPath === '/(tabs)/search') {
      return '/search'
    }
    if (webPath === '/(tabs)/settings') {
      return '/settings'
    }

    return webPath
  }

  private matchMobilePath(pathname: string, routePath: string) {
    // First convert mobile path to web format for consistent matching
    const webPathname = this.convertMobilePathToWebPath(pathname)
    const webRoutePath = this.convertMobilePathToWebPath(routePath)

    // Convert route path to regex pattern
    const paramNames: string[] = []
    const regexPath = webRoutePath
      .replace(/:[^/]+/g, (match) => {
        paramNames.push(match.slice(1)) // Remove the ':'
        return '([^/]+)'
      })
      .replace(/\*/g, '(.*)')

    const regex = new RegExp(`^${regexPath}$`)
    const match = webPathname.match(regex)

    if (!match) return null

    const params: Record<string, string> = {}
    paramNames.forEach((name, index) => {
      const paramValue = match[index + 1]
      if (paramValue !== undefined) {
        params[name] = decodeURIComponent(paramValue)
      }
    })

    return { params }
  }

  private notifyRouteChange() {
    const currentRoute = this.getCurrentRoute()
    const currentRouteDefinition = currentRoute.route
    if (currentRouteDefinition !== null) {
      this.routeChangeCallbacks.forEach((callback) => {
        callback(
          currentRouteDefinition,
          currentRoute.params,
          currentRoute.query,
        )
      })
    }
  }

  /**
   * Handle deep linking
   */
  handleDeepLink(url: string) {
    if (!this.router) return

    try {
      const urlObj = new URL(url)
      const path = urlObj.pathname + urlObj.search
      this.router.push(path)
    } catch (error) {
      console.warn('Invalid deep link URL:', url, error)
    }
  }

  /**
   * Generate shareable link for current route
   */
  generateShareableLink(baseUrl = 'https://notable.app'): string {
    const currentRoute = this.getCurrentRoute()
    if (!currentRoute.route) return baseUrl

    const webPath = this.convertMobilePathToWebPath(this.pathname)
    const query = new URLSearchParams(currentRoute.query).toString()
    const fullPath = `${webPath}${query ? `?${query}` : ''}`

    return new URL(fullPath, baseUrl).toString()
  }
}

// Singleton instance
export const mobileAdapter = new MobileAdapter()
