import React, { FC } from 'react';

import { CanvasSize } from '../../../../shared/constants/canvas-size.constants';
import { Container, Button } from './buttons-panel.styles';

interface ButtonsPanelProps {
  context: CanvasRenderingContext2D | null;
}

const ButtonsPanelComponent: FC<ButtonsPanelProps> = ({
  context,
}): JSX.Element => {
  const clearSheet = () => {
    if (context) context.clearRect(0, 0, CanvasSize.width, CanvasSize.height);
  };

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
