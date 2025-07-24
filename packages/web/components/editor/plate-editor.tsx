'use client'

import React from 'react'
import { MinimalEditor } from './minimal-editor'

interface PlateEditorProps {
  value?: any[]
  onChange?: (value: any[]) => void
  placeholder?: string
  className?: string
}

export function PlateEditor(props: PlateEditorProps) {
  return <MinimalEditor {...props} />
}
