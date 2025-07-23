import * as React from 'react'

import { type SlateLeafProps, SlateLeaf } from 'platejs'

export function HighlightLeafStatic(props: SlateLeafProps) {
  return (
    <SlateLeaf {...props} as='mark' className='bg-highlight/30 text-inherit'>
      {props.children}
    </SlateLeaf>
  )
}
