import React, { FC } from 'react';
import { Route, Redirect } from 'react-router';

import { Form } from '../components/form';
import { useTypedSelector } from '../core/hooks/use-typed-selector.hook';
import { selectUser } from '../core/selectors/selectors';
import { RegisterFormData } from '../shared/constants/forms-data.constants';
import { AppRouteNames } from '../shared/constants/app-route-names.constants';

interface RegisterRouteProps {
  path: string;
}

const RegisterRoute: FC<RegisterRouteProps> = ({ path }): JSX.Element => {
  const user = useTypedSelector(selectUser);

  return (
    <Route path={path} exact>
      {!user ? (
        <Form formType={RegisterFormData} />
      ) : (
        <Redirect to={AppRouteNames.Paint} />
      )}
    </Route>
  );
};

export default RegisterRoute;
