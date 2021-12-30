import React from 'react'

import { Layout } from './components/Layout'
import { SuggestionList } from './components/SuggestionList'
import { SuggestionItem } from './components/SuggestionItem'

function App() {
  return (
    <Layout>
      <SuggestionList>
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
      </SuggestionList>
    </Layout>
  )
}

export default App
