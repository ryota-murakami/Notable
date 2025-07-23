// Core data types matching Prisma schema
export interface User {
  id: string
  email: string
  name?: string | null
  image?: string | null
  emailVerified?: Date | null
  subscription?: UserSubscription | null
  createdAt: Date
  updatedAt: Date
}

export interface Note {
  id: string
  title: string
  content: any // Plate.js content (JSON)
  contentText?: string | null // Plain text for search
  userId: string
  folderId?: string | null
  isArchived: boolean
  isDeleted: boolean
  isFavorite: boolean
  viewCount: number
  wordCount: number
  tags?: Tag[]
  folder?: Folder | null
  permissions?: NotePermission[]
  createdAt: Date
  updatedAt: Date
}

export interface Folder {
  id: string
  name: string
  userId: string
  parentId?: string | null
  color?: string | null
  icon?: string | null
  order: number
  parent?: Folder | null
  children?: Folder[]
  notes?: Note[]
  createdAt: Date
  updatedAt: Date
}

export interface Tag {
  id: string
  name: string
  color: string
  userId: string
  noteCount?: number
  createdAt: Date
  updatedAt: Date
}

export interface NotePermission {
  id: string
  noteId: string
  email: string
  permission: 'read' | 'write' | 'admin'
  createdAt: Date
  updatedAt: Date
}

// Subscription and billing types
export interface UserSubscription {
  id: string
  userId: string
  stripeCustomerId: string
  stripeSubscriptionId?: string | null
  stripePriceId?: string | null
  plan: SubscriptionPlan
  status: SubscriptionStatus
  currentPeriodStart?: Date | null
  currentPeriodEnd?: Date | null
  cancelAtPeriodEnd: boolean
  canceledAt?: Date | null
  trialStart?: Date | null
  trialEnd?: Date | null
  createdAt: Date
  updatedAt: Date
}

export type SubscriptionPlan = 'free' | 'premium'

export type SubscriptionStatus =
  | 'active'
  | 'trialing'
  | 'past_due'
  | 'canceled'
  | 'unpaid'
  | 'incomplete'

export interface SubscriptionUsage {
  id: string
  userId: string
  storageUsed: number // bytes
  deviceCount: number
  noteCount: number
  exportCount: number
  lastUpdated: Date
}

export interface BillingInvoice {
  id: string
  userId: string
  stripeInvoiceId: string
  amount: number
  currency: string
  status: 'draft' | 'open' | 'paid' | 'uncollectible' | 'void'
  hostedInvoiceUrl?: string | null
  invoicePdf?: string | null
  periodStart: Date
  periodEnd: Date
  createdAt: Date
}

export interface PaymentMethod {
  id: string
  userId: string
  stripePaymentMethodId: string
  type: 'card' | 'bank_account' | 'sepa_debit'
  last4?: string | null
  brand?: string | null
  expiryMonth?: number | null
  expiryYear?: number | null
  isDefault: boolean
  createdAt: Date
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}

// Search types
export interface SearchFilter {
  query: string
  tags?: string[]
  folderId?: string | null
  dateFrom?: Date
  dateTo?: Date
  isArchived?: boolean
  isFavorite?: boolean
}

export interface SearchResult {
  note: Note
  highlights: string[]
  score: number
}

// Export types
export interface ExportOptions {
  format: 'markdown' | 'pdf' | 'html' | 'react'
  includeMetadata?: boolean
  includeImages?: boolean
  theme?: 'light' | 'dark'
  customCSS?: string
}

// Sync types
export interface SyncOperation {
  id: string
  type: 'create' | 'update' | 'delete'
  entity: 'note' | 'folder' | 'tag'
  entityId: string
  data?: any
  timestamp: Date
  userId: string
}

// WebSocket event types
export interface SocketEvents {
  'join-document': (documentId: string) => void
  'leave-document': (documentId: string) => void
  'send-changes': (documentId: string, delta: any) => void
  'receive-changes': (delta: any) => void
  'presence-update': (presence: UserPresence) => void
  'cursor-update': (cursor: CursorPosition) => void
}

export interface UserPresence {
  userId: string
  userName: string
  userImage?: string
  color: string
  isActive: boolean
  lastSeen: Date
}

export interface CursorPosition {
  userId: string
  selection: any // Slate selection object
}

// Form types
export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface CreateNoteForm {
  title: string
  folderId?: string | null
  tags?: string[]
}

export interface CreateFolderForm {
  name: string
  parentId?: string | null
  color?: string
  icon?: string
}

// Settings types
export interface UserSettings {
  theme: 'light' | 'dark' | 'system'
  fontSize: 'small' | 'medium' | 'large'
  fontFamily: string
  editorWidth: 'narrow' | 'medium' | 'wide' | 'full'
  autoSave: boolean
  autoSaveInterval: number // seconds
  spellCheck: boolean
  showWordCount: boolean
  showOutline: boolean
  keyboardShortcuts: Record<string, string>
}

// Subscription form types
export interface CreatePaymentMethodForm {
  paymentMethodId: string
  setAsDefault?: boolean
}

export interface UpdateSubscriptionForm {
  priceId: string
}

// Feature restriction constants
export interface PlanLimits {
  storageLimit: number // bytes
  deviceLimit: number
  exportFormats: ExportFormat[]
  collaborationEnabled: boolean
  prioritySupport: boolean
  customThemes: boolean
}

export type ExportFormat = 'markdown' | 'pdf' | 'html' | 'react'

export const PLAN_LIMITS: Record<SubscriptionPlan, PlanLimits> = {
  free: {
    storageLimit: 500 * 1024 * 1024, // 500MB
    deviceLimit: 2,
    exportFormats: ['markdown', 'html'],
    collaborationEnabled: false,
    prioritySupport: false,
    customThemes: false,
  },
  premium: {
    storageLimit: -1, // unlimited
    deviceLimit: -1, // unlimited
    exportFormats: ['markdown', 'pdf', 'html', 'react'],
    collaborationEnabled: true,
    prioritySupport: true,
    customThemes: true,
  },
}
