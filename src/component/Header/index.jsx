import React from "react";
import { useLocation } from "react-router";
import { BiHome } from "react-icons/bi";
import { FiPlusCircle } from "react-icons/fi";
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
      <Navigation className="nav-fullscreen">
        <NavLink $isSpecial={isHomePage} to="/">
          Home
        </NavLink>
        <NavLink $isSpecial={!isHomePage} to="/novo-video">
          Novo Vídeo
        </NavLink>
      </Navigation>
      <Navigation className="nav-mobile">
        <NavLink $isSpecial={isHomePage} to="/">
          <BiHome size={isHomePage ? 20 : 40} /> {isHomePage && "Home"}
        </NavLink>
        <NavLink $isSpecial={!isHomePage} to="/novo-video">
          <FiPlusCircle size={!isHomePage ? 20 : 40} />{" "}
          {!isHomePage && "Novo Vídeo"}
        </NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
