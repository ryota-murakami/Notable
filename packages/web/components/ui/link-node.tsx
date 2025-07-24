'use client'

import * as React from 'react'

import type { TLinkElement } from 'platejs'
import { PlateElement, type PlateElementProps } from 'platejs/react'
import { getLinkAttributes } from '@platejs/link'

export function LinkElement(props: PlateElementProps<TLinkElement>) {
  return (
    <PlateElement
      {...props}
      as='a'
      className='font-medium text-primary underline decoration-primary underline-offset-4'
      attributes={{
        ...props.attributes,
        ...getLinkAttributes(props.editor, props.element),
        onMouseOver: (e) => {
          e.stopPropagation()
        },
      }}
    >
      {props.children}
    </PlateElement>
  )
}
