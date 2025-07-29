'use client'

import { createPlatePlugin } from '@udecode/plate-common'

import { CodeLeaf } from '@/components/ui/code-node'
import { HighlightLeaf } from '@/components/ui/highlight-node'
import { KbdLeaf } from '@/components/ui/kbd-node'

// Text Mark Plugins with proper v49 configuration
const BoldPlugin = createPlatePlugin({
  key: 'bold',
  node: {
    isLeaf: true,
    type: 'bold',
  },
})

const ItalicPlugin = createPlatePlugin({
  key: 'italic',
  node: {
    isLeaf: true,
    type: 'italic',
  },
})

const UnderlinePlugin = createPlatePlugin({
  key: 'underline',
  node: {
    isLeaf: true,
    type: 'underline',
  },
})

const CodePlugin = createPlatePlugin({
  key: 'code',
  node: {
    isLeaf: true,
    type: 'code',
    component: CodeLeaf,
  },
})

const StrikethroughPlugin = createPlatePlugin({
  key: 'strikethrough',
  node: {
    isLeaf: true,
    type: 'strikethrough',
  },
})

const SubscriptPlugin = createPlatePlugin({
  key: 'subscript',
  node: {
    isLeaf: true,
    type: 'subscript',
  },
})

const SuperscriptPlugin = createPlatePlugin({
  key: 'superscript',
  node: {
    isLeaf: true,
    type: 'superscript',
  },
})

const HighlightPlugin = createPlatePlugin({
  key: 'highlight',
  node: {
    isLeaf: true,
    type: 'highlight',
    component: HighlightLeaf,
  },
})

const KbdPlugin = createPlatePlugin({
  key: 'kbd',
  node: {
    isLeaf: true,
    type: 'kbd',
    component: KbdLeaf,
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
