// Search Filters for Date, Tags, Folders, and Content

import { SearchFilterSet, SearchableNote } from './types'

export interface FilterOptions {
  availableTags: string[]
  availableFolders: string[]
  availableAuthors: string[]
  dateRangePresets: DateRangePreset[]
}

export interface DateRangePreset {
  id: string
  label: string
  range: {
    start: Date
    end: Date
  }
}

export class SearchFilters {
  private options: FilterOptions

  constructor(
    options: FilterOptions = {
      availableTags: [],
      availableFolders: [],
      availableAuthors: [],
      dateRangePresets: [],
    }
  ) {
    this.options = options
  }

  // Update available filter options based on notes
  updateFromNotes(notes: SearchableNote[]): void {
    this.options.availableTags = this.extractUniqueTags(notes)
    this.options.availableFolders = this.extractUniqueFolders(notes)
    this.options.availableAuthors = this.extractUniqueAuthors(notes)
  }

  // Get all available tags
  getAvailableTags(): string[] {
    return [...this.options.availableTags].sort()
  }

  // Get all available folders
  getAvailableFolders(): string[] {
    return [...this.options.availableFolders].sort()
  }

  // Get all available authors
  getAvailableAuthors(): string[] {
    return [...this.options.availableAuthors].sort()
  }

  // Get predefined date range presets
  getDateRangePresets(): DateRangePreset[] {
    return [
      {
        id: 'today',
        label: 'Today',
        range: {
          start: this.getStartOfDay(new Date()),
          end: this.getEndOfDay(new Date()),
        },
      },
      {
        id: 'yesterday',
        label: 'Yesterday',
        range: {
          start: this.getStartOfDay(this.subtractDays(new Date(), 1)),
          end: this.getEndOfDay(this.subtractDays(new Date(), 1)),
        },
      },
      {
        id: 'last-7-days',
        label: 'Last 7 days',
        range: {
          start: this.getStartOfDay(this.subtractDays(new Date(), 7)),
          end: this.getEndOfDay(new Date()),
        },
      },
      {
        id: 'last-30-days',
        label: 'Last 30 days',
        range: {
          start: this.getStartOfDay(this.subtractDays(new Date(), 30)),
          end: this.getEndOfDay(new Date()),
        },
      },
      {
        id: 'last-90-days',
        label: 'Last 90 days',
        range: {
          start: this.getStartOfDay(this.subtractDays(new Date(), 90)),
          end: this.getEndOfDay(new Date()),
        },
      },
      {
        id: 'this-month',
        label: 'This month',
        range: {
          start: this.getStartOfMonth(new Date()),
          end: this.getEndOfMonth(new Date()),
        },
      },
      {
        id: 'last-month',
        label: 'Last month',
        range: {
          start: this.getStartOfMonth(this.subtractMonths(new Date(), 1)),
          end: this.getEndOfMonth(this.subtractMonths(new Date(), 1)),
        },
      },
      {
        id: 'this-year',
        label: 'This year',
        range: {
          start: this.getStartOfYear(new Date()),
          end: this.getEndOfYear(new Date()),
        },
      },
      ...this.options.dateRangePresets,
    ]
  }

  // Create empty filter set
  createEmptyFilters(): SearchFilterSet {
    return {}
  }

  // Check if filters are active
  hasActiveFilters(filters: SearchFilterSet): boolean {
    return !!(
      filters.dateRange ||
      (filters.tags && filters.tags.length > 0) ||
      (filters.folders && filters.folders.length > 0) ||
      filters.isFolder !== undefined ||
      filters.hasContent !== undefined ||
      filters.author
    )
  }

  // Get filter summary for display
  getFilterSummary(filters: SearchFilterSet): string[] {
    const summary: string[] = []

    if (filters.dateRange) {
      const start = filters.dateRange.start.toLocaleDateString()
      const end = filters.dateRange.end.toLocaleDateString()
      summary.push(`Date: ${start} - ${end}`)
    }

    if (filters.tags && filters.tags.length > 0) {
      summary.push(`Tags: ${filters.tags.join(', ')}`)
    }

    if (filters.folders && filters.folders.length > 0) {
      summary.push(`Folders: ${filters.folders.join(', ')}`)
    }

    if (filters.isFolder === true) {
      summary.push('Type: Folders only')
    } else if (filters.isFolder === false) {
      summary.push('Type: Notes only')
    }

    if (filters.hasContent === true) {
      summary.push('Content: Has content')
    } else if (filters.hasContent === false) {
      summary.push('Content: Empty notes')
    }

    if (filters.author) {
      summary.push(`Author: ${filters.author}`)
    }

    return summary
  }

