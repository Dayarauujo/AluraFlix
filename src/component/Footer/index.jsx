import React from "react";
import { FooterContainer, Logo } from "./styled";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="Alura Flix Logo" />

      <p>Desenvolvido por: Dayane Araujo</p>
    </FooterContainer>
  );
};

export default Footer;
