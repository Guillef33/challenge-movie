import React, { useState, useEffect } from 'react';

import axios from 'axios';



function GenresList() {

  const [generos, setGeneros] =  useState([]);


useEffect ( () => {
   axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=2537ae3e68852b1452859cf56773a0b4')
   .then(res => setGeneros(res.data.genres))
  }, [])
  
  return (
    <>
    <h1>Conoce todos nuestros generos</h1>
    <ul className='container-list'>
        {generos.map(genero => {
        return (
          <li key={genero.id}>{genero.name}</li>
        )
      })} 
    </ul>
    </>  )
}

export default GenresList;