import React from 'react'

export const Footer = () => (
  <footer className="h-8 py-1 bg-pink-500">
    <div className="flex justify-center" data-testid="footer-content">
      <a
        href="http://twitch.tv/devlucaslopes"
        target="_blank"
        rel="noreferrer"
        className="text-slate-900"
      >
        Criado por @devlucaslopes
      </a>
    </div>
  </footer>
)
