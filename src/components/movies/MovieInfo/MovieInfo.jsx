import classes from "./MovieInfo.module.css";

const MovieInfo = ({ movie }) => {
  return (
    <div className={classes.movie_info}>
      <h2>{movie.title}</h2>
      <p>
        Release date: <br />
        {new Date(movie.release_date).toDateString()}
      </p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieInfo;
