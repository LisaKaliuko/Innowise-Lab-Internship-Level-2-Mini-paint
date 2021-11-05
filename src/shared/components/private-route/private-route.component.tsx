import React, { FC, ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface PrivateRouteProps {
  path: string;
  component: ReactNode;
  isRedirect: boolean;
  redirectTo: string;
}

const PrivateRouteComponent: FC<PrivateRouteProps> = ({
  path,
  component,
  isRedirect,
  redirectTo,
}): JSX.Element => {
  return (
    <Route path={path} exact>
      {isRedirect ? <Redirect to={redirectTo} /> : component}
    </Route>
  );
};

export default PrivateRouteComponent;
