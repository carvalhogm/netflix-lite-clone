import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  transition: 0.2s all;
  font-weight: 500;
  border-radius: 4px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  position: absolute;
  right: 0;
  bottom: 0;
  color: grey;
  cursor: pointer;
  background: none;
  user-select: none;

  :hover {
    color: white;
    transform: scale(1.05);
  }
`;
