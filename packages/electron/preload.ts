import { contextBridge, ipcRenderer } from 'electron'
import type { Note } from '../../types/note'

contextBridge.exposeInMainWorld('electronAPI', {
  loadNotes: () => ipcRenderer.invoke('load-notes'),
  saveNotes: (notes: Note[]) => ipcRenderer.invoke('save-notes', notes),
})
