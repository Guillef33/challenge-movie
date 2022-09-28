import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext(null);

const MovieProvider = (props) => {

    const [moviesResults, setMoviesResults] = useState([])
    const [showResults, setShowResults] = useState(false);
    const [searchInput, setSearchInput] = useState('')
    const [movies, setMovies] =  useState([])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        console.log(searchValue)
        if (searchInput !== "") {
        const filteredMovies = movies.filter((movie) =>
            movie.title
            .toLocaleLowerCase()
            .includes(searchInput.toLocaleLowerCase())
        );
        setMoviesResults(filteredMovies);
        setShowResults(true)
        } else {
        setMoviesResults(movies);
        }
    };

    useEffect ( () => {
   axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2537ae3e68852b1452859cf56773a0b4&sort_by=release_date.desc')
   .then(res => setMovies(res.data.results))
  }, [])




    console.log(showResults)

  return (
    <MovieContext.Provider
      value={{
        searchItems,
        moviesResults,
        setMoviesResults,
        showResults,
        setShowResults,
        searchInput,
        setSearchInput,
        movies,
        setMovies
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
