import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/Login/Login'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ListContainer from './components/List/ListContainer'
import MovieDetail from './components/List/MovieDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/listado' element={<ListContainer/>} />
      <Route path='/listado/:id' element={<MovieDetail/>} />

    </Routes>
    </BrowserRouter>

  )
}

export default App
