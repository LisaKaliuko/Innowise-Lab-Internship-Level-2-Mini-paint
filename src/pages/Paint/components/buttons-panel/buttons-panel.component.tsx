import React, { FC, RefObject } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { CanvasSize } from '../../../../shared/constants/canvas-size.constants';
import { AppRouteNames } from '../../../../shared/constants/app-route-names.constants';
import { sendPic } from '../../../../core/actions/draw.actions';
import { useTypedSelector } from '../../../../core/hooks/use-typed-selector.hook';
import { selectUser } from '../../../../core/selectors/auth.selectors';
import { Container, Button } from './buttons-panel.styles';

interface ButtonsPanelProps {
  context: CanvasRenderingContext2D | null;
  canvasRef: RefObject<HTMLCanvasElement> | null;
}

const ButtonsPanelComponent: FC<ButtonsPanelProps> = ({
  context,
  canvasRef,
}): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useTypedSelector(selectUser);

  const clearSheet = () => {
    if (context) context.clearRect(0, 0, CanvasSize.width, CanvasSize.height);
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
