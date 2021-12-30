import React from 'react'

export const Nav = () => (
  <nav className="h-16 py-2 bg-pink-500">
    <div className="flex justify-between items-center container mx-auto">
      <a
        href="https://www.twitch.tv/devlucaslopes"
        target="_blank"
        className="flex items-center"
        rel="noreferrer"
      >
        <img src="./avatar.png" alt="@devlucaslopes" className="w-12 mr-4" />
        Aprenda programação ao vivo!
      </a>
      <button
        type="button"
        className="p-1 text-slate-900 rounded-md border-2 border-slate-900 w-32 hover:bg-slate-900 hover:text-white"
      >
        Login
      </button>
      {/* <span className="text-slate-900 text-lg">Lucas Lopes</span> */}
    </div>
  </nav>
)
