'use client'

import * as React from 'react'
import { PlateElement, type PlateElementProps } from 'platejs/react'
import { cn } from '@/lib/utils'

export function BulletedListElement({
  className,
  children,
  ...props
}: PlateElementProps) {
  return (
    <PlateElement
      as='ul'
      className={cn('list-disc list-outside ml-6 my-2', className)}
      {...props}
    >
      {children}
    </PlateElement>
  )
}
