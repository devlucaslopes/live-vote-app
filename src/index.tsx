import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

import './styles.css'
import { makeServer } from './services/miragejs/server'
import { SuggestionProvider } from './contexts/SuggestionContext'

import App from './App'

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' })
}

ReactDOM.render(
  <React.StrictMode>
    <SuggestionProvider>
      <App />
    </SuggestionProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
