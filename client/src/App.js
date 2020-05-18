//import React items
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

//import files
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then((response) => {
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  return (
    <div>
      <SavedList list={savedList} />

      {/* Switch added */}
      <Switch>
        {/* Route 1 */}
        <Route exact path='/'>
          <MovieList movies={movieList} />
        </Route>

        {/* Route 2 */}
        <Route path='/movies/:id'>
          <Movie movies={movieList} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
