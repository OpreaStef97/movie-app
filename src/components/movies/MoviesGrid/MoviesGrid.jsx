import MovieItem from "../MovieItem";
import classes from "./MoviesGrid.module.css";

const MoviesGrid = ({ movies }) => {
  return (
    <div className={classes.movies_grid}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesGrid;
