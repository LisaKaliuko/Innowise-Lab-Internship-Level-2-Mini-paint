import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Router } from './components/router';
import { BlueTheme } from './theme';

const AppComponent: FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={BlueTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppComponent;
