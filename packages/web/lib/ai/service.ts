/**
 * AI Service Framework
 * Handles all AI provider integrations and request routing
 */

import {
  type AIProvider,
  AIQuotaExceededError,
  AIRateLimitError,
  type AIRequest,
  AIRequestType,
  type AIResponse,
  AIServiceError,
  type ContentGenerationRequest,
  type NoteAssistantRequest,
  type SmartSearchRequest,
} from './types'
import { createClient } from '@/utils/supabase/server'
import { SUBSCRIPTION_PLANS, type SubscriptionPlan } from '@/lib/stripe'

export class AIService {
  private providers: Map<string, AIProvider> = new Map()
  private defaultProvider: string = 'openai'

  constructor() {
    this.initializeProviders()
  }

  private initializeProviders() {
    // OpenAI Provider
    if (process.env.OPENAI_API_KEY) {
      this.providers.set('openai', {
        name: 'OpenAI',
        apiKey: process.env.OPENAI_API_KEY,
        baseUrl: 'https://api.openai.com/v1',
        model: 'gpt-4-turbo-preview',
        maxTokens: 4000,
        temperature: 0.7,
      })
    }

    // Anthropic Claude Provider
    if (process.env.ANTHROPIC_API_KEY) {
      this.providers.set('anthropic', {
        name: 'Anthropic',
        apiKey: process.env.ANTHROPIC_API_KEY,
        baseUrl: 'https://api.anthropic.com/v1',
        model: 'claude-3-sonnet-20240229',
        maxTokens: 4000,
        temperature: 0.7,
      })
    }

    // Fallback to OpenAI if available, otherwise Anthropic
    if (this.providers.has('openai')) {
      this.defaultProvider = 'openai'
    } else if (this.providers.has('anthropic')) {
      this.defaultProvider = 'anthropic'
    }
  }

  /**
   * Main entry point for AI requests
   */
  async processRequest(request: AIRequest): Promise<AIResponse> {
    // Check user permissions and usage limits
    await this.checkPermissions(request.userId, request.type)

    // Route request to appropriate handler
    switch (request.type) {
      case AIRequestType.SEARCH_ENHANCEMENT:
        return this.handleSmartSearch(request as SmartSearchRequest)
      case AIRequestType.CONTENT_GENERATION:
        return this.handleContentGeneration(request as ContentGenerationRequest)
      case AIRequestType.NOTE_ASSISTANT:
        return this.handleNoteAssistant(request as NoteAssistantRequest)
      default:
        return this.handleGenericRequest(request)
    }
  }

  /**
   * Enhanced semantic search with AI understanding
   */
  async handleSmartSearch(request: SmartSearchRequest): Promise<AIResponse> {
    const provider = this.getProvider()

    const prompt = `
You are an intelligent search assistant for a note-taking application. 
Your goal is to enhance search queries to find the most relevant notes.

Original Query: "${request.input}"
Search Results: ${JSON.stringify(request.context.searchResults?.slice(0, 5))}

Tasks:
1. Enhance the search query with synonyms and related concepts
2. Identify key themes and concepts in the existing results
3. Suggest 3-5 alternative search queries
4. Provide insights about what the user might be looking for

Respond in JSON format:
{
  "enhancedQuery": "improved search query with synonyms",
  "keyThemes": ["theme1", "theme2"],
  "suggestions": ["alternative query 1", "alternative query 2"],
  "insights": "Brief insight about user intent and content patterns"
}
`

    const response = await this.makeAPICall(provider, prompt, {
      maxTokens: 1000,
      temperature: 0.3,
      responseFormat: 'json',
    })

    // Track usage
    await this.trackUsage(request.userId, request.type, response.usage!)

    return {
      id: `ai_${Date.now()}`,
      type: request.type,
      content: response.content,
      metadata: {
        enhancedSearch: true,
        originalQuery: request.input,
      },
      usage: response.usage,
      createdAt: new Date(),
    }
  }

