import React from 'react'
import ReactDOM from 'react-dom/client'
// en el vídeo lo importa como {JournalApp}
import JournalApp from './JournalApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JournalApp />
  </React.StrictMode>,
)
