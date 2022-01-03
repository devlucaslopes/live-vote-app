import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'

import { SuggestionProvider } from './contexts/SuggestionContext'
import App from './App'
import { makeServer } from './services/miragejs/server'
import { Server } from 'miragejs'

describe('<App />', () => {
  let server: Server

  beforeEach(() => (server = makeServer({ environment: 'test' })))

  afterEach(() => server.shutdown())

  it('should render all suggestions', async () => {
    server.createList('suggestion', 10)

    await waitFor(() =>
      render(
        <SuggestionProvider
          options={{ suggestions: server.db.dump().suggestions }}
        >
          <App />
        </SuggestionProvider>
      )
    )

    // screen.debug(screen.getByText(/teste/i))
    console.log(screen.getByTestId('suggestion-list').childElementCount)
  })
})
