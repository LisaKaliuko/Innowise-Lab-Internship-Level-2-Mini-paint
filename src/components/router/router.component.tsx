import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import { Header } from '../header';
import { Footer } from '../footer';
import { MainPage } from '@pages/main-page';
import { Paint } from '@src/pages/paint';
import { Loader } from '../loader';
import { Gallery } from '@pages/gallery';
import { AppRouteNames } from '@constants/app-route-names.constants';
import { PrivateRoute } from '@private-route/index';
import { useTypedSelector } from '@hooks/use-typed-selector.hook';
import { selectUser } from '@selectors/auth.selectors';
import { Form } from '../form';
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
          {user ? <Paint /> : <Redirect to={AppRouteNames.Login} />}
        </PrivateRoute>
        <PrivateRoute path={AppRouteNames.Gallery}>
          {user ? <Gallery /> : <Redirect to={AppRouteNames.Login} />}
        </PrivateRoute>
      </Switch>
      <Footer />
    </>
  );
};

export default RouterComponent;
