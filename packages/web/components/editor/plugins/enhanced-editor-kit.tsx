'use client'

import { createPlatePlugin } from 'platejs/react'

import { BasicNodesKit } from './basic-nodes-kit'
import { BasicMarksKit } from './basic-marks-kit'
import { AdvancedBlocksKit } from './advanced-blocks-kit'
import { SlashCommandPlugin } from './slash-command-kit'
import { LinkKit } from './link-plugin'

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

  // Advanced blocks with proper UI components
  ...AdvancedBlocksKit,

  // Interactive features
  SlashCommandPlugin,
  BlockReferencePlugin,
  MentionPlugin,

  // Links (existing)
  ...LinkKit,
]
