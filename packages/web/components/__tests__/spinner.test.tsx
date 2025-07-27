import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Spinner } from '../ui/spinner'

describe('Spinner', () => {
  it('renders spinner component', () => {
    render(<Spinner />)
    
    const spinner = screen.getByLabelText('Loading')
    expect(spinner).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Spinner className="custom-class" />)
    
    const spinner = screen.getByLabelText('Loading')
    expect(spinner).toHaveClass('custom-class')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<Spinner size="1" />)
    let spinner = screen.getByLabelText('Loading')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveAttribute('data-size', '1')

    rerender(<Spinner size="3" />)
    spinner = screen.getByLabelText('Loading')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveAttribute('data-size', '3')
  })
})