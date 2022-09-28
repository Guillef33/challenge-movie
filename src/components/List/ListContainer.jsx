import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

import './List.css'

import axios from 'axios'

function ListContainer() {
  let navigate = useNavigate();

  const [latest, setLatest] =  useState([])

  const [generos, setGeneros] =  useState([])

  useEffect ( () => {

  const token = localStorage.getItem('token')
 
  if (token === null ) {
    navigate('/')
  }
  }, [])

// const getGeneros = () => {
  useEffect ( () => {
   axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=2537ae3e68852b1452859cf56773a0b4')
   .then(res => setGeneros(res.data.genres))
  }, [])
  // }

  // const getLatestMovies = () => {
useEffect ( () => {
   axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2537ae3e68852b1452859cf56773a0b4&sort_by=release_date.desc')
   .then(res => setLatest(res.data.results))
  }, [])
  // }

  console.log(latest)

  const baseURL = "https://image.tmdb.org/t/p/w500/"

      let id = useParams();


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

      <div  className='container-list'>
         {latest.map(pelicula => {
        return (
          <div>
            <h1 key={pelicula.id}>{pelicula.title}</h1>
            <img src={baseURL + pelicula.poster_path} alt='poster-path' />
            <p>{pelicula.vote_count}</p>
            <p>{pelicula.overview}</p>
            <p>{pelicula.release_date}</p>
            <Link to={`${pelicula.id}`}>Ir a mas informacion</Link>

          </div>
        )
         })} 
      </div>
 
    </>
  )
}

export default ListContainer