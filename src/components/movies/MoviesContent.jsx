import MoviesGrid from "./MoviesGrid";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { fetchMovies } from "../../store/moviesReducer";
import { LoadingSpinner } from "../ui-components";

const MoviesContent = () => {
  const { movies, status } = useSelector((state) => state);

  const dispatch = useDispatch();

  console.log({ movies, status });

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (status.loading) {
    return <LoadingSpinner />;
  }

  if (status.error) {
    return <p>{status.error}</p>;
  }

  return (
    <Fragment>
      <MoviesGrid movies={movies.movies} />
    </Fragment>
  );
};

export default MoviesContent;
