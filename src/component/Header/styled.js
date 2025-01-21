import styled from "styled-components";
import { Link } from "react-router";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #141414;
  .nav-mobile {
    display: none;
  }

  @media (max-width: 1000px) {
    .nav-fullscreen {
      display: none;
    }
    .nav-mobile {
      display: flex;
    }
  }
`;

export const Logo = styled.img`
  height: 40px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  transition: background-color 0.3s;
  border: ${({ $isSpecial }) =>
    $isSpecial ? "2px solid #2271D1" : "2px solid #F5F5F5"};
  color: ${({ $isSpecial }) => ($isSpecial ? "#2271D1" : "#ffffff")};

  @media (max-width: 1000px) {
    ${({ $isSpecial }) => {
      if ($isSpecial) {
        return `
          border-radius: 30px;
          background-color: rgba(34, 113, 209, 0.24);
        `;
      }

      return `
         border: 0;
        `;
    }};
  }
`;
