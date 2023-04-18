import React from 'react'
import ReactDOM from 'react-dom/client'
// en el vídeo lo importa como {JournalApp}
import JournalApp from './JournalApp'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store'
// import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
         <JournalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
