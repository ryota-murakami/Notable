import React from 'react'
import { PlateElement, PlateElementProps } from '@udecode/plate-common'
import { cn } from '../../../lib/utils'

export const CodeBlockElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  PlateElementProps
>(({ className, ...props }, ref) => {
  return (
    <PlateElement
      ref={ref}
      className={cn(
        'my-4 rounded-md bg-muted/50 p-4 font-mono text-sm overflow-x-auto',
        className
      )}
      {...props}
    >
      <pre>{props.children}</pre>
    </PlateElement>
  )
})

CodeBlockElement.displayName = 'CodeBlockElement'

export const CodeLineElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  PlateElementProps
>(({ className, ...props }, ref) => {
  return (
    <PlateElement ref={ref} className={cn('block', className)} {...props}>
      <code>{props.children}</code>
    </PlateElement>
  )
})

CodeLineElement.displayName = 'CodeLineElement'
