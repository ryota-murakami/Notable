'use client'

import * as React from 'react'
import { PlateElement, type PlateElementProps } from 'platejs/react'
import { cn } from '@/lib/utils'

export function NumberedListElement({
  className,
  children,
  ...props
}: PlateElementProps) {
  return (
    <PlateElement
      as='ol'
      className={cn('list-decimal list-outside ml-6 my-2', className)}
      {...props}
    >
      {children}
    </PlateElement>
  )
}
