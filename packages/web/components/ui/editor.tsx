'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface EditorProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'minimal'
}

export function Editor({
  variant = 'default',
  className,
  children,
  ...props
}: EditorProps) {
  return (
    <div
      className={cn(
        'min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        variant === 'minimal' && 'border-0 ring-0',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface EditorContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'minimal'
}

export function EditorContainer({
  variant = 'default',
  className,
  children,
  ...props
}: EditorContainerProps) {
  return (
    <div
      className={cn(
        'flex flex-col',
        variant === 'default' &&
          'border border-border rounded-lg bg-background',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
