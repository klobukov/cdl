import React from 'react'
import './Styles/index.scss'
import App from './components/App'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
