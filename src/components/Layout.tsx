import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen bg-slate-900">
      <div className="container mx-auto py-4">
        <h1 className="text-4xl text-white">Lista de votação</h1>

        {children}
      </div>
    </div>
  )
}
