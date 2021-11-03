import { createGlobalStyle } from 'styled-components';

import { DEVICES } from './shared/constants/devices-sizes.constants';

export const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100%;

    @media ${DEVICES.laptop} {
      height: 100%;
    }
  }

  body {
    margin: 0px; 
    height: 100%;
    font-family: 'Work Sans', sans-serif;
  }

  #root {
    display: flex; 
    flex-direction: column; 
    height: 100%;
  }
`;
