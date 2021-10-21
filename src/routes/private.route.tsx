import React, { FC, ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { selectUser } from '../core/selectors/selectors';
import { useTypedSelector } from '../core/hooks/use.typed.selector';

interface PrivateRouteProps {
  path: string;
  children: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  path,
  children,
}): JSX.Element => {
  const user = useTypedSelector(selectUser);

  return (
    <Route path={path} exact>
      {user ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
