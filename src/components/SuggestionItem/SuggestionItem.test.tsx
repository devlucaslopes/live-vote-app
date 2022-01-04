import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import axios from 'axios'

import { renderWithProvider } from '../../utils/helpers/renderWithProvider'
import { SuggestionItem } from '.'

const suggestion = {
  id: '1',
  title: 'Cursou de HTML',
  description: 'Gravar um curso de HTML para iniciantes',
  votes: 5
}

describe('<SuggestionItem />', () => {
  beforeEach(() =>
    renderWithProvider(<SuggestionItem suggestion={suggestion} />)
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
    const putSpy = jest.spyOn(axios, 'put')

    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(putSpy).toHaveBeenCalledTimes(1)
    expect(putSpy).toHaveBeenCalledWith('api/suggestions/1', { votes: 6 })
    expect(screen.getByTestId('total-votes').textContent).toBe('6')
  })
})
