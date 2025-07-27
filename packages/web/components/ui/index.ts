// Notable UI Components - Core Interface Elements

// Sidebar components
export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
  SidebarGroup,
  SidebarToggle,
  NotableSidebar,
  type SidebarItemProps,
} from './sidebar'

// Command palette components
export {
  CommandPalette,
  NotableCommandPalette,
  SearchCommandPalette,
  useCommandPalette,
  type CommandAction,
} from './command-palette'

// Toolbar components
export {
  Toolbar,
  EditorToolbar,
  ContextToolbar,
  type ToolbarAction,
} from './toolbar'

// Editor canvas components
export {
  EditorCanvas,
  NotableEditorCanvas,
  EditorStatusBar,
  EditorTitle,
  EditorFAB,
} from './editor-canvas'

// Settings panel components
export {
  SettingsPanel,
  GeneralSettings,
  ThemeSettings,
  KeyboardSettings,
  NotificationSettings,
  NotableSettingsPanel,
  type SettingsSection,
} from './settings-panel'

// Loading components
export { Spinner } from './spinner'
