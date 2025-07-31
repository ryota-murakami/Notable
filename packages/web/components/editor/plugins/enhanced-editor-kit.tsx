'use client'

import { createPlatePlugin } from 'platejs/react'

import { BasicNodesKit } from './basic-nodes-kit'
import { BasicMarksKit } from './basic-marks-kit'
import { AdvancedBlocksKit } from './advanced-blocks-kit'
import { SlashCommandPlugin } from './slash-command-kit'
import { LinkKit } from './link-plugin'

// Component imports for advanced blocks
import { TodoElement } from '@/components/ui/todo-block'
import { ToggleElement } from '@/components/ui/toggle-block'
import { CalloutElement } from '@/components/ui/callout-block'
import { CodeBlockElement } from '@/components/ui/code-block'

// Update advanced blocks with proper components
const TodoPlugin = createPlatePlugin({
  key: 'action_item',
  node: {
    isElement: true,
    type: 'action_item',
    component: TodoElement,
  },
})

const TogglePlugin = createPlatePlugin({
  key: 'toggle',
  node: {
    isElement: true,
    type: 'toggle',
    component: ToggleElement,
  },
})

const CalloutPlugin = createPlatePlugin({
  key: 'callout',
  node: {
    isElement: true,
    type: 'callout',
    component: CalloutElement,
  },
})

const CodeBlockPlugin = createPlatePlugin({
  key: 'code_block',
  node: {
    isElement: true,
    type: 'code_block',
    component: CodeBlockElement,
  },
})

// Block Reference Plugin for linking between blocks
const BlockReferencePlugin = createPlatePlugin({
  key: 'block_reference',
  node: {
    isElement: true,
    type: 'block_reference',
    isVoid: true,
  },
})

// Mention Plugin for @-mentions
const MentionPlugin = createPlatePlugin({
  key: 'mention',
  node: {
    isLeaf: true,
    type: 'mention',
  },
})

export const EnhancedEditorKit = [
  // Core blocks and marks
  ...BasicNodesKit,
  ...BasicMarksKit,

  // Advanced blocks with components
  TodoPlugin,
  TogglePlugin,
  CalloutPlugin,
  CodeBlockPlugin,

  // Interactive features
  SlashCommandPlugin,
  BlockReferencePlugin,
  MentionPlugin,

  // Links (existing)
  ...LinkKit,
]