  /**
   * AI-powered content generation
   */
  async handleContentGeneration(
    request: ContentGenerationRequest
  ): Promise<AIResponse> {
    const provider = this.getProvider()
    const { format = 'paragraph' } = request.context

    const prompt = `
You are a creative writing assistant helping users generate high-quality content.

User Request: "${request.input}"
Context: ${request.context.noteContext ? `Current note: ${request.context.noteContext.substring(0, 500)}` : 'New note'}
Related Tags: ${request.context.tags?.join(', ') || 'None'}
Format: ${format}

Generate content that is:
- Relevant to the user's request and context
- Well-structured and engaging
- Appropriate for a note-taking application
- Professional but accessible

Format the response as requested (${format}) and include:
1. The main content
2. 2-3 suggested follow-up topics
3. Recommended tags for this content

Respond in JSON format:
{
  "content": "generated content here",
  "followUpTopics": ["topic1", "topic2"],
  "suggestedTags": ["tag1", "tag2", "tag3"],
  "confidence": 0.85
}
`

    const response = await this.makeAPICall(provider, prompt, {
      maxTokens: 2000,
      temperature: 0.8,
      responseFormat: 'json',
    })

    await this.trackUsage(request.userId, request.type, response.usage!)

    return {
      id: `ai_${Date.now()}`,
      type: request.type,
      content: response.content,
      metadata: {
        format,
        userPrompt: request.input,
      },
      usage: response.usage,
      createdAt: new Date(),
    }
  }

  /**
   * Intelligent note assistant
   */
  async handleNoteAssistant(
    request: NoteAssistantRequest
  ): Promise<AIResponse> {
    const provider = this.getProvider()
    const { action, userStyle = 'casual' } = request.context

    const actionPrompts = {
      improve:
        'Improve the clarity, structure, and readability of this content',
      expand: 'Expand on the ideas with additional detail and examples',
      summarize: 'Create a concise summary highlighting key points',
      rewrite: 'Rewrite in a different style while preserving meaning',
      complete: 'Complete the thought or continue the writing naturally',
    }

    const prompt = `
You are an intelligent note-taking assistant helping users ${actionPrompts[action]}.

Content to work with: "${request.input}"
Writing Style: ${userStyle}
Related Notes: ${request.context.relatedNotes?.length || 0} notes available

Provide:
1. The improved/expanded/summarized content
2. Specific suggestions for further improvement
3. Recommended connections to other concepts
4. Confidence score (0-1)

Respond in JSON format:
{
  "improvedContent": "the enhanced content",
  "suggestions": ["suggestion1", "suggestion2"],
  "connections": ["concept1", "concept2"],
  "confidence": 0.9,
  "reasoning": "Brief explanation of changes made"
}
`

    const response = await this.makeAPICall(provider, prompt, {
      maxTokens: 1500,
      temperature: 0.6,
      responseFormat: 'json',
    })

    await this.trackUsage(request.userId, request.type, response.usage!)

    return {
      id: `ai_${Date.now()}`,
      type: request.type,
      content: response.content,
      metadata: {
        action,
        userStyle,
        originalLength: request.input.length,
      },
      usage: response.usage,
      createdAt: new Date(),
    }
  }

  /**
   * Generic request handler for other AI features
   */
  async handleGenericRequest(request: AIRequest): Promise<AIResponse> {
    const provider = this.getProvider()

    const response = await this.makeAPICall(
      provider,
      request.input,
      request.options
    )
    await this.trackUsage(request.userId, request.type, response.usage!)

    return {
      id: `ai_${Date.now()}`,
      type: request.type,
      content: response.content,
      usage: response.usage,
      createdAt: new Date(),
    }
  }

  /**
   * Make API call to AI provider
   */
  private async makeAPICall(
    provider: AIProvider,
    prompt: string,
    options?: any
  ): Promise<{ content: string; usage?: any }> {
    try {
      if (provider.name === 'OpenAI') {
        return await this.callOpenAI(provider, prompt, options)
      } else if (provider.name === 'Anthropic') {
        return await this.callAnthropic(provider, prompt, options)
      }

      throw new AIServiceError(
        'No supported AI provider available',
        'NO_PROVIDER'
      )
    } catch (error) {
      if (error instanceof AIServiceError) throw error

      console.error('AI API call failed:', error)
      throw new AIServiceError(
        'AI service temporarily unavailable',
        'API_ERROR',
        true
      )
    }
  }

