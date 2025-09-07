import React from 'react';
import { useParams } from 'react-router-dom';

const MovieView = (props) => {
  const { id } = useParams();
  const movie = props.movies.find(m => m.id === Number(id));

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={movie.link}
        title={movie.title}
        allowFullScreen
      ></iframe>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieView;