import React from 'react'
import { PlateElement, PlateElementProps } from '@udecode/plate-common'
import { cn } from '../../../lib/utils'
import { useFocused, useSelected } from 'slate-react'

export const HrElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  PlateElementProps
>(({ className, ...props }, ref) => {
  const selected = useSelected()
  const focused = useFocused()

  return (
    <PlateElement ref={ref} className={cn('py-2', className)} {...props}>
      <div contentEditable={false}>
        <hr
          className={cn(
            'h-px border-0 bg-border',
            selected && focused && 'bg-primary'
          )}
        />
      </div>
      {props.children}
    </PlateElement>
  )
})

HrElement.displayName = 'HrElement'
