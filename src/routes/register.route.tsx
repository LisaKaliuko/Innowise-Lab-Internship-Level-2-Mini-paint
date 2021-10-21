import React, { FC } from 'react';
import { Route, Redirect } from 'react-router';

import FormComponent from '../components/Form/form.component';
import { useTypedSelector } from '../core/hooks/use.typed.selector';
import { selectUser } from '../core/selectors/selectors';
import { PATHES, FORM_TYPES } from '../constants/constants';

interface RegisterRouteProps {
  path: string;
}

const RegisterRoute: FC<RegisterRouteProps> = ({ path }): JSX.Element => {
  const user = useTypedSelector(selectUser);

  return (
    <Route path={path} exact>
      {!user ? (
        <FormComponent formType={FORM_TYPES.REGISTER} />
      ) : (
        <Redirect to={PATHES.PAINT} />
      )}
    </Route>
  );
};

export default RegisterRoute;
