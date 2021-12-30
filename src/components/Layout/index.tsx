import React from 'react'

import { Nav } from '../Nav'
import { Header } from '../Header'
import { NewSuggestion } from '../NewSuggestion'
import { useState } from 'react'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const [showNewSuggestion, setShowNewSuggestion] = useState(false)

  const handleNewSuggestion = () => setShowNewSuggestion(!showNewSuggestion)

  return (
    <div className="h-full bg-slate-900 relative">
      <Nav />
      <div className="h-[calc(100vh-4rem)] container mx-auto py-4">
        <Header openNewSuggestion={handleNewSuggestion}>
          Próximos conteúdos
        </Header>

        {children}
      </div>
      <NewSuggestion
        isVisible={showNewSuggestion}
        onClose={handleNewSuggestion}
      />
    </div>
  )
}
