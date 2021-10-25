import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import LoginRoute from './routes/login.route';
import RegisterRoute from './routes/register.route';
import { PrivateRoute } from './shared/components/private-route';
import { MainPage } from './pages/main-page';
import { Paint } from './pages/paint';
import { Loader } from './components/loader';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { AppRouteNames } from './shared/constants/app-route-names.constants';
import { BlueTheme } from './theme';

const AppComponent: FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={BlueTheme}>
      <Router>
        <Header />
        <Loader />
        <Switch>
          <Route path={AppRouteNames.Home} exact component={MainPage} />
          <LoginRoute path={AppRouteNames.Login} />
          <RegisterRoute path={AppRouteNames.Register} />
          <PrivateRoute path={AppRouteNames.Paint}>
            <Paint />
          </PrivateRoute>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default AppComponent;
