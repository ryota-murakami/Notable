'use client'

// TODO: Fix Plate.js imports
// import { LinkPlugin } from '@platejs/link'
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

// TODO: Re-enable LinkPlugin when import is fixed
export const LinkKit = [/*LinkPlugin,*/ WikiLinkPlugin]
