import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MovieDetail from './components/List/MovieDetail'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/listado' element={<Home/>} />
      <Route path='/listado/:id' element={<MovieDetail/>} />

    </Routes>
    </BrowserRouter>

  )
}

export default App
