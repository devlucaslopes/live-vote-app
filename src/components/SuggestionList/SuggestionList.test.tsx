import React from 'react'
import { render, screen } from '@testing-library/react'
import { SuggestionList } from '.'

describe('<SuggestionList />', () => {
  it('should render correctly', () => {
    render(
      <SuggestionList>
        <h1>Lorem Ipsum</h1>
      </SuggestionList>
    )

    const component = screen.getByTestId('suggestion-list')

    expect(component).toBeInTheDocument()
    expect(component.textContent).toBe('Lorem Ipsum')
    expect(component).toHaveClass('mt-8 animate-bottomUp')
  })
})
