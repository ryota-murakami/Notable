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
  handlers: {
    // Handle inserting text to detect [[Note]] pattern
    onKeyDown: ({ editor, event }) => {
      if (event.key === ']') {
        // Check if we're completing a wiki link pattern
        const { selection } = editor
        if (selection) {
          // TODO: Get text node at selection properly
          const text = ''

          // Check if the current text ends with '[[something]'
          const match = text.match(/\[\[([^\]]+)\]$/)
          if (match) {
            event.preventDefault()
            const _noteTitle = match[1]

            // Replace the pattern with a wiki-link node
            // TODO: Implement proper transforms
            // editor.deleteBackward and editor.insertNode need proper implementation
            return true
          }
        }
      }
    },
  },
})
