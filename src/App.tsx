import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { SuggestionData } from './models/Suggestion'
import { Layout } from './components/Layout'
import { SuggestionList } from './components/SuggestionList'
import { SuggestionItem } from './components/SuggestionItem'

function App() {
  const [suggestions, setSuggestions] = useState<SuggestionData[]>([])

  useEffect(() => {
    axios.get('/api/suggestions').then(({ data }) => {
      setSuggestions(data.suggestions)
    })
  }, [])

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
