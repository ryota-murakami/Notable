'use client'

import * as React from 'react'

import type { TAudioElement } from 'platejs'
import { PlateElement, withHOC, type PlateElementProps } from 'platejs/react'

import { Caption, CaptionTextarea } from './caption'

export const AudioElement = withHOC(
  ResizableProvider,
  function AudioElement(props: PlateElementProps<TAudioElement>) {
    const { align = 'center', readOnly, unsafeUrl } = useMediaState()

    return (
      <PlateElement {...props} className='mb-1'>
        <figure
          className='group relative cursor-default'
          contentEditable={false}
        >
          <div className='h-16'>
            <audio className='size-full' src={unsafeUrl} controls />
          </div>

          <Caption style={{ width: '100%' }} align={align}>
            <CaptionTextarea
              className='h-20'
              readOnly={readOnly}
              placeholder='Write a caption...'
            />
          </Caption>
        </figure>
        {props.children}
      </PlateElement>
    )
  }
)
