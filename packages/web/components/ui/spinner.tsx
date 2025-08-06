import React from 'react'
import { Spinner as RadixSpinner } from '@radix-ui/themes'
import { cn } from '@/lib/utils'

interface SpinnerProps {
  className?: string
  size?: '1' | '2' | '3'
}

export function Spinner({ className, size = '2' }: SpinnerProps) {
  return (
    <RadixSpinner
      className={cn('text-muted-foreground', className)}
      size={size}
      aria-label='Loading'
      data-size={size}
    />
  )
}
