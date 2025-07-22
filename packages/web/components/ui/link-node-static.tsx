import * as React from 'react'

import {
  type SlateElementProps,
  type TLinkElement,
  SlateElement,
} from 'platejs'

import { getLinkAttributes } from '@platejs/link'

export function LinkElementStatic(props: SlateElementProps<TLinkElement>) {
  return (
    <SlateElement
      {...props}
      as='a'
      className='font-medium text-primary underline decoration-primary underline-offset-4'
      attributes={{
        ...props.attributes,
        ...getLinkAttributes(props.editor, props.element),
      }}
    >
      {props.children}
    </SlateElement>
  )
}
