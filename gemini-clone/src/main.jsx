import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ConetextProvider from './context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConetextProvider>
    <App />
  </ConetextProvider>,
)
