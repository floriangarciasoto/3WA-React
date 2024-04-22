import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import PersonnalContextProvider from './context/usePersonnalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonnalContextProvider>
      <Router>
        <App />
      </Router>
    </PersonnalContextProvider>
  </React.StrictMode>,
)
