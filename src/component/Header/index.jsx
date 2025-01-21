import React from "react";
import { useLocation } from "react-router";
import logo from "../../assets/logo.png";
import { HeaderContainer, Logo, Navigation, NavLink } from "./styled";

const Header = () => {
  const a = useLocation();
  const isHomePage = a.pathname === "/";
  return (
    <HeaderContainer>
      <div>
        <Logo src={logo} alt="Alura Flix Logo" />
      </div>
      <Navigation>
        <NavLink $isSpecial={isHomePage} to="/">
          Home
        </NavLink>
        <NavLink $isSpecial={!isHomePage} to="/novo-video">
          Novo Vídeo
        </NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
