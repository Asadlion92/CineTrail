import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ThemeContextProvider from './contexts/ThemeContext'
import Homepage from './pages/Homepage/Homepage'
import MovieDetails from './pages/MovieDetails/MovieDetails'
import Signup from './components/Users/Signup'

function App() {

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  //baseUrl is from API raw data website
  //We are going to pass the apiKey and baseUrl as props below so we can access it in many different components
  //So we basically passed the apiKey and baseUrl to the Homepage below

  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage apiKey={apiKey} baseUrl={baseUrl} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/moviedetails/:movieid' element={<MovieDetails apiKey={apiKey} baseUrl={baseUrl} />} />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}

export default App