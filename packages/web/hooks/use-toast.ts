import { useEffect, useRef, useState } from 'react'

export interface Toast {
  id: string
  title?: string
  description?: string
  type?: 'default' | 'success' | 'error' | 'warning'
  variant?: 'default' | 'destructive' | 'success' | 'warning'
  duration?: number
}

export interface ToastState {
  toasts: Toast[]
}

// Global toast management for non-hook usage
const globalToastSubscribers: ((toasts: Toast[]) => void)[] = []
let globalToasts: Toast[] = []

const notifyGlobalSubscribers = () => {
  globalToastSubscribers.forEach(subscriber => subscriber([...globalToasts]))
}

// Standalone toast function for use outside of React components
export const toast = (props: Omit<Toast, 'id'>) => {
  const id = Math.random().toString(36).substr(2, 9)
  const newToast: Toast = {
    id,
    duration: 5000,
    ...props,
  }

  globalToasts.push(newToast)
  notifyGlobalSubscribers()

  // Auto remove after duration
  if (newToast.duration && newToast.duration > 0) {
    setTimeout(() => {
      globalToasts = globalToasts.filter((t) => t.id !== id)
      notifyGlobalSubscribers()
    }, newToast.duration)
  }

  return id
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const timersRef = useRef<Map<string, NodeJS.Timeout>>(new Map())

  const toast = (props: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast: Toast = {
      id,
      duration: 5000,
      ...props,
    }

    setToasts((prev) => [...prev, newToast])

    // Auto remove after duration
    if (newToast.duration && newToast.duration > 0) {
      const timer = setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
        timersRef.current.delete(id)
      }, newToast.duration)
      timersRef.current.set(id, timer)
    }

    return id
  }

  const dismiss = (id: string) => {
    const timer = timersRef.current.get(id)
    if (timer) {
      clearTimeout(timer)
      timersRef.current.delete(id)
    }
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  const dismissAll = () => {
    setToasts([])
  }

  useEffect(() => {
    return () => {
      // Clean up all timers on unmount
      timersRef.current.forEach((timer) => clearTimeout(timer))
      timersRef.current.clear()
    }
  }, [])

  return {
    toasts,
    toast,
    dismiss,
    dismissAll,
  }
}