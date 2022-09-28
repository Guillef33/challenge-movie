import React, { useState, createContext, useEffect } from "react";

export const MovieContext = createContext(null);

const MovieProvider = (props) => {

    const [moviesResults, setMoviesResults] = useState([])
    const [showResults, setShowResults] = useState(false);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        console.log(searchValue)
        if (searchInput !== "") {
        const filteredMovies = movies.filter((movie) =>
            movie.name.first
            .toLocaleLowerCase()
            .includes(searchInput.toLocaleLowerCase())
        );
        setMoviesResults(filteredMovies);
        showResults(true)
        } else {
        setMoviesResults(movies);
        }
    };

    console.log(showResults)

  return (
    <MovieContext.Provider
      value={{
        searchItems,
        moviesResults,
        setMoviesResults,
        showResults,
        setShowResults
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
