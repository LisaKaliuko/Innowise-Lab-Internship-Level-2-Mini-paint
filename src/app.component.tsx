import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Router } from '@components/router';
import { useTypedSelector } from '@hooks/use-typed-selector.hook';
import { selectCreativeTheme } from '@selectors/auth.selectors';
import { FirstTheme, SecondTheme } from '@theme/index';

const AppComponent: FC = (): JSX.Element => {
  const creativeTheme = useTypedSelector(selectCreativeTheme);

  return (
    <ThemeProvider theme={creativeTheme ? SecondTheme : FirstTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppComponent;
