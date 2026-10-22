import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import View from './View.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <View />
  </StrictMode>,
)
