import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom'

function MovieDetail() {

    let movie_id = useParams();

    const [movie, setMovie] = useState([]);

    const getLatestMovies = () => {
        useEffect ( () => {
            axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=2537ae3e68852b1452859cf56773a0b4`)
            .then(res => setMovie(res.data))
  }, [])
  }

  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail