/**
 * Web adapter for Next.js routing integration
 * Handles browser-based navigation and route synchronization
 */

import type { PlatformAdapter, RouteLocation } from '../types'
import { getRouteById } from '../routes'

export class WebAdapter implements PlatformAdapter {
  private listeners: Array<(location: RouteLocation) => void> = []
  private currentPathname: string = '/'
  private currentSearchParams: string = ''
  private locationUpdateTimeout: number | null = null
  private isNotifying: boolean = false

  constructor() {
    // Only initialize if we're in a browser environment
    if (typeof window !== 'undefined') {
      this.currentPathname = window.location.pathname
      this.currentSearchParams = window.location.search
      
      // Listen for browser navigation events
      window.addEventListener('popstate', this.handlePopState)
    }
  }

  private handlePopState = () => {
    if (typeof window !== 'undefined') {
      const newSearchParams = new URLSearchParams(window.location.search)
      this.setCurrentLocation(window.location.pathname, newSearchParams)
    }
  }

  getCurrentLocation(): RouteLocation {
    if (typeof window === 'undefined') {
      return {
        pathname: this.currentPathname,
        searchParams: new URLSearchParams(this.currentSearchParams),
        route: getRouteById('home'), // Default fallback
      }
    }

    const pathname = window.location.pathname
    const searchParams = new URLSearchParams(window.location.search)
    const route = getRouteById(pathname === '/' ? 'home' : pathname.slice(1)) || getRouteById('not-found')

    return {
      pathname,
      searchParams,
      route,
    }
  }

  setCurrentLocation(pathname: string, searchParams?: URLSearchParams) {
    const oldPathname = this.currentPathname
    const oldSearchParams = this.currentSearchParams
    const newSearchParams = searchParams?.toString() || ''
    
    // Only update if location actually changed
    if (oldPathname === pathname && oldSearchParams === newSearchParams) {
      return // No change, avoid triggering callbacks
    }
    
    this.currentPathname = pathname
    this.currentSearchParams = newSearchParams

    // Batch location updates to prevent rapid notifications
    if (this.locationUpdateTimeout) {
      window.clearTimeout(this.locationUpdateTimeout)
    }
    
    this.locationUpdateTimeout = window.setTimeout(() => {
      // Prevent recursive notifications
      if (this.isNotifying) {
        return
      }
      
      this.isNotifying = true
      this.notifyListeners()
      this.isNotifying = false
      this.locationUpdateTimeout = null
    }, 10) as number
  }

  private notifyListeners() {
    const location = this.getCurrentLocation()
    this.listeners.forEach(listener => {
      try {
        listener(location)
      } catch (error) {
        console.error('Error in route listener:', error)
      }
    })
  }

  subscribe(callback: (location: RouteLocation) => void): () => void {
    this.listeners.push(callback)
    
    return () => {
      const index = this.listeners.indexOf(callback)
      if (index > -1) {
        this.listeners.splice(index, 1)
      }
    }
  }

  navigate(pathname: string, searchParams?: URLSearchParams): void {
    if (typeof window === 'undefined') return

    const url = searchParams ? `${pathname}?${searchParams.toString()}` : pathname
    window.history.pushState({}, '', url)
    this.setCurrentLocation(pathname, searchParams)
  }

  replace(pathname: string, searchParams?: URLSearchParams): void {
    if (typeof window === 'undefined') return

    const url = searchParams ? `${pathname}?${searchParams.toString()}` : pathname
    window.history.replaceState({}, '', url)
    this.setCurrentLocation(pathname, searchParams)
  }

  goBack(): void {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back()
    }
  }

  goForward(): void {
    if (typeof window !== 'undefined') {
      window.history.forward()
    }
  }

  canGoBack(): boolean {
    return typeof window !== 'undefined' && window.history.length > 1
  }

  canGoForward(): boolean {
    // Browser API doesn't provide a reliable way to check this
    return false
  }

  dispose(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('popstate', this.handlePopState)
    }
    
    if (this.locationUpdateTimeout) {
      window.clearTimeout(this.locationUpdateTimeout)
      this.locationUpdateTimeout = null
    }
    
    this.listeners = []
  }
}

// Export singleton instance
export const webAdapter = new WebAdapter()
