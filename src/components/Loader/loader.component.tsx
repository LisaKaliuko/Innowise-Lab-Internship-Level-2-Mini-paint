import React, { FC } from 'react';

import { selectAuthLoading } from '../../core/selectors/auth.selectors';
import { useTypedSelector } from '../../core/hooks/use-typed-selector.hook';
import { LoaderContainer, LoaderItem } from './loader.styles';

const LoaderComponent: FC = (): JSX.Element => {
  const isLoadingAuth = useTypedSelector(selectAuthLoading);

  if (isLoadingAuth) {
    return (
      <LoaderContainer>
        <LoaderItem></LoaderItem>
      </LoaderContainer>
    );
  }
  return <></>;
};

export default LoaderComponent;
