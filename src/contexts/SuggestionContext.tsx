import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import axios from 'axios'

import { SuggestionData } from '../models/Suggestion'

type SuggestionProviderProps = {
  children: ReactNode
}

type SuggestionContextProps = {
  suggestions: SuggestionData[]
  createSuggestion: (data: CreateSuggestionData) => Promise<void>
}

export type CreateSuggestionData = {
  title: string
  description: string
}

export const SuggestionContext = createContext({} as SuggestionContextProps)

export function SuggestionProvider({ children }: SuggestionProviderProps) {
  const [suggestions, setSuggestions] = useState<SuggestionData[]>([])

  useEffect(() => {
    axios.get('/api/suggestions').then(({ data }) => {
      if (data.suggestions.length > 0) {
        setSuggestions(data.suggestions)
      }
    })
  }, [])

  const createSuggestion = async (data: CreateSuggestionData) => {
    const response = await axios.post('/api/suggestions', data)

    setSuggestions((prev) => [...prev, response.data])
  }

  return (
    <SuggestionContext.Provider value={{ suggestions, createSuggestion }}>
      {children}
    </SuggestionContext.Provider>
  )
}

export const useSuggestion = () => useContext(SuggestionContext)
