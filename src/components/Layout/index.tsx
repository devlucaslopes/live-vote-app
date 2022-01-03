import React from 'react'

import { Nav } from '../Nav'
import { Header } from '../Header'
import { NewSuggestion } from '../NewSuggestion'
import { useState } from 'react'
import { Footer } from '../Footer'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full bg-slate-900 relative">
      <Nav />
      <div className="h-[calc(100vh-6rem)] container mx-auto py-4">
        <Header>Próximos conteúdos</Header>

        {children}
      </div>
      <Footer />
      <NewSuggestion />
    </div>
  )
}
