import React from 'react'
import { PlateElement, PlateElementProps } from '@udecode/plate-common'
import { cn } from '../../../lib/utils'

export interface MentionElementProps extends PlateElementProps {
  element: {
    value?: string
  }
}

export const MentionElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  MentionElementProps
>(({ className, element, ...props }, ref) => {
  return (
    <PlateElement
      ref={ref}
      data-slate-value={element.value}
      className={cn(
        'inline-block rounded-md bg-primary/10 px-1.5 py-0.5 text-sm font-medium text-primary',
        className
      )}
      contentEditable={false}
      {...props}
    >
      @{element.value}
      {props.children}
    </PlateElement>
  )
})

MentionElement.displayName = 'MentionElement'
