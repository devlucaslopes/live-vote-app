import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { SuggestionItem } from '.'

const suggestion = {
  id: 1,
  title: 'Cursou de HTML',
  description: 'Gravar um curso de HTML para iniciantes',
  votes: 5
}

const onVote = jest.fn()

describe('<SuggestionItem />', () => {
  beforeEach(() =>
    render(<SuggestionItem suggestion={suggestion} onVote={onVote} />)
  )

  it('should render correcly', () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByRole('paragraph')).toBeInTheDocument()
  })

  it('should receive suggestion data by props', () => {
    expect(screen.getByRole('button').textContent).toBe(
      suggestion.votes.toString()
    )
    expect(screen.getByRole('heading').textContent).toBe(suggestion.title)
    expect(screen.getByRole('paragraph').textContent).toBe(
      suggestion.description
    )
  })

  it('should call onVote() when button is clicked', () => {
    const expectedTotalVotes = 6
    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(onVote).toHaveBeenCalledTimes(1)
    expect(onVote).toHaveBeenCalledWith(suggestion.id, expectedTotalVotes)
    expect(screen.getByTestId('total-votes').textContent).toBe('6')
  })
})
