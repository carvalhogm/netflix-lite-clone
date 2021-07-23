import styled from "styled-components";
import { getMovieBackground } from "../../utils";

export const MovieContainer = styled.div`
  width: 100%;
  height: 56vh;
  display: flex;
  align-items: center;
  ${(props) => getMovieBackground(props.movieId)}

  .movie-container {
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 600px;
    color: white;
    font-weight: 400;
    margin-left: 50px;
    text-align: left;

    .movie-title {
      margin: 0;
      margin-bottom: 20px;
      font-size: 36px;
    }

    .movie-info {
      display: flex;

      p:first-child {
        margin-right: 10px;
      }
    }
  }

`;
