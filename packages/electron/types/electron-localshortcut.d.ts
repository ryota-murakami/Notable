declare module 'electron-localshortcut' {
  import { type BrowserWindow } from 'electron'

  export function register(
    window: BrowserWindow,
    accelerator: string,
    callback: () => void
  ): void

  export function unregister(window: BrowserWindow, accelerator: string): void

  export function unregisterAll(window: BrowserWindow): void
}
