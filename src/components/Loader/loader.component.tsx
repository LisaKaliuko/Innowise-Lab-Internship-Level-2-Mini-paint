import React, { FC } from 'react';

import { selectAuthLoading } from '@selectors/auth.selectors';
import { useTypedSelector } from '@hooks/use-typed-selector.hook';
import { LoaderContainer, LoaderItem } from './loader.styles';
import { selectDrawLoading } from '@selectors/draw.selectors';

const LoaderComponent: FC = (): JSX.Element => {
  const isLoadingAuth = useTypedSelector(selectAuthLoading);
  const isLoadingDraw = useTypedSelector(selectDrawLoading);

  if (isLoadingAuth || isLoadingDraw) {
    return (
      <LoaderContainer>
        <LoaderItem></LoaderItem>
      </LoaderContainer>
    );
  }
  return <></>;
};

export default LoaderComponent;
