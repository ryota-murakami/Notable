'use client'

import { BasicBlocksKit } from './basic-blocks-kit'
import { BasicMarksKit } from './basic-marks-kit'
import { WikiLinkPlugin } from './wiki-link-plate-plugin'
import { AdvancedBlocksKit } from './advanced-blocks-kit'

export const BasicNodesKit = [
  ...BasicBlocksKit,
  ...BasicMarksKit,
  ...AdvancedBlocksKit,
  WikiLinkPlugin,
]
