import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import HeaderComponent from './components/Header/header.component';
import Loader from './components/Loader/loader.component';
import LoginRoute from './routes/login.route';
import RegisterRoute from './routes/register.route';
import PrivateRoute from './routes/private.route';
import MainPageComponent from './pages/MainPage/main.page.component';
import PaintComponent from './pages/Paint/paint.component';
import FooterComponent from './components/Footer/footer.component';
import { PATHES } from './constants/constants';
import { BlueTheme } from './theme';

const AppComponent: FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={BlueTheme}>
      <Router>
        <HeaderComponent />
        <Loader />
        <Switch>
          <Route path={PATHES.MAIN_PAGE} exact component={MainPageComponent} />
          <LoginRoute path={PATHES.LOGIN} />
          <RegisterRoute path={PATHES.REGISTER} />
          <PrivateRoute path={PATHES.PAINT}>
            <PaintComponent />
          </PrivateRoute>
        </Switch>
        <FooterComponent />
      </Router>
    </ThemeProvider>
  );
};

export default AppComponent;
