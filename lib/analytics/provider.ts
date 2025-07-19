import { AnalyticsEvent, AnalyticsUser, PageViewEvent } from './index'

export interface AnalyticsProvider {
  name: string

  // Lifecycle methods
  initialize?(): Promise<void>
  flush?(): Promise<void>
  reset?(): void

  // Core methods
  identify?(user: AnalyticsUser): void
  track(event: AnalyticsEvent): void
  page?(data: PageViewEvent): void
}
