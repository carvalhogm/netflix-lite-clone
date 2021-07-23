import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  position: sticky;
  height: 70px;
  background: rgb(0,0,0);
  background: -moz-linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(32,32,32,1) 100%);
  background: -webkit-linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(32,32,32,1) 100%);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(32,32,32,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#202020",GradientType=1);
  border-bottom: 1px solid #8484842e;
  top: 0;
  z-index: 100;

  p {
    margin: 0;
  }

  a {
    outline: none;
    text-decoration: none;
    font-weight: 500;

    :hover {
      color: red;
    }

    :first-child {
      padding: 10px 40px;
    }

    :not(:first-child) {
      color: #c5c5c5;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  position: relative;
  color: red;
`;
