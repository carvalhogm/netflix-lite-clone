import styled from 'styled-components';
import { getMovieBackground } from "../../utils"

export const CategoryContainer = styled.div`
  padding: 30px 30px;
  height: 250px;

  h3 {
    color: #cecece;
    text-align: left;
    margin-left: 10px;
  }
`;

export const MoviesContainer = styled.div`
  display: flex;
`;

export const MovieCardStyle = styled.div`
  height: 18rem;
  width: 97%;
  ${props => getMovieBackground(props.index)}
  background-size: cover;
  background-position: center;
  margin: 10px auto;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid var(--background);
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 500;
  font-size: 24px;
  min-width: 300px;
  height: 200px;
  margin-right: 10px;

  :last-child {
    margin-right: 0px;
  }

  p {
    color: white;
    user-select: none;
  }

  :hover {
    transition: all 0.2s;
    transform: scale(1.05);
    z-index: 10;
  }

  :active {
    cursor: grab;
  }
`;