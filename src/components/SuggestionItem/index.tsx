import React from 'react'
import { FiThumbsUp as VoteIcon } from 'react-icons/fi'
import { useSuggestion } from '../../contexts/SuggestionContext'

import { SuggestionData } from '../../models/Suggestion'

type SuggestionItemProps = {
  suggestion: SuggestionData
}

export const SuggestionItem = ({ suggestion }: SuggestionItemProps) => {
  const { addVote } = useSuggestion()

  const handleVote = () => {
    addVote({ id: suggestion.id })
  }

  return (
    <section className="flex text-white mt-4">
      <button
        onClick={handleVote}
        type="button"
        className="flex flex-col justify-center items-center w-24 h-24 p-5 border-2 border-slate-500 rounded mr-4 hover:bg-slate-500"
      >
        <VoteIcon size={24} />
        <span data-testid="total-votes" className="text-lg">
          {suggestion.votes}
        </span>
      </button>
      <div className="flex flex-col justify-center">
        <h2 className="text-xl text-pink-500 font-medium select-none">
          {suggestion.title}
        </h2>
        <p className="select-none" role="paragraph">
          {suggestion.description}
        </p>
      </div>
    </section>
  )
}
