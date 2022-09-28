import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom'
import axios from 'axios'


function MovieDetail(  ) {

    let { id } = useParams();

    const [movie, setMovie] = useState([]);

    useEffect ( () => {
   axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2537ae3e68852b1452859cf56773a0b4`)
   .then(res => setMovie(res.data))
  }, [])

  console.log(movie)

    const baseURL = "https://image.tmdb.org/t/p/w500/"


  return (
          <div>
            <h1 key={movie.id}>{movie.title}</h1>
            <img src={baseURL + movie.poster_path} alt='poster-path' />
            <p>{movie.vote_count}</p>
            <p>{movie.overview}</p>
            <p>{movie.release_date}</p> 
          </div>
  )
}

export default MovieDetail