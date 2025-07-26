import { AutoformatRule } from '@udecode/plate-autoformat'
import {
  MARK_BOLD,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  MARK_CODE,
} from '@udecode/plate-basic-marks'
import {
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from '@udecode/plate-heading'
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph'
import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote'
import { ELEMENT_CODE_BLOCK } from '@udecode/plate-code-block'
import { ELEMENT_HR } from '@udecode/plate-horizontal-rule'
import {
  ELEMENT_OL,
  ELEMENT_UL,
  ELEMENT_LI,
  ELEMENT_TODO_LI,
} from '@udecode/plate-list'

export const autoformatRules: AutoformatRule[] = [
  // Headings
  {
    mode: 'block',
    type: ELEMENT_H1,
    match: '# ',
    preFormat: clearBlockFormat,
  },
  {
    mode: 'block',
    type: ELEMENT_H2,
    match: '## ',
    preFormat: clearBlockFormat,
  },
  {
    mode: 'block',
    type: ELEMENT_H3,
    match: '### ',
    preFormat: clearBlockFormat,
  },
  {
    mode: 'block',
    type: ELEMENT_H4,
    match: '#### ',
    preFormat: clearBlockFormat,
  },
  {
    mode: 'block',
    type: ELEMENT_H5,
    match: '##### ',
    preFormat: clearBlockFormat,
  },
  {
    mode: 'block',
    type: ELEMENT_H6,
    match: '###### ',
    preFormat: clearBlockFormat,
  },

  // Lists
  {
    mode: 'block',
    type: ELEMENT_LI,
    match: ['* ', '- '],
    preFormat: clearBlockFormat,
    format: (editor) => {
      insertEmptyList(editor, ELEMENT_UL)
    },
  },
  {
    mode: 'block',
    type: ELEMENT_LI,
    match: ['1. ', '1) '],
    preFormat: clearBlockFormat,
    format: (editor) => {
      insertEmptyList(editor, ELEMENT_OL)
    },
  },
  {
    mode: 'block',
    type: ELEMENT_TODO_LI,
    match: ['[] ', '[ ] '],
    preFormat: clearBlockFormat,
  },
  {
    mode: 'block',
    type: ELEMENT_TODO_LI,
    match: ['[x] ', '[X] '],
    preFormat: clearBlockFormat,
    format: (editor) => {
      setTodoListItemChecked(editor, true)
    },
  },

  // Blockquote
  {
    mode: 'block',
    type: ELEMENT_BLOCKQUOTE,
    match: '> ',
    preFormat: clearBlockFormat,
  },

  // Code block
  {
    mode: 'block',
    type: ELEMENT_CODE_BLOCK,
    match: '```',
    preFormat: clearBlockFormat,
  },

  // Horizontal rule
  {
    mode: 'block',
    type: ELEMENT_HR,
    match: ['---', '***', '___'],
    preFormat: clearBlockFormat,
  },

  // Marks
  {
    mode: 'mark',
    type: [MARK_BOLD, MARK_ITALIC],
    match: '***',
  },
  {
    mode: 'mark',
    type: [MARK_UNDERLINE, MARK_ITALIC],
    match: '__*',
  },
  {
    mode: 'mark',
    type: [MARK_UNDERLINE, MARK_BOLD],
    match: '__**',
  },
  {
    mode: 'mark',
    type: [MARK_UNDERLINE, MARK_BOLD, MARK_ITALIC],
    match: '___***',
  },
  {
    mode: 'mark',
    type: MARK_BOLD,
    match: '**',
  },
  {
    mode: 'mark',
    type: MARK_UNDERLINE,
    match: '__',
  },
  {
    mode: 'mark',
    type: MARK_ITALIC,
    match: '*',
  },
  {
    mode: 'mark',
    type: MARK_ITALIC,
    match: '_',
  },
  {
    mode: 'mark',
    type: MARK_STRIKETHROUGH,
    match: '~~',
  },
  {
    mode: 'mark',
    type: MARK_SUPERSCRIPT,
    match: '^',
  },
  {
    mode: 'mark',
    type: MARK_SUBSCRIPT,
    match: '~',
  },
  {
    mode: 'mark',
    type: MARK_CODE,
    match: '`',
  },
]

// Helper functions
function clearBlockFormat(editor: any) {
  // Implementation to clear block format
}

function insertEmptyList(editor: any, listType: string) {
  // Implementation to insert empty list
}

function setTodoListItemChecked(editor: any, checked: boolean) {
  // Implementation to set todo list item checked state
}
