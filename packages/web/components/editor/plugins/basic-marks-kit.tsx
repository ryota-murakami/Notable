'use client'

import { createPlatePlugin } from 'platejs/react'
import {
  BoldPlugin as BaseBoldPlugin,
  CodePlugin as BaseCodePlugin,
  ItalicPlugin as BaseItalicPlugin,
  StrikethroughPlugin as BaseStrikethroughPlugin,
  SubscriptPlugin as BaseSubscriptPlugin,
  SuperscriptPlugin as BaseSuperscriptPlugin,
  UnderlinePlugin as BaseUnderlinePlugin,
} from '@udecode/plate-basic-marks/react'
// import { HighlightPlugin as BaseHighlightPlugin } from '@udecode/plate-highlight/react'
// import { KbdPlugin as BaseKbdPlugin } from '@udecode/plate-kbd/react'

import { CodeLeaf } from '@/components/ui/code-node'
import { HighlightLeaf } from '@/components/ui/highlight-node'
import { KbdLeaf } from '@/components/ui/kbd-node'

// Text Mark Plugins with keyboard shortcuts enabled
const BoldPlugin = BaseBoldPlugin.extend({
  node: {
    isLeaf: true,
    type: 'bold',
  },
})

const ItalicPlugin = BaseItalicPlugin.extend({
  node: {
    isLeaf: true,
    type: 'italic',
  },
})

const UnderlinePlugin = BaseUnderlinePlugin.extend({
  node: {
    isLeaf: true,
    type: 'underline',
  },
})

const CodePlugin = BaseCodePlugin.extend({
  node: {
    isLeaf: true,
    type: 'code',
    component: CodeLeaf,
  },
})

const StrikethroughPlugin = BaseStrikethroughPlugin.extend({
  node: {
    isLeaf: true,
    type: 'strikethrough',
  },
})

const SubscriptPlugin = BaseSubscriptPlugin.extend({
  node: {
    isLeaf: true,
    type: 'subscript',
  },
})

const SuperscriptPlugin = BaseSuperscriptPlugin.extend({
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
