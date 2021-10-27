import React, { FC } from 'react';

import { Container, Button } from './buttons-panel.styles';

const ButtonsPanelComponent: FC = (): JSX.Element => {
  const clearSheet = () => console.log('clear sheet');
  const savePicture = () => console.log('save picture');
  const toGallery = () => console.log('go to gallery');

  return (
    <Container>
      <Button onClick={clearSheet}>Clear sheet</Button>
      <Button onClick={savePicture}>Save picture</Button>
      <Button onClick={toGallery}>Go to gallery</Button>
    </Container>
  );
};

export default ButtonsPanelComponent;
