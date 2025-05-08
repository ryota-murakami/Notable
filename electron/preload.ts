import { contextBridge, ipcRenderer } from "electron"

contextBridge.exposeInMainWorld("electronAPI", {
  loadNotes: () => ipcRenderer.invoke("load-notes"),
  saveNotes: (notes) => ipcRenderer.invoke("save-notes", notes),
})
