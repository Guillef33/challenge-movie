import React, { useState } from 'react'

function Search( { movies, searchItems } ) {

  return (
         <div
        style={{
          marginTop: "150px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <input
          id="standard-basic"
          label="Search"
          variant="standard"
          onChange={(e) => searchItems(e.target.value)}
          name="searchBox"
          placeholder='Buscar ahora y filtrar'
        />
      </div>
  )
}

export default Search