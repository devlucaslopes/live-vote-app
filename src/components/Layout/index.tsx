import React from 'react'

import { Nav } from '../Nav'
import { Header } from '../Header'
import { Footer } from '../Footer'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="h-full bg-slate-900">
        <Nav />
        <div className="h-screen container mx-auto py-4">
          <Header>Lista de votação</Header>

          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}
