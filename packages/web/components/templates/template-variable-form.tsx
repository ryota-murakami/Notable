'use client'

import * as React from 'react'
import {
  Calendar,
  Clock,
  FileText,
  Hash,
  Loader2,
  Save,
  User,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'

import type { Template, TemplateVariable } from '@/types/templates'

export type { Template, TemplateVariable }

export interface TemplateVariableFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  template: Template | null
  onSubmit: (title: string, variables: Record<string, any>) => Promise<void>
  className?: string
}

export function TemplateVariableForm({
  open,
  onOpenChange,
  template,
  onSubmit,
  className,
}: TemplateVariableFormProps) {
  const [title, setTitle] = React.useState('')
  const [variables, setVariables] = React.useState<Record<string, any>>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  // Initialize form when template changes
  React.useEffect(() => {
    if (template && open) {
      // Set default title
      setTitle(template.name)

      // Initialize variables with default values
      const initialVariables: Record<string, any> = {}
      template.variables?.forEach((variable) => {
        if (variable.defaultValue) {
          initialVariables[variable.name] = variable.defaultValue
        } else if (variable.type === 'boolean') {
          initialVariables[variable.name] = false
        } else if (variable.type === 'multi-select') {
          initialVariables[variable.name] = []
        }
      })
      setVariables(initialVariables)
      setErrors({})
    }
  }, [template, open])

  const handleVariableChange = (name: string, value: any) => {
    setVariables((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Validate title
    if (!title.trim()) {
      newErrors.title = 'Note title is required'
    }

    // Validate variables
    template?.variables?.forEach((variable) => {
      const value = variables[variable.name]

      // Check required fields
      if (
        variable.required &&
        (!value || (typeof value === 'string' && !value.trim()))
      ) {
        newErrors[variable.name] = `${variable.label} is required`
        return
      }

      // Skip validation if field is empty and not required
      if (!value || (typeof value === 'string' && !value.trim())) {
        return
      }

      // Type-specific validation
      if (variable.type === 'number') {
        const numValue = Number(value)
        if (isNaN(numValue)) {
          newErrors[variable.name] = 'Must be a valid number'
        } else if (
          variable.validation?.min !== undefined &&
          numValue < variable.validation.min
        ) {
          newErrors[variable.name] =
            `Must be at least ${variable.validation.min}`
        } else if (
          variable.validation?.max !== undefined &&
          numValue > variable.validation.max
        ) {
          newErrors[variable.name] =
            `Must be at most ${variable.validation.max}`
        }
      }

      // String length validation
      if (typeof value === 'string') {
        if (
          variable.validation?.minLength &&
          value.length < variable.validation.minLength
        ) {
          newErrors[variable.name] =
            `Must be at least ${variable.validation.minLength} characters`
        }
        if (
          variable.validation?.maxLength &&
          value.length > variable.validation.maxLength
        ) {
          newErrors[variable.name] =
            `Must be at most ${variable.validation.maxLength} characters`
        }
        if (variable.validation?.pattern) {
          const regex = new RegExp(variable.validation.pattern)
          if (!regex.test(value)) {
            newErrors[variable.name] = 'Invalid format'
          }
        }
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    try {
      await onSubmit(title.trim(), variables)
      onOpenChange(false)
    } catch (error) {
      console.error('Error creating note from template:', error)
      // Handle error (could show a toast or error message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const sortedVariables = React.useMemo(() => {
    if (!template?.variables) return []
    return [...template.variables].sort(
      (a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)
    )
  }, [template?.variables])

  if (!template) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn('max-w-2xl max-h-[90vh] p-0', className)}>
        <DialogHeader className='px-6 py-4 border-b'>
          <DialogTitle className='flex items-center gap-2'>
            <span className='text-2xl'>{template.categoryIcon}</span>
            <div>
              <div>Create from Template</div>
              <div className='text-sm font-normal text-muted-foreground'>
                {template.name}
              </div>
            </div>
          </DialogTitle>
          <DialogDescription>{template.description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className='flex flex-col h-full'>
          <ScrollArea className='flex-1 px-6 py-4'>
            <div className='space-y-6'>
              {/* Note Title */}
              <div className='space-y-2'>
                <Label htmlFor='title' className='flex items-center gap-2'>
                  <FileText className='h-4 w-4' />
                  Note Title *
                </Label>
                <Input
                  id='title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder='Enter note title...'
                  className={cn(errors.title && 'border-destructive')}
                />
                {errors.title && (
                  <p className='text-sm text-destructive'>{errors.title}</p>
                )}
              </div>

              {/* Template Variables */}
              {sortedVariables.length > 0 && (
                <div className='space-y-4'>
                  <div className='flex items-center gap-2'>
                    <h3 className='text-lg font-semibold'>Template Fields</h3>
                    <Badge variant='secondary'>
                      {sortedVariables.length} fields
                    </Badge>
                  </div>

                  {sortedVariables.map((variable) => (
                    <VariableInput
                      key={variable.name}
                      variable={variable}
                      value={variables[variable.name]}
                      onChange={(value) =>
                        handleVariableChange(variable.name, value)
                      }
                      error={errors[variable.name]}
                    />
                  ))}
                </div>
              )}
            </div>
          </ScrollArea>

          <DialogFooter className='px-6 py-4 border-t'>
            <Button
              type='button'
              variant='outline'
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='min-w-[120px]'
            >
              {isSubmitting ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Creating...
                </>
              ) : (
                <>
                  <Save className='mr-2 h-4 w-4' />
                  Create Note
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

interface VariableInputProps {
  variable: TemplateVariable
  value: any
  onChange: (value: any) => void
  error?: string
}

function VariableInput({
  variable,
  value,
  onChange,
  error,
}: VariableInputProps) {
  const getIcon = () => {
    switch (variable.type) {
      case 'date':
      case 'datetime':
        return <Calendar className='h-4 w-4' />
      case 'time':
        return <Clock className='h-4 w-4' />
      case 'tag':
        return <Hash className='h-4 w-4' />
      case 'user':
        return <User className='h-4 w-4' />
      default:
        return <FileText className='h-4 w-4' />
    }
  }

  const renderInput = () => {
    switch (variable.type) {
      case 'textarea':
        return (
          <Textarea
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={variable.placeholder}
            className={cn(error && 'border-destructive')}
            rows={3}
          />
        )

      case 'number':
        return (
          <Input
            type='number'
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={variable.placeholder}
            min={variable.validation?.min}
            max={variable.validation?.max}
            className={cn(error && 'border-destructive')}
          />
        )

      case 'date':
        return (
          <Input
            type='date'
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className={cn(error && 'border-destructive')}
          />
        )

      case 'time':
        return (
          <Input
            type='time'
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className={cn(error && 'border-destructive')}
          />
        )

      case 'datetime':
        return (
          <Input
            type='datetime-local'
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className={cn(error && 'border-destructive')}
          />
        )

      case 'boolean':
        return (
          <div className='flex items-center space-x-2'>
            <Checkbox checked={value || false} onCheckedChange={onChange} />
            <span className='text-sm'>{variable.placeholder || 'Yes'}</span>
          </div>
        )

      case 'select':
        return (
          <Select value={value || ''} onValueChange={onChange}>
            <SelectTrigger className={cn(error && 'border-destructive')}>
              <SelectValue
                placeholder={variable.placeholder || 'Select an option'}
              />
            </SelectTrigger>
            <SelectContent>
              {variable.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )

      case 'multi-select':
        return (
          <div className='space-y-2'>
            {variable.options?.map((option) => {
              const selectedValues = Array.isArray(value) ? value : []
              return (
                <div key={option} className='flex items-center space-x-2'>
                  <Checkbox
                    checked={selectedValues.includes(option)}
                    onCheckedChange={(checked) => {
                      const newValues = checked
                        ? [...selectedValues, option]
                        : selectedValues.filter((v) => v !== option)
                      onChange(newValues)
                    }}
                  />
                  <span className='text-sm'>{option}</span>
                </div>
              )
            })}
          </div>
        )

      default:
        return (
          <Input
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={variable.placeholder}
            maxLength={variable.validation?.maxLength}
            pattern={variable.validation?.pattern}
            className={cn(error && 'border-destructive')}
          />
        )
    }
  }

  return (
    <div className='space-y-2'>
      <Label className='flex items-center gap-2'>
        {getIcon()}
        {variable.label}
        {variable.required && <span className='text-destructive'>*</span>}
      </Label>

      {variable.description && (
        <p className='text-sm text-muted-foreground'>{variable.description}</p>
      )}

      {renderInput()}

      {variable.helpText && (
        <p className='text-xs text-muted-foreground'>{variable.helpText}</p>
      )}

      {error && <p className='text-sm text-destructive'>{error}</p>}
    </div>
  )
}
