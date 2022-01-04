import React from 'react'
import { Server } from 'miragejs'
import { fireEvent, screen } from '@testing-library/react'

import { SuggestionData } from './models/Suggestion'
import { makeServer } from './services/miragejs/server'
import { renderWithProvider } from './utils/helpers/renderWithProvider'
import App from './App'
describe('<App />', () => {
  let server: Server

  beforeEach(() => (server = makeServer({ environment: 'test' })))

  afterEach(() => server.shutdown())

  it('should render all suggestions', async () => {
    const suggestions = server
      .createList('suggestion', 10)
      .map(({ attrs }) => attrs as SuggestionData)

    renderWithProvider(<App />, { suggestions })

    expect(screen.getByTestId('suggestion-list').childElementCount).toBe(10)
  })

  it('should toggle dialog when buttons are clicked', () => {
    renderWithProvider(<App />)

    fireEvent.click(screen.getByRole('button', { name: /nova sugestão/i }))

    expect(screen.getByRole('dialog')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /fechar/i }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
