'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface EditorStaticProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'minimal'
  children?: React.ReactNode
}

export function EditorStatic({
  variant = 'default',
  className,
  children,
  ...props
}: EditorStaticProps) {
  return (
    <div
      className={cn(
        'w-full rounded-md bg-background px-3 py-2 text-sm prose prose-sm max-w-none',
        variant === 'minimal' && 'border-0 ring-0',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
