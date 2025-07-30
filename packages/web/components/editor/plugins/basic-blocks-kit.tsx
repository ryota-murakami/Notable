'use client'

import { createPlatePlugin } from 'platejs/react'
import { ParagraphPlugin } from 'platejs/react'

import { BlockquoteElement } from '@/components/ui/blockquote-node'
import {
  H1Element,
  H2Element,
  H3Element,
  H4Element,
  H5Element,
  H6Element,
} from '@/components/ui/heading-node'
import { HrElement } from '@/components/ui/hr-node'
import { ParagraphElement } from '@/components/ui/paragraph-node'

// Core Block Plugins with proper v49 configuration
const H1Plugin = createPlatePlugin({
  key: 'h1',
  node: {
    isElement: true,
    type: 'h1',
    component: H1Element,
  },
})

const H2Plugin = createPlatePlugin({
  key: 'h2',
  node: {
    isElement: true,
    type: 'h2',
    component: H2Element,
  },
})

const H3Plugin = createPlatePlugin({
  key: 'h3',
  node: {
    isElement: true,
    type: 'h3',
    component: H3Element,
  },
})

const H4Plugin = createPlatePlugin({
  key: 'h4',
  node: {
    isElement: true,
    type: 'h4',
    component: H4Element,
  },
})

const H5Plugin = createPlatePlugin({
  key: 'h5',
  node: {
    isElement: true,
    type: 'h5',
    component: H5Element,
  },
})

const H6Plugin = createPlatePlugin({
  key: 'h6',
  node: {
    isElement: true,
    type: 'h6',
    component: H6Element,
  },
})

const BlockquotePlugin = createPlatePlugin({
  key: 'blockquote',
  node: {
    isElement: true,
    type: 'blockquote',
    component: BlockquoteElement,
  },
})

const HorizontalRulePlugin = createPlatePlugin({
  key: 'hr',
  node: {
    isElement: true,
    type: 'hr',
    component: HrElement,
    isVoid: true, // HR elements don't have children
  },
})

export const BasicBlocksKit = [
  ParagraphPlugin.withComponent(ParagraphElement),
  H1Plugin,
  H2Plugin,
  H3Plugin,
  H4Plugin,
  H5Plugin,
  H6Plugin,
  BlockquotePlugin,
  HorizontalRulePlugin,
]
