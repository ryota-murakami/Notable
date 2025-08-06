'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface TemplateVariable {
  name: string
  label: string
  type: 'text' | 'date' | 'select' | 'textarea'
  required: boolean
  options?: string[]
  placeholder?: string
}

interface Template {
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
}

interface TemplateVariableFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  template: Template | null
  onSubmit: (title: string, variables: Record<string, any>) => void
}

export function TemplateVariableForm({
  open,
  onOpenChange,
  template,
  onSubmit,
}: TemplateVariableFormProps) {
  const [variables, setVariables] = useState<Record<string, any>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [title, setTitle] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!template) return
    
    const newErrors: Record<string, string> = {}
    
    // Validate title
    if (!title.trim()) {
      newErrors.title = 'Title is required'
    }
    
    // Validate required fields
    template.variables?.forEach((variable) => {
      if (variable.required && (!variables[variable.name] || variables[variable.name].toString().trim() === '')) {
        newErrors[variable.name] = `${variable.label} is required`
      }
    })
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    onSubmit(title, variables)
    
    // Reset form
    setVariables({})
    setErrors({})
    setTitle('')
    onOpenChange(false)
  }

  const handleInputChange = (name: string, value: any) => {
    setVariables(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleTitleChange = (value: string) => {
    setTitle(value)
    if (errors.title) {
      setErrors(prev => ({ ...prev, title: '' }))
    }
  }

  if (!template) {
    return null
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Create from Template</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Fill in the template fields to create your note
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 overflow-auto flex-1">
          <div className="space-y-4">
            {/* Title Field */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-sm font-medium">
                Note Title <span className="text-destructive">*</span>
              </Label>
              <Input
                id="title"
                placeholder="Enter note title"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className={errors.title ? 'border-destructive' : ''}
              />
              {errors.title && (
                <p className="text-sm text-destructive">{errors.title}</p>
              )}
            </div>

            {/* Template Variables */}
            {template.variables && template.variables.length > 0 && (
              <>
                <h3 className="font-medium">Template Fields</h3>
                
                {template.variables.map((variable) => (
                  <div key={variable.name} className="space-y-2">
                    <Label htmlFor={variable.name} className="text-sm font-medium">
                      {variable.label}
                      {variable.required && <span className="text-destructive ml-1">*</span>}
                    </Label>
                    
                    {variable.type === 'text' && (
                      <Input
                        id={variable.name}
                        placeholder={variable.placeholder}
                        value={variables[variable.name] || ''}
                        onChange={(e) => handleInputChange(variable.name, e.target.value)}
                        className={errors[variable.name] ? 'border-destructive' : ''}
                      />
                    )}
                    
                    {variable.type === 'date' && (
                      <Input
                        id={variable.name}
                        type="date"
                        value={variables[variable.name] || ''}
                        onChange={(e) => handleInputChange(variable.name, e.target.value)}
                        className={errors[variable.name] ? 'border-destructive' : ''}
                      />
                    )}
                    
                    {variable.type === 'select' && variable.options && (
                      <select
                        id={variable.name}
                        value={variables[variable.name] || ''}
                        onChange={(e) => handleInputChange(variable.name, e.target.value)}
                        className={cn(
                          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                          errors[variable.name] && "border-destructive"
                        )}
                        role="combobox"
                      >
                        <option value="">Select {variable.label}</option>
                        {variable.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                    
                    {variable.type === 'textarea' && (
                      <textarea
                        id={variable.name}
                        placeholder={variable.placeholder}
                        value={variables[variable.name] || ''}
                        onChange={(e) => handleInputChange(variable.name, e.target.value)}
                        rows={3}
                        className={cn(
                          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                          errors[variable.name] && "border-destructive"
                        )}
                      />
                    )}
                    
                    {errors[variable.name] && (
                      <p className="text-sm text-destructive">{errors[variable.name]}</p>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
          
          <div className="flex gap-2 pt-4 border-t">
            <Button type="submit" className="flex-1">
              Create Note
            </Button>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}