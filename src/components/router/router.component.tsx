import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import { Header } from '../headerN';
import { Footer } from '../footerN';
import { MainPage } from '@pages/main-page';
import { Paint } from '@src/pages/paintN';
import { Loader } from '../loaderN';
import { Gallery } from '@pages/gallery';
import { AppRouteNames } from '@constants/app-route-names.constants';
import { PrivateRoute } from '@private-route/index';
import { useTypedSelector } from '@hooks/use-typed-selector.hook';
import { selectUser } from '@selectors/auth.selectors';
import { Form } from '../formN';
import {
  LoginFormData,
  RegisterFormData,
} from '@constants/forms-data.constants';

const RouterComponent: FC = (): JSX.Element => {
  const user = useTypedSelector(selectUser);
  return (
    <>
      <Header />
      <Loader />
      <Switch>
        <Route path={AppRouteNames.Home} exact component={MainPage} />
        <Route path={AppRouteNames.Login} exact>
          {!user ? (
            <Form formType={LoginFormData} />
          ) : (
            <Redirect to={AppRouteNames.Paint} />
          )}
        </Route>
        <Route path={AppRouteNames.Register} exact>
          {!user ? (
            <Form formType={RegisterFormData} />
          ) : (
            <Redirect to={AppRouteNames.Paint} />
          )}
        </Route>
        <PrivateRoute path={AppRouteNames.Paint}>
          <Paint />
        </PrivateRoute>
        <PrivateRoute path={AppRouteNames.Gallery}>
          <Gallery />
        </PrivateRoute>
      </Switch>
      <Footer />
    </>
  );
};

export default RouterComponent;
