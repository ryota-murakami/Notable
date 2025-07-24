'use client'

// Import all the installed Plate kits
import { BasicMarksKit as ImportedBasicMarksKit } from './plugins/basic-marks-kit'
import { BasicBlocksKit } from './plugins/basic-blocks-kit'
import { LinkKit } from './plugins/link-kit'
import { ListKit } from './plugins/list-kit'
import { IndentKit } from './plugins/indent-kit'
import { AIKit } from './plugins/ai-kit'
import { CommentKit } from './plugins/comment-kit'
import { SuggestionKit } from './plugins/suggestion-kit'
import { FixedToolbarKit } from './plugins/fixed-toolbar-kit'
import { FloatingToolbarKit } from './plugins/floating-toolbar-kit'
import { CursorOverlayKit } from './plugins/cursor-overlay-kit'
import { MarkdownKit } from './plugins/markdown-kit'

// Comprehensive editor kit with all features
export const BaseEditorKit = [
  ...ImportedBasicMarksKit,
  ...BasicBlocksKit,
  ...LinkKit,
  ...ListKit,
  ...IndentKit,
  ...AIKit,
  ...CommentKit,
  ...SuggestionKit,
  ...FixedToolbarKit,
  ...FloatingToolbarKit,
  ...CursorOverlayKit,
  ...MarkdownKit,
]

export const EditorKit = BaseEditorKit

export const BasicMarksKit = ImportedBasicMarksKit

// Re-export for backwards compatibility
export const commentPlugin = {
  key: 'comment',
}

export const suggestionPlugin = {
  key: 'suggestion',
  pluginKey: 'suggestion',
  api: {
    suggestion: {
      activeId: () => undefined,
      hoverId: () => undefined,
      nodeId: () => undefined,
      node: () => undefined,
      dataList: () => [],
    },
  },
}

// Runtime helpers for suggestion API (kept for backwards compatibility)
export const suggestionHelpers = {
  activeId: () => undefined,
  hoverId: () => undefined,
  nodeId: () => undefined,
  dataList: () => [],
}

export const discussionPlugin = {
  key: 'discussion',
}

export const useChat = () => ({
  messages: [],
  input: '',
  setInput: () => {},
  handleSubmit: () => {},
  isLoading: false,
  status: 'idle' as 'idle' | 'streaming' | 'submitted',
  error: null,
  append: () => Promise.resolve(''),
  reload: () => Promise.resolve(''),
  stop: () => {},
  data: undefined,
  _abortFakeStream: () => {},
})

export const getBlockType = (_node?: any) => 'p'
export const setBlockType = (_editor: any, _type: string) => {}
export const insertNodes = () => {}
export const insertLink = () => {}
export const insertImage = () => {}
export const insertBlock = (_editor: any, _value: string) => {}
export const insertInlineElement = (_editor: any, _value: string) => {}

// Placeholder types
export type TSuggestionData = {
  id: string
  createdAt: string
  type: string
  userId: string
  isLineBreak?: boolean
}

export type TDiscussionData = {
  id: string
  users: any[]
  createdAt: Date | string
}

export type SuggestionConfig = {
  id: string
  type: string
}

export type TDiscussion = {
  id: string
  users?: any[]
  createdAt: Date | string
  comments?: any[]
  documentContent?: string
  isResolved?: boolean
}

export const Editor = ({ children, ...props }: any) => (
  <div {...props}>{children}</div>
)
export const EditorContainer = ({ children, ...props }: any) => (
  <div {...props}>{children}</div>
)
export const EditorStatic = ({ children, ...props }: any) => (
  <div {...props}>{children}</div>
)
