import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { PATHES, IMG_LINK } from '../../constants/constants';
import { Content, Title, Text, PrimaryButton } from './styles';

const MainPageComponent: FC = (): JSX.Element => {
  return (
    <Content>
      <Title>
        <h1>World Famous Graphics Editor</h1>
      </Title>
      <Text>
        Step into the world of mini-paint, a simple yet powerful Free graphics
        editor that lets you design / edit vector graphics like a pro via its
        web and desktop cross-platform, without a steep learning curve.
      </Text>
      <PrimaryButton>
        <Link to={PATHES.PAINT}>
          Try it
          <img src={IMG_LINK} alt="" />
        </Link>
      </PrimaryButton>
    </Content>
  );
};

export default MainPageComponent;
