import { AnalyticsProvider } from './provider'
import { AnalyticsEvent, AnalyticsUser, PageViewEvent } from './index'

class VercelAnalyticsProvider implements AnalyticsProvider {
  name = 'Vercel Analytics'
  private initialized = false

  async initialize(): Promise<void> {
    if (this.initialized) return

    // Vercel Analytics is automatically initialized by the Analytics component
    // We just need to ensure it's loaded
    if (typeof window !== 'undefined' && window.va) {
      this.initialized = true
    }
  }

  identify(user: AnalyticsUser): void {
    // Vercel Analytics doesn't support user identification directly
    // Track as custom event instead
    this.track({
      name: 'user_identified',
      properties: {
        userId: user.id,
        email: user.email,
        name: user.name,
      },
    })
  }

  track(event: AnalyticsEvent): void {
    if (typeof window === 'undefined' || !window.va) return

    // Vercel Analytics tracks custom events
    window.va('event', event.name, event.properties)
  }

  page(data: PageViewEvent): void {
    // Page views are automatically tracked by Vercel Analytics
    // But we can track additional properties
    if (data.properties && Object.keys(data.properties).length > 0) {
      this.track({
        name: 'page_view_custom',
        properties: data.properties,
      })
    }
  }
}

export const vercelAnalytics = new VercelAnalyticsProvider()

// Extend window type for Vercel Analytics
declare global {
  interface Window {
    va?: (command: string, ...args: any[]) => void
  }
}
