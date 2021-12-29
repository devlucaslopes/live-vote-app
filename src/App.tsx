import React, { useEffect, useState } from 'react'

import { Layout } from './components/Layout'
import { getAllSuggestions } from './services/firebase'
import { SuggestionData } from './models/Suggestion'
import { SuggestionList } from './components/SuggestionList'
import { SuggestionItem } from './components/SuggestionItem'
import { Loading } from './components/Loading'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [suggestions, setSuggestions] = useState<SuggestionData[]>([])

  useEffect(() => {
    getAllSuggestions().then((data) => {
      setSuggestions(data)
      setIsLoading(false)
    })
  }, [])

  return (
    <Layout>
      {isLoading ? (
        <Loading />
      ) : (
        <SuggestionList>
          {suggestions.map((suggestion) => (
            <SuggestionItem key={suggestion.id} suggestion={suggestion} />
          ))}
        </SuggestionList>
      )}
    </Layout>
  )
}

export default App
