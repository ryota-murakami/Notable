import { type ReactNode } from 'react'

interface RoutingProviderProps {
  children: ReactNode
}

export function RoutingProvider({ children }: RoutingProviderProps) {
  // Mobile routing is not yet implemented
  // The routing package has been refactored for SSR-safe operation
  // Mobile will use Expo Router directly until proper integration is implemented
  
  return <>{children}</>
}
