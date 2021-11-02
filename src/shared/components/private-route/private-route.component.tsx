import React, { FC, ReactNode } from 'react';
import { Route } from 'react-router-dom';

interface PrivateRouteProps {
  path: string;
  children: ReactNode;
}

const PrivateRouteComponent: FC<PrivateRouteProps> = ({
  path,
  children,
}): JSX.Element => {
  return (
    <Route path={path} exact>
      {children}
    </Route>
  );
};

export default PrivateRouteComponent;
