'use client'

import { AutoformatPlugin } from '@udecode/plate-autoformat'
import type { AutoformatRule } from '@udecode/plate-autoformat'

// Block formatting rules (including headings)
const autoformatBlocks: AutoformatRule[] = [
  {
    match: '# ',
    mode: 'block',
    type: 'h1',
  },
  {
    match: '## ',
    mode: 'block',
    type: 'h2',
  },
  {
    match: '### ',
    mode: 'block',
    type: 'h3',
  },
  {
    match: '#### ',
    mode: 'block',
    type: 'h4',
  },
  {
    match: '##### ',
    mode: 'block',
    type: 'h5',
  },
  {
    match: '###### ',
    mode: 'block',
    type: 'h6',
  },
  {
    match: '> ',
    mode: 'block',
    type: 'blockquote',
  },
  {
    match: '- ',
    mode: 'block',
    type: 'ul',
    format: (editor) => {
      // TODO: Implement list formatting
      // editor.tf.setListItem({ type: 'li' })
      // editor.tf.toggleList({ type: 'ul' })
    },
  },
  {
    match: '* ',
    mode: 'block',
    type: 'ul',
    format: (editor) => {
      // TODO: Implement list formatting
      // editor.tf.setListItem({ type: 'li' })
      // editor.tf.toggleList({ type: 'ul' })
    },
  },
  {
    match: '1. ',
    mode: 'block',
    type: 'ol',
    format: (editor) => {
      // TODO: Implement list formatting
      // editor.tf.setListItem({ type: 'li' })
      // editor.tf.toggleList({ type: 'ol' })
    },
  },
  {
    match: '---',
    mode: 'block',
    type: 'hr',
  },
]

// Mark formatting rules
const autoformatMarks: AutoformatRule[] = [
  {
    match: '***',
    mode: 'mark',
    type: ['bold', 'italic'],
  },
  {
    match: '**',
    mode: 'mark',
    type: 'bold',
  },
  {
    match: '*',
    mode: 'mark',
    type: 'italic',
  },
  {
    match: '_',
    mode: 'mark',
    type: 'italic',
  },
  {
    match: '~~',
    mode: 'mark',
    type: 'strikethrough',
  },
  {
    match: '`',
    mode: 'mark',
    type: 'code',
  },
]

// Wiki link formatting rule
const autoformatWikiLinks: AutoformatRule[] = [
  {
    match: '[[',
    mode: 'text',
    format: (editor) => {
      // This will be triggered when user types [[
      // We'll need to handle the closing ]] in a different way
      return false
    },
  },
  {
    match: '[[*]]',
    mode: 'text',
    format: (editor, options) => {
      // Handle match extraction when it exists
      if (options && 'match' in options && Array.isArray(options.match)) {
        const noteTitle = options.match[1]

        // Insert wiki link element
        ;(editor as any).insertNode({
          type: 'wikiLink',
          noteTitle: noteTitle.trim(),
          url: `/notes/search?title=${encodeURIComponent(noteTitle.trim())}`,
          children: [{ text: noteTitle.trim() }],
        })

        return true
      }
      return false
    },
  },
]

// Configure the autoformat plugin with rules
export const AutoformatKit = AutoformatPlugin.configure({
  options: {
    enableUndoOnDelete: true,
    rules: [...autoformatBlocks, ...autoformatMarks, ...autoformatWikiLinks],
  },
})

// Export as array for consistency with other kits
export const AutoformatPlugins = [AutoformatKit]
