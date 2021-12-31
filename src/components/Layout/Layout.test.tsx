import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'

import { Layout } from '.'

jest.mock('axios', () => ({
  post: jest.fn()
}))
jest.mock('../Nav', () => ({ Nav: () => <nav>nav mocked</nav> }))
jest.mock('../Footer', () => ({ Footer: () => <footer>footer mocked</footer> }))

describe('<Layout />', () => {
  it('should open NewSuggestion dialog when "Nova sugestão" is clicked', () => {
    render(<Layout>some test</Layout>)

    const dialog = screen.getByTestId('dialog')

    expect(dialog).not.toHaveAttribute('open')

    const button = screen.getByRole('button', { name: /nova sugestão/i })

    fireEvent.click(button)

    expect(dialog).toHaveAttribute('open')
  })

  it('should call axios.post with correct data', () => {
    const expectedURL = '/api/suggestions'
    const suggestion = {
      description: 'Bar',
      title: 'Foo'
    }

    render(<Layout>some test</Layout>)

    fireEvent.click(screen.getByRole('button', { name: /nova sugestão/i }))

    const [inputTitle, inputDescription] = screen.getAllByRole('textbox')
    const button = screen.getByRole('button', { name: /adicionar/i })

    userEvent.type(inputTitle, suggestion.title)
    userEvent.type(inputDescription, suggestion.description)
    fireEvent.click(button)

    expect(axios.post).toHaveBeenCalled()
    expect(axios.post).toHaveBeenCalledWith(expectedURL, suggestion)
  })
})
