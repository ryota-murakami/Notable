// Platform-specific route configurations
export interface WebRouteConfig {
  /** Web-specific route configuration */
  component?: string
  layout?: string
  seo?: {
    title?: string
    description?: string
    keywords?: string[]
  }
  dynamic?: boolean
}

export interface MobileRouteConfig {
  /** Mobile-specific route configuration */
  screen?: string
  transition?: string
  animation?: string
  tabBar?: {
    label?: string
    icon?: string
    badge?: string | number
  }
  header?: {
    title?: string
    hidden?: boolean
    backButton?: boolean
  }
}

export interface DesktopRouteConfig {
  /** Desktop-specific route configuration */
  window?: string | {
    newWindow?: boolean
    size?: {
      width: number
      height: number
    }
    properties?: {
      alwaysOnTop?: boolean
      frame?: boolean
      resizable?: boolean
    }
  }
  menuItem?: boolean
  menu?: {
    path?: string
    accelerator?: string
  }
}

export interface RouteDefinition {
  /** Route identifier */
  id: string
  /** Display name for the route */
  name: string
  /** Route path pattern */
  path: string
  /** Parent route ID for nested routes */
  parent?: string
  /** Route parameters */
  params?: Record<string, string>
  /** Query parameters */
  query?: Record<string, string>
  /** Route metadata */
  meta?: {
    /** Whether route requires authentication */
    requiresAuth?: boolean
    /** Route title for browser/app bar */
    title?: string
    /** Route description */
    description?: string
    /** Route category for grouping */
    category?: string
    /** Whether route is public (accessible without auth) */
    public?: boolean
    /** Platform-specific configurations */
    platforms?: {
      web?: WebRouteConfig
      mobile?: MobileRouteConfig
      desktop?: DesktopRouteConfig
    }
  }
}




export interface RouteLocation {
  /** Current pathname */
  pathname: string
  /** URL search parameters */
  searchParams: URLSearchParams
  /** Matched route definition */
  route: RouteDefinition | null
}

export interface RouteEntry {
  route: RouteDefinition
  params: Record<string, string>
}

export interface NavigationState {
  /** Current route */
  currentRoute: RouteEntry | null
  /** Navigation history */
  history: RouteEntry[]
  /** Navigation stack index */
  historyIndex: number
  /** Loading state */
  isNavigating: boolean
  /** Error state */
  error: string | null
}


export interface NavigationStore extends NavigationState {
  /** Navigate to a route */
  navigate: (routeId: string, params?: Record<string, string>) => void
  /** Go back in history */
  goBack: () => void
  /** Go forward in history */
  goForward: () => void
  /** Replace current route */
  replace: (routeId: string, params?: Record<string, string>) => void
  /** Reset navigation stack */
  reset: () => void
  /** Check if can go back */
  canGoBack: () => boolean
  /** Check if can go forward */
  canGoForward: () => boolean
  /** Get route by ID */
  getRoute: (routeId: string) => RouteDefinition | undefined
  /** Get current URL/path */
  getCurrentPath: () => string
  /** Parse path to route and params */
  parsePath: (path: string) => RouteEntry | null
}

export interface PlatformAdapter {
  /** Platform identifier */
  platform: 'web' | 'mobile' | 'desktop'
  /** Navigate to route using platform-specific method */
  navigate: (pathname: string, searchParams?: URLSearchParams) => void
  /** Get current location */
  getCurrentLocation: () => RouteLocation
  /** Subscribe to location changes */
  subscribe: (callback: (location: RouteLocation) => void) => () => void
  /** Dispose of the adapter */
  dispose: () => void
}


