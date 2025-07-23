'use client'

import emojiMartData from '@emoji-mart/data'
import { EmojiInputPlugin, EmojiPlugin } from '@platejs/emoji/react'

import { EmojiInputElement } from '@/components/ui/emoji-node'

export const EmojiKit = [
  EmojiPlugin.configure({
    options: {
      data: emojiMartData as unknown as import('@emoji-mart/data').EmojiMartData,
    },
  }),
  EmojiInputPlugin.withComponent(EmojiInputElement),
]
