import React from 'react'

export const Nav = () => (
  <nav className="h-16 py-2 bg-pink-500">
    <div className="container mx-auto">
      <a
        href="https://www.twitch.tv/devlucaslopes"
        target="_blank"
        className="flex items-center"
        rel="noreferrer"
      >
        <img src="./avatar.png" alt="@devlucaslopes" className="w-12 mr-4" />
        Aprenda programação ao vivo!
      </a>
    </div>
  </nav>
)