  // Clone filters
  cloneFilters(filters: SearchFilterSet): SearchFilterSet {
    return {
      dateRange: filters.dateRange
        ? {
            start: new Date(filters.dateRange.start),
            end: new Date(filters.dateRange.end),
          }
        : undefined,
      tags: filters.tags ? [...filters.tags] : undefined,
      folders: filters.folders ? [...filters.folders] : undefined,
      fileTypes: filters.fileTypes ? [...filters.fileTypes] : undefined,
      author: filters.author,
      isFolder: filters.isFolder,
      hasContent: filters.hasContent,
    }
  }

  // Merge filters
  mergeFilters(
    base: SearchFilterSet,
    updates: Partial<SearchFilterSet>
  ): SearchFilterSet {
    return {
      ...base,
      ...updates,
      tags: updates.tags !== undefined ? updates.tags : base.tags,
      folders: updates.folders !== undefined ? updates.folders : base.folders,
      fileTypes:
        updates.fileTypes !== undefined ? updates.fileTypes : base.fileTypes,
    }
  }

  // Helper methods for extracting filter options from notes
  private extractUniqueTags(notes: SearchableNote[]): string[] {
    const tagSet = new Set<string>()
    notes.forEach((note) => {
      note.tags.forEach((tag) => tagSet.add(tag))
    })
    return Array.from(tagSet)
  }

  private extractUniqueFolders(notes: SearchableNote[]): string[] {
    const folderSet = new Set<string>()
    notes.forEach((note) => {
      // Extract folder path from note path
      const pathParts = note.path.split('/')
      for (let i = 1; i < pathParts.length; i++) {
        const folderPath = pathParts.slice(0, i + 1).join('/')
        folderSet.add(folderPath)
      }
    })
    return Array.from(folderSet)
  }

  private extractUniqueAuthors(notes: SearchableNote[]): string[] {
    const authorSet = new Set<string>()
    notes.forEach((note) => {
      if (note.author) {
        authorSet.add(note.author)
      }
    })
    return Array.from(authorSet)
  }

  // Date utility methods
  private getStartOfDay(date: Date): Date {
    const result = new Date(date)
    result.setHours(0, 0, 0, 0)
    return result
  }

  private getEndOfDay(date: Date): Date {
    const result = new Date(date)
    result.setHours(23, 59, 59, 999)
    return result
  }

  private getStartOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0)
  }

  private getEndOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999)
  }

  private getStartOfYear(date: Date): Date {
    return new Date(date.getFullYear(), 0, 1, 0, 0, 0, 0)
  }

  private getEndOfYear(date: Date): Date {
    return new Date(date.getFullYear(), 11, 31, 23, 59, 59, 999)
  }

  private subtractDays(date: Date, days: number): Date {
    const result = new Date(date)
    result.setDate(result.getDate() - days)
    return result
  }

  private subtractMonths(date: Date, months: number): Date {
    const result = new Date(date)
    result.setMonth(result.getMonth() - months)
    return result
  }
}

// Search filter utilities
export const SearchFilterUtils = {
  // Parse filter string like "tag:work date:today folder:projects"
  parseFilterString(filterString: string): SearchFilterSet {
    const filters: SearchFilterSet = {}
    const filterRegex = /(\w+):([^\s]+)/g
    let match

    while ((match = filterRegex.exec(filterString)) !== null) {
      const [, key, value] = match

      switch (key.toLowerCase()) {
        case 'tag':
        case 'tags':
          if (!filters.tags) filters.tags = []
          filters.tags.push(value)
          break
        case 'folder':
        case 'folders':
          if (!filters.folders) filters.folders = []
          filters.folders.push(value)
          break
        case 'author':
          filters.author = value
          break
        case 'type':
          if (value.toLowerCase() === 'folder') {
            filters.isFolder = true
          } else if (value.toLowerCase() === 'note') {
            filters.isFolder = false
          }
          break
        case 'has':
          if (value.toLowerCase() === 'content') {
            filters.hasContent = true
          }
          break
        case 'date': {
          // Handle special date values
          const datePresets = new SearchFilters().getDateRangePresets()
          const preset = datePresets.find((p) => p.id === value.toLowerCase())
          if (preset) {
            filters.dateRange = preset.range
          }
          break
        }
      }
    }

    return filters
  },

  // Convert filters to search string
  filtersToString(filters: SearchFilterSet): string {
    const parts: string[] = []

    if (filters.tags && filters.tags.length > 0) {
      filters.tags.forEach((tag) => parts.push(`tag:${tag}`))
    }

    if (filters.folders && filters.folders.length > 0) {
      filters.folders.forEach((folder) => parts.push(`folder:${folder}`))
    }

    if (filters.author) {
      parts.push(`author:${filters.author}`)
    }

    if (filters.isFolder === true) {
      parts.push('type:folder')
    } else if (filters.isFolder === false) {
      parts.push('type:note')
    }

    if (filters.hasContent === true) {
      parts.push('has:content')
    }

    return parts.join(' ')
  },
}
