import React, { useState } from 'react'

function Search( { movies, searchItems } ) {

  return (
         <div>
        <input
          label="Search"
          onChange={(e) => searchItems(e.target.value)}
          name="searchBox"
          placeholder='Buscar ahora y filtrar'
        />
      </div>
  )
}

export default Search