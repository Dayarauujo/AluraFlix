import React from "react";
import logo from '../../assets/logo.png'
import { HeaderContainer, Logo, Navigation, NavLink } from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Logo src={logo} alt="Alura Flix Logo" />
      </div>
      <Navigation>
        <NavLink isSpecial to="/">Home</NavLink>
        <NavLink to="/novo-video">Novo Vídeo</NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;