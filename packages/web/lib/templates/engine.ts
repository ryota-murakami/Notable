/**
 * Template Engine for Notable
 * Provides Handlebars-like template processing with variable interpolation,
 * conditional rendering, loops, and system variables
 */

export interface TemplateVariable {
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

export interface TemplateContext {
  // User-provided variables
  [key: string]: any

  // System variables (automatically provided)
  date?: string
  time?: string
  datetime?: string
  user?: string
  userEmail?: string
  uuid?: string
  counter?: number
}

export interface ProcessTemplateOptions {
  content: string
  variables: TemplateVariable[]
  context: TemplateContext
  dateFormat?: string
  timeFormat?: string
}

export class TemplateEngine {
  private static counter = 0

  /**
   * Process a template with the given context
   */
  static processTemplate(options: ProcessTemplateOptions): string {
    const {
      content,
      variables,
      context,
      dateFormat = 'YYYY-MM-DD',
      timeFormat = 'HH:mm',
    } = options

    // Create enhanced context with system variables
    const enhancedContext = this.createEnhancedContext(
      context,
      dateFormat,
      timeFormat
    )

    let processedContent = content

    // Process handlebars-style variables {{variable}}
    processedContent = this.processVariables(
      processedContent,
      enhancedContext,
      variables
    )

    // Process conditional blocks {{#if condition}}...{{/if}}
    processedContent = this.processConditionals(
      processedContent,
      enhancedContext
    )

    // Process loops {{#each items}}...{{/each}}
    processedContent = this.processLoops(processedContent, enhancedContext)

    // Process helper functions {{helper param}}
    processedContent = this.processHelpers(processedContent, enhancedContext)

    return processedContent.trim()
  }

  /**
   * Create enhanced context with system variables
   */
  private static createEnhancedContext(
    context: TemplateContext,
    dateFormat: string,
    timeFormat: string
  ): TemplateContext {
    const now = new Date()

    return {
      ...context,
      // System variables
      date: context.date || this.formatDate(now, dateFormat),
      time: context.time || this.formatTime(now, timeFormat),
      datetime: context.datetime || now.toISOString(),
      uuid: context.uuid || this.generateUUID(),
      counter: context.counter !== undefined ? context.counter : ++this.counter,

      // Date helpers
      today: this.formatDate(now, dateFormat),
      now: this.formatTime(now, timeFormat),
      timestamp: now.toISOString(),

      // Common date formats
      dateShort: this.formatDate(now, 'MM/DD/YYYY'),
      dateLong: this.formatDate(now, 'MMMM DD, YYYY'),
      dateISO: this.formatDate(now, 'YYYY-MM-DD'),

      // Day/week helpers
      dayOfWeek: now.toLocaleDateString('en-US', { weekday: 'long' }),
      weekOf: this.getWeekOf(now),
      monthOf: now.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      }),

      // Utility functions available in templates
      formatDate: (date: string | Date, format: string) =>
        this.formatDate(new Date(date), format),
      formatTime: (time: string | Date, format: string) =>
        this.formatTime(new Date(time), format),
      generateId: () => this.generateUUID(),

