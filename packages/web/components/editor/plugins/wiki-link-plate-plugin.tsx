'use client'

import { createPlatePlugin } from 'platejs/react'
import { WikiLinkElement } from '@/components/ui/wiki-link-node'

// Wiki Link Plugin for Plate.js
export const WikiLinkPlugin = createPlatePlugin({
  key: 'wikiLink',
  node: {
    isElement: true,
    isInline: true,
    type: 'wikiLink',
    component: WikiLinkElement,
  },
  parsers: {
    // Parse [[Note Title]] syntax during paste/input
    html: {
      deserializer: {
        parse: ({ element }) => {
          const dataWikiLink = element.getAttribute('data-wiki-link')
          if (dataWikiLink === 'true') {
            return {
              type: 'wikiLink',
              noteTitle:
                element.getAttribute('data-note-title') ||
                element.textContent ||
                '',
              url: element.getAttribute('href') || '',
            }
          }
        },
      },
    },
  },
  // Note: Wiki-link autoformatting is handled by the AutoformatKit
  // which provides more robust text pattern matching and transformation
})
