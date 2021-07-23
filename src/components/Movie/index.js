import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Carousel from "../Carousel";
import { MovieContainer } from "./styles";
import { AppContext } from "../../App";

export default () => {
  const router = useHistory();
  const { movieId } = useParams();
  const { state } = useContext(AppContext);

  let clickedCategoryIndex = 0
  const category = Object.keys(state.clickedMovie).length ? state.categories.find((category, index) => {
    clickedCategoryIndex = index;
    return category.key === state.clickedMovie.category
  }) : null;

  if(!category) router.push(`/`)

  return (
    <>
      <MovieContainer {...{ movieId }}>
        <div className="movie-container">
          <p className="movie-title">{state.clickedMovie.name}</p>
          <div className="movie-info">
            <p>Rating: {state.clickedMovie.rating}/5</p>
            <p>{state.clickedMovie.year}</p>
          </div>
          <p className="movie-description">{state.clickedMovie.description}</p>
        </div>
      </MovieContainer>
      {category && <Carousel {...{ category: { key: category.key, movies: category.movies}, categoryIndex: clickedCategoryIndex }} />}
    </>
  );
};
