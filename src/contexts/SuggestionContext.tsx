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

export type CreateSuggestionData = {
  title: string
  description: string
}

export type AddVoteProps = {
  id: string
}

type SuggestionContextProps = {
  suggestions: SuggestionData[]
  hasError: boolean
  newSuggestionIsVisible: boolean
  createSuggestion: (data: CreateSuggestionData) => Promise<void>
  addVote: (data: AddVoteProps) => Promise<void>
  toggleNewSuggestion: () => void
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

  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setHasError(false)

    axios
      .get('/api/suggestions')
      .then(({ data }) => {
        setSuggestions(data.suggestions)
      })
      .catch((error) => {
        setHasError(true)
      })

    return () => setSuggestions([])
  }, [])

  const createSuggestion = async (data: CreateSuggestionData) => {
    setHasError(false)

    try {
      const {
        data: { suggestion }
      } = await axios.post('/api/suggestions', data)

      setSuggestions((prev) => [...prev, { ...suggestion, votes: 0 }])
    } catch (error) {
      setHasError(true)
    }
  }

  const addVote = async ({ id }: AddVoteProps) => {
    setHasError(false)

    try {
      const { data } = await axios.put(`api/suggestions/${id}`)

      const updatedSuggestion = data.suggestion

      setSuggestions((prev) =>
        prev.map((suggestion) =>
          suggestion.id === id ? updatedSuggestion : suggestion
        )
      )
    } catch (error) {
      setHasError(true)
    }
  }

  const toggleNewSuggestion = () => setNewSuggestionIsVisible((prev) => !prev)

  return (
    <SuggestionContext.Provider
      value={{
        suggestions,
        hasError,
        createSuggestion,
        addVote,
        newSuggestionIsVisible,
        toggleNewSuggestion
      }}
    >
      {children}
    </SuggestionContext.Provider>
  )
}

export const useSuggestion = () => useContext(SuggestionContext)
