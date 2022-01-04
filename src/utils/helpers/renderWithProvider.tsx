import React from 'react'
import { render } from '@testing-library/react'

import { SuggestionData } from '../../models/Suggestion'
import { SuggestionProvider } from '../../contexts/SuggestionContext'

type RenderWithProviderProps = {
  visible?: boolean
  suggestions?: SuggestionData[]
}

export const renderWithProvider = (
  children: React.ReactNode,
  mock?: RenderWithProviderProps
) => render(<SuggestionProvider mock={mock}>{children}</SuggestionProvider>)
