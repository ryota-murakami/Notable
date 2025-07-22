import { AnalyticsProvider } from './provider'
import { AnalyticsEvent, AnalyticsUser, PageViewEvent } from './index'
import { logger } from '@/lib/logging'

interface AnalyticsBuffer {
  events: AnalyticsEvent[]
  pageViews: PageViewEvent[]
  users: AnalyticsUser[]
}

class CustomAnalyticsProvider implements AnalyticsProvider {
  name = 'Custom Analytics'
  private buffer: AnalyticsBuffer = {
    events: [],
    pageViews: [],
    users: [],
  }
  private batchTimer: NodeJS.Timeout | null = null
  private readonly batchSize = 50
  private readonly batchInterval = 30000 // 30 seconds

  async initialize(): Promise<void> {
    // Start batch timer
    this.startBatchTimer()

    // Listen for page unload to flush events
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', () => {
        this.flush()
      })
    }
  }

  private startBatchTimer(): void {
    this.batchTimer = setInterval(() => {
      this.flush()
    }, this.batchInterval)
  }

  identify(user: AnalyticsUser): void {
    this.buffer.users.push(user)
    this.checkBatchSize()
  }

  track(event: AnalyticsEvent): void {
    this.buffer.events.push(event)
    this.checkBatchSize()
  }

  page(data: PageViewEvent): void {
    this.buffer.pageViews.push(data)
    this.checkBatchSize()
  }

  private checkBatchSize(): void {
    const totalSize =
      this.buffer.events.length +
      this.buffer.pageViews.length +
      this.buffer.users.length

    if (totalSize >= this.batchSize) {
      this.flush()
    }
  }

  async flush(): Promise<void> {
    // Don't flush if buffer is empty
    if (
      this.buffer.events.length === 0 &&
      this.buffer.pageViews.length === 0 &&
      this.buffer.users.length === 0
    ) {
      return
    }

    // Copy current buffer
    const data = { ...this.buffer }

    // Clear buffer
    this.buffer = {
      events: [],
      pageViews: [],
      users: [],
    }

    try {
      // Send to analytics endpoint
      await this.sendAnalytics(data)
    } catch (error) {
      // On error, add data back to buffer
      this.buffer.events.push(...data.events)
      this.buffer.pageViews.push(...data.pageViews)
      this.buffer.users.push(...data.users)

      logger.error('Failed to send analytics data', { error })
    }
  }

  private async sendAnalytics(data: AnalyticsBuffer): Promise<void> {
    // Skip if running on server or no data
    if (typeof window === 'undefined') return

    const endpoint = '/api/analytics'

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`Analytics request failed: ${response.status}`)
    }
  }

  reset(): void {
    // Clear buffer
    this.buffer = {
      events: [],
      pageViews: [],
      users: [],
    }
  }

  // Cleanup
  destroy(): void {
    if (this.batchTimer) {
      clearInterval(this.batchTimer)
      this.batchTimer = null
    }
    this.flush()
  }
}

export const customAnalytics = new CustomAnalyticsProvider()

// Export types for API endpoint
export type { AnalyticsBuffer }
