import React from 'react';
import './MovieCard.scss';

import propTypes from 'prop-types';

export const MovieCard = ({ imgUrl, imdbUrl, title, description }) => (
  <>
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            // eslint-disable-next-line max-len
            src={imgUrl}
            alt="Film logo"
          />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="images/imdb-logo.jpeg" alt="imdb" />
            </figure>
          </div>

          <div className="media-content">
            <p className="title is-8">{title}</p>
          </div>
        </div>

        <div className="content">
          {description}
          <br />
          <a href={imdbUrl}>IMDB</a>
        </div>
      </div>
    </div>
  </>
);

MovieCard.propTypes = {
  imgUrl: propTypes.string.isRequired,
  imdbUrl: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};
