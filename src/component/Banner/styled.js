import styled from "styled-components";

export const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  padding: 230px 40px 100px 40px;
  position: relative;
`;

export const BannerBackground = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  z-index: -1;
  filter: brightness(0.6) blur(2px);
`;

export const BannerInfo = styled.div`
  color: #f5f5f5;

  h1 {
    font-size: 48px;
    background-color: #6bd1ff;
    font-weight: 800;
    display: inline;
    padding: 16px;
    border-radius: 12px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 46px;
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 0;
  }

  p {
    font-size: 18px;
    font-weight: 200;
    margin-top: 10px;
  }
`;

export const BannerImage = styled.img`
  width: 646px;
  height: 333px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 0px 0.75rem 0.25rem #2271d1;
`;
