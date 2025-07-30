'use client'

import { createPlatePlugin } from 'platejs/react'

// Basic mark plugins using createPlatePlugin
export const BoldPlugin = createPlatePlugin({
  key: 'bold',
  node: {
    isLeaf: true,
    type: 'bold',
  },
})

export const ItalicPlugin = createPlatePlugin({
  key: 'italic',
  node: {
    isLeaf: true,
    type: 'italic',
  },
})

export const UnderlinePlugin = createPlatePlugin({
  key: 'underline',
  node: {
    isLeaf: true,
    type: 'underline',
  },
})

export const CodePlugin = createPlatePlugin({
  key: 'code',
  node: {
    isLeaf: true,
    type: 'code',
  },
})

export const StrikethroughPlugin = createPlatePlugin({
  key: 'strikethrough',
  node: {
    isLeaf: true,
    type: 'strikethrough',
  },
})

export const SubscriptPlugin = createPlatePlugin({
  key: 'subscript',
  node: {
    isLeaf: true,
    type: 'subscript',
  },
})

export const SuperscriptPlugin = createPlatePlugin({
  key: 'superscript',
  node: {
    isLeaf: true,
    type: 'superscript',
  },
})

export const HighlightPlugin = createPlatePlugin({
  key: 'highlight',
  node: {
    isLeaf: true,
    type: 'highlight',
  },
})

export const KbdPlugin = createPlatePlugin({
  key: 'kbd',
  node: {
    isLeaf: true,
    type: 'kbd',
  },
})

export const BasicMarksKit = [
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
  CodePlugin,
  StrikethroughPlugin,
  SubscriptPlugin,
  SuperscriptPlugin,
  HighlightPlugin,
  KbdPlugin,
]
