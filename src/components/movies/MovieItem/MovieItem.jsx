import classes from "./MovieItem.module.css";
import { Heart, Info, XCircle } from "phosphor-react";
import { useState } from "react";
import MovieInfo from "../MovieInfo";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../../../store/favoritesReducer";

const checkIfFavorite = (favorites, movie) => {
  return favorites.some((favorite) => favorite.id === movie.id);
};

const MovieItem = React.forwardRef(({ movie }, ref) => {
  const { title, poster_path } = movie;

  const [expandInfo, setExpandInfo] = useState(false);

  const {
    favorites,
    features: { showFavorites },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleExpandInfo = () => {
    setExpandInfo(!expandInfo);
  };

  const handleAddToFavorites = () => {
    if (!checkIfFavorite(favorites, movie)) {
      dispatch({ type: ADD_FAVORITE, payload: movie });
      return;
    }
    dispatch({ type: REMOVE_FAVORITE, payload: movie });
  };

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : "placeholder.png";

  return (
    <div className={classes.movie_item} ref={ref}>
      <img className={classes.movie_image} src={posterUrl} alt={title} />
      <button onClick={handleExpandInfo} className={classes.info_button}>
        {expandInfo ? <XCircle /> : <Info />}
      </button>
      <button
        onClick={handleAddToFavorites}
        className={classes.favorite_button}
      >
        {!showFavorites ? (
          <Heart
            weight={checkIfFavorite(favorites, movie) ? "fill" : "regular"}
          />
        ) : (
          <XCircle />
        )}
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
});

export default MovieItem;
