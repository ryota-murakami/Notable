import React from 'react'
import { PlateElement, PlateElementProps } from '@udecode/plate-common'
import { cn } from '../../../lib/utils'

export const BlockquoteElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  PlateElementProps
>(({ className, ...props }, ref) => {
  return (
    <PlateElement
      ref={ref}
      asChild
      className={cn(
        'my-4 border-l-4 border-muted-foreground/20 pl-4 italic text-muted-foreground',
        className
      )}
      {...props}
    >
      <blockquote>{props.children}</blockquote>
    </PlateElement>
  )
})

BlockquoteElement.displayName = 'BlockquoteElement'
