import React, { useContext, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Carousel from "../Carousel";
import Spinner from "../common/Spinner";
import { AppContext } from "../../App";
import { requestMovies } from "../../services/api";

let categoryLimit = 3;

export default () => {
  const { state, setState: setGlobalState } = useContext(AppContext);

  const requestMoviesHandler = async (shouldTimeout = false) => {
    const response = await requestMovies({ limit: categoryLimit });
    if (response) {
      // Timeout will be used only to make the loader spinner visible
      setTimeout(() => {
        categoryLimit = response.limit;
        groupContentByCategory(response.moviesData);
      }, shouldTimeout ? 2000 : 0);
    }
  };

  useEffect(async () => {
    requestMoviesHandler();
  }, []);

  const groupContentByCategory = ({ data }) => {
    setGlobalState({
      ...state,
      categories: data.map((category, index) => {
        return {
          key: category.key,
          movies: state.categories[index] && state.categories[index].movies.length > category.movies.length ? state.categories[index].movies : category.movies
        }
      }),
    });
  };

  return state.categories.length ? (
    <div id="scrollableHome">
      <InfiniteScroll
        dataLength={state.categories.length}
        next={requestMoviesHandler.bind(this, true)}
        hasMore={state.categories.length < 18 ? true : false}
        style={{
          overflow: "hidden",
        }}
        loader={<Spinner />}
      >
        {state.categories.map((category, index) => {
          return (
            <Carousel
              key={index}
              {...{
                category: {
                  key: category.key,
                  movies: category.movies,
                },
                categoryIndex: index,
              }}
            />
          );
        })}
      </InfiniteScroll>
    </div>
  ) : null;
};
