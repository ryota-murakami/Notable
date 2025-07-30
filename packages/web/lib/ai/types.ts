/**
 * AI Service Types and Interfaces
 * Comprehensive types for Premium AI features
 */

export interface AIProvider {
  name: string
  apiKey: string
  baseUrl?: string
  model: string
  maxTokens?: number
  temperature?: number
}

export interface AIRequest {
  userId: string
  type: AIRequestType
  input: string
  context?: Record<string, any>
  options?: AIRequestOptions
}

export interface AIResponse {
  id: string
  type: AIRequestType
  content: string
  metadata?: Record<string, any>
  usage?: {
    inputTokens: number
    outputTokens: number
    totalTokens: number
    cost?: number
  }
  createdAt: Date
}

export enum AIRequestType {
  SEARCH_ENHANCEMENT = 'search_enhancement',
  CONTENT_GENERATION = 'content_generation',
  NOTE_ASSISTANT = 'note_assistant',
  SMART_SUMMARY = 'smart_summary',
  AUTO_COMPLETION = 'auto_completion',
  CONTENT_ANALYSIS = 'content_analysis',
  TAG_SUGGESTION = 'tag_suggestion',
  RELATIONSHIP_DISCOVERY = 'relationship_discovery',
  WRITING_IMPROVEMENT = 'writing_improvement',
  OUTLINE_GENERATION = 'outline_generation',
}

export interface AIRequestOptions {
  maxTokens?: number
  temperature?: number
  model?: string
  contextLimit?: number
  includeHistory?: boolean
  responseFormat?: 'text' | 'json' | 'markdown'
}

export interface SmartSearchRequest extends AIRequest {
  type: AIRequestType.SEARCH_ENHANCEMENT
  input: string // Original search query
  context: {
    searchResults: any[]
    userPreferences?: Record<string, any>
    recentNotes?: any[]
  }
}

export interface ContentGenerationRequest extends AIRequest {
  type: AIRequestType.CONTENT_GENERATION
  input: string // User prompt/idea
  context: {
    noteContext?: string
    linkedNotes?: any[]
    tags?: string[]
    format?: 'paragraph' | 'bullet_points' | 'outline' | 'table'
  }
}

export interface NoteAssistantRequest extends AIRequest {
  type: AIRequestType.NOTE_ASSISTANT
  input: string // Current note content or selection
  context: {
    noteId: string
    action: 'improve' | 'expand' | 'summarize' | 'rewrite' | 'complete'
    relatedNotes?: any[]
    userStyle?: 'formal' | 'casual' | 'academic' | 'creative'
  }
}

export interface AIUsageStats {
  userId: string
  date: Date
  requestCount: number
  tokenUsage: number
  costUsage: number
  requestsByType: Record<AIRequestType, number>
  planLimits: {
    maxRequests: number
    maxTokens: number
  }
}

export interface AIFeatureConfig {
  enabled: boolean
  requiresPremium: boolean
  rateLimit: {
    requests: number
    window: number // in seconds
  }
  models: {
    primary: string
    fallback?: string
  }
  prompts: Record<string, string>
}

// AI-enhanced search types
export interface SemanticSearchResult {
  noteId: string
  title: string
  content: string
  similarity: number
  reasoning?: string
  relatedConcepts?: string[]
}

export interface SmartSearchResponse {
  originalQuery: string
  enhancedQuery: string
  semanticResults: SemanticSearchResult[]
  suggestions: string[]
  insights?: string
}

// Content generation types
export interface GeneratedContent {
  content: string
  type: 'paragraph' | 'outline' | 'bullet_points' | 'table'
  confidence: number
  suggestions?: string[]
  sourceReferences?: string[]
}

// Note assistant types
export interface AssistantSuggestion {
  id: string
  type: 'completion' | 'improvement' | 'expansion' | 'summary'
  content: string
  confidence: number
  reasoning?: string
  position?: {
    start: number
    end: number
  }
}

export interface AssistantResponse {
  suggestions: AssistantSuggestion[]
  analysis: {
    readabilityScore?: number
    keyTopics?: string[]
    suggestedTags?: string[]
    relatedNotes?: string[]
  }
}

// Error types
export class AIServiceError extends Error {
  constructor(
    message: string,
    public code: string,
    public retryable: boolean = false
  ) {
    super(message)
    this.name = 'AIServiceError'
  }
}

export class AIRateLimitError extends AIServiceError {
  constructor(resetTime?: Date) {
    super('AI request rate limit exceeded', 'RATE_LIMIT_EXCEEDED', false)
    this.resetTime = resetTime
  }
  resetTime?: Date
}

export class AIQuotaExceededError extends AIServiceError {
  constructor() {
    super('AI usage quota exceeded for current plan', 'QUOTA_EXCEEDED', false)
  }
}
