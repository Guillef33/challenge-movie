import React from 'react'

import { Link } from 'react-router-dom'

function MovieCard( { pelicula, baseURL } ) {
  return (
          <div>
            <h1 key={pelicula.id}>{pelicula.title}</h1>
            <img src={baseURL + pelicula.poster_path} alt='poster-path' />
            <p>{pelicula.vote_count}</p>
            <p>{pelicula.overview}</p>
            <p>{pelicula.release_date}</p>
            <Link to={`${pelicula.id}`}>Ir a mas informacion</Link>
          </div>  )
}

export default MovieCard