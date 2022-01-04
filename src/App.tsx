import React from 'react'

import { Layout } from './components/Layout'
import { SuggestionList } from './components/SuggestionList'
import { SuggestionItem } from './components/SuggestionItem'
import { useSuggestion } from './contexts/SuggestionContext'

function App() {
  const { suggestions } = useSuggestion()

  return (
    <Layout>
      <SuggestionList>
        {suggestions.map((suggestion) => (
          <SuggestionItem key={suggestion.id} suggestion={suggestion} />
        ))}
      </SuggestionList>
    </Layout>
  )
}

export default App
