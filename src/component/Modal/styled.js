import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  inset: 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(3, 18, 47, 0.49);
`;
