import React from 'react'
import { PlateElement, PlateElementProps } from '@udecode/plate-common'
import { cn } from '../../../lib/utils'

export interface HeadingElementProps extends PlateElementProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const headingVariants = {
  h1: 'text-4xl font-bold tracking-tight my-4',
  h2: 'text-3xl font-semibold tracking-tight my-3',
  h3: 'text-2xl font-semibold tracking-tight my-3',
  h4: 'text-xl font-semibold tracking-tight my-2',
  h5: 'text-lg font-semibold tracking-tight my-2',
  h6: 'text-base font-semibold tracking-tight my-2',
}

export const HeadingElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  HeadingElementProps
>(({ className, variant = 'h1', ...props }, ref) => {
  const Component = variant

  return (
    <PlateElement
      ref={ref}
      asChild
      className={cn(headingVariants[variant], className)}
      {...props}
    >
      <Component>{props.children}</Component>
    </PlateElement>
  )
})

HeadingElement.displayName = 'HeadingElement'
