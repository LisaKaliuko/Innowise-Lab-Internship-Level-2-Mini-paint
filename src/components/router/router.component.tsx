import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import { Header } from '../header';
import { Footer } from '../footer';
import { MainPage } from '../../pages/main-page';
import { Paint } from '../../pages/paint';
import { Loader } from '../loader';
import { AppRouteNames } from '../../shared/constants/app-route-names.constants';
import { PrivateRoute } from '../../shared/components/private-route';
import { useTypedSelector } from '../../core/hooks/use-typed-selector.hook';
import { selectUser } from '../../core/selectors/auth.selectors';
import { Form } from '../form';
import {
  LoginFormData,
  RegisterFormData,
} from '../../shared/constants/forms-data.constants';

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
      </Switch>
      <Footer />
    </>
  );
};

export default RouterComponent;
