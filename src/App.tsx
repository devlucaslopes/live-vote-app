import React from 'react'

import { Layout } from './components/Layout'
import { SuggestionItem } from './components/SuggestionItem'
import { SuggestionList } from './components/SuggestionList'

const DATA = [
  {
    id: 1,
    votes: 10,
    title: 'TDD com ReactJS',
    description: 'Criar uma aplicação do zero aplicando TDD no FrontEnd'
  },
  {
    id: 2,
    votes: 5,
    title: 'HTML e CSS',
    description: 'Criar um curso básico de HTML e CSS'
  }
]

function App() {
  return (
    <Layout>
      <SuggestionList>
        {DATA.map((suggestion) => (
          <SuggestionItem key={suggestion.id} {...suggestion} />
        ))}
      </SuggestionList>
    </Layout>
  )
}

export default App
