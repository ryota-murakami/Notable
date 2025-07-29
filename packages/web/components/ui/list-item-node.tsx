'use client'

import * as React from 'react'
import { PlateElement, type PlateElementProps } from 'platejs/react'
import { cn } from '@/lib/utils'

export function ListItemElement({
  className,
  children,
  ...props
}: PlateElementProps) {
  return (
    <PlateElement as='li' className={cn('my-1', className)} {...props}>
      {children}
    </PlateElement>
  )
}
