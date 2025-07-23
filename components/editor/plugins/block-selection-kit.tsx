'use client'

import { BlockSelectionPlugin } from '@platejs/selection/react'
import { getPluginTypes, KEYS } from 'platejs'

import { BlockSelection } from '@/components/ui/block-selection'

export const BlockSelectionKit = [
  BlockSelectionPlugin.configure(({ editor }) => ({
    options: {
      enableContextMenu: true,
      isSelectable: (element) => {
        return !getPluginTypes(editor, [
          KEYS.column,
          KEYS.codeLine,
          KEYS.td,
        ]).includes(element.type)
      },
    },
    render: {
      belowRootNodes: (props) => {
        if (!props.attributes.className?.includes('slate-selectable'))
          return null

        // TODO: tighten typings once @platejs typings expose the correct prop interface
        return (
          <BlockSelection {...(props as unknown as Record<string, unknown>)} />
        )
      },
    },
  })),
]
