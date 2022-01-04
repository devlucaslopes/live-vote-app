import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import axios, { AxiosError } from 'axios'

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
  votes: number
}

type SuggestionContextProps = {
  suggestions: SuggestionData[]
  newSuggestionIsVisible: boolean
  createSuggestion: (data: CreateSuggestionData) => Promise<void>
  addVote: (data: AddVoteProps) => Promise<Response>
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

  const addVote = async ({ id, votes }: AddVoteProps) => {
    try {
      const suggestion = await axios.put(`api/suggestions/${id}`, { votes })

      return new Response(200, {}, suggestion)
    } catch (error) {
      const { response } = error as AxiosError
      const status = response?.status || 400

      return new Response(status, {}, 'Something wrong')
    }
  }

  const toggleNewSuggestion = () => setNewSuggestionIsVisible((prev) => !prev)

  return (
    <SuggestionContext.Provider
      value={{
        suggestions,
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
