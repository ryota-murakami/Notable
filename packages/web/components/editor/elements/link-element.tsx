import React from 'react'
import { PlateElement, PlateElementProps } from '@udecode/plate-common'
import { cn } from '../../../lib/utils'

export interface LinkElementProps extends PlateElementProps {
  element: {
    url?: string
  }
}

export const LinkElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  LinkElementProps
>(({ className, element, ...props }, ref) => {
  return (
    <PlateElement
      ref={ref}
      asChild
      className={cn(
        'text-primary underline decoration-primary/50 underline-offset-2 hover:decoration-primary transition-colors',
        className
      )}
      {...props}
    >
      <a href={element.url} target='_blank' rel='noopener noreferrer'>
        {props.children}
      </a>
    </PlateElement>
  )
})

LinkElement.displayName = 'LinkElement'
