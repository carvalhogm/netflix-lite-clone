import axios from "axios";

export const requestMovies = async ({ limit, category }) => {
  const response = await axios.get(
    `http://localhost:3030/movies?limit=${limit}${
      category ? `&category=${category}` : ""
    }`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  if (response.data) {
    return {
      moviesData: response.data,
      limit: limit + 3,
    };
  } else {
    return null;
  }
};
