import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'

import { Layout } from '.'
import { makeServer } from '../../services/miragejs/server'
import { Server } from 'miragejs'
import { SuggestionProvider } from '../../contexts/SuggestionContext'

jest.mock('../Nav', () => ({ Nav: () => <nav>nav mocked</nav> }))
jest.mock('../Footer', () => ({ Footer: () => <footer>footer mocked</footer> }))

describe('<Layout />', () => {
  let server: Server

  beforeEach(() => (server = makeServer({ environment: 'test' })))

  afterEach(() => server.shutdown())

  it('should open NewSuggestion dialog when "Nova sugestão" is clicked', () => {
    render(
      <SuggestionProvider>
        <Layout>some test</Layout>
      </SuggestionProvider>
    )

    const dialog = screen.getByTestId('dialog')

    expect(dialog).not.toHaveAttribute('open')

    const button = screen.getByRole('button', { name: /nova sugestão/i })

    fireEvent.click(button)

    expect(dialog).toHaveAttribute('open')
  })

  it('should call axios.post with correct data', () => {
    const postSpy = jest.spyOn(axios, 'post')

    const expectedURL = '/api/suggestions'
    const suggestion = {
      description: 'Bar',
      title: 'Foo'
    }

    render(
      <SuggestionProvider>
        <Layout>some test</Layout>
      </SuggestionProvider>
    )

    fireEvent.click(screen.getByRole('button', { name: /nova sugestão/i }))

    const [inputTitle, inputDescription] = screen.getAllByRole('textbox')
    const button = screen.getByRole('button', { name: /adicionar/i })

    userEvent.type(inputTitle, suggestion.title)
    userEvent.type(inputDescription, suggestion.description)
    fireEvent.click(button)

    expect(postSpy).toHaveBeenCalled()
    expect(postSpy).toHaveBeenCalledWith(expectedURL, suggestion)
  })
})
