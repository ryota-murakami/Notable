import React from 'react'
import { PlateElement, PlateElementProps } from '@udecode/plate-common'
import { cn } from '../../../lib/utils'

export interface ParagraphElementProps extends PlateElementProps {
  variant?: 'default' | 'lead'
}

export const ParagraphElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  ParagraphElementProps
>(({ className, variant = 'default', ...props }, ref) => {
  return (
    <PlateElement
      ref={ref}
      asChild
      className={cn(
        'my-2',
        variant === 'lead' && 'text-lg text-muted-foreground',
        className
      )}
      {...props}
    >
      <p>{props.children}</p>
    </PlateElement>
  )
})

ParagraphElement.displayName = 'ParagraphElement'
