import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Server } from 'miragejs'
import axios from 'axios'

import { NewSuggestion } from '.'
import { SuggestionProvider } from '../../contexts/SuggestionContext'
import { makeServer } from '../../services/miragejs/server'

const renderNewSuggestion = () => {
  return render(
    <SuggestionProvider mock={{ visible: true }}>
      <NewSuggestion />
    </SuggestionProvider>
  )
}

describe('<NewSuggestion />', () => {
  let server: Server

  beforeEach(() => (server = makeServer({ environment: 'test' })))

  afterEach(() => server.shutdown())

  it('should render correctly', () => {
    renderNewSuggestion()

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getAllByRole('textbox').length).toBe(2)
    expect(screen.getAllByRole('button').length).toBe(2)
  })

  it('should call onClose() when button "Fechar" is clicked', () => {
    const { rerender } = renderNewSuggestion()

    const button = screen.getByRole('button', { name: /fechar/i })
    let dialog = screen.getByTestId('dialog')

    expect(dialog).not.toHaveClass('hidden')
    expect(dialog).toHaveAttribute('open')

    fireEvent.click(button)

    rerender(
      <SuggestionProvider>
        <NewSuggestion />
      </SuggestionProvider>
    )

    dialog = screen.getByTestId('dialog')

    expect(dialog).toHaveClass('hidden')
    expect(dialog).not.toHaveAttribute('open')
  })

  it('should save values when user type', () => {
    const titleText = 'Curso de HTML para iniciantes'
    const descriptionText = 'Criar um curso no youtube'

    renderNewSuggestion()

    const [inputTitle, inputDescription] = screen.getAllByRole('textbox')

    expect(inputTitle).toHaveValue('')
    expect(inputDescription).toHaveValue('')

    userEvent.type(inputTitle, titleText)
    userEvent.type(inputDescription, descriptionText)

    expect(inputTitle).toHaveValue(titleText)
    expect(inputDescription).toHaveValue(descriptionText)
  })

  it('should call onSubmit() when button "Adicionar" is clicked', () => {
    const postSpy = jest.spyOn(axios, 'post')

    renderNewSuggestion()

    const [inputTitle, inputDescription] = screen.getAllByRole('textbox')
    const button = screen.getByRole('button', { name: /adicionar/i })

    userEvent.type(inputTitle, 'Foo')
    userEvent.type(inputDescription, 'Bar')
    fireEvent.click(button)

    expect(postSpy).toHaveBeenCalledTimes(1)
  })
})
