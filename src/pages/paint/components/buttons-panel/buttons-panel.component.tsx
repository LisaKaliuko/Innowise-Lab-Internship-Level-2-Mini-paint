import React, { FC, RefObject } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { AppRouteNames } from '@constants/app-route-names.constants';
import { sendPic } from '@actions/draw.actions';
import { useTypedSelector } from '@hooks/use-typed-selector.hook';
import { selectUser } from '@selectors/auth.selectors';
import { CanvasSize } from '@src/core/interfaces/draw.interface';
import { Container, Button } from './buttons-panel.styles';

interface ButtonsPanelProps {
  context: CanvasRenderingContext2D | null;
  canvasRef: RefObject<HTMLCanvasElement> | null;
  canvasSize: CanvasSize;
}

const ButtonsPanelComponent: FC<ButtonsPanelProps> = ({
  context,
  canvasRef,
  canvasSize,
}): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useTypedSelector(selectUser);

  const clearSheet = () => {
    if (context) context.clearRect(0, 0, canvasSize.width, canvasSize.height);
  };

  const savePicture = () => {
    if (canvasRef) {
      const picture = canvasRef.current?.toDataURL('image/jpeg');
      dispatch(
        sendPic({
          picture: picture,
          user: user,
          cb: () => history.push(AppRouteNames.Gallery),
        })
      );
    }
  };

  const toGallery = () => history.push(AppRouteNames.Gallery);

  return (
    <Container>
      <Button onClick={clearSheet}>Clear sheet</Button>
      <Button onClick={savePicture}>Save picture</Button>
      <Button onClick={toGallery}>Go to gallery</Button>
    </Container>
  );
};

export default ButtonsPanelComponent;
