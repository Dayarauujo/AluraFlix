import styled from "styled-components";

export const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  padding: 230px 40px 100px 40px;
  position: relative;
  box-shadow: 0px 0px 1rem 0.25rem ${({ $color }) => $color} inset;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const BannerBackground = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  z-index: -1;
  object-fit: cover;
  filter: brightness(0.6) blur(2px);
`;

export const BannerInfo = styled.div`
  color: #f5f5f5;

  span {
    background-color: ${({ $color }) => $color};
    border-radius: 12px;
    display: inline-block;
  }
  h1 {
    padding: 16px;
    font-size: 48px;
    font-weight: 800;
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

  @media (max-width: 1200px) {
    h1 {
      padding: 8px;
      font-size: 32px;
    }

    h2 {
      font-size: 28px;
    }
  }
`;

export const BannerVideo = styled.div`
  width: 640px;
  height: 360px;
  border-radius: 8px;
  box-shadow: 0px 0px 0.75rem 0.25rem ${({ $color }) => $color};
`;
