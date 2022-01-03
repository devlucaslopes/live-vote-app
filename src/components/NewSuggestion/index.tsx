import React, { FormEvent, useState } from 'react'
import { useSuggestion } from '../../contexts/SuggestionContext'

type NewSuggestionProps = {
  isVisible: boolean
  onClose: () => void
}

export const NewSuggestion = ({ isVisible, onClose }: NewSuggestionProps) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const { createSuggestion } = useSuggestion()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    createSuggestion({ title, description })
  }

  return (
    <dialog
      open={isVisible}
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${
        isVisible ? '' : 'hidden'
      }`}
      data-testid="dialog"
    >
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3">
          <h2 className="text-xl font-medium text-gray-900">Nova sugestão</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <label className="block">
              <span className="text-slate-500">Título</span>
              <input
                type="text"
                name="title"
                className="
                  outline-none
                  mt-1
                  block
                  w-full
                  h-8
                  rounded-md
                  border
                  border-slate-200
                  px-2
                  focus:border-slate-300 focus:ring focus:ring-slate-200 focus:ring-opacity-50
                "
                placeholder="Fazer uma live sobre testes"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </label>
            <label className="block mt-2">
              <span className="text-slate-500">Descrição</span>
              <input
                type="text"
                name="description"
                className="
                  outline-none
                  mt-1
                  block
                  w-full
                  h-8
                  rounded-md
                  border
                  border-slate-200
                  px-2
                  focus:border-slate-300 focus:ring focus:ring-slate-200 focus:ring-opacity-50
                "
                placeholder="Apenas uma frase"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </label>

            <div className="flex justify-between mt-4">
              <button
                type="button"
                className="w-32 h-9 rounded-md text-red-500 border border-red-500 hover:bg-red-500 hover:text-white"
                onClick={onClose}
              >
                Fechar
              </button>
              <button
                type="submit"
                className="w-32 h-9 rounded-md text-white text-center bg-pink-500 hover:bg-pink-600"
              >
                Adicionar
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  )
}
