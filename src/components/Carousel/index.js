import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CategoryContainer, MovieCardStyle } from "./styles";
import { Button } from "../common/Button";
import { AppContext } from "../../App";
import { requestMovies } from "../../services/api";
import _ from "lodash"
import Spinner from "../common/Spinner";

const MovieCard = ({ movie, index, categoryIndex, globalState, setGlobalState }) => {
  const router = useHistory();
  const categoryList = document.querySelector(
    `#category-list-${categoryIndex}`
  );
  let pos = {};

  const mouseDownHandler = (event) => {
    event.preventDefault();
    pos = {
      left: categoryList.scrollLeft,
      x: event.clientX,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const requestMoviesHandler = _.debounce(async () => {
    const response = await requestMovies({ limit: globalState.categories[categoryIndex].movies.length + 6, category: movie.category });
    globalState.categories[categoryIndex].movies = [...response.moviesData.data]

    if (response) {
      // Timeout will be used only to make the loader spinner visible
      setTimeout(() => {
        setGlobalState({
          ...globalState
        })
      }, 2000);
    }
  }, 2100, {
    leading: true,
    trailing: false
  });



  const mouseMoveHandler = function (event) {
    const dx = event.clientX - pos.x;
    categoryList.scrollLeft = pos.left - dx;
    if (
      categoryList.offsetWidth + categoryList.scrollLeft >=
      categoryList.scrollWidth
    ) {
      requestMoviesHandler()
    }
  };

  const mouseUpHandler = function () {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  return (
    <MovieCardStyle
      index={movie.id}
      onMouseDown={mouseDownHandler}
    >
      <p>{movie.name}</p>
      <Button
        type="button"
        onClick={() => {
          setGlobalState({
            ...globalState,
            clickedMovie: movie
          })
          router.push(`/${movie.id}`)}
        }
      >
        Info
      </Button>
    </MovieCardStyle>
  );
};

export default ({ category, categoryIndex }) => {
  const [items, setItems] = useState([]);
  const { state: globalState, setState: setGlobalState} = useContext(AppContext);

  useEffect(() => {
    setItems(
      category.movies.map((movie, index) => (
        <MovieCard
          key={movie.id}
          {...{
            movie,
            index,
            categoryIndex,
            globalState,
            setGlobalState
          }}
        />
      ))
    );
  }, [category]);

  return (
    <CategoryContainer>
      <h3>{category.key}</h3>
      <div
        id={`category-list-${categoryIndex}`}
        style={{ display: "flex", overflowX: "hidden" }}
      >
        {items}
        <Spinner style={{ top: 50 }} />
      </div>
    </CategoryContainer>
  );
};
