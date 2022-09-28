import React,  { useContext }  from 'react'

import { Link } from 'react-router-dom'

import './MovieCard.css';
import { MovieContext } from '../Context/MovieContext';

function MovieCard( { pelicula, baseURL } ) {

 const {
        isFavorite,
        setIsFavorite,
        favoriteList,
        setFavoriteList
  } = useContext(MovieContext);

  console.log(isFavorite)

   const addFavorite = ( movie ) => {
        setIsFavorite(true)
        console.log(movie)
        favoriteList.push(movie)
     }

     console.log(favoriteList)

  return (
        <div>
        <img src={baseURL + pelicula.poster_path} alt='poster-path' />
        <h2 key={pelicula.id}>{pelicula.title}</h2>
        <p>{pelicula.vote_count}</p>
        <p>{pelicula.overview}</p>
        <p>{pelicula.release_date}</p>
        <button className={isFavorite ? "button-favorite-active" : "button-favorite-disable"} onClick={(e) => addFavorite(pelicula)}>Favorite</button>
        <Link to={`${pelicula.id}`}>Ir a mas informacion</Link>
        </div>  
          )
}

export default MovieCard