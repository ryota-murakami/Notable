import * as React from 'react'
import { cn } from '@/lib/utils'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'shimmer' | 'wave'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}

function Skeleton({
  className,
  variant = 'default',
  rounded = 'md',
  ...props
}: SkeletonProps) {
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  }

  const variantClasses = {
    default: 'animate-pulse bg-muted',
    shimmer:
      'bg-gradient-to-r from-muted via-muted-foreground/10 to-muted bg-[length:200%_100%] animate-shimmer',
    wave: 'bg-muted relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-wave before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent',
  }

  return (
    <div
      className={cn(
        variantClasses[variant],
        roundedClasses[rounded],
        className
      )}
      {...props}
    />
  )
}

export { Skeleton, type SkeletonProps }
