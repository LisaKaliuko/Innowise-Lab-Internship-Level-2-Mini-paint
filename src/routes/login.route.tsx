import React, { FC } from 'react';
import { Route, Redirect } from 'react-router';

import { Form } from '../components/form';
import { useTypedSelector } from '../core/hooks/use-typed-selector.hook';
import { selectUser } from '../core/selectors/selectors';
import { LoginFormData } from '../shared/constants/forms-data.constants';
import { AppRouteNames } from '../shared/constants/app-route-names.constants';

interface LoginRouteProps {
  path: string;
}

const LoginRoute: FC<LoginRouteProps> = ({ path }): JSX.Element => {
  const user = useTypedSelector(selectUser);

  return (
    <Route path={path} exact>
      {!user ? (
        <Form formType={LoginFormData} />
      ) : (
        <Redirect to={AppRouteNames.Paint} />
      )}
    </Route>
  );
};

export default LoginRoute;
