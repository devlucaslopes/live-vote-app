import React from 'react'
import { FiThumbsUp as VoteIcon } from 'react-icons/fi'

type SuggestionItemProps = {
  id: number
  votes: number
  title: string
  description: string
}

export const SuggestionItem = ({
  id,
  votes,
  title,
  description
}: SuggestionItemProps) => {
  return (
    <section className="flex text-white mt-4">
      <button
        type="button"
        className="flex flex-col justify-center items-center w-24 h-24 p-5 border-2 border-slate-500 rounded mr-4 hover:bg-slate-500"
      >
        <VoteIcon size={24} />
        <span className="text-lg">{votes}</span>
      </button>
      <div className="flex flex-col justify-center">
        <h2 className="text-xl text-fuchsia-500">{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  )
}
