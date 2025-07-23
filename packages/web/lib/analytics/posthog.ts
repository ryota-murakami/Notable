import type { AnalyticsProvider } from './provider'
import type { AnalyticsEvent, AnalyticsUser, PageViewEvent } from './index'
import posthog from 'posthog-js'

class PostHogAnalyticsProvider implements AnalyticsProvider {
  name = 'PostHog'
  private initialized = false

  async initialize(): Promise<void> {
    if (this.initialized) return

    const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const apiHost =
      process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com'

    if (!apiKey) return

    if (typeof window !== 'undefined') {
      posthog.init(apiKey, {
        api_host: apiHost,
        capture_pageview: true,
        capture_pageleave: true,
        autocapture: false, // We'll track events manually
        disable_session_recording: false,
        persistence: 'localStorage',
        loaded: () => {
          this.initialized = true
        },
      })
    }
  }

  identify(user: AnalyticsUser): void {
    if (!this.initialized) return

    posthog.identify(user.id, {
      email: user.email,
      name: user.name,
      ...user.properties,
    })
  }

  track(event: AnalyticsEvent): void {
    if (!this.initialized) return

    posthog.capture(event.name, {
      ...event.properties,
      timestamp: event.timestamp,
      userId: event.userId,
      sessionId: event.sessionId,
    })
  }

  page(data: PageViewEvent): void {
    if (!this.initialized) return

    // PostHog auto-captures page views, but we can add properties
    posthog.capture('$pageview', {
      $current_url: data.url,
      $referrer: data.referrer,
      title: data.title,
      ...data.properties,
    })
  }

  reset(): void {
    if (!this.initialized) return
    posthog.reset()
  }

  async flush(): Promise<void> {
    if (!this.initialized) return
    // PostHog automatically batches and sends events
    // Force flush if needed
    posthog.capture('$flush')
  }
}

export const posthogAnalytics = new PostHogAnalyticsProvider()
