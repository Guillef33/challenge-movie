import { useState } from 'react'
import './App.css'
import AppRouter from './routes/AppRouter'
import MovieProvider from './components/Context/MovieContext'


function App() {

  return (
    <MovieProvider>
      <AppRouter />
    </MovieProvider>


  )
}

export default App
