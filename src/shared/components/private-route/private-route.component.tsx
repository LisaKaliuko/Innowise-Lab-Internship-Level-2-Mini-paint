import React, { FC, ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { selectUser } from '@selectors/auth.selectors';
import { useTypedSelector } from '@hooks/use-typed-selector.hook';

interface PrivateRouteProps {
  path: string;
  children: ReactNode;
}

const PrivateRouteComponent: FC<PrivateRouteProps> = ({
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

export default PrivateRouteComponent;
