import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

import './List.css'

import axios from 'axios'
import Search from '../Search/Search';
import GenresList from './GenresList';
import MovieCard from './MovieCard';

function ListContainer( { movies }) {

  const baseURL = "https://image.tmdb.org/t/p/w300/"

  let id = useParams();

  return (

    <>
      <div  className='container-list'>
         {movies.map((pelicula, index) => {
        return (
            <MovieCard pelicula={pelicula} baseURL={baseURL} key={index} id={id}/>
        )
         })} 
      </div>
 
    </>
  )
}

export default ListContainer