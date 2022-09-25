import React, { Fragment, Suspense, useEffect } from "react";
import { useRequest } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_MOVIES, FETCH_MOVIES } from "../../store/moviesReducer";
import { useInfiniteScroll } from "../../hooks";
import { INCREASE_PAGE } from "../../store/featuresReducer/featuresReducer";
import { ViewStateIndicator } from "../ui-components";

const MoviesGrid = React.lazy(() => import("./MoviesGrid"));

const MoviesContent = () => {
  const { data, loading, error, hasMore, fetchData } = useRequest();
  const dispatch = useDispatch();

  const {
    features: { featureType, showFavorites },
    favorites,
    movies,
  } = useSelector((state) => state);

  const results = data?.results;

  useEffect(() => {
    if (!results) {
      return;
    }
    dispatch({ type: FETCH_MOVIES, payload: results });
  }, [results, dispatch]);

  const { queryString } = useSelector((state) => state.features);

  useEffect(() => {
    fetchData(queryString);
  }, [fetchData, queryString]);

  useEffect(() => {
    // Clear movies when feature type changes
    dispatch({ type: CLEAR_MOVIES });
  }, [dispatch, error, featureType]);

  const lastItemRef = useInfiniteScroll({
    isLoading: loading,
    hasMore,
    onLoadMore: () => {
      // Increase page number on scroll
      dispatch({ type: INCREASE_PAGE });
    },
  });

  if (!movies.length && loading) {
    // to avoid flickering
    return <ViewStateIndicator loading />;
  }

  if (error) {
    return <ViewStateIndicator error={error} />;
  }

  return (
    <>
      {showFavorites ? (
        <>
          {favorites.length ? (
            <Suspense fallback={<ViewStateIndicator loading />}>
              <MoviesGrid movies={favorites} />
            </Suspense>
          ) : (
            <ViewStateIndicator warning={"No favorites yet"} />
          )}
        </>
      ) : (
        <>
          {results?.length ? (
            <Suspense fallback={<ViewStateIndicator loading />}>
              <MoviesGrid movies={movies} ref={lastItemRef} />
            </Suspense>
          ) : (
            <ViewStateIndicator warning={"No movies found"} />
          )}
        </>
      )}
    </>
  );
};

export default MoviesContent;
