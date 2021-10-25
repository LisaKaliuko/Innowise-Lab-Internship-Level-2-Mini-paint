import {
  Coordinates,
  OnMouseDownArguments,
  OnMouseMoveArguments,
} from '../../../../core/interfaces/draw.interface';
import { CanvasSize } from '../../../../shared/constants/canvas-size.constants';

const line = {
  onMouseDown: ({
    e,
    canvasOffset,
    setIsPainting,
  }: OnMouseDownArguments): Coordinates => {
    setIsPainting(true);
    return {
      top: e.pageY - canvasOffset.top,
      left: e.pageX - canvasOffset.left,
    };
  },

  onMouseMove: ({
    e,
    context,
    canvasOffset,
    isPainting,
    startDrawingPos,
    canvasData,
  }: OnMouseMoveArguments): void => {
    if (isPainting && context && canvasData) {
      const finishPos: { x: number; y: number } = {
        x: e.pageX - canvasOffset.left,
        y: e.pageY - canvasOffset.top,
      };
      context.clearRect(0, 0, CanvasSize.width, CanvasSize.height);
      context.putImageData(canvasData, 0, 0);
      context.beginPath();
      context.moveTo(startDrawingPos.left, startDrawingPos.top);
      context.lineTo(finishPos.x, finishPos.y);
      context.stroke();
    }
  },
};

export default line;
