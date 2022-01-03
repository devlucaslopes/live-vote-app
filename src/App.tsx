import React from 'react'

import { Layout } from './components/Layout'
import { SuggestionList } from './components/SuggestionList'
import { SuggestionItem } from './components/SuggestionItem'
import { useSuggestion } from './contexts/SuggestionContext'

function App() {
  const { suggestions } = useSuggestion()

  const onVote = (id: string, votes: number) => console.log({ id, votes })

  return (
    <Layout>
      <SuggestionList>
        {suggestions.map((suggestion) => (
          <SuggestionItem
            key={suggestion.id}
            suggestion={suggestion}
            onVote={onVote}
          />
        ))}
      </SuggestionList>
    </Layout>
  )
}

export default App
