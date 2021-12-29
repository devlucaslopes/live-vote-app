import React from 'react'

import { Nav } from '../Nav'
import { Header } from '../Header'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen bg-slate-900">
      <Nav />
      <div className="container mx-auto py-4">
        <Header>Lista de votação</Header>

        {children}
      </div>
    </div>
  )
}
