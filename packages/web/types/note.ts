export interface Note {
  id: string
  title: string
  content: string
  userId: string
  createdAt: string
  updatedAt: string
  parentId?: string | null
  tags?: string[]
  isFolder?: boolean
  isHidden?: boolean
}
