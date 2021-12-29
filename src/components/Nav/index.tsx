import React from 'react'

export const Nav = () => (
  <nav className="p-4 bg-pink-500">
    <div className="flex justify-between items-center container mx-auto">
      <a href="#">Logo da twitch</a>
      <button
        type="button"
        className="p-1 text-slate-900 rounded-md border-2 border-slate-900 w-16 hover:bg-slate-900 hover:text-white"
      >
        Login
      </button>
      {/* <span className="text-slate-900 text-lg">Lucas Lopes</span> */}
    </div>
  </nav>
)
