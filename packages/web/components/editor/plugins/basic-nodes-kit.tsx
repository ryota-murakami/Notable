'use client'

import { BasicBlocksKit } from './basic-blocks-kit'
import { BasicMarksKit } from './basic-marks-kit'
import { WikiLinkPlugin } from './wiki-link-plate-plugin'

export const BasicNodesKit = [
  ...BasicBlocksKit,
  ...BasicMarksKit,
  WikiLinkPlugin,
]
