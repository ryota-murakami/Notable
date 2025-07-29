'use client'

// TODO: Fix Plate.js imports - need to update to correct export names
// import {
//   BoldPlugin,
//   CodePlugin,
//   HighlightPlugin,
//   ItalicPlugin,
//   KbdPlugin,
//   StrikethroughPlugin,
//   SubscriptPlugin,
//   SuperscriptPlugin,
//   UnderlinePlugin,
// } from '@platejs/basic-nodes'

import { CodeLeaf } from '@/components/ui/code-node'
import { HighlightLeaf } from '@/components/ui/highlight-node'
import { KbdLeaf } from '@/components/ui/kbd-node'

// TODO: Re-enable mark plugins when imports are fixed
export const BasicMarksKit = [
  // BoldPlugin,
  // ItalicPlugin,
  // UnderlinePlugin,
  // CodePlugin.configure({
  //   node: { component: CodeLeaf },
  //   shortcuts: { toggle: { keys: 'mod+e' } },
  // }),
  // StrikethroughPlugin.configure({
  //   shortcuts: { toggle: { keys: 'mod+shift+x' } },
  // }),
  // SubscriptPlugin.configure({
  //   shortcuts: { toggle: { keys: 'mod+comma' } },
  // }),
  // SuperscriptPlugin.configure({
  //   shortcuts: { toggle: { keys: 'mod+period' } },
  // }),
  // HighlightPlugin.configure({
  //   node: { component: HighlightLeaf },
  //   shortcuts: { toggle: { keys: 'mod+shift+h' } },
  // }),
  // KbdPlugin.withComponent(KbdLeaf),
]
