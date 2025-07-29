'use client'

import { createPlatePlugin } from '@udecode/plate-common'

// Advanced Block Plugins for Notion-like experience

// List Plugins
const BulletedListPlugin = createPlatePlugin({
  key: 'ul',
  node: {
    isElement: true,
    type: 'ul',
  },
})

const NumberedListPlugin = createPlatePlugin({
  key: 'ol',
  node: {
    isElement: true,
    type: 'ol',
  },
})

const ListItemPlugin = createPlatePlugin({
  key: 'li',
  node: {
    isElement: true,
    type: 'li',
  },
})

// Code Block Plugin
const CodeBlockPlugin = createPlatePlugin({
  key: 'code_block',
  node: {
    isElement: true,
    type: 'code_block',
  },
})

// Todo Plugin (Checkbox List)
const TodoPlugin = createPlatePlugin({
  key: 'action_item',
  node: {
    isElement: true,
    type: 'action_item',
  },
})

// Toggle Plugin (Collapsible Block)
const TogglePlugin = createPlatePlugin({
  key: 'toggle',
  node: {
    isElement: true,
    type: 'toggle',
  },
})

// Callout Plugin (Info Box)
const CalloutPlugin = createPlatePlugin({
  key: 'callout',
  node: {
    isElement: true,
    type: 'callout',
  },
})

// Table Plugins
const TablePlugin = createPlatePlugin({
  key: 'table',
  node: {
    isElement: true,
    type: 'table',
  },
})

const TableRowPlugin = createPlatePlugin({
  key: 'tr',
  node: {
    isElement: true,
    type: 'tr',
  },
})

const TableCellPlugin = createPlatePlugin({
  key: 'td',
  node: {
    isElement: true,
    type: 'td',
  },
})

const TableHeaderCellPlugin = createPlatePlugin({
  key: 'th',
  node: {
    isElement: true,
    type: 'th',
  },
})

// Media Plugins
const ImagePlugin = createPlatePlugin({
  key: 'img',
  node: {
    isElement: true,
    type: 'img',
    isVoid: true,
  },
})

const MediaEmbedPlugin = createPlatePlugin({
  key: 'media_embed',
  node: {
    isElement: true,
    type: 'media_embed',
    isVoid: true,
  },
})

// Divider Plugin
const DividerPlugin = createPlatePlugin({
  key: 'thematic_break',
  node: {
    isElement: true,
    type: 'thematic_break',
    isVoid: true,
  },
})

export const AdvancedBlocksKit = [
  // Lists
  BulletedListPlugin,
  NumberedListPlugin,
  ListItemPlugin,

  // Code
  CodeBlockPlugin,

  // Interactive Blocks
  TodoPlugin,
  TogglePlugin,
  CalloutPlugin,

  // Tables
  TablePlugin,
  TableRowPlugin,
  TableCellPlugin,
  TableHeaderCellPlugin,

  // Media
  ImagePlugin,
  MediaEmbedPlugin,

  // Layout
  DividerPlugin,
]
