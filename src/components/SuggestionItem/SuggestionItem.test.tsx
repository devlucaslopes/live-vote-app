import React from 'react'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { Response, Server } from 'miragejs'
import axios from 'axios'

import { renderWithProvider } from '../../utils/helpers/renderWithProvider'
import { SuggestionItem } from '.'
import { makeServer } from '../../services/miragejs/server'

const suggestion = {
  id: '1',
  title: 'Cursou de HTML',
  description: 'Gravar um curso de HTML para iniciantes',
  votes: 5
}

describe('<SuggestionItem />', () => {
  let server: Server

  beforeEach(() => (server = makeServer({ environment: 'test' })))

  afterEach(() => server.shutdown())

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

  it('should call axios.put when user vote', async () => {
    const putSpy = jest.spyOn(axios, 'put')

    await waitFor(() => fireEvent.click(screen.getByRole('button')))

    expect(putSpy).toHaveBeenCalledTimes(1)
    expect(putSpy).toHaveBeenCalledWith('api/suggestions/1')
  })

  it('should not update vote value if request fails', async () => {
    server.put('/products/:id', () => new Response(500, {}, ''))

    await waitFor(() => fireEvent.click(screen.getByRole('button')))

    expect(screen.getByTestId('total-votes').textContent).toBe('5')
  })
})
