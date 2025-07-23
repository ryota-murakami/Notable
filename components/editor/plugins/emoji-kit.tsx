'use client'

import emojiMartData from '@emoji-mart/data'
import { EmojiInputPlugin, EmojiPlugin } from '@platejs/emoji/react'
import type { EmojiMartData } from '@emoji-mart/data'

import { EmojiInputElement } from '@/components/ui/emoji-node'

export const EmojiKit = [
  EmojiPlugin.configure({
    options: { data: emojiMartData as EmojiMartData },
  }),
  EmojiInputPlugin.withComponent(EmojiInputElement),
]
