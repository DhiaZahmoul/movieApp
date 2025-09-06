import React from 'react'
import MovieCard from './movieCard'
const movieList = (props) => {
  return (
    // Rendering the list of movies using MovieCard component
    <>
      {props.movies.map(movie => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </>
  )
}

export default movieList