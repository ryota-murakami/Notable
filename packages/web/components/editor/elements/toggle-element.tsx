import React from 'react'
import { PlateElement, PlateElementProps } from '@udecode/plate-common'
import { cn } from '../../../lib/utils'
import { ChevronRight } from 'lucide-react'

export interface ToggleElementProps extends PlateElementProps {
  element: {
    open?: boolean
  }
}

export const ToggleElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  ToggleElementProps
>(({ className, element, ...props }, ref) => {
  const [open, setOpen] = React.useState(element.open ?? false)

  return (
    <PlateElement ref={ref} className={cn('my-2', className)} {...props}>
      <div className='flex items-start gap-1'>
        <button
          type='button'
          onClick={() => setOpen(!open)}
          contentEditable={false}
          className='mt-0.5 flex h-5 w-5 items-center justify-center rounded hover:bg-muted'
        >
          <ChevronRight
            className={cn('h-4 w-4 transition-transform', open && 'rotate-90')}
          />
        </button>
        <div className='flex-1'>
          <div className='font-medium'>{props.children}</div>
          {open && (
            <div className='mt-2 ml-5 border-l-2 border-muted pl-4'>
              {/* Toggle content goes here */}
            </div>
          )}
        </div>
      </div>
    </PlateElement>
  )
})

ToggleElement.displayName = 'ToggleElement'
