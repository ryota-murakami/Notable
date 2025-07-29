'use client'

import { LinkPlugin } from '@platejs/link/react'
import { createPlatePlugin } from 'platejs/react'

import { WikiLinkElement } from '@/components/ui/wiki-link-node'

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
