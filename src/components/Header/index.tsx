import React, { ReactNode } from 'react'
import { FiPlus as AddIcon } from 'react-icons/fi'

type HeaderProps = {
  children: ReactNode
  openNewSuggestion: () => void
}

export const Header = ({ children, openNewSuggestion }: HeaderProps) => (
  <div className="flex justify-between">
    <h1 className="text-4xl text-white">{children}</h1>
    <button
      type="button"
      className="flex items-center text-pink-500"
      onClick={openNewSuggestion}
    >
      <AddIcon className="mr-2" />
      Nova sugestão
    </button>
  </div>
)
