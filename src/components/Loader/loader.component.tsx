import React, { FC } from 'react';

import { selectAuthLoading } from '../../core/selectors/selectors';
import { useTypedSelector } from '../../core/hooks/use-typed-selector.hook';
import { LoaderContainer, LoaderItem } from './styles';

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
