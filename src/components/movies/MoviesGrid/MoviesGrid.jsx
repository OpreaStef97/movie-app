import React from "react";
import MovieItem from "../MovieItem";
import classes from "./MoviesGrid.module.css";

const MoviesGrid = React.forwardRef(({ movies }, ref) => {
  return (
    <div className={classes.movies_grid}>
      {movies.map((movie, idx) => (
        <MovieItem
          key={`${movie.id}-${idx}`}
          movie={movie}
          ref={movies.length === idx + 1 ? ref : undefined}
        />
      ))}
    </div>
  );
});

export default MoviesGrid;
