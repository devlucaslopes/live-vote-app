import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { NewSuggestion } from '.'

let isVisible = true

const onClose = jest.fn()

const onSubmit = jest.fn()

const renderNewSuggestion = () => {
  return render(
    <NewSuggestion isVisible onClose={onClose} onSubmit={onSubmit} />
  )
}

describe('<NewSuggestion />', () => {
  it('should render correctly', () => {
    renderNewSuggestion()

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getAllByRole('textbox').length).toBe(2)
    expect(screen.getAllByRole('button').length).toBe(2)
  })

  it('should call onClose() when button "Fechar" is clicked', () => {
    onClose.mockImplementationOnce(() => {
      isVisible = !isVisible
    })

    const { rerender } = renderNewSuggestion()

    const button = screen.getByRole('button', { name: /fechar/i })
    const dialog = screen.getByTestId('dialog')

    expect(dialog).not.toHaveClass('hidden')
    expect(dialog).toHaveAttribute('open')

    fireEvent.click(button)

    expect(onClose).toHaveBeenCalledTimes(1)

    rerender(
      <NewSuggestion
        isVisible={isVisible}
        onClose={onClose}
        onSubmit={onSubmit}
      />
    )

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
    renderNewSuggestion()

    const [inputTitle, inputDescription] = screen.getAllByRole('textbox')
    const button = screen.getByRole('button', { name: /adicionar/i })

    userEvent.type(inputTitle, 'Foo')
    userEvent.type(inputDescription, 'Bar')
    fireEvent.click(button)

    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalledWith({ title: 'Foo', description: 'Bar' })
  })
})
