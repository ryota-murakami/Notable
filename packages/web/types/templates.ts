/**
 * Shared Template Types for Notable
 */

export interface TemplateVariable {
  id?: string
  templateId?: string
  name: string
  label: string
  description?: string
  type:
    | 'text'
    | 'textarea'
    | 'date'
    | 'time'
    | 'datetime'
    | 'number'
    | 'boolean'
    | 'select'
    | 'multi-select'
    | 'user'
    | 'tag'
    | 'note'
    | 'uuid'
    | 'counter'
  defaultValue?: string
  required?: boolean
  options?: string[]
  validation?: {
    min?: number
    max?: number
    pattern?: string
    maxLength?: number
    minLength?: number
  }
  placeholder?: string
  helpText?: string
  displayOrder?: number
}

export interface Template {
  id: string
  name: string
  description: string
  category: string
  categoryName?: string
  categoryIcon?: string
  categoryColor?: string
  content?: string | { content: string } | any
  thumbnail?: string
  isPublic: boolean
  isSystem: boolean
  version?: number
  createdBy?: string
  createdAt: string
  updatedAt: string
  usageCount: number
  rating: number
  ratingCount: number
  variableCount: number
  variables?: TemplateVariable[]
  tags?: string[]
}

export interface TemplateCategory {
  id: string
  name: string
  description?: string
  icon?: string
  color?: string
  displayOrder: number
  isSystem: boolean
  templateCount: number
}

export interface CreateTemplateData {
  name: string
  description?: string
  category: string
  content: any
  thumbnail?: string
  isPublic?: boolean
  variables?: Omit<TemplateVariable, 'id' | 'templateId'>[]
}

export interface UpdateTemplateData extends Partial<CreateTemplateData> {
  id: string
}
