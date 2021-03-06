import styled, { keyframes } from 'styled-components';

export const LoaderContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 9999;
  background-color: ${(props) => props.theme.loader.bgColor};
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderItem = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 40%;
  left: 50%;
  border: 16px solid ${(props) => props.theme.loader.overlayColor};
  border-top: 16px solid ${(props) => props.theme.loader.spinColor};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
