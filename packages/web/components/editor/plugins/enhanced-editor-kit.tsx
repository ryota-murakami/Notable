'use client'

// TODO: Fix Plate.js imports
// import { ListPlugin } from '@platejs/list'

import { BasicNodesKit } from './basic-nodes-kit'
import { LinkKit } from './link-plugin'

export const EnhancedEditorKit = [
  ...BasicNodesKit,
  ...LinkKit,
  // TODO: List plugin with modern configuration
  // ListPlugin.configure({
  //   shortcuts: { toggle: { keys: 'mod+shift+8' } },
  // }),
]
