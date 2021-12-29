import React, { useState } from 'react'
import { FiThumbsUp as VoteIcon } from 'react-icons/fi'
import { SuggestionData } from '../../models/Suggestion'

type SuggeestionItemProps = {
  suggestion: SuggestionData
}

export const SuggestionItem = ({ suggestion }: SuggeestionItemProps) => {
  const handleVote = () => {
    // const { votes } = suggestion
  }

  return (
    <section className="flex text-white mt-4">
      <button
        onClick={handleVote}
        type="button"
        className="flex flex-col justify-center items-center w-24 h-24 p-5 border-2 border-slate-500 rounded mr-4 hover:bg-slate-500"
      >
        <VoteIcon size={24} />
        <span className="text-lg">{suggestion.votes}</span>
      </button>
      <div className="flex flex-col justify-center">
        <h2 className="text-xl text-fuchsia-500">{suggestion.title}</h2>
        <p>{suggestion.description}</p>
      </div>
    </section>
  )
}
