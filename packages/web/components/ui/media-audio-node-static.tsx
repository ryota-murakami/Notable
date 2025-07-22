import * as React from 'react'

import {
  SlateElement,
  type SlateElementProps,
  type TAudioElement,
} from 'platejs'

export function AudioElementStatic(props: SlateElementProps<TAudioElement>) {
  return (
    <SlateElement {...props} className='mb-1'>
      <figure className='group relative cursor-default'>
        <div className='h-16'>
          <audio className='size-full' src={props.element.url} controls />
        </div>
      </figure>
      {props.children}
    </SlateElement>
  )
}
