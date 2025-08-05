'use client'

import { isTest } from '@/lib/utils/environment'

export function MSWProvider({ children }: { children: React.ReactNode }) {
  // Simple passthrough - MSW initialization happens elsewhere
  return <>{children}</>
}

// Wrapper component that handles the suspense boundary
export function MSWProviderWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  // Simple passthrough - no need for suspense without async loading
  return <MSWProvider>{children}</MSWProvider>
}
