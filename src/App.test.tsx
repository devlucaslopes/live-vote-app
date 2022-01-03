import React from 'react'
import { Server } from 'miragejs'
import { render, screen } from '@testing-library/react'

import { SuggestionData } from './models/Suggestion'
import { makeServer } from './services/miragejs/server'
import { SuggestionProvider } from './contexts/SuggestionContext'
import App from './App'
describe('<App />', () => {
  let server: Server

  beforeEach(() => (server = makeServer({ environment: 'test' })))

  afterEach(() => server.shutdown())

  it('should render all suggestions', async () => {
    const suggestions = server
      .createList('suggestion', 10)
      .map(({ attrs }) => attrs as SuggestionData)

    render(
      <SuggestionProvider mock={{ suggestions }}>
        <App />
      </SuggestionProvider>
    )

    expect(screen.getByTestId('suggestion-list').childElementCount).toBe(10)
  })
})
