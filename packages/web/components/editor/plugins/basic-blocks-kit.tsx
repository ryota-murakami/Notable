'use client'

import { createPlatePlugin } from 'platejs/react'

// Basic block plugins using createPlatePlugin
export const H1Plugin = createPlatePlugin({
  key: 'h1',
  node: {
    isElement: true,
    type: 'h1',
  },
})

export const H2Plugin = createPlatePlugin({
  key: 'h2',
  node: {
    isElement: true,
    type: 'h2',
  },
})

export const H3Plugin = createPlatePlugin({
  key: 'h3',
  node: {
    isElement: true,
    type: 'h3',
  },
})

export const H4Plugin = createPlatePlugin({
  key: 'h4',
  node: {
    isElement: true,
    type: 'h4',
  },
})

export const H5Plugin = createPlatePlugin({
  key: 'h5',
  node: {
    isElement: true,
    type: 'h5',
  },
})

export const H6Plugin = createPlatePlugin({
  key: 'h6',
  node: {
    isElement: true,
    type: 'h6',
  },
})

export const ParagraphPlugin = createPlatePlugin({
  key: 'p',
  node: {
    isElement: true,
    type: 'p',
  },
})

export const BlockquotePlugin = createPlatePlugin({
  key: 'blockquote',
  node: {
    isElement: true,
    type: 'blockquote',
  },
})

export const HrPlugin = createPlatePlugin({
  key: 'hr',
  node: {
    isElement: true,
    type: 'hr',
    isVoid: true,
  },
})

export const BasicBlocksKit = [
  H1Plugin,
  H2Plugin,
  H3Plugin,
  H4Plugin,
  H5Plugin,
  H6Plugin,
  ParagraphPlugin,
  BlockquotePlugin,
  HrPlugin,
]
