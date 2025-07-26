import React from 'react'
import { PlateElement, PlateElementProps } from '@udecode/plate-common'
import { cn } from '../../../lib/utils'
import Image from 'next/image'
import { useFocused, useSelected } from 'slate-react'

export interface ImageElementProps extends PlateElementProps {
  element: {
    url?: string
    alt?: string
    width?: number
    height?: number
    caption?: string
  }
}

export const ImageElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  ImageElementProps
>(({ className, element, ...props }, ref) => {
  const selected = useSelected()
  const focused = useFocused()

  return (
    <PlateElement ref={ref} className={cn('my-4', className)} {...props}>
      <div contentEditable={false}>
        <div
          className={cn(
            'relative overflow-hidden rounded-md',
            selected && focused && 'ring-2 ring-primary ring-offset-2'
          )}
        >
          {element.url && (
            <img
              src={element.url}
              alt={element.alt || ''}
              className='max-w-full h-auto'
              style={{
                width: element.width || 'auto',
                height: element.height || 'auto',
              }}
            />
          )}
        </div>
        {element.caption && (
          <p className='mt-2 text-center text-sm text-muted-foreground'>
            {element.caption}
          </p>
        )}
      </div>
      {props.children}
    </PlateElement>
  )
})

ImageElement.displayName = 'ImageElement'
