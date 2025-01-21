import styled from "styled-components";

export const EditVideoContainer = styled.div`
  color: white;
  display: flex;
  background-color: #03122f;
  flex-direction: column;
  padding: 70px 100px;
  border-radius: 15px;
  border: 4px solid #6bd1ff;
  z-index: 2;
  position: relative;

  @media (max-width: 1000px) {
    padding: 50px 20px;
  }

  h1,
  h2 {
    text-align: center;
  }

  h1 {
    font-size: 60px;
    margin-bottom: 0;
    color: #2271d1;
    text-align: start;
  }

  h3 {
    font-size: 36px;
    font-weight: 700;
    border-top: 4px solid #262626;
    border-bottom: 4px solid #262626;
    padding: 12px 0;
    margin: 0;
  }

  form > div {
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 40px;
  }

  form input,
  textarea,
  select {
    border: 2px solid #2271d1;
  }

  form > div ~ div {
    display: flex;
    justify-content: space-between;
    gap: 200px;
    button {
      flex: 1;
    }
  }
`;

export const Button = styled.button`
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 20px;
  background: transparent;
  border: ${({ $isSpecial }) =>
    $isSpecial ? "2px solid #2271D1" : "2px solid #F5F5F5"};
  color: ${({ $isSpecial }) => ($isSpecial ? "#2271D1" : "#ffffff")};
  cursor: pointer;
`;

export const CloseContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  border: 2px solid white;
  border-radius: 50%;
  line-height: 10px;
  padding: 2px;
  cursor: pointer;
`;
