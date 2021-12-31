import React, { useEffect } from 'react'
import axios from 'axios'

import { Layout } from './components/Layout'
import { SuggestionList } from './components/SuggestionList'
import { SuggestionItem } from './components/SuggestionItem'

function App() {
  useEffect(() => {
    axios.get('/api/suggestions').then((res) => console.log(res))
  }, [])

  const onVote = (id: number, votes: number) => console.log({ id, votes })

  return (
    <Layout>
      <SuggestionList>
        <SuggestionItem
          suggestion={{
            id: 1,
            title: 'Cursou de HTML',
            description: 'Gravar um curso de HTML para iniciantes',
            votes: 5
          }}
          onVote={onVote}
        />
      </SuggestionList>
    </Layout>
  )
}

export default App
