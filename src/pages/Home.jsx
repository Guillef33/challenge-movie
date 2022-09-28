import React, { useState, useEffect, useContext }from 'react'
import Search from '../components/Search/Search';
import ListContainer from '../components/List/ListContainer';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { MovieContext } from '../components/Context/MovieContext';

function Home() {
   const {
    searchItems,        
    moviesResults,
    setMoviesResults,
    showResults,
    setShowResults,
        searchInput,
        setSearchInput,
        movies, 
        setMovies

  } = useContext(MovieContext);


  let navigate = useNavigate();


  useEffect ( () => {

  const token = localStorage.getItem('token')
 
  if (token === null ) {
    navigate('/')
  }
  }, [])

  return (
    <>
    <Search movies={movies} searchItems={searchItems} setSearchInput={setSearchInput}/>

    {showResults ? 
    (     <ListContainer   movies={moviesResults} />
) : 
    (     <ListContainer   movies={movies} />
)
}
    </> 
  )
}

export default Home