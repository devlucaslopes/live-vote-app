import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { Header } from '.'

const openNewSuggestion = jest.fn()

describe('<Header />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Header openNewSuggestion={openNewSuggestion}>Lorem ipsum</Header>
    )

    expect(screen.getByRole('heading').textContent).toBe('Lorem ipsum')
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should call openNewSuggestion() when button is clicked', () => {
    render(<Header openNewSuggestion={openNewSuggestion}>Lorem ipsum</Header>)

    fireEvent.click(screen.getByRole('button'))

    expect(openNewSuggestion).toHaveBeenCalledTimes(1)
  })
})
