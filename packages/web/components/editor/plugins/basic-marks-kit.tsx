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

import { CodeLeaf } from '@/components/ui/code-node'
import { HighlightLeaf } from '@/components/ui/highlight-node'
import { KbdLeaf } from '@/components/ui/kbd-node'

// Text Mark Plugins - using direct plugin instances with extensions for components
const BoldPlugin = BaseBoldPlugin

const ItalicPlugin = BaseItalicPlugin

const UnderlinePlugin = BaseUnderlinePlugin

const CodePlugin = BaseCodePlugin.extend({
  node: {
    component: CodeLeaf,
  },
})

const StrikethroughPlugin = BaseStrikethroughPlugin

const SubscriptPlugin = BaseSubscriptPlugin

const SuperscriptPlugin = BaseSuperscriptPlugin

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
