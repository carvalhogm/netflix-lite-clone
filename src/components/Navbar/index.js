import React from "react";
import { NavbarContainer, Logo } from "./styles";
import { Link } from "react-router-dom";

export default () => {
  return (
    <NavbarContainer>
      <Link to="/">
        <Logo>
          <p>Netflix Lite</p>
        </Logo>
      </Link>
      <Link to="/">Home</Link>
    </NavbarContainer>
  );
};
