import React, { useState, useEffect, useContext }from 'react'
import Search from '../components/Search/Search';
import ListContainer from '../components/List/ListContainer';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { MovieContext } from '../components/Context/MovieContext';

function Home() {


  let navigate = useNavigate();

  const [movies, setMovies] =  useState([])

  useEffect ( () => {

  const token = localStorage.getItem('token')
 
  if (token === null ) {
    navigate('/')
  }
  }, [])

useEffect ( () => {
   axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2537ae3e68852b1452859cf56773a0b4&sort_by=release_date.desc')
   .then(res => setMovies(res.data.results))
  }, [])


  return (
    <>
    <Search movies={movies}/>
      <ListContainer   movies={movies} />


    {/* {showResults ? 
    (     <ListContainer   movies={moviesResults} showResults={showResults}/>
) : 
    (     <ListContainer   movies={movies} showResults={showResults}/>
)
} */}
    </>
  )
}

export default Home