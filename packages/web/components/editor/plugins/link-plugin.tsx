'use client'

import { createPlatePlugin } from 'platejs/react'
import { WikiLinkElement } from '@/components/ui/wiki-link-node'

// Link Element Component
export const LinkElement = ({ children, element, ...props }: any) => {
  return (
    <a
      {...props}
      href={element.url}
      className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
      target={element.target || '_blank'}
      rel={element.rel || 'noopener noreferrer'}
      data-testid="link-element"
    >
      {children}
    </a>
  )
}

// Simplified Link Plugin
export const LinkPlugin = createPlatePlugin({
  key: 'link',
  node: {
    isElement: true,
    isInline: true,
    type: 'link',
    component: LinkElement,
  },
})

// Wiki Link Plugin
export const WikiLinkPlugin = createPlatePlugin({
  key: 'wikiLink',
  node: {
    isElement: true,
    isInline: true,
    type: 'wikiLink',
    component: WikiLinkElement,
  },
})

export const LinkKit = [LinkPlugin, WikiLinkPlugin]
