export interface Folder {
  id: string
  name: string
  user_id: string
  parent_id: string | null
  created_at: string
  updated_at: string
  // Computed fields
  path?: string[]
  children?: Folder[]
  note_count?: number
}

export interface CreateFolderInput {
  name: string
  parent_id?: string | null
}

export interface UpdateFolderInput {
  name?: string
  parent_id?: string | null
}

export interface MoveToFolderInput {
  note_ids: string[]
  folder_id: string | null
}

export interface FolderTreeNode extends Folder {
  children: FolderTreeNode[]
  level: number
  expanded?: boolean
}
