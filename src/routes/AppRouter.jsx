import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { MovieContext } from '../components/Context/MovieContext';


import Login from '../components/Login/Login'
import MovieDetail from '../components/List/MovieDetail'
import Home from '../pages/Home'

function AppRouter() {

   const {
    movies, 
    setMovies

  } = useContext(MovieContext);

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/listado' element={<Home movies={movies} setMovies={setMovies}/>} />
      <Route path='/listado/:id' element={<MovieDetail/>} />    
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter

