import { Note as SyncNote } from '@notable/sync'

export interface Note extends SyncNote {
  userId: string
  tags?: string[]
  isHidden?: boolean
}
