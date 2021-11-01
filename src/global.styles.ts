import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0px; 
    height: 100%;
  }

  div {
    display: flex; 
    flex-direction: column; 
    height: 100%;
  }
`;
