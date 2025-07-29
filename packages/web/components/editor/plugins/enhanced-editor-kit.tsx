'use client'

import { ListPlugin } from '@platejs/list/react'

import { BasicNodesKit } from './basic-nodes-kit'
import { LinkKit } from './link-plugin'

export const EnhancedEditorKit = [
  ...BasicNodesKit,
  ...LinkKit,
  // List plugin with modern configuration
  ListPlugin.configure({
    shortcuts: { toggle: { keys: 'mod+shift+8' } },
  }),
]
