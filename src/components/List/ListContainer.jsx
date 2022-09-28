import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import axios, { Axios } from 'axios'

function ListContainer() {
  let navigate = useNavigate();

  const [latest, setLatest] =  useState([])

  const [generos, setGeneros] =  useState([])

  useEffect ( () => {

  const token = localStorage.getItem('token')
  // console.log(token)
 
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

  const getLatestMovies = () => {
    useEffect ( () => {
   axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2537ae3e68852b1452859cf56773a0b4')
   .then(res => setLatest(res.data))
  }, [])
  }



  console.log(generos)

  return (

    <>
    <h1>Conoce todos nuestros generos</h1>
    <ul>
        {generos.map(genero => {
        return (
          <li key={genero.id}>{genero.name}</li>
        )
      })} 
    </ul>
    </>
  )
}

export default ListContainer