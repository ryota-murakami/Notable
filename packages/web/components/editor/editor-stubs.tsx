'use client'

// Stub implementations for missing editor components
export const BaseEditorKit = []

export const EditorKit = []

export const BasicMarksKit = []

export const commentPlugin = {
  key: 'comment',
}

export const suggestionPlugin = {
  key: 'suggestion',
  pluginKey: 'suggestion',
}

// Runtime helpers for suggestion API
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
