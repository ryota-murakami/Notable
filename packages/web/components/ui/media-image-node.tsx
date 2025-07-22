'use client'

import * as React from 'react'
import { Image } from 'lucide-react'

import type { TImageElement } from 'platejs'
import { PlateElement, withHOC, type PlateElementProps } from 'platejs/react'
import {
  ImagePlugin,
  ResizableProvider,
  useDraggable,
  useMediaState,
  useResizableValue,
} from '@platejs/media/react'

import { cn } from '@/lib/utils'

import { Caption, CaptionTextarea } from './caption'
import { MediaToolbar } from './media-toolbar'
import {
  mediaResizeHandleVariants,
  Resizable,
  ResizeHandle,
} from './resize-handle'

export const ImageElement = withHOC(
  ResizableProvider,
  function ImageElement(props: PlateElementProps<TImageElement>) {
    const { align = 'center', focused, readOnly, selected } = useMediaState()
    const width = useResizableValue('width')

    const { isDragging, handleRef } = useDraggable({
      element: props.element,
    })

    return (
      <MediaToolbar plugin={ImagePlugin}>
        <PlateElement {...props} className='py-2.5'>
          <figure className='group relative m-0' contentEditable={false}>
            <Resizable
              align={align}
              options={{
                align,
                readOnly,
              }}
            >
              <ResizeHandle
                className={mediaResizeHandleVariants({ direction: 'left' })}
                options={{ direction: 'left' }}
              />
              <img
                ref={handleRef}
                className={cn(
                  'block w-full max-w-full cursor-pointer object-cover px-0',
                  'rounded-sm',
                  focused && selected && 'ring-2 ring-ring ring-offset-2',
                  isDragging && 'opacity-50'
                )}
                alt={props.attributes.alt as string | undefined}
                src={props.element.url}
              />
              <ResizeHandle
                className={mediaResizeHandleVariants({
                  direction: 'right',
                })}
                options={{ direction: 'right' }}
              />
            </Resizable>

            <Caption style={{ width }} align={align}>
              <CaptionTextarea
                readOnly={readOnly}
                onFocus={(e) => {
                  e.preventDefault()
                }}
                placeholder='Write a caption...'
              />
            </Caption>
          </figure>

          {props.children}
        </PlateElement>
      </MediaToolbar>
    )
  }
)