  /**
   * OpenAI API integration
   */
  private async callOpenAI(
    provider: AIProvider,
    prompt: string,
    options?: any
  ): Promise<{ content: string; usage?: any }> {
    const response = await fetch(`${provider.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${provider.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: options?.model || provider.model,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: options?.maxTokens || provider.maxTokens,
        temperature: options?.temperature || provider.temperature,
        response_format:
          options?.responseFormat === 'json'
            ? { type: 'json_object' }
            : undefined,
      }),
    })

    if (!response.ok) {
      if (response.status === 429) {
        throw new AIRateLimitError()
      }
      throw new AIServiceError(
        `OpenAI API error: ${response.statusText}`,
        'API_ERROR'
      )
    }

    const data = await response.json()

    return {
      content: data.choices[0].message.content,
      usage: {
        inputTokens: data.usage.prompt_tokens,
        outputTokens: data.usage.completion_tokens,
        totalTokens: data.usage.total_tokens,
      },
    }
  }

  /**
   * Anthropic Claude API integration
   */
  private async callAnthropic(
    provider: AIProvider,
    prompt: string,
    options?: any
  ): Promise<{ content: string; usage?: any }> {
    const response = await fetch(`${provider.baseUrl}/messages`, {
      method: 'POST',
      headers: {
        'x-api-key': provider.apiKey,
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: options?.model || provider.model,
        max_tokens: options?.maxTokens || provider.maxTokens,
        temperature: options?.temperature || provider.temperature,
        messages: [{ role: 'user', content: prompt }],
      }),
    })

    if (!response.ok) {
      if (response.status === 429) {
        throw new AIRateLimitError()
      }
      throw new AIServiceError(
        `Anthropic API error: ${response.statusText}`,
        'API_ERROR'
      )
    }

    const data = await response.json()

    return {
      content: data.content[0].text,
      usage: {
        inputTokens: data.usage.input_tokens,
        outputTokens: data.usage.output_tokens,
        totalTokens: data.usage.input_tokens + data.usage.output_tokens,
      },
    }
  }

  /**
   * Check user permissions and usage limits
   */
  private async checkPermissions(
    userId: string,
    requestType: AIRequestType
  ): Promise<void> {
    const supabase = await createClient()

    // Get user's subscription plan
    const { data: profile } = await supabase
      .from('profiles')
      .select('subscription_plan, subscription_status')
      .eq('id', userId)
      .single()

    const plan = (profile?.subscription_plan as SubscriptionPlan) || 'free'
    const planLimits = SUBSCRIPTION_PLANS[plan].limits

    // Check if feature requires premium
    if (this.requiresPremium(requestType) && plan === 'free') {
      throw new AIServiceError(
        'This AI feature requires a Premium subscription',
        'PREMIUM_REQUIRED'
      )
    }

    // Check usage limits
    if (planLimits.aiRequests !== -1) {
      const usage = await this.getCurrentUsage(userId)
      if (usage.requestCount >= planLimits.aiRequests) {
        throw new AIQuotaExceededError()
      }
    }
  }

  /**
   * Track AI usage for billing and limits
   */
  private async trackUsage(
    userId: string,
    requestType: AIRequestType,
    usage: { totalTokens: number }
  ): Promise<void> {
    const supabase = await createClient()

    await supabase.from('ai_usage').insert({
      user_id: userId,
      request_type: requestType,
      tokens_used: usage.totalTokens,
      created_at: new Date().toISOString(),
    })
  }

  /**
   * Get current usage for user
   */
  private async getCurrentUsage(
    userId: string
  ): Promise<{ requestCount: number; tokenUsage: number }> {
    const supabase = await createClient()
    const today = new Date().toISOString().split('T')[0]

    const { data } = await supabase
      .from('ai_usage')
      .select('tokens_used')
      .eq('user_id', userId)
      .gte('created_at', today)

    return {
      requestCount: data?.length || 0,
      tokenUsage:
        data?.reduce((sum, record) => sum + record.tokens_used, 0) || 0,
    }
  }

  /**
   * Check if request type requires premium
   */
  private requiresPremium(requestType: AIRequestType): boolean {
    const freeFeatures = [
      AIRequestType.SEARCH_ENHANCEMENT, // Basic search enhancement for free users
    ]
    return !freeFeatures.includes(requestType)
  }

  /**
   * Get AI provider
   */
  private getProvider(): AIProvider {
    const provider = this.providers.get(this.defaultProvider)
    if (!provider) {
      throw new AIServiceError('No AI provider configured', 'NO_PROVIDER')
    }
    return provider
  }
}

// Singleton instance
export const aiService = new AIService()
