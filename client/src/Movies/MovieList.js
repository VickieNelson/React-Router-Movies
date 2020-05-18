import React from "react";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  console.log("props are in movielist", props);

  return (
    <div className='movie-list'>
      {props.movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    // Movie card should be a Link that 1) direct the user to the /movies/{id of movie here} URL, 2)where :id is the id of the individual movie.

    //when user clicks card they should be taken to /movies/{id of movie} to see details
    //modify LIne 13 in Movie.js to accept the correct id of selected movie
    // add functionality of home button on SavedList to navigate home

    // add 'Link to = {}
    <Link to={`/movies/${movie.id}`}>
      <div className='movie-card'>
        <h2>{title}</h2>
        <div className='movie-director'>
          Director: <em>{director}</em>
        </div>
        <div className='movie-metascore'>
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map((star) => (
          <div key={star} className='movie-star'>
            {star}
          </div>
        ))}
      </div>
    </Link>
  );
}

export default MovieList;
