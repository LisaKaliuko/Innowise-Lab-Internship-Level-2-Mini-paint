import {
  Coordinates,
  OnMouseDownArguments,
  OnMouseMoveArguments,
} from '@interfaces/draw.interface';

const eraser = {
  onMouseDown: ({
    e,
    context,
    canvasOffset,
    setIsPainting,
  }: OnMouseDownArguments): Coordinates => {
    if (context) {
      context.strokeStyle = '#FFFFFF';
      setIsPainting(true);
      context.beginPath();
      context.moveTo(e.pageX - canvasOffset.left, e.pageY - canvasOffset.top);
    }
    return { top: 0, left: 0 };
  },

  onMouseMove: ({
    e,
    context,
    canvasOffset,
    isPainting,
  }: OnMouseMoveArguments): void => {
    if (isPainting && context) {
      context.lineTo(e.pageX - canvasOffset.left, e.pageY - canvasOffset.top);
      context.stroke();
    }
  },
};
export default eraser;
