import React from 'react';
import propTypes from 'prop-types';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        imgUrl={movie.imgUrl}
        imdbUrl={movie.imdbUrl}
        title={movie.title}
        description={movie.description}
        key={movie.imdbId}
      />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      imgUrl: propTypes.string.isRequired,
      imdbUrl: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
      imdbId: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
