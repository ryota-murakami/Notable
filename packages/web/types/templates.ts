export interface TemplateVariable {
  name: string
  label: string
  type: 'text' | 'date' | 'select' | 'textarea'
  required: boolean
  options?: string[]
  placeholder?: string
  defaultValue?: string
  helpText?: string
}

export interface Template {
  id: string
  name: string
  description: string
  category: string
  categoryName: string
  categoryIcon: string
  tags?: string[]
  content: string
  variables?: TemplateVariable[]
  isPublic: boolean
  isSystem: boolean
  usageCount: number
  rating: number
  ratingCount: number
  variableCount: number
  createdAt: string
  updatedAt: string
  thumbnail?: string
}

export interface TemplateCategory {
  id: string
  name: string
  icon: string
  description: string
  displayOrder: number
  templateCount: number
  isSystem: boolean
  createdAt: string
}

export interface TemplateUsageStats {
  templateId: string
  usageCount: number
  averageRating: number
  totalRatings: number
  lastUsed: string
}

export interface TemplateCreateRequest {
  name: string
  description?: string
  category: string
  content: string
  variables?: TemplateVariable[]
  isPublic?: boolean
  thumbnail?: string
}

export interface TemplateUpdateRequest {
  name?: string
  description?: string
  category?: string
  content?: string
  variables?: TemplateVariable[]
  isPublic?: boolean
  thumbnail?: string
}

export interface TemplateSearchParams {
  category?: string
  search?: string
  sort?: 'popular' | 'recent' | 'name' | 'usage' | 'rating'
  limit?: number
  offset?: number
  isPublic?: boolean
  isSystem?: boolean
  includeOwn?: boolean
}

export interface TemplateListResponse {
  success: boolean
  data: Template[]
  pagination: {
    total: number
    limit: number
    offset: number
    hasMore: boolean
  }
  meta?: {
    search?: string
    category?: string
    sortBy?: string
  }
}

export interface TemplateResponse {
  success: boolean
  data: Template
}

export interface TemplateCategoriesResponse {
  success: boolean
  data: TemplateCategory[]
}