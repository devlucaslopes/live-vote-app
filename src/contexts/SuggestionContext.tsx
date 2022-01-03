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
  mock?: {
    visible?: boolean
    suggestions?: SuggestionData[]
  }
}

type SuggestionContextProps = {
  suggestions: SuggestionData[]
  newSuggestionIsVisible: boolean
  createSuggestion: (data: CreateSuggestionData) => Promise<void>
  toggleNewSuggestion: () => void
}

export type CreateSuggestionData = {
  title: string
  description: string
}

export const SuggestionContext = createContext({} as SuggestionContextProps)

export function SuggestionProvider({
  children,
  mock
}: SuggestionProviderProps) {
  const [suggestions, setSuggestions] = useState<SuggestionData[]>(
    () => mock?.suggestions || []
  )
  const [newSuggestionIsVisible, setNewSuggestionIsVisible] = useState(
    () => mock?.visible || false
  )

  useEffect(() => {
    axios.get('/api/suggestions').then(({ data }) => {
      setSuggestions(data.suggestions)
    })
  }, [])

  const createSuggestion = async (data: CreateSuggestionData) => {
    const {
      data: { suggestion }
    } = await axios.post('/api/suggestions', data)

    setSuggestions((prev) => [...prev, { ...suggestion, votes: 0 }])
  }

  const toggleNewSuggestion = () => setNewSuggestionIsVisible((prev) => !prev)

  return (
    <SuggestionContext.Provider
      value={{
        suggestions,
        createSuggestion,
        newSuggestionIsVisible,
        toggleNewSuggestion
      }}
    >
      {children}
    </SuggestionContext.Provider>
  )
}

export const useSuggestion = () => useContext(SuggestionContext)
