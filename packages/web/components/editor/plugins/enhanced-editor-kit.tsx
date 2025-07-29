'use client'

import { ListPlugin } from '@platejs/list/react'

import { BasicNodesKit } from './basic-nodes-kit'

export const EnhancedEditorKit = [
  ...BasicNodesKit,
  // List plugin with modern configuration
  ListPlugin.configure({
    shortcuts: { toggle: { keys: 'mod+shift+8' } },
  }),
]
