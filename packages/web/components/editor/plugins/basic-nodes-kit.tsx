'use client'

import { BasicBlocksKit } from './basic-blocks-kit'
import { BasicMarksKit } from './basic-marks-kit'
import { AdvancedBlocksKit } from './advanced-blocks-kit'
import { LinkKit } from './link-plugin'
import { SlashCommandPlugin } from './slash-command-kit'
// Remove missing dependencies for now
// import { AutoformatPlugin } from '@udecode/plate-autoformat/react'
// import { ExitBreakPlugin } from '@udecode/plate-break/react'
// import { NodeIdPlugin } from '@udecode/plate-node-id'
// import { SelectOnBackspacePlugin } from '@udecode/plate-select'
// import { DeletePlugin } from '@udecode/plate-select'
// import { TrailingBlockPlugin } from '@udecode/plate-trailing-block'

export const BasicNodesKit = [
  // Text formatting
  ...BasicMarksKit,
  
  // Block elements
  ...BasicBlocksKit,
  
  // Advanced blocks and lists
  ...AdvancedBlocksKit,
  
  // Link functionality
  ...LinkKit,
  
  // Interaction plugins
  SlashCommandPlugin,
]
