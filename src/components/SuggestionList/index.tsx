import React from 'react'

type SuggestionListProps = {
  children: React.ReactNode
}

export const SuggestionList = ({ children }: SuggestionListProps) => {
  return <div className="mt-8 animate-bottomUp">{children}</div>
}
