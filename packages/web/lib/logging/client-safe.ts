/**
 * Client-safe logger that only uses console methods
 * This is specifically for client components and edge runtime
 */

export interface LogMetadata {
  [key: string]: unknown
}

class ClientSafeLogger {
  private isDevelopment: boolean

  constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development'
  }

  error(message: string, metadata?: LogMetadata): void {
    console.error(message, metadata)
  }

  warn(message: string, metadata?: LogMetadata): void {
    console.warn(message, metadata)
  }

  info(message: string, metadata?: LogMetadata): void {
    if (this.isDevelopment) {
      console.info(message, metadata)
    }
  }

  debug(message: string, metadata?: LogMetadata): void {
    if (this.isDevelopment) {
      console.debug(message, metadata)
    }
  }

  verbose(message: string, metadata?: LogMetadata): void {
    if (this.isDevelopment) {
      console.log('[VERBOSE]', message, metadata)
    }
  }
}

// Export singleton instance
export const logger = new ClientSafeLogger()
