import classes from "./MovieItem.module.css";
import { Info, XCircle } from "phosphor-react";
import { useState } from "react";
import MovieInfo from "../MovieInfo";

const MovieItem = ({ movie }) => {
  const { title, poster_path } = movie;
  const posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  const [expandInfo, setExpandInfo] = useState(false);

  const handleExpandInfo = () => {
    setExpandInfo(!expandInfo);
  };

  return (
    <div className={classes.movie_item}>
      <img className={classes.movie_image} src={posterUrl} alt={title} />
      <button onClick={handleExpandInfo} className={classes.info_button}>
        {expandInfo ? <XCircle /> : <Info />}
      </button>
      <div
        className={classes.info_expand}
        style={{
          transition: "all .3s ease-in-out",
          ...(expandInfo ? { transform: "scale(50)" } : {}),
        }}
      />
      {expandInfo && <MovieInfo movie={movie} />}
    </div>
  );
};

export default MovieItem;
