import React from 'react'
import { PlateElement, PlateElementProps } from '@udecode/plate-common'
import { cn } from '../../../lib/utils'

export interface ListElementProps extends PlateElementProps {
  variant?: 'ul' | 'ol'
}

export const ListElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  ListElementProps
>(({ className, variant = 'ul', ...props }, ref) => {
  const Component = variant

  return (
    <PlateElement
      ref={ref}
      asChild
      className={cn(
        'my-2 ml-6',
        variant === 'ul' && 'list-disc',
        variant === 'ol' && 'list-decimal',
        className
      )}
      {...props}
    >
      <Component>{props.children}</Component>
    </PlateElement>
  )
})

ListElement.displayName = 'ListElement'

export interface ListItemElementProps extends PlateElementProps {
  variant?: 'li'
}

export const ListItemElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  ListItemElementProps
>(({ className, ...props }, ref) => {
  return (
    <PlateElement
      ref={ref}
      asChild
      className={cn('my-1', className)}
      {...props}
    >
      <li>{props.children}</li>
    </PlateElement>
  )
})

ListItemElement.displayName = 'ListItemElement'
