import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProviderAuth from './Components/Provider/ProviderAuth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderAuth>
      <App />
    </ProviderAuth>
  </React.StrictMode>,
)
