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
      editor.tf.setListItem({ type: 'li' })
      editor.tf.toggleList({ type: 'ul' })
    },
  },
  {
    match: '* ',
    mode: 'block',
    type: 'ul',
    format: (editor) => {
      editor.tf.setListItem({ type: 'li' })
      editor.tf.toggleList({ type: 'ul' })
    },
  },
  {
    match: '1. ',
    mode: 'block',
    type: 'ol',
    format: (editor) => {
      editor.tf.setListItem({ type: 'li' })
      editor.tf.toggleList({ type: 'ol' })
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

// Configure the autoformat plugin with rules
export const AutoformatKit = AutoformatPlugin.configure({
  options: {
    enableUndoOnDelete: true,
    rules: [...autoformatBlocks, ...autoformatMarks],
  },
})

// Export as array for consistency with other kits
export const AutoformatPlugins = [AutoformatKit]