      // Template metadata
      templateProcessedAt: now.toISOString(),
    }
  }

  /**
   * Process variable interpolation {{variable}}
   */
  private static processVariables(
    content: string,
    context: TemplateContext,
    variables: TemplateVariable[]
  ): string {
    // Create variable lookup map for validation and type conversion
    const variableMap = new Map(variables.map((v) => [v.name, v]))

    return content.replace(/\{\{([^}]+)\}\}/g, (match, variableName) => {
      const trimmedName = variableName.trim()

      // Check for property access (e.g., user.name)
      const parts = trimmedName.split('.')
      const baseName = parts[0]

      let value = context[baseName]

      // Handle nested property access
      if (parts.length > 1 && value && typeof value === 'object') {
        for (let i = 1; i < parts.length; i++) {
          value = value[parts[i]]
        }
      }

      // If no value found, try the full property path
      if (value === undefined) {
        value = context[trimmedName]
      }

      // Apply variable-specific formatting and validation
      const variableConfig =
        variableMap.get(baseName) || variableMap.get(trimmedName)
      if (variableConfig && value !== undefined) {
        value = this.formatVariableValue(value, variableConfig)
      }

      // Return processed value or empty string if undefined
      return value !== undefined ? String(value) : ''
    })
  }

  /**
   * Process conditional blocks {{#if condition}}...{{/if}}
   */
  private static processConditionals(
    content: string,
    context: TemplateContext
  ): string {
    const conditionalPattern = /\{\{#if\s+([^}]+)\}\}([\s\S]*?)\{\{\/if\}\}/g

    return content.replace(
      conditionalPattern,
      (match, condition, blockContent) => {
        const shouldRender = this.evaluateCondition(condition.trim(), context)
        return shouldRender ? blockContent : ''
      }
    )
  }

  /**
   * Process loop blocks {{#each items}}...{{/each}}
   */
  private static processLoops(
    content: string,
    context: TemplateContext
  ): string {
    const loopPattern = /\{\{#each\s+([^}]+)\}\}([\s\S]*?)\{\{\/each\}\}/g

    return content.replace(loopPattern, (match, arrayName, blockContent) => {
      const array = context[arrayName.trim()]

      if (!Array.isArray(array)) {
        return ''
      }

      return array
        .map((item, index) => {
          // Create context for each item
          const itemContext = {
            ...context,
            this: item,
            '@index': index,
            '@first': index === 0,
            '@last': index === array.length - 1,
            '@length': array.length,
          }

          // Process the block content with item context
          return this.processVariables(blockContent, itemContext, [])
        })
        .join('')
    })
  }

  /**
   * Process helper functions {{helper param}}
   */
  private static processHelpers(
    content: string,
    context: TemplateContext
  ): string {
    const helperPattern = /\{\{(\w+)\s+([^}]+)\}\}/g

    return content.replace(helperPattern, (match, helperName, params) => {
      const args = params.split(/\s+/).map((arg: string) => {
        // Remove quotes if present
        if (
          (arg.startsWith('"') && arg.endsWith('"')) ||
          (arg.startsWith("'") && arg.endsWith("'"))
        ) {
          return arg.slice(1, -1)
        }
        // Try to resolve as variable
        return context[arg] !== undefined ? context[arg] : arg
      })

      return this.executeHelper(helperName, args, context)
    })
  }

  /**
   * Execute helper functions
   */
  private static executeHelper(
    helperName: string,
    args: any[],
    context: TemplateContext
  ): string {
    switch (helperName) {
      case 'capitalize':
        return (
          String(args[0] || '')
            .charAt(0)
            .toUpperCase() +
          String(args[0] || '')
            .slice(1)
            .toLowerCase()
        )

      case 'uppercase':
        return String(args[0] || '').toUpperCase()

      case 'lowercase':
        return String(args[0] || '').toLowerCase()

      case 'truncate':
        const text = String(args[0] || '')
        const length = parseInt(args[1]) || 100
        return text.length > length ? `${text.substring(0, length)}...` : text

      case 'repeat':
        return String(args[0] || '').repeat(parseInt(args[1]) || 1)

      case 'replace':
        return String(args[0] || '').replace(
          new RegExp(args[1], 'g'),
          args[2] || ''
        )

      case 'dateAdd':
        const date = new Date(args[0])
        const days = parseInt(args[1]) || 0
        date.setDate(date.getDate() + days)
        return this.formatDate(date, 'YYYY-MM-DD')

      case 'dateFormat':
        return this.formatDate(new Date(args[0]), args[1] || 'YYYY-MM-DD')

      case 'join':
        return Array.isArray(args[0]) ? args[0].join(args[1] || ', ') : ''

      case 'default':
        return args[0] || args[1] || ''

      case 'math':
        const operation = args[0]
        const a = parseFloat(args[1]) || 0
        const b = parseFloat(args[2]) || 0
        switch (operation) {
          case 'add':
            return String(a + b)
          case 'subtract':
            return String(a - b)
          case 'multiply':
            return String(a * b)
          case 'divide':
            return String(b !== 0 ? a / b : 0)
          default:
            return String(a)
        }

      default:
        console.warn(`Unknown template helper: ${helperName}`)
        return ''
    }
  }

  /**
   * Evaluate conditional expressions
   */
  private static evaluateCondition(
    condition: string,
    context: TemplateContext
  ): boolean {
    // Simple condition evaluation
    // Supports: variable, !variable, variable === value, variable !== value

    if (condition.startsWith('!')) {
      const variable = condition.slice(1).trim()
      return !this.isTruthy(context[variable])
    }

    if (condition.includes('===')) {
      const [left, right] = condition.split('===').map((s) => s.trim())
      const leftValue = context[left] !== undefined ? context[left] : left
      const rightValue =
        context[right] !== undefined
          ? context[right]
          : right.replace(/['"]/g, '')
      return leftValue === rightValue
    }

    if (condition.includes('!==')) {
      const [left, right] = condition.split('!==').map((s) => s.trim())
      const leftValue = context[left] !== undefined ? context[left] : left
      const rightValue =
        context[right] !== undefined
          ? context[right]
          : right.replace(/['"]/g, '')
      return leftValue !== rightValue
    }

    // Simple truthiness check
    return this.isTruthy(context[condition])
  }

  /**
   * Check if value is truthy
   */
  private static isTruthy(value: any): boolean {
    if (value === null || value === undefined) return false
    if (typeof value === 'boolean') return value
    if (typeof value === 'number') return value !== 0
    if (typeof value === 'string') return value.trim() !== ''
    if (Array.isArray(value)) return value.length > 0
    if (typeof value === 'object') return Object.keys(value).length > 0
    return Boolean(value)
  }

  /**
   * Format variable value based on its type
   */
  private static formatVariableValue(
    value: any,
    variable: TemplateVariable
  ): any {
    switch (variable.type) {
      case 'date':
        return this.formatDate(new Date(value), 'YYYY-MM-DD')

      case 'time':
        return this.formatTime(new Date(value), 'HH:mm')

      case 'datetime':
        return new Date(value).toISOString()

      case 'number':
        return isNaN(Number(value)) ? value : Number(value)

      case 'boolean':
        return value ? 'Yes' : 'No'

      case 'multi-select':
        return Array.isArray(value) ? value.join(', ') : value

      default:
        return value
    }
  }

  /**
   * Format date with simple pattern support
   */
  private static formatDate(date: Date, format: string): string {
    const replacements: { [key: string]: string } = {
      YYYY: date.getFullYear().toString(),
      YY: date.getFullYear().toString().slice(-2),
      MM: String(date.getMonth() + 1).padStart(2, '0'),
      M: String(date.getMonth() + 1),
      DD: String(date.getDate()).padStart(2, '0'),
      D: String(date.getDate()),
      MMMM: date.toLocaleDateString('en-US', { month: 'long' }),
      MMM: date.toLocaleDateString('en-US', { month: 'short' }),
    }

    let formatted = format
    Object.entries(replacements).forEach(([pattern, replacement]) => {
      formatted = formatted.replace(new RegExp(pattern, 'g'), replacement)
    })

    return formatted
  }

  /**
   * Format time with simple pattern support
   */
  private static formatTime(date: Date, format: string): string {
    const replacements: { [key: string]: string } = {
      HH: String(date.getHours()).padStart(2, '0'),
      H: String(date.getHours()),
      mm: String(date.getMinutes()).padStart(2, '0'),
      m: String(date.getMinutes()),
      ss: String(date.getSeconds()).padStart(2, '0'),
      s: String(date.getSeconds()),
    }

    let formatted = format
    Object.entries(replacements).forEach(([pattern, replacement]) => {
      formatted = formatted.replace(new RegExp(pattern, 'g'), replacement)
    })

    return formatted
  }

  /**
   * Generate UUID
   */
  private static generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0
        const v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
      }
    )
  }

  /**
   * Get week of year
   */
  private static getWeekOf(date: Date): string {
    const start = new Date(date.getFullYear(), 0, 1)
    const days = Math.floor(
      (date.getTime() - start.getTime()) / (24 * 60 * 60 * 1000)
    )
    const weekNumber = Math.ceil((days + start.getDay() + 1) / 7)
    return `Week ${weekNumber} of ${date.getFullYear()}`
  }

  /**
   * Validate template content for syntax errors
   */
  static validateTemplate(content: string): {
    isValid: boolean
    errors: string[]
  } {
    const errors: string[] = []

    // Check for unmatched braces
    const openBraces = (content.match(/\{\{/g) || []).length
    const closeBraces = (content.match(/\}\}/g) || []).length

    if (openBraces !== closeBraces) {
      errors.push('Unmatched template braces')
    }

    // Check for unmatched conditionals
    const ifBlocks = (content.match(/\{\{#if/g) || []).length
    const endIfBlocks = (content.match(/\{\{\/if\}\}/g) || []).length

    if (ifBlocks !== endIfBlocks) {
      errors.push('Unmatched if/endif blocks')
    }

    // Check for unmatched loops
    const eachBlocks = (content.match(/\{\{#each/g) || []).length
    const endEachBlocks = (content.match(/\{\{\/each\}\}/g) || []).length

    if (eachBlocks !== endEachBlocks) {
      errors.push('Unmatched each/endeach blocks')
    }

    return {
      isValid: errors.length === 0,
      errors,
    }
  }

  /**
   * Extract variables used in template
   */
  static extractVariables(content: string): string[] {
    const variables = new Set<string>()
    const matches = content.match(/\{\{([^}]+)\}\}/g) || []

    matches.forEach((match) => {
      const variableName = match.replace(/\{\{|\}\}/g, '').trim()

      // Skip helpers and control structures
      if (
        variableName.startsWith('#') ||
        variableName.startsWith('/') ||
        variableName.includes(' ')
      ) {
        return
      }

      // Handle property access
      const baseName = variableName.split('.')[0]
      variables.add(baseName)
    })

    return Array.from(variables)
  }
}
