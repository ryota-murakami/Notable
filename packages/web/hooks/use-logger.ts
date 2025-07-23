import { useCallback, useEffect } from 'react'
import { useUser } from '@/hooks/use-user'
import { logger } from '@/lib/logging/logger.client'
import type { LogMetadata } from '@/lib/logging'

export function useLogger(componentName?: string) {
  const { user } = useUser()

  // Create base metadata
  const baseMetadata: LogMetadata = {
    ...(componentName !== undefined && { component: componentName }),
    ...(user?.id !== undefined && { userId: user.id }),
  }

  // Log component mount/unmount
  useEffect(() => {
    if (componentName) {
      logger.debug(`Component mounted: ${componentName}`, baseMetadata)

      return () => {
        logger.debug(`Component unmounted: ${componentName}`, baseMetadata)
      }
    }
    return undefined
  }, [componentName])

  // Error logging with context
  const logError = useCallback(
    (error: Error | unknown, context?: string) => {
      const errorObj = error instanceof Error ? error : new Error(String(error))

      logger.error(context || 'Component error', {
        ...baseMetadata,
        error: errorObj,
        context,
      })
    },
    [baseMetadata]
  )

  // Warning logging
  const logWarning = useCallback(
    (message: string, metadata?: LogMetadata) => {
      logger.warn(message, {
        ...baseMetadata,
        ...metadata,
      })
    },
    [baseMetadata]
  )

  // Info logging
  const logInfo = useCallback(
    (message: string, metadata?: LogMetadata) => {
      logger.info(message, {
        ...baseMetadata,
        ...metadata,
      })
    },
    [baseMetadata]
  )

  // Debug logging
  const logDebug = useCallback(
    (message: string, metadata?: LogMetadata) => {
      logger.debug(message, {
        ...baseMetadata,
        ...metadata,
      })
    },
    [baseMetadata]
  )

  // User action logging
  const logAction = useCallback(
    (action: string, metadata?: LogMetadata) => {
      logger.info(`User action: ${action}`, {
        ...baseMetadata,
        ...metadata,
      })
    },
    [baseMetadata, user?.id]
  )

  // Performance logging
  const logPerformance = useCallback(
    (operation: string, duration: number, metadata?: LogMetadata) => {
      const level = duration > 1000 ? 'warn' : 'info'
      logger[level](`Performance: ${operation} took ${duration}ms`, {
        ...baseMetadata,
        ...metadata,
      })
    },
    [baseMetadata]
  )

  // Time tracking helper
  const startTimer = useCallback(
    (operation: string) => {
      const startTime = performance.now()

      return () => {
        const duration = performance.now() - startTime
        logPerformance(operation, duration)
      }
    },
    [logPerformance]
  )

  return {
    error: logError,
    warn: logWarning,
    info: logInfo,
    debug: logDebug,
    action: logAction,
    performance: logPerformance,
    startTimer,
    logger, // Direct access to logger if needed
  }
}

// Hook for logging async operations
export function useAsyncLogger() {
  const { error, info, startTimer } = useLogger('AsyncOperation')

  const logAsync = useCallback(
    async <T>(
      operation: string,
      fn: () => Promise<T>,
      options?: {
        onSuccess?: (result: T) => void
        onError?: (error: Error) => void
      }
    ): Promise<T> => {
      const endTimer = startTimer(operation)

      try {
        info(`Starting: ${operation}`)
        const result = await fn()
        info(`Completed: ${operation}`)
        options?.onSuccess?.(result)
        return result
      } catch (err) {
        error(err as Error, `Failed: ${operation}`)
        options?.onError?.(err as Error)
        throw err
      } finally {
        endTimer()
      }
    },
    [error, info, startTimer]
  )

  return { logAsync }
}

// Hook for logging form submissions
export function useFormLogger(formName: string) {
  const { action, error, startTimer } = useLogger(`Form:${formName}`)

  const logSubmit = useCallback(
    (data: any) => {
      action('form_submit', {
        formName,
        fields: Object.keys(data),
      })
    },
    [action, formName]
  )

  const logValidationError = useCallback(
    (errors: any) => {
      action('form_validation_error', {
        formName,
        errors: Object.keys(errors),
      })
    },
    [action, formName]
  )

  const logSubmitError = useCallback(
    (err: Error) => {
      error(err, 'Form submission failed')
    },
    [error]
  )

  const logSubmitSuccess = useCallback(() => {
    action('form_submit_success', { formName })
  }, [action, formName])

  return {
    logSubmit,
    logValidationError,
    logSubmitError,
    logSubmitSuccess,
    startTimer,
  }
}
