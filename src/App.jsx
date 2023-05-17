import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </ThemeContextProvider>
  )
}

export default App